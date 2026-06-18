// if else elseif 
// switch case
// early return pattern
/*
switch (3) {
    case 1 :
        console.log("one");
        break;
    case 2 :
        console.log("two");
        break;
    case 3 :
        console.log("three");
        break;
    default:
} */
// student grade
function getgrade(score ) {
    if (score <=0){
        return "invalid score";

    }
    else if (score >= 0 && score <= 33) {
        return "F";
    }
    else if (score > 33 && score <= 66) {
        return "C";
    }
    else if (score > 66 && score <= 89) {
        return "B";
    }
    else if (score > 89 && score <= 100) {
        return "A";
    }
    else {
        return "invalid score";
    }

}
console.log(getgrade(85));


// rock paper scissors
function rps(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "draw";
    }
    else if (userChoice === "rock" && computerChoice === "scissors") {
        return "user wins";
    }
    else if (userChoice === "paper" && computerChoice === "rock") {
        return "user wins";
    }
    else if (userChoice === "scissors" && computerChoice === "paper") {
        return "user wins";
    }
    else {
        return "computer wins";
    }       
    console.log(rps("rock", "scissors"));
