# Project Overview


## Project Scope
- What I am planning on building is a project planner for developers, it will be called Frontkick-Starter (name pending). What you will be able to do is create a project, where you can write out a full project description and proposal, upload wireframes/designs, write out your MVP/PMVP’s, and save/delete projects. I will be using Ruby on Rails for the backend, React for the front end, as well as various additional React animation libraries. I believe I can implement all of my MVP features within the allotted time period, but my main goal will be to get to my Post MVP which will dramatically change the function of the page. The Post MVP will make it so that users can create projects or designs that they would like to make, and that user can then assign different “roles” that need to be filled in order to complete the project. Once those roles have been filled, users are able to collaborate and create projects together that newer developers will be able to add to their portfolios.

## User Interaction

- The user will first start out at the landing page, where a user that is not logged in can view featured projects, recommended projects, an email subscription, and the log in/create a project buttons. If the user clicks on the Log In button, a form will populate where they will fill in their email as well as their password in order to log in. If a user clicks on the Create a Project button, it will bring them to a page that asks them to declare their project name, which is the first step to creating a project. After they fill in the project name, the user will be able to click on the Next button, where they are then asked to fill in a description of their project, which is part two to the creating a project process. Once they fill in the description, they select the Create a Project button. This will then lead them to the final portion in the create a project phase. They upload photos of their wireframes, fill in their MVP/Post MVP deliverables, fill in a timeline, and also edit other information that they may have already filled out. They can then either save a project, or delete it. Below the timeline, will be a trello board that are three vertical containers. The first is the items they need to do, the second is in progress, and the third is completed. As users make progress towards their project, they will drag the items that are either in progress or need to do to the appropriate container. I will be using the react-beautiful-dnd library in order to create the trello board.

## User Story
- User Aaron Dim is a struggling software developer. While having progressed quite a bit with his programming skills, Aaron has discovered that he is highly unorganized when creating projects. He discovers that there is a project planner application that is specific to web developers. Aaron is thrilled. He logs on and discovers that he is able to create projects, store all the information relating to his project, see a compiled list of all of his projects, and on top of that is able to use the featured trello board to organize his to-do's. Aaron is thrilled. Later on, he discovers that the project planner made an update (Post MVP) where users can create a project that they wish to build, and collaborate with other developers to build out their idea. As a newer developer, this was fantastic news for Aaron. The problem for Aaron prior to discovering this site, was that he knew he had to build more projects, but did not necessarily have an original idea that had in mind to build, but also did not want to spend the time to create every project from start to finish on his own. Now, he is able to select from projects of his choosing that others have already designed, and collaborate with fellow developers/designers to create more projects to add to his portfolio. Best part, is that all projects listed are springs, so they have a maximum time limit of two weeks. Perfect! 

## Inspired By

- (https://www.kickstarter.com/)

## Wireframes
### Mobile
![Wireframe 1](https://res.cloudinary.com/darrin-im/image/upload/v1570195471/IMG_2804_jmh0rk.jpg)
![Wireframe 2](https://res.cloudinary.com/darrin-im/image/upload/v1570195471/IMG_2809_xdqyi1.jpg)
![Wireframe 3](https://res.cloudinary.com/darrin-im/image/upload/v1570195471/IMG_2811_qhtyep.jpg)
![Wireframe 4](https://res.cloudinary.com/darrin-im/image/upload/v1570195472/IMG_2810_sjwwxs.jpg)
![Wireframe 5](https://res.cloudinary.com/darrin-im/image/upload/v1570195472/IMG_2806_zkx9vo.jpg)
![Wireframe 6](https://res.cloudinary.com/darrin-im/image/upload/v1570195472/IMG_2807_wuhlsz.jpg)
![Wireframe 7](https://res.cloudinary.com/darrin-im/image/upload/v1570195472/IMG_2808_sgfeac.jpg)

### Desktop
![Wireframe 1](https://res.cloudinary.com/darrin-im/image/upload/v1570195503/IMG_2817_x2vybe.jpg)
![Wireframe 2](https://res.cloudinary.com/darrin-im/image/upload/v1570195503/IMG_2813_uomp99.jpg)
![Wireframe 3](https://res.cloudinary.com/darrin-im/image/upload/v1570195503/IMG_2818_smxuro.jpg)
![Wireframe 4](https://res.cloudinary.com/darrin-im/image/upload/v1570195503/IMG_2814_ejvuny.jpg)
![Wireframe 5](https://res.cloudinary.com/darrin-im/image/upload/v1570195503/IMG_2815_ljamx7.jpg)
![Wireframe 6](https://res.cloudinary.com/darrin-im/image/upload/v1570195503/IMG_2816_qur2we.jpg)

### ERD
![Wireframe 1](https://res.cloudinary.com/darrin-im/image/upload/v1570195516/IMG_2818_1_wb9myd.jpg)

### MVP/PostMVP
#### MVP
- Create/Delete an Account with Login/Logout functionality
- Create/Delete/Edit a project
  - Upload wireframes
   - Write out MVP, PostMVP deliverables
   - Estimated Timeline
   - General Description
   - Edit info
   - Trello board

#### PostMVP
- Full screen animation when someone "completes" something in their trello board
- Users will be able to post their projects, and create “roles” that need to be filled in order for the project to be completed. To start the Post MVP, there will only be two roles: developer, and designer. There can only be one designer per project, but as many developers as the project creator sees fit. 
- The projects never had actual financial return, however the project creator can assign percentages of a return should the project creator choose to pursue the idea commercially. A “contract” of some sort is created, and users can use an e-sign feature to electronically sign the contract.

## Components

| Component | Description |
| :---: | :---: |  
| Header | This is the Header/Navbar |
| Footer | This will render the Footer with social media links |
| Featured Projects | This will render featured projects at random |
| Recommended Projects | This will render recommended projects at random |
| Email List | This will render the email subscription |
| Plan Start | This will render the first portion to planning a project (name) |
| Plan Description | Renders the second portion to planning a project (description) |
| Plan Full Details | Renders all the remaining portions to fill out |
| Completed Plans | This will render all completed plans |

## Estimated Timeline


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Configuring Backend | High | 3hrs| N/A | N/A |
| Creating Component Structure/Routes | High | 3hrs| N/A | N/A |
| Configuring Header Component | High | 1.5hrs| N/A | N/A |
| Configuring Footer Component | High | 1.5hrs| N/A | N/A |
| Configuring Featured Projects Component | High | 2hrs| N/A | N/A |
| Configuring Recommended Projects | High | 2hrs| N/A | N/A |
| Configuring Email List Component | High | 1.5hrs| N/A | N/A |
| Configuring Plan Start Component | High | 1.5hrs| N/A | N/A |
| Configuring Plan Project Component | High | 4hrs| N/A | N/A |
| Configuring Completed Plans Component | High | 3hrs| N/A | N/A |

| Total | H | 23hrs| N/A | N/A |
