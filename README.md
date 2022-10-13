# SUPABASE SASS DEMO

This is a demo sass application built using next.js , supabase and stripe.

## SETTIING UP YOUR ENV

Create a `.env.local` file in root and paste the following values from the supabase dashboard

```shell

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_KEY=

```

## GITHUB AUTHENTICATION USING SUPABASE

1. Create a Oauth application by heading over to this [url](https://github.com/settings/applications/new).
2. Fill in the necessary details and create application.
3. Now , navigate to `auth/settings` in supabase dashboard and disable `email authentication and email confirmations`.
4. Enable `Github` and enter in the `Client ID` and `Client Secret` which you got while creating the Oauth application.
5. 

Note: 

1. homepage url should match the project url from supabase dashboard. 
2. callback should be `${projectURL}/auth/v1/callback`
