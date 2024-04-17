let output = document.getElementById("display")
window.onload = function () {
    output.innerHTML = ""
}


function game() {
    let inp1 = document.getElementById("inp1")
    let input = inp1.value
    let randomNum = (Math.ceil(Math.random()*10))
    let output = document.getElementById("display")
    let math = document.getElementById("answer")
    
    if (input == randomNum) {
        output.innerHTML = "Congratulation you won!"
        math.innerHTML = randomNum
    } else { 
        output.innerHTML = "You lose! Try again later"
        math.innerHTML = randomNum
    }

    console.log(randomNum);
    
}
game()