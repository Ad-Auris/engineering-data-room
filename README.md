# Engineering Data Room
![This is an image](https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60)

### Purpose

The Purpose of this repo is for it to act as a central source of truth for schemas, best practices, and other ad auris engineering relevant documentation.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#)


# Engineering Best Practices

Information for new Ad Auris developers:

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



## Apps
(Client or Sales Facing)

```bash
Dashboard 

Narration Widget

Ad Auris Play

Internal Tool

Customization Tool

```



## Database Schemas 



### Databases

```python
SQL - Operational DB (🔑 key DB)

Mongo - Events Database (🔑 key DB)

Firestore - Stripe and Admin Database

Segment - Customer Data Platform (CDP) (Not active yet)
```


1. [SQL Wireframe](https://dbdiagram.io/d/61abf3a98c901501c0e0c1b6)
(password is adauris2021)
2. [MongoDB Wireframe]()



# Architecture

Ad Auris uses a distributed & serverless microservices architecture. Many services provide access to themselves via HTTPS. Others provide their services through the Cloud Scheduler/Cron Jobs. Endpoints are not authenticated at this time so don't worry about JWT request tokens.

### Microservices Wireframe

![System Diagram](https://storage.googleapis.com/ad-auris-django-bucket/schmea_pics/Ad-auris-tech-stack%20(1).jpg)
(Additional Updates coming)

## Architecture Schemas
1. [Business Logic Layer](https://lucid.app/lucidchart/c02d5275-3b4b-433f-8a56-4953ed853eb6/edit?invitationId=inv_a6984e61-6037-4d75-966f-dd44a65dc429) 
2. [Ad Auris Dashboard and Narration pipeline Wireframe](https://drive.google.com/file/d/1EZ35RTLapdmEqMOrmhdoqhGhcaB2Gr08/view)
3. [Play App Wireframe](https://drive.google.com/file/d/1pq35gssmAKxOEjs4io8yMaod1VMTqNtx/view)
4. [Global Company (and legacy) Wireframe](https://drive.google.com/file/d/1Ao5byYF1vXzCo4H39BsabsvqkPP-aTw5/view)
5. [Pipeline Revamp Wireframe](https://drive.google.com/file/d/18Z84V9w_9jLhFMcV-GS0Aep70fYyNxit/view)



## Data

1. [Narration widget & Play App Data collection](https://adauris.atlassian.net/wiki/spaces/AA/pages/244121601)


