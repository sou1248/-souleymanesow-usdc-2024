/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use 
the "Developer Tools" to see the JavaScript console.
* There, you will see the results unit test execution. 
You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code 
submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." 
In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */



/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 
* @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 
* @returns {JSON} - Search results.
 * */

/** Written by Souleymane Sow  12/10/2023**/

/** findSearchTermInBooks(searchTerm, scannedTextObj) is a function that takes a string named searchTerm
and object named scannedTextObj as inputs, then return the book's ISBN, pages, and lines where the searchTerm 
is found or an empty string if no match is found.**/
 
 
function findSearchTermInBooks(searchTerm, scannedTextObj) {

    
/** You will need to implement your search and 
     * return the appropriate object here. */



if ((searchTerm === ".")||(searchTerm === ",")||(searchTerm === "?")||(searchTerm === "!")||(searchTerm === "-")||(scannedTextObj.length===0)) {
var result = {
 "SearchTerm": searchTerm,
 "Results":"Invalid input, try again."}; 
return result;
}

for ( k = 0; k < scannedTextObj.length; k++ ) {

var arrayLength = scannedTextObj[k].Content.length; /** This is the number of line in each book. **/
var stringArray = [];
var results = [];
var counter = 0;
var punctuation = /[\.,?!']/g;
/**
if ((searchTerm === ".")||(searchTerm === ",")||(searchTerm === "?")||(searchTerm === "!")||(searchTerm === "-")) {
var result = {
 "SearchTerm": searchTerm,
 "Results":"Punctuation is not allowed, try again."}; 
return result;
}
**/
for (i = 0; i < arrayLength; i++) {


var stringArray = scannedTextObj[0].Content[i].Text.replace(punctuation,'').split(' ');
for (j = 0; j < stringArray.length; j++) {
if ( (searchTerm === stringArray[j])||((j===stringArray.length-1)&&(stringArray[j].substr(-1)==="-")&&(stringArray[j].substr(0,stringArray[j].length-1)===searchTerm.substr(0,stringArray[j].length-1)))){
results[counter] = { "ISBN":scannedTextObj[k].ISBN, "Page":scannedTextObj[k].Content[i].Page, "Line":scannedTextObj[k].Content[i].Line}; 
counter++;
}
}
}  
var result = {
        "SearchTerm": searchTerm,
        "Results": results
    };

    
    
return result;

} 


}



/** Example input object. */
/** The following object is a book with title, ISBN, and three line of text **/

const twentyLeaguesIn = [
    {
 
       
"Title": "Twenty Thousand Leagues Under the Sea",
        
"ISBN": "9780000528531",
        
"Content": [

{
                
"Page": 31,
                
"Line": 8,
                
"Text": "now simply went on by her own momentum.  The dark-"
            
},
            
{
                
"Page": 31,
                
"Line": 9,
                
"Text": "ness was then profound; and however good the Canadian\'s"
            
},
            
{
                
"Page": 31,
                
"Line": 10,
                
"Text": "eyes were, I asked myself how he had managed to see, and"
            
} 
        
]
 
    
}
]
 

const twentyLeaguesIn1 = []
   

/** Example output object */

/** The following objects are expected results for tests cases **/

/** Expected output for search term "the" */

const twentyLeaguesOut = {

    
"SearchTerm": "the",
    
"Results": [
        {
            
"ISBN": "9780000528531",
            
"Page": 31,
            
"Line": 9
        
}
    ]

}



/** Expected output for search term "and" */

const twentyLeaguesOut1 = {

    
"SearchTerm": "and",
    
"Results": [
        {
            
"ISBN": "9780000528531",
            
"Page": 31,
            
"Line": 9
        
}
,
{
            
"ISBN": "9780000528531",
            
"Page": 31,
            
"Line": 10        
}    ]

}



/** Expected output for search term "road" */

const twentyLeaguesOut2 = {

    
"SearchTerm": "road",
    
"Results": []
            
}



/** Expected output for search term "The" */

const twentyLeaguesOut3 = {

    
"SearchTerm": "The",
    
"Results": [
        {
            
"ISBN": "9780000528531",
            
"Page": 31,
            
"Line": 8
        
}
    ]

}



/** Expected output for search term "." */

const twentyLeaguesOut4 = {

    
"SearchTerm": ".",   
"Results": "Invalid input, try again."           
}



/** Expected output for search term "darkness" */

const twentyLeaguesOut5 = {

    
"SearchTerm": "darkness",
    
"Results": [
        {
            
"ISBN": "9780000528531",
            
"Page": 31,
            
"Line": 8
        
}
    ]

}


/** Expected output for search term "the" */

const twentyLeaguesOut6 = {

    
"SearchTerm": "the",   
"Results": "Invalid input, try again."           
}




/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   
_/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  
___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */



/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. 
We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * 
Please add your unit tests below.
 * */

/** Test 1: Positive test for search term "the" **/

/** We can check that, given a known input, we get a known output. */


const test1result = findSearchTermInBooks("the", twentyLeaguesIn );


if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
 
   
console.log("PASS: Test 1");


} else {
 
   
console.log("FAIL: Test 1");
    
console.log("Expected:", twentyLeaguesOut);
    
console.log("Received:", test1result);


}

