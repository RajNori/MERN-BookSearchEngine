# Book-Search-Engine

## A book search engine project with Authentication using GraphQL and Apollo server

By Raj Nori. 

# Project Name

> [Book Search Engine] (https://mern-booksearchapp.herokuapp.com/)

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Video](#Video-walkthrough)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
- This is a fully functional app with google Books API search engine built with a *GraphQL* API built with *Apollo* Server.
- The app is built using the *MERN stack* with a *React* front end, *MongoDB* Atlas(Cloud) as the database & *NodeJs/Express.js* server.
- The project is set up so that it saves the book searches in the back end.
- The project uses *GraphQL* and *Apollo* Server for authentication.

## User Story
> AS AN avid reader.   

> I WANT to search for new books to read.    

> SO THAT I can keep a list of books to purchase

### Acceptance Criteria

> GIVEN a book search engine. 

> WHEN I load the search engine. 
> 
> THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button. 
> 
> WHEN I click on the Search for Books menu option. 
> 
> THEN I am presented with an input field to search for books and a submit button. 
> 
> WHEN I am not logged in and enter a search term in the input field and click the submit button. 
> 
> THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site.  
> 
> WHEN I click on the Login/Signup menu option. 
> 
> THEN a modal appears on the screen with a toggle between the option to log in or sign up. 
> 
> WHEN the toggle is set to Signup. 
> 
> THEN I am presented with three inputs for a username, an email address, and a password, and a signup button. 
> 
> WHEN the toggle is set to Login. 
> 
> THEN I am presented with two inputs for an email address and a password and login button. 
> 
> WHEN I enter a valid email address and create a password and click on the signup button. 
> 
> THEN my user account is created and I am logged in to the site. 
> 
> WHEN I enter my account’s email address and password and click on the login button. 
> 
> THEN I the modal closes and I am logged in to the site. 
> 
> WHEN I am logged in to the site. 
> 
> THEN the menu options change to Search for Books, an option to see my saved books, and Logout. 
> 
> WHEN I am logged in and enter a search term in the input field and click the submit button  
> 
> THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account. 
> 
> WHEN I click on the Save button on a book. 
> 
> THEN that book’s information is saved to my account. 
> 
> WHEN I click on the option to see my saved books. 
> 
> THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account. 
> 
> WHEN I click on the Remove button on a book. 
> 
> THEN that book is deleted from my saved books list. 
> 
> WHEN I click on the Logout button. 
> 
> THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button    
> 


## Technologies Used
- React
- GraphQL
- Apollo server
- Node.js - version 17.9.0
- Express.js


## Features

>  A search functionality where the User can enter a search term and a page with the results will be mounted.
> User authentiaction. i,e can register and login to the application,

## Screenshots

![Screen](https://user-images.githubusercontent.com/98436665/180638024-5b8e212e-3af9-4c99-bf7e-c8220a242558.png)
![Auth](https://user-images.githubusercontent.com/98436665/180638032-785f5042-58c3-4b2e-bad0-a4562641f921.png)
![MongoDB database](https://user-images.githubusercontent.com/98436665/180638157-85e05ed7-467f-4e6b-a450-c81dfb73c55f.png)
> Mongodb Atlas Cloud.

## Video
> [Video Walkthrough] (https://www.youtube.com/watch?v=m8ibWs5A0EA)

## Setup
Clone onto your local machine or download Zip file and run `npm install` and then `npm start`. The local server is set to 3000 (and 3001 for graphql). Please ensure there are no other apps running on these ports.

## Usage
Please use the Heroku App deployed.


## Project Status
Project is: _complete

## Room for Improvement

Room for improvement:
- Edge cases need to be tested for and added as features.

To do:
- Better UI and more responsive components.

## Acknowledgements
Give credit here.
- This project was inspired by...Monash Bootcamp.
- Many thanks to....the team at Monash & Trilogy.

## Contact
Created by [@rajnori](https://rajnori.github.io/Portfolio-project/) - feel free to contact me!


