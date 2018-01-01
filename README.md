# LearnAng5

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Routing Module

we created route's for different component's in `app-routing.module.ts`.

## FireBaseCloud Integrated

We integrated FireBase Cloud for User Registration with `Users` collection.You just for Sign [FireBase](https://firebase.google.com/) its Free.Then just need to install required packages for this.`npm install angularfire2`

## Service For FireBase

`authservice.service.ts` which handle the connection and `Users` registration.

## Cryptocurrency

We integrated [Api](https://www.cryptocompare.com/api) for using cryptocurrency in our project by Call http request.This
[Link](https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD,EUR) will return Prices.

## Added ExpressJs for Back-end

Created `Api` for Product Model CRUD functionality.

## Sequelize Added for Database ORM Models

Managing DataBase Model in `Sequelize`. For futher queries you can visit [documentation](http://docs.sequelizejs.com).

## Migration for Product Model

Migration `20171230103129-create-product` created.

## Sequelize CLI

Added `Sequelize CLI` from [Library](https://github.com/sequelize/cli)