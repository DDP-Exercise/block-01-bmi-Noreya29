"use strict";
/*******************************************************
 *     bmi.js
 *
 *     Write a small program that calculates the Body Mass Index according to parameters,
 *     given by the user. It should generate a textbased representation like the following:
 *
 *     -----------------------------------------------------
 *     Name:		         :LAST NAME:, :First name:
 *     -----------------------------------------------------
 *     Age:                  :age: Years
 *     Height:		         :size:m (i.e. 1,81m)
 *     Weight:	             :weight: kg
 *     Basal Metabolic Rate: <bmr> kcal
 *     Body Mass Index:	     <bmi>
 *     Normal Weight:        <Yes/No>
 *     Danger:		         <Yes/No>
 *     -----------------------------------------------------
 *
 *     To do so, collect data from your users. Values within :colons: are (formatted) user-inputs;
 *     values within <angle brackets> have to be calculated by your software.
 *
 *     Noreya Friesacher - 2026-03-16
 *******************************************************/

/*
 * Done: Declare and assign all necessary constants and variables with user input.
 * Make sure, to help your users understand what they need to type in, by using clear prompt-instructions.
 */

const LINE = "-----------------------------------------------------";
let bmr, bmi, normal, danger;

//Name gets asked
let lastname = window.prompt("What is your last name?");
let firstname = window.prompt("What is your first name?");
console.log("Your last name is " + lastname + ".");
console.log("Your first name is " + firstname + ".");

//Age gets asked
let age = window.prompt("How old are you in years?")
console.log("Your age is " + age + " years.");

//Height gets asked
let heightcm = window.prompt("How tall are you in cm?")
console.log("Your height is " + heightcm + "cm.");
let meters = heightcm / 100;
let centimeters = heightcm % 100;

//Weight gets asked
let weight = window.prompt("What is your weight?");
console.log("Your weight is " + weight + "kg.");

//Gender gets asked
let gender = "";
do {
    gender = prompt("Are you female or male?")
    console.log("Your gender is " + gender + ".");
}while (gender.toLowerCase() != "female" && gender.toLowerCase() != "male");

/**
 * Formulas:
 *
 * BMR = A + B × weight [kg] + C × height [cm] − D × age [years]
 *      For women: A=655, B=10, C=2, D=6
 *      For men: A=66, B=14, C=5, D=7
 *
 * BMI = (10000 * weight [kg]) / height² [cm]
 *
 * Normal Weight = Any BMI between 18 and 25 (including 18 and 25).
 * Danger = Any BMI lower than 16 or 30+.
 **/

bmr = gender == "female" ? 655 + 10 * weight +2 * heightcm - 6 * age : 66 + 14 * weight + 5 * heightcm - 7 * age;
console.log("That is your BMR: " + bmr + "kcal.");

//BMI berechnen
bmi = (10000 * weight)/heightcm**2;

//Normal Weight
normal = bmi >= 18 && bmi <= 25;
console.log("Your weight is normal.")

//Dangerous weight
danger = bmi < 16 || bmi >= 30;
console.log("Your weight is in a dangerous range.");


/*
 * Done: To calculate the bmr; ask your users which calculation method they would prefer (male or female).
 * Be careful. Users make typos. Make sure that you have a valid answer before moving on.
 */

// Done: To calculate the bmi, use the given formula with all the input you have collected.
// Done: Once you have the bmi, determine whether or not the weight is normal and if the condition is dangerous.

/*
 * Done: Create the correct output from all your data. Make sure to stick to the promised format! NO EXCEPTIONS!
 * You can use \t to add a Tab-Space. Once your program is completed, the output in the browser console should
 * look EXACTLY like the Example-Output above (with different data, of course).
 *
 *  Valid Example:
 *   -----------------------------------------------------
 *   Name:		           NEUWERSCH, Matthias
 *   -----------------------------------------------------
 *   Age:                  35 Years
 *   Height:               1,78m
 *   Weight:               77 kg
 *   Basal Metabolic Rate: 1789 kcal
 *   Body Mass Index:      24.302487059714682
 *   Normal Weight:        Yes
 *   Danger:               No
 *   -----------------------------------------------------
 */

console.log(LINE); // Logs the dashed-line.
console.log("Name:                  " + lastname.toUpperCase() +", " + firstname);
console.log(LINE);
console.log("Age:                   " + age + " Years");
console.log("Height:                " + meters + ", " + centimeters + "m");
console.log("Weight:                " + weight + " kg");
console.log("Basal Metabolic Rate:  " + bmr + " kcal");
console.log("Body Mass Index:       " + bmi);
console.log(normal == true ? "Normal Weight:         " + "Yes" : "Normal Weight:         " + "No");
console.log(danger == true ? "Danger:                " + "Yes" : "Danger:                " + "No");
/*
 * Done: Make sure to TEST YOUR SOFTWARE! Does it work, when People are smaller than 1 meter? Or taller than 2?
 * Tip: An 18-Year old Woman, sized 160cm with 60 kg should have a BMR of 1467 kcal and a BMI of 23.4375.
 */