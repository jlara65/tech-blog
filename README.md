<!-- prettier-ignore -->
# tech-blog

## Description
Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies.
## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Questions](#Questions)
* [License](#License)

## Installation 
* Requires the npm mysql2, sequelize, dotenv, express, bcrypt, express-handlebars, express-session, handlebars and connect-session-sequelize packages:

      ```bash
      npm i mysql2
      npm i sequelize
      npm i dotenv
      npm i express
      npm i bcrypt
      npm i express-handlebars
      npm i express-session
      npm i handlebars
      npm i connect-session-sequelize
      ```
## Usage
The Tech-Blog is currently deployed with [Heroku](https://jl-tech-blog.herokuapp.com/)

Run the following command at the root of your project.
1. Run `mysql -u root -p` in terminal then enter your password when prompted
2. Enter `source db/schema.sql` to drop if exist database and create tech_blog_db database
3. type `Quit` to exit the MySQL
5. type `npm start` and enter to start connection to the database and open browser `http://localhost:3001`

![Screenshot](./public/images/tech%20blog%20SC.png)
## Contributing
1. Fork this repository
2. Create a new branch
3. Commit changes on your branch
4. Push your changes
5. Create a new pull request
## Questions
If you have any question or would like to report the issues in this project, please feel free to contact me at email_to_be_annouced@domain.com

## License 
This project is license under the [MIT](./LICENSE)

&copy; 2022 Joseph Lara