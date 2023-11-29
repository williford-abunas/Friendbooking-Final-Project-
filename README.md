# Friend Booking Application
## Overview

As a responsible adult striving in a busy society, finding time to connect with friends can be challenging. The friend-booking application is designed to streamline this process, allowing users to book appointments with you when you're available.

## Human Skills Manual

### Daily check-ins in the morning:
- 8.45am will be our daily check-ins.
- Checking how is everyone feeling.
- Announcements from team members.

### Stress profiles:
1. What does it look like?
- Losing concentration and losing sight of your goal. (Will)
- Rushing with no aim. (Matt)
- Get agitated easily. (Ming)
- Completely zone out and distance away from fellows. (James)

2. What causes them?
- Stuff not going right. (James)
- Thinking we are not good enough and time pressure. (Matt)
- Information overload. (Will)
- Fatigue and not understanding the scopes.(Ming)

3. What to do to become unstressed?
- Time alone and fresh air. (Matt)
- Mini breaks and coffees. (Will)
- Take a break and come back with empty mind with better focus. (James)
- Naps and enough food. (Ming)

#### Wellbeing guide for stresses and needs:
-  Every time we have a standup we will have a wellbeing check-in to see how everyone is and this will be in a formal vibe file.
- Whenever anyone is stressed we have agreed that we will do one of the following: Chill time, break, fresh air, sometime to be by yourself (solitary), reassurance from others with what we are working on and positively.
- Getting enough sleep at the correct times; but if we aren't able to for some reason and we are up until 4am for instance, Won't be in at the usual time but happy to compensate by staying a bit later this evening to catch up on the work we've missed  (communication which we have agreed we are happy to have open at all times).

### Expectation setting and agreements:
  #### What do we each want to get out of it?
- Enjoyment and fun.
- Challenge to an extent on things we aren't comfortable with but also doing some things within the comfort zone.
- Good flow (Smoothness of project).
- MVP (High quality).
- Teamwork and great communication!
- Learning more about typescript (Will)

  #### What hours will we keep?
- Happy to work longer hours but want to make sure we are still taking regular breaks, eating, exercising
- Happy to work saturday, but will look at taking a rest on Sunday.
- 9-5 working hours where we will be working; Discussion at last standup of the day to check want we need to work on and if anyone is willing to stay and work longer hours (decide as a team).

  #### How do we make decision together? How do we handle conflicts together?
- Talking in standups at least 3 a day to check up on the progress. Possibly 1 in the morning, 1 before lunch, 1 before closing circle.
- During the standups, we will resolve in a non aggressive manner utilizing the human skills we learnt during the HM skill sessions.
  
### How will we survive?
- We are going to go out for at least one meal together, this will allow us time to relax and unwind from the project and just enjoy being in each others company. We will all eat at the same times (lunch, dinner) so that we are all away from the computers and taking a break at the same time.
- If on the small chance there is tension, we will sit down with each other and work out our tension like the mature individuals we are.
- While we have no set "fun times", we will make sure the whole project is a fun project to be apart of and enjoyable for everyone involved.


### How will you decide who needs to be present for which conversations?
- As a team we have made the decision that ALL team members will be present at all conversations regarding the product. We've made this decision because we are a small group and the product we are creating is all of ours so it makes sense for us to all be involved in conversations revolving it.
- Having everyone involved in all conversations means we are all on the exact same page with what we want from the project at that time and the direction we are taking.

### How to make sure every felt included?
- During discussions everyone will have voting power and fair share to chip in on the product.
- Making sure everyone is being heard.
- We work as a team rather than hierarchical.

### Getting the help we need technically and non-technically?
- We agree to speak up/have a conversation if we are stuck or in a tough spot and seek help if we are stuck after 20 minutes of not getting something.
- Communicate at each standup about how we all are so we know how everyone is and if they need help with anything, whether personal or technical.

### Roles:

  #### We decided to keep the Scrum Facilitator, Git Keeper and Vibes Watcher roles. These roles are not strictly exclusive to individuals but a way to organize workflow.
- Scrum Facilitator = Ming, Will happy to assist
- Git Keeper = Will, Ming happy to assist
- Vibes Watcher = Matt, James
- Product Owner = Equal rights.

  ### What might a day look like? What agile rituals will happen? When during the day will we do the hard tech? Will we go outside as a team?

- A typical day for this project will involve a standup first thing in the morning, this allows us to all get on the same page regarding what we are doing for the day and the direction we want to head in as a group. We will then have another standup before lunch to get another update on where we are as a team, then all team members step away from their computers and go for lunch. After lunch is more coding and then a final standup for the day just prior to closing circle (or can be after closing circle if we plan to stay longer).

- We will tackle the hard tech earlier in the morning/day. We feel this is the best time for this as this is the time when everyone in the team is most refreshed and operating at their peak efficiency. If possible we would like to avoid doing to much hard tech late in the day due to the fact come late in the day everyone is starting to feel a bit more tired and low on energy, which isn't a good environment for tackling hard code.

- We are flexable with how often we will go outside as a team, but we would like to aim for at least 2-3 times a day. Going outside gives us the chance to step away from the computer for a little bit and have a little rest. It's also a chance to get some fresh air and if people are starting to feel a bit tired/drowsy, a bit of fresh air can sometimes help a lot in waking someone up.
  
  ##### For the agile, we decided to keep doing the Kanban both digitally and physically.

---
## Documentation

### Workflow:
- Use the KANBAN to assign yourself a task, post comments in the tickets to describe what needs to be done/what you are working on.
- Move the tickets along the KANBAN as you progress.
- When you're ready to commit new changes, first commit to your branch create a pull request to dev. Tell Git Keeper when that's done and it will be finalized with the team.
- When your changes are committed to the dev branch by Git Keeper and he/she will make sure to communicate to everyone to pull the latest changes from dev. 

### Git Flow:
- **Main Branch** : We can merge into this branch once the code in Dev branch have been reviewed.
- **Dev Branch** : Integration branch for ongoing work where all the feature branches merge together and resolve conflicts.
- **Feature Branches** : Create a feature branch off an updated dev branch and name it on the "feature" that we will be working on. Once this feature is completed, create a pull request to merge into Dev branch and notify the Git Keeper for review. Finally, delete the merged and completed feature branch and repeat the process.

### Tech Stack:
- React
- ReactQuery
- Express
- Knex.js
- Auth0
- External API (Stretch)

---
## MVP:

### Basic sign in as a user:
- User sign in and get directed to user component.
- User will be able to look at owners calendar (weekly).
- User should be able to pick a day (Showing only a week timeframe).

*Because it can be challenging to work with dates/times and we haven't really done that before, we will try and make our MVP attainable, this will have to be reviewed at each standup to see how we are tracking in regards to this *

## Stretch:
### Basic sign in as a user:
- User should be able to pick a timeslot to make appointment. (Hardcoded)
- User should see confirmation that it has been accepted.

### Basic sign in as an owner:
- Owner sign in and get directed to owner component.
- Owner should be able to add their time availability.
- Owner should be able to see the appointment details requested by users.
- Owner should be able to block out the time that has been requested and accepted.

---
## User stories (As a user) : 
- I want to be able to sign in.
- I want to be able to view the owners calendar.
- I want to be able to view available timeslots during the week and select one.
- I want to add a description of the hangout.
- I want to be able to edit/remove/delete an input I've made.
- I want confirmation its been submitted.
