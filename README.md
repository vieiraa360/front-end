# Elsa's counselling and supervision site

## Overview
 
### What is this site for?
 
This is a website for people to find Counselling. It helps users to search through and find appropriate therapies.
 
### What does it do?
 
This site will allow users to browse through and read about Elsa's counselling approache and decide if it is the right thing for them.
 

### How does it work
 
This site uses AngularJS. The site is styled with Bootstrap.
 

## Features

### Some features include, browsing for information and email to contact Elsa and book the sessions.
 

## Tech Used
 
### Some the tech used includes:
- [AngularJS](https://angularjs.org/)
    - Used **AngularJS** to handle page routing
- [Bootstrap](http://getbootstrap.com/)
    - Used **Bootstrap** to give the project a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - Used **npm** to help manage some of the dependencies in the application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of libraries and frameworks


## Contributing

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request
