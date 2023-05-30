# Rock, Paper, Scissors

Rock, Paper, Scissors is a classic game that gives the player three different options to choose from Rock, Paper or Scissors, once and option has been chosen the computer player will then chose and option and the winner will be determined by the rules of the game.

Playing  Rock, Paper, Scissors in person with a friend or family member may result in a lot of draws, this can be because you may be familiar with each other or may even have a sense at what your friend or family member may choose. Playing this online Rock, Paper, Scissors game will be impossible to guess what the computer player will choose as it is done completely random giving the game a fair outcome each time you play.
This game is targeted towards adults and children and this game can be used to learn the rules of Rock, Paper, Scissors and used for fun purposes.

![Screen shot of website from am I responsive.](/assets/images/responsiveimage.png)

### FEATURES  

- The Header
  - The header shows the heading  Rock, Paper, Scissors and is centered in the middle of the page in a funky font colored black to contrast against the white background.
  - The header explains exactly what game this website is.

![Screen shot of header image.](/assets/images/headerimage.png)
  
- The Options
  
  - The options section includes a small header advising the player to choose their option, below the header are three images, a rock, paper and a scissors. These are interactive buttons that the player uses to select their choice.

![Screen shot of buttons in game area.](/assets/images/buttonoptions.png)

- The results
  - Once the player chooses and option, the image relating to their choice will show in the light-blue box in the game section.
  - The JavaScript code makes a random choice for the computer player and this image will show in the purple box in the game section and the winner is then decided.
  - The winner is announced by an alert display that pops up who won the round and explains why, the score board will then increase the players score or the computers score accordingly.
  - The score board is clear to the user so they are able to keep track of their score making it easy to see who is winning thus making the game easy to follow for the player.
  - I have chosen an 80's arcade background image for the game section, I feel this image suits the game well as it gives it a fun aesthetic.
  
![Screen shot of the results chosen by player and computer with alert message of who's won.](/assets/images/resultsimage.png)

- Restart Game Button
  - This button allows the player to reset the score board whenever they like and however many times they like.
  - This is ideal should a new player want try and start the scores from 0 again.
  
![Screen shot of the restart button.](/assets/images/restartbutton.png)

- Footer
  - The footer provides the user with our social media links so the user can follow us online and play and new games that are created in the future.

![Screen shot of the footer with social media links.](/assets/images/footerlinks.png)

### Testing

- I have tested that this game works on different browsers: Microsoft Edge, Google Chrome and Firefox and confirm it works on all three.
- I can confirm that this project is responsive and looks good and all functions work on all screen size's using the developers tool bar.
- I can confirm that the game always works correctly and that the scores will always be updated correctly.
- I can confirm that the headers, options, results, instructions and social media links are all readable and easy to understand.
- I can confirm that the colors and fonts used are easy to read and accessible by checking it in the lighthouse in dev tools.

![Screen shot of lighthouse results.](/assets/images/lighthouseimage.png)

### Bugs

Solved bugs

- While creating my project and testing it through the validator I had discovered one error in the html code, image of error shown below.

![Screen shot of error in code.](/assets/images/htmlerrorcode.png)

- Removing the body tag fixed the problem.

### Validator Testing

- HTML
  - No errors where found when passing through the official W3C validator once the error mentioned above was resolved.
  - [Screen shot of HTML code validator](/assets/images/htmlvalidator.png)
- CSS
  - No errors where found when passing through the official (Jigsaw) validator
  - [Screen shot of CSS code validator](/assets/images/cssvalidator.png)
- Javascript
  - No errors where found when passing through the JSHint validator however there are some warnings.
  - [Screen shot of JavaScript code validator](/assets/images/javascriptvalidator.png)

### Unfixed bugs

There are no unfixed bugs.

### Deployment

- The site was deployed to Github pages, these are the steps that were taken:
  - In the Github repository I navigated to the Settings tab.
  - I then selected the pages navigation link towards the left of the screen half way down.
  - Located the source section drop-down-menu, selected Main branch and clicked save.
  - Once the Main branch was saved the page provided a link the to completed website.

The live link can be found here [Rock, Paper, Scissors](https://alexflip1990.github.io/Rock-Paper-Scissors)

### Credits
- Code on lines 51 and 64 in the script.js file I received help from Dylan James who
- is a family friend, the code is to get which ever image button the player or computer
- chooses to show in the player section and the computer section in the game area.

#### Content

- Icons in the footer were taken from [FONTAWESOME](https://fontawesome.com/v5/search)

- Font on game page was taken from [Google Fonts](https://fonts.google.com/)

#### Media

- Background image taken from <a href="https://www.freepik.com/free-vector/80-s-geometric-colorful-decorative-background_5061980.htm#query=80s%20background&position=3&from_view=keyword&track=ais">Image by pikisuperstar</a> on Freepik
- Rock, Paper, Scissors images where taken from [Free Icon Library] (https://icon-library.com/icon/rock-paper-scissors-icon-6.html)
- Images compressed using [TINYPNG](https://tinypng.com/)
