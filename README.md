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

AS the owner of a commercial cleaning business

I WANT employees to be able to log in to an application that gives them all of the tools and information necessary to fullfill all of the requirements of their position.

SO THAT manage the business through a single page application

```
This application is a single page application built using the MERN stack. When employees first navigate to the page they see a log in box with a (1) message tab (2) login tab and (3) a sign up tab. On the message tab there is a link to the company website, a list of available shifts and the shift information, as well as a QR code that can be scanned to navigate to the application page.

When employees log in they are taken to their own custom dashboard. On their dashboard they can view (1) their schedule on an interactive calendar (2) locations that they have shifts at (3) and an employees tab.

The calendar is interactive and can viewed by either month or day. When an employee clicks on an event in the calendar they are taken to the locations information page.

To view location information employees can either click the job in their interactive calendar, or go click on the locations tab. Here they will find all of the locations details including the locations manager, address, contact information, how often the facility is cleaned, and detailed instructions. If employees click the Get Directions button at the bottom of the locations page they will be given directions from their current location to that facility. The directions can be changed based on user input and can be opened up in google maps.

On the employees tab is a list of all employees and their contact information. There is also a collapsable View Availabilty tab that lists that employees current availability when clicked.

In the navigation bar when an employee is signed in they will see (1) Dashboard (2) Forms (3) and Logout tabs.

The forms tab that includes (1) Availability (2) Request Time Off (3) Incident Report

When the employeee clicks on availability they are taken to an interactive availabilty form where they can view there current availability and update it if necessary.

When the employee clicks the Request Time Off form, they are taken to a form that can be filled out and is emailed directly to management.

When the emplpoyee clicks the Incident Report form, they are taken to a for, that can also be filled out and is emailed directly to management. This form has an Urgent/Not Urgent box that will populate the subject line to help management know the importance of the incident.

Managers dashboards are similar to employees with additional functionality.

In the employees tab, managers have the ability to delete employees.

In the locations tab, managers will see all locations rather than just the ones that they have shifts at.

```

## Installation

Setup:

- (1) Fork the repo, (2) Clone the forked repo locally, (3) Run `npm i` to install dependencies, and (4) `npm run develop` to build the app, deploy the local server and open the app.

## Usage

This app is deployed using Heroku. From a development perspective, this app uses Node.js, Mongo, React and Apollo/GraphQL. See the technology list below for more detail.

## Features

This app includes a variety of API routes (see list below). In addition, the following features exist.

1. `Single-page app` built using React.
2. `Component` based approach which breaks down each page and major function. For example, the header, footer and each navigation bar link is a unique component.
3. `Bootstap` is used for the majority of the html and css including the nav bar, cards, and form.
4. `Login`, `Signup`, and `Logout` functionality using a bootstrap modal, jsonwebtoken for authentication and alert messaging for invalid login.
5. `Heroku` deployment.

## Future Enhancements:

1. Have a list of available shifts that employees can select and they will be added to their schedule.
2. Enhance to a `PWA` to work both on- and off-line.
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
9. `FullCalendar` npm package

---

## App Preview - WalkThrough Video

Video #1: Demonstrates all of the content, functional and technical acceptance criteria.

[Link to WalkThrough Video]()

![Build & deploy video](.)

## Tests

No tests at this time.

## Contributing

Contributor Covenant Code of Conduct

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)

## Resources

1.  [Steve Calla - GitHub Profile](https://github.com/stevecalla)
2.  [Alex Cleveland - GitHub Profile](https://github.com/AClevel5)
3.  [Patrick Ratcliff - GitHub Profile](https://github.com/PatrickARatcliff)
4.  [Colin McNatt - GitHub Profile](https://github.com/colinmichael89)

## License

[![License:  MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under the terms of the <span style="color:red">The MIT License</span>. Please click on the license badge for more information.
