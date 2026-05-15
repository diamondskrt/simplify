create extension if not exists "citext" with schema "public";

create extension if not exists "pg_trgm" with schema "public";

create table "public"."users" (
  "id" uuid not null,
  "email" public.citext,
  "first_name" text,
  "last_name" text,
  "avatar_url" text,
  "roles" text[] default ARRAY['user'::text],
  "created_at" timestamp with time zone not null default timezone('utc'::text, now()),
  "updated_at" timestamp with time zone not null default timezone('utc'::text, now())
);


alter table "public"."users" enable row level security;

CREATE INDEX idx_users_email_trgm ON public.users USING gin (email public.gin_trgm_ops);

CREATE INDEX idx_users_first_name_trgm ON public.users USING gin (first_name public.gin_trgm_ops);

CREATE INDEX idx_users_last_name_trgm ON public.users USING gin (last_name public.gin_trgm_ops);

CREATE UNIQUE INDEX users_pkey ON public.users USING btree (id);

alter table "public"."users" add constraint "users_pkey" PRIMARY KEY using index "users_pkey";

alter table "public"."users" add constraint "users_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."users" validate constraint "users_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
begin
  insert into public.users (id)
  values (new.id);
  return new;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.handle_updated_at()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
begin
  new.updated_at = now();
  return new;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.users_by_id(user_id uuid)
 RETURNS public.users
 LANGUAGE sql
 STABLE
AS $function$
  select * from public.users where id = user_id limit 1;
$function$
;

CREATE OR REPLACE FUNCTION public.users_search(search_term text)
 RETURNS public.users
 LANGUAGE sql
 STABLE
AS $function$
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
$function$
;

grant delete on table "public"."users" to "anon";

grant insert on table "public"."users" to "anon";

grant references on table "public"."users" to "anon";

grant select on table "public"."users" to "anon";

grant trigger on table "public"."users" to "anon";

grant truncate on table "public"."users" to "anon";

grant update on table "public"."users" to "anon";

grant delete on table "public"."users" to "authenticated";

grant insert on table "public"."users" to "authenticated";

grant references on table "public"."users" to "authenticated";

grant select on table "public"."users" to "authenticated";

grant trigger on table "public"."users" to "authenticated";

grant truncate on table "public"."users" to "authenticated";

grant update on table "public"."users" to "authenticated";

grant delete on table "public"."users" to "service_role";

grant insert on table "public"."users" to "service_role";

grant references on table "public"."users" to "service_role";

grant select on table "public"."users" to "service_role";

grant trigger on table "public"."users" to "service_role";

grant truncate on table "public"."users" to "service_role";

grant update on table "public"."users" to "service_role";


create policy "Users can update own profile"
on "public"."users"
as permissive
for update
to public
using ((auth.uid() = id))
with check ((auth.uid() = id));


CREATE TRIGGER users_handle_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();


