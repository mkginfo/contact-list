# Contact List App

Contact List web application built using Angular v9. It uses the randomuser api to source user information.

Consumes data from the Random User API.

- https://api.randomuser.me
- https://api.randomuser.me?results=${configJson.numberCards}`

Top 120 responses users are coming with alphabetic tabs.
When you will click on user then we are showing contact details card with username email, phone and address.

# Website Live URL

https://mkginfo.github.io/contact-list/

## Local development steps

> npm install

Run `yarn start for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build and deployment steps for production

Run `yarn build-prod` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

> npm install -g angular-cli-ghpages

> npm run build-prod

> npm run build-deploy

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
