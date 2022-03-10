# WEEK 3 Homework - sjb-password-generator
In this weeks task we were supplied with starter code for a password generator and asked to complete the application. 
The acceptance criteria required a user to follow the prompts to select length and character types for their password. The result was a series of random characters at the defined length that included at least one of the selected characters.

## Notes 
This project was good in learning how to build efficiencies in my code. I started out with the code broken up in many steps so i could see it working. Once it was working and i understood what each element was doing i was able to go back and simplify parts. 

eg the UpperCase selection went from 

if (incUpperCase) {
  mixedBag = mixedBag.concat(upperCase);
  var upperCaseLength = upperCase.length;
  var index = Math.floor(Math.random() * upperCaseLength);
  var singleUpperCase = upperCase[index];
  passStart = passStart + singleUpperCase;
};

to 

if (incUpperCase) {
  mixedBag = mixedBag.concat(upperCase);
  var index = Math.floor(Math.random() * upperCase.length);
  var singleUpperCase = upperCase[index];
  passStart = passStart + singleUpperCase;
};

to 

if (incUpperCase) {
  mixedBag = mixedBag.concat(upperCase)
  var singleUpperCase = upperCase[Math.floor(Math.random() * upperCase.length];
  passStart = passStart + singleUpperCase;
};

And then i moved it to a function so each character option could call it

function generateCharacter(type) {
  var arrayLength = type.length;
  var index = Math.floor(Math.random() * arrayLength);
  password += type[index]
}


## Questions/Challenges
I got stuck with the validation. I found that if a user went through the process within the length requirements and minimum one character type the password would render fine. If they failed any of the parameters and then proceeded through the process within the parameters, it would output the password as undefined. This was finally resolved by adding an if statement into the wrtiepassword function 

## Project Links

* Repo name

sjb-bootcamp-portfolio

* Live site

https://simmmmo.github.io/sjb-bootcamp-portfolio/

* GitHub enviroment

https://github.com/simmmmo/sjb-password-generator.git
git@github.com:simmmmo/sjb-password-generator.git

* Screenshots

https://github.com/simmmmo/sjb-bootcamp-portfolio/tree/main/assets/screenshot