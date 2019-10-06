# Project 3

## Trip Planner

An app that lets a user plan an adventure in its entirety, down to the gear and people that are going to come. Once the trip is planned, it sends a full itinerary to everyone involved, so people can be on the same page. All your planning in one place.

## Wireframes

#### ERD

https://drive.google.com/file/d/1wRTyxZbuPiJMm2on-sMkRXl8NEUOkeJj/view

#### Component Hierarchy/ Mobile/ Desktop

https://imgur.com/a/1ZJhoLp


## Components

#### Main

User can register and log on to their profile.

#### Home

User can select what trip they want to take.
They can view and edit their trips.

#### Trip

Users will be displayed the information of the trip
Users can add and remove gear. They can select the recommended or customize and search for their gear. Users should be able to choose the trip and day, as well as, any information about it.


#### Itinerary Page

This component will show people in the involved in the trip, display the full itinerary.


#### Navigation

Home, Planning, About

##### MVP

Plan a trip.
Create a collaborative itinerary.
After the user selects a trip, they should be redirected to an info page.
Create an API of trips and gear associated
The info page will display a map of the location and gear required.
Users can add people to a group either by a code, username, or email information.

##### PostMVP

Send the itinerary to the people within the group.
Users can combine their list of items.
The list will be a checkbox and there will be two lists where there are checked items and non-checked items
Users can post their past adventures on a new public component.
Other users can rate the posts (1-5 scale)and the posts will be aligned based on the average ratings.
Users can add photos to a trip
Display the weather for the days selected


#### ERD

Each account has one user
Each user has many plans
Each plan has one location and itinerary
Each itinerary has many items

## Timeline

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create a login page | H |  1 Hr | 2 Hr | 2 Hrs |
| Create an API | H | 1 Hr | 1 Hr | 1 Hr |
| Create the skeleton | H | 1 Hr | 1 Hr | 1Hr |
| Create an itinerary | H | 1 Hr | 2 Hr | 2Hr |
| Display info | H | 1 Hr | 1 Hr | 1 Hr |
| Add People to group | H | 2 Hr | 3 Hr | 3 Hr |
| Add and delete gear | H | 2 Hr | 3 Hr | 5 Hr |
| Styling | H | 5 Hr | 12+ Hrs | Maybe 15+ Hrs |
| PostMVP | | | |
| Send out information | M | 2 Hr | 0 Hr |  0 Hr |
| Combine list with other users | M | 2 Hr | 0 Hr |
| Checkboxes will be changed in real time based on click| M | 30 mins | |
| Add Photos  | L | ??? | 0 |
| Rating system and post | L | 1 Hr | 0 Hr |
