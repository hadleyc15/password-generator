GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


Much googling went in to making this work....

I created individual var elemnts for each possible outcome with the password (lower case, upper case, numbers, characters).  After that I created the for loop to make it all happen (with much googling and frustration).  Each of the individual promts were easy to define and no struggle.  It took help from the TA's to understand why my generator was not generating correctly at the end though.  I needed to add a + sign in my  randomPassword = base[Math.floor(Math.random() * base.length)]; to make it  randomPassword += base[Math.floor(Math.random() * base.length)];.  Without the + it was only showing one character generation at the end.  

SCREENSHOTS:
https://github.com/hadleyc15/password-generator/issues/1#issue-619526212

https://github.com/hadleyc15/password-generator/issues/2#issue-619526483

https://github.com/hadleyc15/password-generator/issues/3#issue-619526630