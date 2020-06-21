# Eat-Da-Burger

Burger logger restaurant application with MySQL, Node, Express, Handlebars and a homemade ORM. Adapted MVC design pattern; Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.

The application is deployed on Heroku.

## Installation

No installation required for usage unless cloning project.

Dependencies can be installed with the following command:

```sh
npm install
```
MySQL Server, MySQL Workbench, and connection to your application required to utilize a database with application.

To run application:

```sh
node burger.js
```

## Usage

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* The app will store every burger in a database, whether devoured or not.

![Eat-Da-Burger](/public/assets/images/README.PNG)

[Heroku Deployment](https://github.com/ncrutgers/eat-da-burger)

[GitHub Repository](https://github.com/ncrutgers/eat-da-burger)
