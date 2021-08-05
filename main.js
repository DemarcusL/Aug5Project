// console.log('Sanity');

//I will need prompts to get the name, date, confidence level, and journal entry.

//i need to prcess the answwer from the con prompt.

// It doesnt have to be activeated with an event listener to met the requirement. but if we can make that work DO IT! BUT it can be .onload and then display in the console dom and things. but if its says be displayed somewhere make sure it happens
// check out our promts from 201Day2 if we need loop help.
// #2 tip kevin said with the low med high prompt, we want it to keep asking them until they enter a specific phrase as instructed
// #5 tip we are creating a parent 'ul' element and then appending child to it for the 'li'
// #6 tip the should be able to submit things unless they enter quit or press cancel.
// he wanst the entries listed fromt he data we got from the promtps, as in 
// This is the list of cities! 
// City: Memphis
// State: TN
// in the console.
// It looks as if we want the things gather to be added to the dom with the append child stuff you learned today. add it to p elements and display them.

//============================================================== Begin ==================================== //

// Use JavaScript prompts for entering Reflections into your journal
// Implement the JavaScript necessary to process and validate the submitted data
// Use JavaScript to create Reflection object instances and display them in the console AND browser

// lets create a value to use when generationg with my div
let containerDiv = document.getElementById('journalPrint');

let journalEntries = [ // it asks for this array in 5


];

// This is the event trigger for my button in the html
let myButton = document.getElementById("button")
// this is its listener for that button
myButton.addEventListener('button', main);



function main() {
    // I have my functions here to streamline when events happen
    // i am setting my object props w the data from my functions
    // I am geting the returned value from my functions and setting them here in 
    // we need to push the values into an object literal, than push that literal into an array
    let creationDate = date();
    console.log(`Your creationDate prop is set to : ${creationDate}`);

    let confidenceLevel = confidence();
    console.log(`Your confidenceLevel prop is set to : ${confidenceLevel}`);

    let journalEnt = journalEntry();
    console.log(`Your journalEnt prop is set to : ${journalEnt}`);

    postR();
    // console.log();
}


let userName = prompt('Please , Enter your name to begin .');
// alert(` Welcome ${userName} to your Day's Journal ! `); 
alert(` Welcome ${userName} , Please press the button on the page to begin a journal entry! `);
console.log(` Your name is ${userName}`);


// Creation Date - Prompt for a date
// I will need a prompt asking for the user to input a date 
// we will set a variable for the date enter
// do i need this converted to numbers?

function date() { // it asks for this in 1a

    let date = prompt('Enter The Date Please (MM/DD/YYYY)');
    // alert( ` Awesome , you entered ${date} for today's date ! `)
    console.log(` The date entered is: ${date} `);
    return date;
}
// Confidence Level - Prompt the user to specify Low, Medium, and High confidence level (your implementation should handle any entry regardless of upper or lowercase and any entry that does not match one of the 3 options should be rejected with an error message alert and the user should be prompted to re-enter their confidence level value)
// this will need to be in a while loop in order to meet conditionals. 
//  i will need to set which confidence level to a variable 

function confidence() {

    let confidenceLevel = true; // it asks for this in 1b
    // i need a while loop to run the questions for low, med, high
    while (confidenceLevel == true) {
        //I want this inside the loop to continuous be asked this prompt until it is broken with Quit or cancel
        let userTextInput = prompt(` Enter: Low / Medium / High : for how you are feeling ${userName} on OR Enter Q to stop.`);
        //This is where we are setting this conditional for what ever string we are entering
        // because on line 90 we 
        if (userTextInput === 'Low' || userTextInput === 'low') {
            // console.log(userTextInput);       
            confidenceLevel = false;
            alert(` I'm sorry you feel Low today ${userName} ! `)

        }
        else if (userTextInput === 'Medium' || userTextInput === 'medium') {
            // console.log(userTextInput);
            confidenceLevel = false;
            alert(` Okay, you're doing Medium on today ${userName} ! `)
        }
        else if (userTextInput === 'High' || userTextInput === 'high') {
            // console.log(userTextInput);
            confidenceLevel = false;
            alert(` Awesome , way to feel High today ${userName} ! `)
        }
        //I want this loop broken when entering Q
        //we have to change the userTextInput boolean to fasle to break the loop from true
        else if (userTextInput === 'Q' || userTextInput === "Quit" || userTextInput === "quit" || userTextInput === "q") {
            console.log(userTextInput);
            // console.log('You Quit Your Entry');
            prompt(`You Quit Your Entry Attempt ${userName}, are you sure about this? `);
            confidenceLevel = false;
        }
        // If none of the booleans are met, we will get this back in console
        else {
            prompt(`Error ${userName}, Try AGain`);
            console.log(`Reached an Error ${userName}, Try again`);

        }
        return userTextInput;
    }

}
//============================================================//


// Journal Entry - Prompt the user for the text for your reflection

// it asks for this 1c
function journalEntry() {
    let journalEntry = prompt(` Okay ${userName} , Reflect on why you what you did. Describe how that rating makes you feel,why you chose that, how it makes you feel to have that rating, and plans for the upcoming days either change it or keep it the same! `);
    console.log(journalEntry);
    return journalEntry;
    // Enter in as much text as necessary about what you learned, how you felt, and plans for the upcoming days

    // what do I do with what I have here, 
}
//============================================================//

// Post Reflection - Use a confirm dialog box to confirm the post/record your journal entry (if the user selects OK, add post to the array, otherwise if they click cancel start over with prompts and entry)
function postR() {

    let postReflection = prompt(` Are you ready to post this journal ${userName} ? `).toLowerCase();
        console.log(postReflection);
    if ( postReflection === "yes") {
        // console.log(postReflection);
    }
    else {
        console.log('error');
    }

    
}

// lets create an object literal
// we will need instances for object literals for our journal entry
let journalObject = {
    date: creationDate,
    confidence: confidenceLevel,
    journal: journalEnt
}


//====== Not tounching this yet ! =====//
// I want to add my journals to my html container once the user finishes entering date
// let journalContent = document.createElement('ul')

// let journalText = document.createTextNode('');// I want that data added here

// //This will take that text and add it to the unordered list
// journalContent.appendChild(journalText);

// // this will add it to the html div
// containerDiv.appendChild(journalContent);







// journalAdding();
// date();


// ================== Dont use =======================//
// let journalAdd = document.getElementById("journalAdd")

// journalAdd.addEventListener("submit",journalAdd);
// // this event listener should react when we press submit

// function submitJournal(evt) {


// }
// ================== Dont use =======================//

