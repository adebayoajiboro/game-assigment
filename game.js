function choosen() {
    let input = document.getElementById("input2")
    let randomNum = (Math.ceil(Math.random() * 9))
    let output = document.getElementById("display")
    let math = document.getElementById("answer")
    console.log(input.value);

    if (input.value == randomNum) {
       
        console.log('win');
        output.innerHTML = "Congratulation you won!"
        math.innerHTML = 'And your anwser is ' + ' ' + '(' + randomNum + ')'
        // math.innerHTML = randomNum
    } else {
        console.log('lose');
        output.innerHTML = "You lose! Try again later"
        math.innerHTML = 'The right anwser is' + ' ' + '(' + randomNum + ')'
        // math.innerHTML = randomNum
    }
    console.log(randomNum);
}

function choose(f) {
    let input = document.getElementById("input2")
    input.value = f.target.value
}

// function doSmth() {
//     // console.log(nnn.target.value);
// }