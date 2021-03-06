# Pirate_Race

Plundering pirates is a game in which the user is guiding the ship.  One out of the four directions (right, left, up, and down) will appear on the screen in red letters and the user will need to correctly press the corresponding button on the keyboard before time runs out.  However, there are pirates on other ships who are trying to sabotage the user's ship, and sometimes they yell out the opposite directions, which will appear in blue letters on the screen.  The user will need to correctly select the opposite direction when directions appear in blue letter. 

The user wins when they correctly press the buttons corresponding to that direction a specific number of times.

To win the easy level the score has to be above: 25 
To win the medium level the score has to be above: 30
To win the medium level the score has to be above: 10 

Here is a live link of the site: https://arleenpandher.github.io/Pirate_Race/

## Functionality, MVPs, Features 

1. Randomized directions - Every time a new game start randomized directions with a random color (blue or red) appear on the screen.  This feature was implemeneted through the use of JavaScript's Math Library.  Randomizing the direction is extremly beneficial for the user experience because it ensures that everytime a user plays this game they can except a random set of directions to appear.  Futhermore, the setTimeOut method was used to display and discard directions at a different interval depending on the level.  It was difficult to use this function due to the asynchronicity, however by implementing the appearance and disappearance of each direction in a sepearte function, the code successfully renders at the correct time. 

![Pirate1](https://user-images.githubusercontent.com/93013360/156056516-81f6d99c-9669-4c67-a7ec-3a383ea8b752.gif)


2. Dynamic Flag Movements - The user experience was improved through the use of DOM Manipulation in Vanilla JavaScript.  When a user presses the the up keyboard button, the flag will rotate updwards.  The rotation was implemented through the use of request animation frame and cancel animation frame method.  There were two major difficultiies in getting the flag rotation to work, firstly, it was necessary that the flag rotates from a single point and this was done through the use of the translate method which sets the orgin point of rotation.  However, since translate also offsets the flag location, after the first rotation the flag would not return to the same orgin spot, consqeuntly, the set transform method was used to return the flag to the orginal location everytime before the user could rotate the flag. 


![screen-recording (2)](https://user-images.githubusercontent.com/93013360/156062614-78d35b0d-588f-48c9-8e9c-d919073f2c7e.gif)

3. Score Updating - The user experience was further improved by making the game more challenging, when the user selects the incorrect direction, there is a penalty and the user's score decreases by 1.  The scoring was developed through the use of custom conditionally logic, when the user selects a presses a certain keyboard button, there are two checks that need to be completed. 
  - If the direction color is red, then the user should select the corresponding button.  Example, if the direction is North, the user should select the up keyboard button.
  - If the direction color is blue, then the user should select the opposite button.  Example, if the direction is North, the user should select the down keyboard button.

![screen-recording (4)](https://user-images.githubusercontent.com/93013360/156064225-6f29237a-51ef-4d7f-bd86-43fd497ef726.gif)


## Technologies, Libraries, APIs

This project was implemented using the following technologies: 

1) The Canvas API to render the game screen 
2) Webpack and Babel to bundle and transpile the source JavaScript code 
3) npm to manage project dependencies 



