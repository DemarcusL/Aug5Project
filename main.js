// console.log('Sanity');

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

// Creation Date - Prompt for a date
// I will need a prompt asking for the user to input a date 
// we will set a variable for the date enter
// do i need this converted to numbers?

let userName = prompt('Please , Enter your name to begin .')
// alert(` Welcome ${userName} to your Day's Journal ! `); 

let date = prompt('Enter The Date Please (MM/DD/YYYY)');
// alert( ` Awesome , you entered ${date} for today's date ! `)

// this will need to be in a while loop in order to meet conditionals
let confidenceLevel = true;
// i need to set my conditionals here for its knows when to exit the loop and what to do when the value is true
while (confidenceLevel) {

    let low = prompt(` Enter: Low / Medium / High for how you are feeling ${userName} on ${date} .`); 
    // i need to set conditionals
    if (low ===  )




    // let confidenceLevel = prompt(` Enter: Low / Medium / High for how you are feeling ${userName} on ${date} .`).toLowerCase;
    // if (confidenceLevel === "low") {
    //     alert(`Oh My, I'm sorry you feel this way ${userName}`);
    // }
    // else {
    //     alert
    // }
}







//============================================================//


// Confidence Level - Prompt the user to specify Low, Medium, and High confidence level (your implementation should handle any entry regardless of upper or lowercase and any entry that does not match one of the 3 options should be rejected with an error message alert and the user should be prompted to re-enter their confidence level value)

// Describe your confidence level in your skills at the time of posting

// Journal Entry - Prompt the user for the text for your reflection

// Enter in as much text as necessary about what you learned, how you felt, and plans for the upcoming days

// Post Reflection - Use a confirm dialog box to confirm the post/record your journal entry (if the user selects OK, add post to the array, otherwise if they click cancel start over with prompts and entry