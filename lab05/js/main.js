//function max() that takes two numbers as arguments and returns the largest of them
function max(a, b) {
    if (a >= b) {
        return a;
    }
    else {
        return b;
    }
}

//function max() that takes two numbers as arguments and returns the largest of them
function maxOfThree(a,b,c) {
    return max(max(a, b), c);
}

//function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(c) {
    var result = false;
    if (c.length == 1) {
        if(c == "A" || c == "E" || c == "I" || c == "O" || c == "U" ) {
            result = true;
        }
    }
    return result;
}


//function sum() that sums all the numbers in an array of numbers.
function sum_loop(arr) {
    let result = 0;
    for(let i=0; i<arr.length;i++) {
        result += arr[i];
    }
    return result;
}
//Sum using Reduce
function sum(arr){
    return arr.reduce((x, y) => x + y);
}
//function multiply() that multiplies (respectively) all the numbers in an array of numbers.
function multiply_loop (arr){
    if (arr.length == 0) return 0;
    let result = 1;
    for(let i=0; i<arr.length;i++) {
        result *= arr[i];
    }
    return result;
}
//Multiply using Reduce
function multiply (arr){
    return arr.reduce((x, y) => x * y);
}


//function reverse() that computes the reversal of a string
function reverse_old(str) {
    const splitString = str.split(""); 
    const reverseArray = splitString.reverse(); 
    const joinArray = reverseArray.join(""); 
    return joinArray;
}
function reverse(str){
    return str.split("").reduce((rev, char)=> char + rev, ''); 
}
//function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(arr) {
    if (arr.length > 0) {
        const longest = arr.sort(function (a, b) { return b.length - a.length; })[0];
        return longest.length;
    }
    return null;
}


//filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i
function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

//
function jsSampleInSlide26() {
    //functional programming: map, filter, reduce can replace many loops
    const a = [1,3,5,3,3];
    //translate/map all elements in an array to another set of values
    const b = a.map(function(elem, i, array) {
        return elem * 10;
    })// [10,30,50,30,30]

    //select elements based on a condition
    const c = a.filter(function(elem, i, array){
        return elem === 3;
    });//[3,3,3]
    
    return a.concat(b).concat(c);
}

function myFunctionTest(expected, func) {
    const res = func.call();
    let isEqual = false;
    if (!Array.isArray(expected)) {
        isEqual = expected === res;
    } 
    else {
        isEqual = compareObjects(expected, res);
    }
    
    if (isEqual) {
        return "TEST SUCCEEDED";
    } 
    else {
        //console.assert(false, func, res)
        return "TEST FAILED." + "  Expected " + expected + " found " + res;
    } 
}

function evaluateFunction(expected, func) {
    try {
        const res = func.call();
        let isEqual = (res+"") === (expected +"");
    
        if (isEqual) {
            return "TEST SUCCEEDED";
        } 
        else {
            //console.assert(false, func, res)
            return "TEST FAILED." + "  Expected " + expected + " found " + res;
        } 
    }
    catch(err) {
        return err.message;
    }
    
}

function compareObjects(arr1,arr2){
    if(!arr1  || !arr2) return false;
    if(arr1.length  != arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            console.log(arr1[i]);
            console.log(arr2[i]);
            return false;
        }
    }

    return true;
 }

function testAllMethods () {
    //max function test
    console.log("Expected output of max(5, 15) is 15 " +
                myFunctionTest(15, function(){return max( 5, 15); } )
                );

    //maxOfthree function test
    console.log("Expected output of maxOfThree(1, 5, 12) is 12 " +
                myFunctionTest(12, function(){return maxOfThree(1, 5, 12); } )
                );
    
    console.log("//Assump the test fail to see how it looks...." + 
                    "\nExpected output of maxOfThree(9, 14, 21) is 21 " +
                myFunctionTest(14, function(){return maxOfThree( 9, 14, 21); } )
                );

    //isVowel function test
    console.log("Expected output of isVowel('A') is true " +
            myFunctionTest(true, function(){return isVowel('A'); } )
            );

    console.log("//Assump the test fail to see how it looks...." +
                "Expected output of isVowel('T') is false " +
            myFunctionTest(false, function(){return isVowel('T'); } )
            );

    //sum function test
    console.log("Expected output of sum([1,2,3,4]) is 10 " +
            myFunctionTest(10, function(){return sum([1,2,3,4]); } )
            );

    console.log("Expected output of sum([2,5,6,11]) is 24 " +
            myFunctionTest(24, function(){return sum([2,5,6,11]); } )
            );

    //multiply function test
    console.log("Expected output of multiply([1,2,3,4]) is 24 " +
            myFunctionTest(24, function(){return multiply([1,2,3,4]); } )
            );

    //reverse function test
    console.log("Expected output of reverse(\"wap\") is paw " +
            myFunctionTest("paw", function(){return reverse("paw"); } )
            );

    //findLongestWord function test
    console.log("Expected output of findLongestWord([a,hello,wap,html,javascript]) is 10 " +
            myFunctionTest(10, function(){return findLongestWord(["a","hello","wap","html","javascript"]); } )
            );

    //filterLongWords function test
    console.log("Expected output of filterLongWords([a,hello,wap,html,javascript], 4) is [hello, javascript] " +
            myFunctionTest(["hello","javascript"], function(){return filterLongWords(["a","hello","wap","html","javascript"], 4); } )
            );

            
}
function test() {
    const command = document.getElementById("command").value;
    const expected = document.getElementById("expectedResult").value;
    let a = eval(command);
    
    document.getElementById("result").innerHTML = ("Expected output of " + command + " is " + expected + ". " + 
    evaluateFunction(expected, function(){return eval(command); } )
    );
}

function reset() {
    console.log('a');
    document.getElementById("command").value = "";
    document.getElementById("expectedResult").value = "";
    document.getElementById("result").innerHTML = "";
}

test();
testAllMethods();

