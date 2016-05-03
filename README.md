[![Circle CI](https://circleci.com/gh/Shachar-HPE/kinneret-client.svg?style=svg)](https://circleci.com/gh/Shachar-HPE/kinneret-client)
[![Travis CI](https://travis-ci.org/boris-org/kinneret-client.svg?branch=master)](https://travis-ci.org/boris-org/kinneret-client)
[![codecov.io](https://codecov.io/gh/boris-org/kinneret-client/coverage.svg?branch=master)](https://codecov.io/github/boris-org/kinneret-client?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/grade/bd44de0208974b9a87b58b3c8164032c)](https://www.codacy.com/app/boris-org/kinneret-client)

![alt text](https://avatars0.githubusercontent.com/u/139426?v=3&s=400 "AngularJS FTW!")

# AngularJS Client

## About
Client demo implementation for the dev-ops course.  
This client is based on AngularJS and Bootstrap.  
The tests are conducted by karma, jasmine and protractor.

## Author
[![lilo](https://avatars3.githubusercontent.com/u/5829157?v=3&s=64)](https://github.com/lilotop)  
[Lilo Elia](https://github.com/lilotop)

## Contents
|dir/file|contents|
|--------|--------|
|[bower.json, package.json](https://github.com/devops-course/kinneret-client)|Package files for npm and bower|
|[app](https://github.com/devops-course/kinneret-client/tree/master/app)|Source files|
|[test](https://github.com/devops-course/kinneret-client/tree/master/test)|Test files|
|[.idea](https://github.com/devops-course/kinneret-client/tree/master/.idea)|IntelliJ project folder|

## Installation
For the client to function properly, you need to run the installation script that downloads required libraries.
In the root folder run the following command:
```
npm install
```
This will also run the bower installer.

## Running the client
To run the static web server that serves the client run the following command:
```
npm start
```
The server is listening on port 8000 of your localhost by default.
Any unknown resources requested by the server are re-routed to port 9000 on your localhost.
This is done to eliminate the need for specific CORS handling. It assumes the dropwizard server is listening on port 9000.

## Tests
The tests folder contains samples for both unit and e2e tests.  
`grunt test` - runs the unit test endless loop (used for debugging)  
`grunt protractor` - runs the e2e test  

