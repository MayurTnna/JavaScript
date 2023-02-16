let number = Math.floor((Math.random() * 100) + 1);
console.log(number)
console.log("Hello guys Welcome!")
console.log("Just guess a number from 1 to 100 and win a huge according to your guessing score! ")
let chance = 0;
let guess = prompt("Guess any number")
++chance;



do {
    guess = Number.parseInt(guess);

    if (guess > number) {
        console.log("sorry it's incorrect guess, its greater than actual number")
        guess = prompt("Guess any number")
        ++chance;
        guess = Number.parseInt(guess);
        continue
    } else if (guess < number) {
        console.log("sorry it's incorrect guess, its lesser than actual number")
        console.log("sorry it's incorrect guess, its greater than actual number")
        guess = prompt("Guess any number")
        ++chance;
        continue
    }
} while (guess != number)

console.log("Congratulations you have guessed the right number and your guessing score is" + chance)