/** Test 2: Positive test for search term "the" **/

/** We could choose to check that we get the right number of results. */


const test2result = findSearchTermInBooks("the", twentyLeaguesIn);
 

if (test2result.Results.length == 1) {

    
console.log("PASS: Test 2");


} else {
 
   
console.log("FAIL: Test 2");
   
console.log("Expected:", twentyLeaguesOut.Results.length);
    
console.log("Received:", test2result.Results.length);


}


/** Test 3: Positive test for search term "and" **/
/** We can check that, given a known input, we get a known output. */


const test3result = findSearchTermInBooks("and", twentyLeaguesIn);


if (JSON.stringify(twentyLeaguesOut1) === JSON.stringify(test3result)) {
 
   
console.log("PASS: Test 3");


} else {
 
   
console.log("FAIL: Test 3");
    
console.log("Expected:", twentyLeaguesOut1);
    
console.log("Received:", test3result);


}


/** Test 4: Positive test for search term "and" **/
/** We could choose to check that we get the right number of results. */


const test4result = findSearchTermInBooks("and", twentyLeaguesIn);
 

if (test4result.Results.length == 2) {

    
console.log("PASS: Test 4");


} else {
 
   
console.log("FAIL: Test 4");
   
console.log("Expected:", twentyLeaguesOut1.Results.length);
    
console.log("Received:", test4result.Results.length);


}


/** Test 5: Negative test for search term not found "road" **/
/** We can check that, given a known input, we get a known output. */


const test5result = findSearchTermInBooks("road", twentyLeaguesIn);


if (JSON.stringify(twentyLeaguesOut2) === JSON.stringify(test5result)) {
 
   
console.log("PASS: Test 5");


} else {
 
   
console.log("FAIL: Test 5");
    
console.log("Expected:", twentyLeaguesOut2);
    
console.log("Received:", test5result);


}

/** Test 6 Negative test for search term not found "road" **/
/** We could choose to check that we get the right number of results. */


const test6result = findSearchTermInBooks("road", twentyLeaguesIn);
 

if (test6result.Results.length == 0) {

    
console.log("PASS: Test 6");


} else {
 
   
console.log("FAIL: Test 6");
   
console.log("Expected:", twentyLeaguesOut2.Results.length);
    
console.log("Received:", test6result.Results.length);


}

/** Test 7: Positive test for search term "The" instead of "the"  **/
/** We can check that, given a known input, we get a known output. */


const test7result = findSearchTermInBooks("The", twentyLeaguesIn);


if (JSON.stringify(twentyLeaguesOut3) === JSON.stringify(test7result)) {
 
   
console.log("PASS: Test 7");


} else {
 
   
console.log("FAIL: Test 7");
    
console.log("Expected:", twentyLeaguesOut3);
    
console.log("Received:", test7result);


}

/** Test 8: Positive test for search term "The" instead of "the" **/
/** We could choose to check that we get the right number of results. */


const test8result = findSearchTermInBooks("The", twentyLeaguesIn);
 

if (test8result.Results.length == 1) {

    
console.log("PASS: Test 8");


} else {
 
   
console.log("FAIL: Test 8");
   
console.log("Expected:", twentyLeaguesOut3.Results.length);
    
console.log("Received:", test8result.Results.length);


}

/** Test 9: Negative test for search term the punctuation "." **/
/** We could choose to check that we get the right number of results. */


const test9result = findSearchTermInBooks(".", twentyLeaguesIn);
 

if (JSON.stringify(twentyLeaguesOut4) === JSON.stringify(test9result)) {
 
   
console.log("PASS: Test 9");
console.log("Received:", test9result);
} else {
 
   
console.log("FAIL: Test 9");
    
console.log("Expected:", twentyLeaguesOut4);
    
console.log("Received:", test9result);

}

/** Test 10: Positive test for search term "darkness" **/
/** We can check that, given a known input, we get a known output. */


const test10result = findSearchTermInBooks("darkness", twentyLeaguesIn);


if (JSON.stringify(twentyLeaguesOut5) === JSON.stringify(test10result)) {
 
   
console.log("PASS: Test 10");


} else {
 
   
console.log("FAIL: Test 10");
    
console.log("Expected:", twentyLeaguesOut5);
    
console.log("Received:", test10result);


}


/** Test 11: Positive test for search term "darkness" **/
/** We could choose to check that we get the right number of results. */


const test11result = findSearchTermInBooks("darkness", twentyLeaguesIn);
 

if (test11result.Results.length == 1) {

    
console.log("PASS: Test 11");


} else {
 
   
console.log("FAIL: Test 11");
   
console.log("Expected:", twentyLeaguesOut5.Results.length);
    
console.log("Received:", test11result.Results.length);


}


/** Test 12: Negative test for search term "the" and an empty book **/
/** We can check that, given a known input, we get a known output. */


const test12result = findSearchTermInBooks("the", twentyLeaguesIn1);


if (JSON.stringify(twentyLeaguesOut6) === JSON.stringify(test12result)) {
 
   
console.log("PASS: Test 12");


console.log("Received:", test12result);

} else {
 
   
console.log("FAIL: Test 12");
    
console.log("Expected:", twentyLeaguesOut6);
    
console.log("Received:", test12result);


}

