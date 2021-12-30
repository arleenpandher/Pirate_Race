# JS-Project

Pirate's race is a game in which the user is guiding the ship.  One out of the four directions (right, left, up, and down) will appear on the screen in red letters and the user will need to correctly press the corresponding button on the keyboard before time runs out.  However, there are pirates on other ships who are trying to sabotage the user's ship, and sometimes they yell out the opposite directions, which will appear in blue letters on the screen.  The user will need to correctly select the opposite direction when directions appear in blue letter. 

The user wins when they correctly press the buttons corresponding to every direction that appears on the screen.  20 different directions mixed with the correct directions (red letters) and the incorrect directions (blue letter) will appear on the screen.  The user will have 3 seconds to correctly press the keyboard, otherwise the game will be over. 

## Functionality & MVPs 

In this game, users will be able to: 

1) Start, pause, and restart the game 
2) Press the four keyboard buttons that correspond to the four directions 

Functionalities of this game include: 

1) Directions will appear in red letters on the screen (nice pirates)
2) Directions will appear in blue letters on the screen (sabogating pirates)
3) The score of the number of correct directions the user has selected will appear on the screen 

### Wireframe 
![](https://lh3.googleusercontent.com/gS1N8tVLu5Czu31wHG1BOWMa7hkKl7S-Bbulm_tgCavK1MR-KYPJBIDCxJiSReJa5AQuQMY7aTF5LL-b0ev4IkbCBkipPhCzlBpxRijDvgkUSAdlmbPdEA6D_C4D6yS9S7ntIKNvFqRyGa1OCTX9YH_-_jS8FXBAOTIBHjjQeYv_dmGewX3GnUW4QBpcDIyoUwDVXjadFyhyJkfWEmAkqBsFJj6-lG1U3XQhT4yHyAPC5aPThWs70jkkaS8v-JIUoH3dbGa-PYtFbqSNABXX4cicweGW53CbbMFKaKye94suhKnDzZahSCMSeb32GkrjTk06prr28H5J-6YiTI4zvmkJsNTdTwKl8vWe91Xv-Ud7kOq2Hp0xulPW9xvHZUrZ9wB-XWDn8xe3RFAUxIlzwUKdqfhLDpsQ99oHNHqC0DWcOCiAWaHoKdCo8aSQ22RA8DzHleDi-uEDVeRo2cuAqFLFCiG-ChhGgRj1YzYvPV7EDMGJRq5hlewCLXvLK-gcSizJtpwM_G14Pls6_6WX8XaafKi6837KeCYa8YYbjJZWGvhJm4WRjahd3UQfu7npOKcAqsLnr6qpxVrQPBUM5RlxAjkshm0msVL5CD6AxuKiReWr4J7t7Dxc_m-5CfjVo-OLSK-QXp0uIxxUixYdTnlmjqJIYtiBU3QfVcrKNpO8kCgAVXIBaAYHY0LtQrVElLS0Boxnx0NHfylHk3SXU48=w1024-h600-no?authuser=0)
#### Technologies, Libraries, APIs

This project will be implemented with the following technologies: 

1) The Canvas API to render the game screen 
2) Webpack and Babel to bundle and transpile the source JavaScript code 
3) npm to manage project dependencies 

##### Implementation Timeline 

NB: 

1) Thursday Afternoon & Friday: Setup project, including getting webpack up and running.  Get canvas to show up on the screen.  Create the Game and Flag class.  Get the background to render. 

2) Weekend: Implement the underlying logic of the Pirate race game.  Ensure I can get the directions, and score to render on the screen.  

3) Monday: Ensure all the different pieces are rendering correctly, this includes the background and the directions that appear on the screen 

4) Tuesday: Finish implementing the user controls and move on to working on the styling and implementing the nav links 

5) Wednesday & Thursday: Correct any last minute mistakes, and deploy to GitHub pages. 