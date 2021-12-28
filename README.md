# Engineering Data Room
![This is an image](https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60)

### Purpose

The Purpose of this repo is for it to act as a central source of truth for schemas, best practices, and other ad auris engineering relevant documentation.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#)

## ➤ Table of Contents

* [➤ Engineering Best Practices](#engineering-best-practices)
    * [Technical Values](#technical-values)
    * [Technical Priorities](#technical-priorities)
    * [Process Priorities](#process-priorities)
    * [Architectural Priorities](#architectural-priorities)
    * [Coding Guidelines](#coding-guidelines)
* [➤ Apps](#apps)
    *[App List](app-list)
* [➤ Architecture](#architecture)
    * [Architecture Schemas](#architecture-schemas)
* [➤ Architecture](#architecture)
    * [Architecture Schemas](#architecture-schemas)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

# Engineering Best Practices

* [Technical Values](#technical-values)
* [Technical Priorities](#technical-priorities)
* [Process Priorities](#process-priorities)
* [Architectural Priorities](#architectural-priorities)
* [System Architecture](#system-architecture)
* [Coding Guidelines](#coding-guidelines)



## Technical Values

**KISS** - **K**eep **I**t **S**imple **S**tupid - Complexity is our enemy. We need to solve the complexity inherent in the problems we face using simple solutions, and avoid introducing complexity that isn't inherent. Solution complexity is rejected, rather than dealt with. We ask [5 whys](http://en.wikipedia.org/wiki/5_Whys) about complexity. What can be relaxed or changed to make the complexity go away?

**YAGNI** - **Y**ou **A**in't **G**onna **N**eed **I**t - This is the answer to much introduced complexity. We force complexity upon ourselves by being so good at asking "But what if...?" Instead, we build for the problems we have today, not for the problems we think we might have someday. None of us are fortune tellers. We're mostly wrong.

**No Punting** - No one owns an app, a system a section of code, or a problem. We don’t punt issues off to others just because we weren't involved in the inception. Everyone works on, and fixes everything. Not knowing how something works doesn't mean you don’t work on it or fix it, it means the opposite! We seek out every opportunity to work on things we don't know about (and we fill in any missing documentation as we learn). Everyone on the team is full-stack. No specialists.


## Technical Priorities

1. Simple & DRY with a single responsibility
  * **Simple** - see KISS and YAGNI above.
  * **DRY** - **D**on't **R**epeat **Y**ourself - there's no place for copy and paste. It inevitably bites you in the ass.
  * **Single Responsibility** - units of software do 1 thing well, and only 1 thing. This is fractal and applies to lines of code, functions, classes, services, systems, and apps.
2. Transparent & manageable - logs, analytics, error reporting, separation of config from code, and real-time adjustments are good

By following these 2 top technical priorities, we get two important emergent properties: **robustness** and **scalability**

Our full set of technical priorities, in order:

1. Simple & DRY with a single responsibility
2. Transparent & manageable
3. Secure
4. Consistent
5. Documented
6. Tested

Developers are held accountable to these technical priorities. Code reviews are structured around these technical priorities.

Living these priorities requires hard thinking about the technical problems we face. Code that works is not the goal. Code that works by embodying these priorities, and the appropriate trade-offs between them, is the goal.


## Process Priorities

Production code gets tested. Tests run in [continuous integration (CI)](https://en.wikipedia.org/wiki/Continuous_integration). Not all code needs all kinds of tests (unit, integration, system, acceptance, ...). Pragmatism still rules and strict [test-driven development (TDD)](https://en.wikipedia.org/wiki/Test-driven_development) is not important to us (we prefer our own acronym of TDD, thinking-driven development), but automated test development is a core skill of all our developers and test automation is a key consideration in code reviews.

All services do their best to trap and report errors. Error handling and alerting is a key consideration in code reviews.

Deployment is automated. It's not done until it ships with automated deployment. It ships as soon as possible. Risk is mitigated by shipping small changes  incrementally.

All developers write documentation. Documentation is part of code review: did the appropriate docs get created and updated for the addition/change? 

Documentation is well-organized. Even when good docs exist, if the person that needs them doesn't know where they are or that they exist, they do no good. 

Code is documented. Comments are good! It can be good to comment on why this code is doing what it's doing but writing code that is clear and talks for itself is *BETTER* . It’s also important to comment on what the code is doing, when that's not completely obvious.


## Architectural Priorities

We build services, not monoliths. Services compose in architecturally sound ways to deliver services to layers higher up the stack.

Libraries are better than micro-frameworks, which are better than monolithic frameworks.

Observers are better than Pub/Sub, which is better than Queued Data Pipelines, which are better than Synchronous Services. Observers and queues are more robust than synchronous services (e.g. HTTP) and should be preferred where appropriate.

We use the right language for the job. We are a polyglot team. We prefer polyglot developers who have learned how to efficiently learn new things.

The right language for the job is generally obvious due to a language feature or library implemented in the language that makes the job a much easier match for our [technical priorities](#technical-priorities). The job becomes much simpler, or more robust, or easier to test, etc.

If the job is general purpose utility computing with no language feature or library advantages, we use [JavaScript](#tools) as our default.


## Coding Guidelines

We're much more interested in ensuring code follows the values and priorities described above than that it follows any particular coding standard. Code formatting is just the small tip of a very large iceberg; poorly formatted code can be programmatically tidied, but poorly done thinking can't be programmatically rethought. That being said, here are some code guidelines we look for:

* Do your best to conform to the coding style that's already there in the repository... That means we like it.
* Use 2 soft spaces for indentation for white space irrelevant code/data. Use 4 soft spaces for white space relevant code/data.
* Don't leave trailing spaces after lines.
* Don't leave trailing new lines at the end of files.
* Write clean code. Clean code means less comments. And comments lie. Clean code is good.
* Write tests. Tests are good.
* Don't submit über pull requests, keep your changes focused and atomic. They should be representative of a Jira Ticket.
* Submit pull requests to the `mainline` branch of repos.
* Have fun!

### Pull Request Process

The purpose of the pull request process is to ensure code and product quality. The reviewer has 2 important responsibilities: code quality via code review, and product quality via QA of the change, ensuring both that the new functionality or fix works as expected and that other related parts of the product haven't regressed.

1. The creator of the pull request is responsible for adequately describing the change being made. The main components of the description are what changed, how it changed, and why it changed, and what steps were taken to fully QA the change.
1. The creator of the pull request marks them-self as the assignee, which signifies they are the primary submitter of the change and will be the one to respond to reviewer's question, comments and requests for changes. If at some point another developer becomes the primary contributor of the change, the assignee is changed.
1. At this point though, the PR is not yet ready for review, it may still be in progress. Once it is ready to be reviewed, the assignee adds the label "ready for review". In the unusual case that the assignee wants the PR reviewed by a specific developer, they can also assign that developer with the reviewer field. NB: This is not usually done and you need a good reason to want a specific reviewer.
1. At this point, any other developer that sees the PR should do the review, assigning themself with the reviewer field, removing the "ready for review" label, and labeling it with "reviewing". The reviewer reviews the code and performs QA, repeating the steps provided in the PR description *and* thinking critically about what additional QA steps may have been missed by the assignee.
1. Now the usual back and forth commences between the assignee and the reviewer consisting of questions, comments, ideas, requests, suggestions and changes. NB: Reviews are about the code, not about the people, as an assignee, try to remain objective and not take anything from the reviewer personally, and as a reviewer, be kind and stay focused on the code. 
1. Once the code is in a place that both the assignee and reviewer are happy with it, it is the assignees responsibility to merge the PR and get the code deployed into production. Any special notes on deployment steps or dependencies should be included in the PR for the reviewer.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

# Apps
(Client or Sales Facing)

## App List
* [Dashboard](https://dashboard.ad-auris.com) 

* [Narration Widget](https://narrations.ad-auris.com/widget/the-conversation-canada/i’m-a-pediatric-brain-surgeon-and-i’m-concerned-about-the-impact-of-delayed-diagnoses-on-my-patients-due-to-covid-19)

* [Ad Auris Play](https://play.ad-auris.com)

* [Internal + Customization Tool](https://ad-auris-internal-tool.herokuapp.com)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)


# Architecture

Ad Auris uses a distributed & serverless microservices architecture. Many services provide access to themselves via HTTPS. Others provide their services through the Cloud Scheduler/Cron Jobs. Endpoints are not authenticated at this time so don't worry about JWT request tokens.

### Microservices Wireframe

![System Diagram](https://storage.googleapis.com/ad-auris-django-bucket/schmea_pics/Ad-auris-tech-stack%20(1).jpg)
(Additional Updates coming)

## Architecture Schemas
1. [Business Logic Layer](https://lucid.app/lucidchart/c02d5275-3b4b-433f-8a56-4953ed853eb6/edit?invitationId=inv_a6984e61-6037-4d75-966f-dd44a65dc429)  (🔑 Key Schema)
2. [Microservices Layer](https://drive.google.com/file/d/1EZ35RTLapdmEqMOrmhdoqhGhcaB2Gr08/view) (🔑 Key Schema)
3. [Play App Wireframe](https://drive.google.com/file/d/1pq35gssmAKxOEjs4io8yMaod1VMTqNtx/view)
4. [Global Company (and legacy) Wireframe](https://drive.google.com/file/d/1Ao5byYF1vXzCo4H39BsabsvqkPP-aTw5/view)
5. [Pipeline Revamp Wireframe](https://drive.google.com/file/d/18Z84V9w_9jLhFMcV-GS0Aep70fYyNxit/view)



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)



# Databases


## Databases List

```python
SQL - Operational DB (🔑 key DB)

Mongo - Events Database (🔑 key DB)

Firestore - Stripe and Admin Database

Segment - Customer Data Platform (CDP) (Not active yet)
```

## Database Schemas

1. [SQL Schema](https://dbdiagram.io/d/61abf3a98c901501c0e0c1b6) (🔑 Key Schema)
(password is adauris2021)
2. [MongoDB Wireframe]()
3. [Firestore]()
4. [Segment]()
5. [Data Tracking Sheet]() (🔑 Key Schema)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

# Data Culture and Best Practices 

## Data Governance 


### What is Data Governance? 
At its core, Data Governance is a schema or robust set of instructions for capturing high-quality data and ensuring standards are maintained across the collection and the cleaning of data.

To succeed with data governance, teams must ensure data across all your business units and products stay clean and consistent.

A properly executed Data Governance strategy prevents the inconsistent and unactionable data issues we talked about in previous lessons!



> Three core aspects: Quality, Access, and Data Control.

#### Quality

Establish and enforce standards (such as naming conventions) for all incoming data.  Do this by creating a Tracking Plan, sharing it with other teams, and getting buy-in for it from around your organization.

#### Access

Limit who can modify your data (for example, a member of your team might only need read-only access to your data).

#### Data Control 

Map out which data goes to which downstream tools, to prevent any duplication or data clutter.

 

### Data Wheel of Death 

With one or more of these facets missing, a company faces something called the Data Wheel of Death. While companies of all types face this, startups must pay special care as they build their data from the ground up and it can result in delayed projects, bad business and product decisions, and once the wheel gains enough inertia, it can become very difficult to spin out of, which ultimately leads to death (death of data or death of features/product) 


 
![Data Wheel of Death](https://storage.googleapis.com/ad-auris-django-bucket/schmea_pics/Screenshot%20(529).png)

#### Examples where Ad Auris faces aspects of this:

* Due to no schema standards or restrictions in Mongo, we have a lot of unusable documents

* Due to ill-configured implementation on narration creation date collection, that data is deeply flawed (represents attempts of creation no true success) that it’s become totally unusable on Mongo side.

* The IsReturned data point in Mongo is quite off and there are 10s of thousands of documents with this deeply flawed data point

* One dev did not push the charCounter data collection metric causing a no data scenario in the ttsCharDB, no data governance structure meant this slipped right past us as no clear protocol of tracking.

* The inconsistent naming convention among SQL, Mongo, Firestore, and GA makes it a very difficult task of creating true user data personas (pub user and end listener) and the ability to connect data across the different databases. Even with Segment, without unified naming conventions and standards, nothing can save us here depending on severity. 

* On the business side, without a lack of clear business use cases, or data points tied to OKRs, the wrong or incomplete data is collected sometimes as well.


## Current Data Collection  
1. [Narration widget & Play App Data collection](https://adauris.atlassian.net/wiki/spaces/AA/pages/244121601)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)


# Tools

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://babeljs.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/> </a> <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40"/> </a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://canvasjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/Hardik0307/Hardik0307/master/assets/canvasjs-charts.svg" alt="canvasjs" width="40" height="40"/> </a> <a href="https://www.chartjs.org" target="_blank" rel="noreferrer"> <img src="https://www.chartjs.org/media/logo-title.svg" alt="chartjs" width="40" height="40"/> </a> <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg" alt="django" width="40" height="40"/> </a> <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a> <a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" width="40" height="40"/> </a> <a href="https://www.framer.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg" alt="framer" width="40" height="40"/> </a> <a href="https://cloud.google.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="gcp" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://mochajs.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg" alt="mocha" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> <a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40"/> </a> </p>


## Internal Ops

As we are a fast moving team we use set of tools that enables to communicate sync and async where appropiate.

### Sync Tools

* Slack (Direct Comms)
    *   If Slack goes down we'll hop over to Discord
* Google Meets + Zoom (Zooms are for all hands usually)


### Async Tools
* Jira (For Ticketing tasks)
- [Confluence](https://adauris.atlassian.net/wiki/spaces/AA/overview?homepageId=196610) + [Notion](https://www.notion.so/adauris/Engineering-2058fbe4a0b143a4bb8316d7192ea679) (Documentation and Company/Product Sheets)
- [https://dbdiagram.io](https://dbdiagram.io/) (SQL Schmea Designing)
* [draw.io](http://draw.io)  ||  [Lucid](https://lucid.app/)  (for database schema and architecture designing)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)


## Documentation 

1. [Internal API](https://adauris.atlassian.net/wiki/spaces/AA/pages/253329409/Narration+Settings+API)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)


# Environment Setup

# Glossary

A Log of commonly used terms and acronyms at Ad Auris

* CT = Customization Template
* Sprint = Focused Build Period
* GAM = Google Ad Manager 
* PR = Pull Request
* C-Suite = executive team 
* SRP = Single Responsbility Principle
* DRY = Don't Repeat Yourself 
* end users = listeners, indirect users who listent to our produced audio
* users = the actual direct users such as publications and journalists
* business requirements sheet = the document which the product and technical specifications are developed from
* spec sheet = technical specification doc
* OKRs = Objectives and Key Results
* KPIs = Key Performance Indicators

