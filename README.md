# angular-to-databricks-fmapi-proxy
A super-simple Angular web app to demostrate how to use a reverse proxy to avoid CORS errors when hitting the Databricks Foundation Model API (FMAPI).

Update the environment to make sure your Databricks host url and access token are used properly:
* Update `"https://your-workspace.cloud.databricks.com"` with your workspace url in `proxy.conf.json`
* Update `'YOUR DATABRICKS TOKEN HERE'` with your Databricks token in `/src/app/environment/environment.ts` and `/src/app/environment.development.ts`

Start the app with `npm start`
