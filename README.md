# angular-to-databricks-fmapi-proxy
A super-simple Angular web app to demostrate how to use a reverse proxy to avoid CORS errors when hitting the Databricks Foundation Model API (FMAPI).

Update the environment to make sure your Databricks host url and access token are used properly:
* Update `"https://your-workspace-name.cloud.databricks.com"` with your workspace url in `proxy.conf.json`
* Update `'YOUR DATABRICKS TOKEN HERE'` with your Databricks token in `/src/app/environment/environment.ts` and `/src/app/environment.development.ts`

Start the app with `npm start`

### App upon load:
![image](https://github.com/user-attachments/assets/dee3e22c-94d2-493a-88ea-7c6497131db4)

### App after clicking "Make API Call" button: (the hardcoded prompt is: "Write a haiku about CORS errors in APIs.")
![image](https://github.com/user-attachments/assets/3365f27d-9f30-43b6-a618-ec051056c3d7)



----------------------------------------------------------------

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
