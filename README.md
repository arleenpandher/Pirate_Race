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




2) Press the four keyboard buttons that correspond to the four directions 

Functionalities of this game include: 

1) Directions will appear in red letters on the screen (nice pirates)
2) Directions will appear in blue letters on the screen (sabogating pirates)
3) The score of the number of correct directions the user has selected will appear on the screen 



## Wireframe 
![](https://lh3.googleusercontent.com/gS1N8tVLu5Czu31wHG1BOWMa7hkKl7S-Bbulm_tgCavK1MR-KYPJBIDCxJiSReJa5AQuQMY7aTF5LL-b0ev4IkbCBkipPhCzlBpxRijDvgkUSAdlmbPdEA6D_C4D6yS9S7ntIKNvFqRyGa1OCTX9YH_-_jS8FXBAOTIBHjjQeYv_dmGewX3GnUW4QBpcDIyoUwDVXjadFyhyJkfWEmAkqBsFJj6-lG1U3XQhT4yHyAPC5aPThWs70jkkaS8v-JIUoH3dbGa-PYtFbqSNABXX4cicweGW53CbbMFKaKye94suhKnDzZahSCMSeb32GkrjTk06prr28H5J-6YiTI4zvmkJsNTdTwKl8vWe91Xv-Ud7kOq2Hp0xulPW9xvHZUrZ9wB-XWDn8xe3RFAUxIlzwUKdqfhLDpsQ99oHNHqC0DWcOCiAWaHoKdCo8aSQ22RA8DzHleDi-uEDVeRo2cuAqFLFCiG-ChhGgRj1YzYvPV7EDMGJRq5hlewCLXvLK-gcSizJtpwM_G14Pls6_6WX8XaafKi6837KeCYa8YYbjJZWGvhJm4WRjahd3UQfu7npOKcAqsLnr6qpxVrQPBUM5RlxAjkshm0msVL5CD6AxuKiReWr4J7t7Dxc_m-5CfjVo-OLSK-QXp0uIxxUixYdTnlmjqJIYtiBU3QfVcrKNpO8kCgAVXIBaAYHY0LtQrVElLS0Boxnx0NHfylHk3SXU48=w1024-h600-no?authuser=0)

## Technologies, Libraries, APIs

This project will be implemented with the following technologies: 

1) The Canvas API to render the game screen 
2) Webpack and Babel to bundle and transpile the source JavaScript code 
3) npm to manage project dependencies 



