//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//Can the logic be restructured so the '?' check doesn't need repeated? 
var Bob = function() {};

Bob.prototype.hey = function(input) {

if(input == input.toUpperCase()){ //are we yelling?
    
    if(input.replace( /[A-Z]/g, "") == input) { //does input contain only numbers &|| punctuation?
    
        if(input.slice(-1) == "?") { // is input a silly number question?  
            return "Sure.";
        }
        else return "Whatever."; //must be just numbers &|| other chars and not a question.
    }
    
    else return "Whoa, chill out!"
}

if(input.slice(-1) == "?") { //only if the last character is ? do we consider input a question
    return "Sure.";
}

else return "Whatever.";
};

module.exports = Bob;
