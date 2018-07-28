# HomeRun Delivery Test project

## Installation instructions

### Prerequisites
* node and npm

### Steps
* Clone the git repository
    `git clone https://github.com/panvourtsis/homeRunDelivery`

* Go to the cloned directory
    `cd homeRun`

* Install all the project dependencies
`npm install`

## Starting the project for android or ios

`react-native run-[ios or android]`

## Code directory structure

    ├── src - holds files and modules used on the app
    │   ├── actions - actions for the redux
    │   ├── assets - all the assets of the project
    │   ├── components - all the components used around the project
    │   │   ├── common
    │   ├── providers - contains all the API calls to the server for each entity
    │   ├── reducers - reducers for the redux
    │   ├── screens - all the screens of the app with their components
    ├── __tests__
    ├── .env - all config files for development and production
