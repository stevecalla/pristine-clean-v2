# Pristine Clean

[![License:  MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Index

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Technology](#technology)
6. [Contributing](#contributing)
7. [Resources](#resources)
8. [License](#license)

## Description

```
AS the owner of a commercial cleaning business

I WANT employees to be able to log in to an application that gives them all of the tools and information necessary to the requirements of their position.

SO THAT manage the business through a single page application
````

## Usage

This app is deployed using Heroku. From a development perspective, this app uses Node.js, Mongo, React and Apollo/GraphQL. See the technology list below for more detail.

## Features

The following features exist:

1. This application is a single page application built using the MERN stack. When employees first navigate to the page they see a log in box with a (1) message tab (2) login tab and (3) a sign up tab. On the message tab there is a link to the company website, a list of available shifts and the shift information, as well as a QR code that can be scanned to navigate to the application page.
2. When employees log in they are taken to their own custom dashboard. On their dashboard they can view (1) their schedule on an interactive calendar (2) locations that they have shifts at (3) and an employees tab.
3, The calendar is interactive and can viewed by either month or day. When an employee clicks on an event in the calendar they are taken to the locations information page.
4. To view location information employees can either click the job in their interactive calendar, or go click on the locations tab. Here they will find all of the locations details including the locations manager, address, contact information, how often the facility is cleaned, and detailed instructions. If employees click the Get Directions button at the bottom of the locations page they will be given directions from their current location to that facility. The directions can be changed based on user input and can be opened up in google maps.
5. On the employees tab is a list of all employees and their contact information. There is also a collapsable View Availabilty tab that lists that employees current availability when clicked.
6. In the navigation bar when an employee is signed in they will see (1) Dashboard (2) Forms (3) and Logout tabs.
7. The forms tab that includes (1) Availability (2) Request Time Off (3) Incident Report
8. When the employeee clicks on availability they are taken to an interactive availabilty form where they can view there current availability and update it if necessary.
9. When the employee clicks the Request Time Off form, they are taken to a form that can be filled out and is emailed directly to management.
10. When the emplpoyee clicks the Incident Report form, they are taken to a for, that can also be filled out and is emailed directly to management. This form has an Urgent/Not Urgent box that will populate the subject line to help management know the importance of the incident.
11. Managers dashboards are similar to employees with additional functionality.
12. In the employees tab, managers have the ability to delete employees.
13. In the locations tab, managers will see all locations rather than just the ones that they have shifts at.
14. Can be installed as a PWA.

## Future Enhancements:

1. Have a list of available shifts that employees can select and they will be added to their schedule.
2. Enhance `PWA` to allow users to be able to view location information offline.
3. Ability to clock-in at a specific location.
4. `Geolocation` to ensure that employees are on site when clocking in.
5. Ability to change/update password or create a new password if it is forgetten.
6. Store Incident reports in the database for future reference.
7. Have a message board that is linked to each location that will populate on the employees dashboard upon loggin in.

## Technology

1. `React:` JavaScript transcompiler mainly used to convert ECMAScript 2015+ code into a backwards-compatible version of JavaScript.
2. `Git/Github:` Repo and version management.
3. `Mongo/Mongoose`: Database.
4. `React-Bootstrap`: For most of the CSS styling.
5. `Apollo/GraphQL`: For GraphQL database query.
6. `bcrypt`: To encrypt the user password.
7. `jsonwebtoken/jwt decoe`: For user authentication and token decoding.
8. `Heroku`: Deployment.
9. `FullCalendar` npm package.
10. NPM Packages: `FontAwesome`, `moment`, `phone-number-formater`, `react-bootstrap-icons`.
11. `API`: Google maps - a) `places`, b) `directions` and c) `reverse geocode` & d) `TinyURL`.
12. `PWA`: Is intallable as an app via PWA, and works online.

## Website Preview

### Static Screenshots

[Link to WalkThrough Video](https://drive.google.com/file/d/1w3eswEcDTp-oEddsNW0qHvPi9W9iFht3/view)

[Link to PWA Video](https://drive.google.com/file/d/1rWCGUOQecJ3C8uZmQWN7CETrSV9fm_bZ/view)

[Build & deploy video](https://drive.google.com/file/d/1ZzLVoxGzF3JVj4q5ayudrvb8mLrwxHUR/view)

<img src="./client/src/assets/images/login.png" width="700" height="400">
<img src="./client/src/assets/images/calendar.png" width="700" height="400">
<img src="./client/src/assets/images/allemployees.png" width="700" height="400">
<img src="./client/src/assets/images/locations.png" width="700" height="400">
<img src="./client/src/assets/images/location.png" width="700" height="400">
<img src="./client/src/assets/images/availability.png" width="700" height="400">
<img src="./client/src/assets/images/incidentform.png" width="700" height="400">
<img src="./client/src/assets/images/incidentlist.png" width="700" height="400">
<img src="./client/src/assets/images/timeoff.png" width="700" height="400">
<img src="./client/src/assets/images/map.png" width="700" height="400">

## Tests

No tests at this time.

## Installation

Setup: 
- (1) Fork the repo, (2) Clone the forked repo locally, (3) Run "npm install" (to install the dependencies).

Setup the Database Schema: 
- (1) Update or add an .env file. Include the fields below in the .env file. Note that the .env variables are used in the conf folder, connection.js file.

  Server-Side '.env`:
  * DB_NAME=pristine-clean

  Client-Side `.env`:
  * REACT_APP_GOOGLE_MAPS_API_KEY=<key>
  * REACT_APP_TINY_URL_KEY=<key>

Seed the Database: 
- Run Server: From the root directory, run either "npm run watch" to start nodemon or "node server.js".
- Seed Database: (a) To create the database, run "SOURCE ./db/schema.sql" in mySQL, (b) To create the database tables, from the terminal, run "npm run start" or "npm run watch", (c) To seed the database tables, run "npm run seed" or "node ./seeds/index.js".

Note that the seed will also create entries for the user table including hashed passwords. When loggin into the app these user seeds can be used as test email address. Either obtain an email address from the user table (SELECT * FROM user;) or use an option noted below:

  * email: a@a.com, password: "12" (note role is employee)
  * email: b@b.com, password: "12" (note role is manager)

If you'd like to use NPM nodemon as/if you make changes to the code, please install nodemon as a development dependency using "npm install --save-dev nodemon" (see https://www.npmjs.com/package//nodemon). 

## Contributing

Contributor Covenant Code of Conduct

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)


## Collaborators

1.  [Steve Calla - GitHub Profile](https://github.com/stevecalla)
2.  [Alex Cleveland - GitHub Profile](https://github.com/AClevel5)
3.  [Patrick Ratcliff - GitHub Profile](https://github.com/PatrickARatcliff)
4.  [Colin McNatt - GitHub Profile](https://github.com/colinmichael89)

## Resources

1. GitHub Repo: <https://github.com/stevecalla/pristine-clean-v2>
3. Heroku Deploy: <https://pristine-clean.herokuapp.com/ >

## License

[![License:  MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under the terms of the <span style="color:red">The MIT License</span>. Please click on the license badge for more information.
