comment on schema public is e'@graphql({"introspection": true})';
comment on schema public is e'@graphql({"inflect_names": true})';

-- Поиск по ID (для получения одного пользователя)
create or replace function public.users_by_id(user_id uuid)
returns public.users
language sql
stable
as $$
  select * from public.users where id = user_id limit 1;
$$;

comment on function public.users_by_id(user_id uuid) is 
  '@graphql({"name": "usersById"})';
  
-- Универсальный поиск ilike last_name и first_name
create or replace function public.users_search(search_term text)
returns public.users
language sql
stable
as $$
  select * from public.users 
  where
	  email ilike '%' || search_term || '%'
    or first_name ilike '%' || search_term || '%'
    or last_name ilike '%' || search_term || '%'
    or concat(first_name, ' ', last_name) ilike '%' || search_term || '%'
  order by 
    case
	    when email ilike search_term then 1
      when concat(first_name, ' ', last_name) ilike search_term then 2
      when first_name ilike search_term then 3
      when last_name ilike search_term then 4
      else 5
    end,
    last_name, 
    first_name
  limit 50;
$$;

comment on function public.users_search(search_term text) is 
  '@graphql({"name": "usersSearch"})';

create extension if not exists pg_trgm;
create index if not exists idx_users_last_name_trgm on public.users using gin (last_name gin_trgm_ops);
create index if not exists idx_users_first_name_trgm on public.users using gin (first_name gin_trgm_ops);
create index if not exists idx_users_email_trgm on public.users using gin (email gin_trgm_ops);