-- ============================================
-- Создаем таблицу users
-- ============================================
create table public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email citext,
  first_name text,
  last_name text,
  avatar_url text,
  roles text[] default array['user']::text[],
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

-- ============================================
-- Создаем функцию для авто-обновления updated_at
-- ============================================
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ============================================
-- Создаем триггер для updated_at
-- ============================================
create or replace trigger users_handle_updated_at
before update on public.users
for each row
execute procedure public.handle_updated_at();

-- ============================================
-- Создаем функцию для создания профиля пользователя
-- ============================================
create or replace function public.handle_new_user()
returns trigger  -- возвращает триггерную запись
language plpgsql -- написана на PL/pgSQL
security definer -- выполняется с правами владельца функции
set search_path = '' -- защита от подмены схем
as $$
begin
  insert into public.users (id)
  values (new.id);
  return new;
end;
$$;

-- ============================================
-- Cоздаем триггер для on_auth_user_created
-- ============================================
create or replace trigger on_auth_user_created
after insert on auth.users
for each row
execute procedure public.handle_new_user();

-- ============================================
-- Включаем Row Level Security
-- ============================================
alter table public.users enable row level security;

-- ============================================
-- Создаем политику "Users can update own profile" 
-- ============================================
create policy "Users can update own profile"
on public.users
for update
using (auth.uid() = id)
with check (auth.uid() = id);

