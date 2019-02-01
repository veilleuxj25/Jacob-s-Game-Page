    function playRPS(){
        var user = document.getElementById("userInput");
        var newInput = user.value.toLowerCase();
            document.getElementById("userOutput").innerHTML = "User chose " + newInput;
        var computerInput = computer();
        document.getElementById("computerOutput").innerHTML = "Computer chose " + computerInput;
        if (newInput == "rock" && computerInput == "rock"){
            document.getElementById("rpsOutput").innerHTML = "Tie!";
        }
        else if (newInput == "rock" && computerInput == "scissors"){
            document.getElementById("rpsOutput").innerHTML = "You Win!";
        }
        else if (newInput == "rock" && computerInput == "paper"){
            document.getElementById("rpsOutput").innerHTML = "You Lose! Computer Wins!";
        }
        else if (newInput == "paper" && computerInput == "rock"){
            document.getElementById("rpsOutput").innerHTML = "You Win!";
        }
        else if (newInput == "paper" && computerInput == "paper"){
            document.getElementById("rpsOutput").innerHTML = "Tie!";
        }
        else if (newInput == "paper" && computerInput == "scissors"){
            document.getElementById("rpsOutput").innerHTML = "You Lose! Computer Wins!";
        }
        else if (newInput == "scissors" && computerInput == "rock"){
            document.getElementById("rpsOutput").innerHTML = "You Lose! Computer Wins!";
        }
        else if (newInput == "scissors" && computerInput == "paper"){
            document.getElementById("rpsOutput").innerHTML = "You Win!";
        }
        else{
            document.getElementById("rpsOutput").innerHTML = "Tie!";
        }
}
    function computer()
    {
        var compInput = Math.floor(Math.random() * 3)+1;
        if (compInput == 1){
            return "rock";
    }
        else if(compInput == 2){
            return "paper";
    }
        else{
            return "scissors";
    }
}
