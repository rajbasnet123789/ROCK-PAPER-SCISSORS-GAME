let playgame = confirm("Shall we play a game or not?");
if (playgame) {
    let userchoice = prompt("Enter what you want to choose: rock, paper, or scissors");
    if (userchoice) {
        let playerone = userchoice.trim().toLowerCase();
        if (playerone === "rock" || playerone === "paper" || playerone === "scissors") {
            let computer = Math.ceil(Math.random() * 3);
            let computer1 = (computer === 1) ? "rock" : (computer === 2) ? "paper" : "scissors";
            switch (playerone) {
                case computer1:
                    alert(`player1 ${playerone}`);
                    alert(`computer ${computer1}`);
                    alert("It's a tie!");
                    break;
                case "rock":
                    if (computer1 === "paper") {
                        alert(`player1 choose ${playerone}`);
                        alert(`computer choose ${computer1}`);
                        alert("You lost!");
                    } else {
                        alert(`player1 choose ${playerone}`);
                        alert(`computer choose ${computer1}`);
                        alert("You win!");
                    }
                    break;
                case "paper":
                    if (computer1 === "scissors") {
                        alert(`player1 choose ${playerone}`);
                        alert(`computer choose ${computer1}`);
                        console.log("You lost!");
                    } else {
                        alert(`player1 choose ${playerone}`);
                        alert(`computer choose ${computer1}`);
                        alert("You win!");
                    }
                    break;
                case "scissors":
                    if (computer1 === "rock") {
                        alert(`player1 choose ${playerone}`);
                        alert(`computer choose ${computer1}`);
                        alert("You lost!");
                    } else {
                        alert(`player1 choose ${playerone}`);
                        alert(`computer choose ${computer1}`);
                        alert("You win!");
                    }
                    break;
            }
            let playagain=confirm("wanna play again?");
            playagain? location.reload():alert("thanks for playing ");
        } else {
            alert("Sorry, I guess you don't want to play.");
        }
    } else {
        alert("Sorry, I guess you don't want to play.");
    }
} else {
    alert("Sorry, I guess you don't want to play.");
}
