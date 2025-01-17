# YardGems

## Description 

YardGems is a free, easy to use garage sale app that helps create and locate garage sales around you! Our mission is to revolutionize the way people discover and explore nearby sales, making the process simple, exciting, and rewarding for everyone. We believe that the thrill of finding unique treasures shouldn’t be limited to chance encounters but should be easily accessible to all. 

## Table Of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#Demo)
- [Questions](#questions)
- [Technologies](#technologies)
- [Collaborators](#collaborators)

<br>
<br>

## User Story

As a user of YardGems, <br>
I want to discover nearby yard/garage sales<br>
So that I can easily find sales and explore different items.

<br>
<br>

## Acceptance Criteria:

Given the YardGems web app,<br>
When I load the app or open the Progressive Web App (PWA),<br>
Then I am presented with a header that includes the app name, and 2 icons (search, messages), a visually appealing map interface displaying nearby sales, accompanied by a user-friendly navigation menu at the bottom. The menu includes options such as Menu, My Starred Sales, and Map.

When I click on the Search icon at the top right of the page,<br>
Then I am provided with an input field where I can enter search keywords related to the type of sales I am interested in, such as "table," "art," "tools," or "toys." Additionally, there is an option to choose a specific date to only search sales that have that date, and a submit button to initiate the search.

When I enter a search term in the input field and click the submit button,<br>
Then I am presented with several search results, each featuring a cover photo, the sale's title, address, and description. Furthermore, there is a convenient button to save a sale for later reference.

When I click on the Save button for a sale while being logged into my account,<br>
Then the sale's information is saved to my account for easy access in the future. If I am not logged in, I receive a prompt asking me to either log in or sign up.


When I click on the Login or Signup option in the prompt,<br>
Then I am redirected to the respective pages accordingly.

When I am redirected to the SignUp page,<br>
Then I am presented with input fields to enter a username, email address, password, and a signup button.

When I provide a valid email address, create a secure password, and click the signup button,<br>
Then my user account is successfully created, and I am automatically logged into the YardGems platform.

When I am redirected to the Login page,<br>
Then I see input fields to enter my email address and password, along with a login button.

When I enter my account's email address and password and click the login button,<br>
Then I am redirected to the main page that presents the map, and I am successfully logged into the YardGems platform, allowing me to access additional features and functionality.

When I click on the My Saved Sales option in the nav menu, and I am logged into my account,<br>
Then I am presented with all the sales I have previously saved. Each saved sale includes the sale's title, address, and a cover photo. Additionally, I can easily remove a sale from my saved list using the provided button. If I am not logged in, I receive a prompt asking me to either log in or sign up.

When I click on the Remove button for a sale in my saved list,<br>
Then the corresponding sale is promptly removed from my saved sales list.

When I click on the Post A Sale button, and I am logged in,<br>
Then I am asked if i am the host of the sale, if I select yes, I am taken to the Post A Sale Form - Host page. If I am not the host, I am presented with the Post A Sale Form - User page. If I am not logged in, I am taken to the Sign Up page. 

When I am presented with the Post A Sale Form - Host page, <br>
Then I am able to fill out a form that consists of a title, description, sale categories, start and end time, sale address, and item images(all fields required, minimum one photo and one sale category. We can have a preselected list of categories to choose from). I then click a Submit Sale button and the sale is posted to the map so everyone else can see. 

When I am presented with the Post A Sale Form - User page, <br>
Then I am able to fill out a form that consists of a title, description, sale categories, start and end time(optional), sale address, and item images(optional. If they don’t upload a photo we’ll have a default photo). I then click a Submit Sale button and the sale is posted to the map so everyone else can see. 

When I click on an existing pin in the map, <br>
Then I am presented with a small popup that displays the title of the sale along with the address. 

When I click on the sale popup, <br>
Then I am presented with the sale page that displays the sale’s title, description, categories, start and end time(if applicable), address, item images(if applicable), and a map preview. I can also click on a star icon at the top right of the page to save the sale to my ‘starred sales’. (This button could possibly be a toggle button). I can click on the ‘message seller’ button to message the seller. If I am logged out, I am redirected to the sign up page to access this feature. If I click on the ‘get directions’ button, I am taken to the map and presented with directions to the sale.


When I click on the Logout button, <br>
Then I am safely logged out of the YardGems platform, and the app brings me back to the initial map view, allowing me to continue exploring and discovering sales in my area.

<br>
<br>

## Technologies <a id="technologies"></a>

The following technologies were used to develop YardGems:
<br>
<br>

<strong>Languages</strong>
- JavaScript
- Html
- Css
    
<strong>Frameworks</strong> 
- Express
- GraphQL
- Apollo Server Express 
    
<strong>Libraries</strong>
- React
- React Router Dom
- Material UI Styling 
- Bcrypt 

<strong>Tool Url</strong>
- Eslint 
- Dotenv 

    
<strong>APIs</strong>

- React Google Maps 

<strong>Other</strong>

- Node.js
- Jwt decode 
- Mongoose 

<br>
<br>

## Demo <a id="Demo"></a>

https://yardgems-15b0faee737f.herokuapp.com/


<br>
<br>

## Usage <a id="usage"></a> 

Once you reach the landing page you will see a Google Maps rendered with data as well as a list of garage sale postings. You will be able to click on the Google Map markers and the listing post to view more data about the post. For more functionality, you can click on signup button to create an account. Once you've created an account, and have logged in, you are able to post your own garage sale listings, as well as save garage sale listings to your favorite page. You also have the ability to delete and edit your post as well. 

<br>
<br>

## Questions <a id="questions"></a>

If you have any questions about this project, please contact the project owners by visiting their GitHub repository at https://github.com/Omar4589/YardGems.

<br>
<br>

## Collaborators <a id="collaborators"></a>

<br>

Omar Zumaya <br>
     https://github.com/Omar4589
<br>
Kristin De Salme<br>
     https://github.com/KR1ISTIN
<br>
Taylor Aldridge <br>
     https://github.com/Rolyat512