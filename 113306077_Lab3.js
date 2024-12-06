
let targetNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 7;
let minRange = 1;
let maxRange = 100; 
let gameResultDiv = document.getElementById("gameResult");

while (attemptsLeft > 0) {

    let userGuess = window.prompt(
        `請猜一個數字 (範圍：${minRange}~${maxRange})。\n剩餘次數：${attemptsLeft}`
    );


    if (userGuess === null) {
        alert("遊戲已取消！");
        break;
    }

    userGuess = Number(userGuess);

    if (isNaN(userGuess) || userGuess < minRange || userGuess > maxRange) {
        alert("請輸入有效的數字，範圍為 " + minRange + " 到 " + maxRange);
        continue;
    }

    attemptsLeft--;

    if (userGuess === targetNumber) {
        
        alert(`恭喜你猜對了！答案是 ${targetNumber}`);
        gameResultDiv.innerHTML = '<img src="correct.jpg" alt="Correct Answer">';
        break;
    } else if (userGuess < targetNumber) {
        alert("猜的數字太小了！");
        minRange = Math.max(minRange, userGuess + 1); 
    } else {
        alert("猜的數字太大了！");
        maxRange = Math.min(maxRange, userGuess - 1);
    }

    if (attemptsLeft === 0) {
        alert(`很遺憾，你用完了所有次數！正確答案是 ${targetNumber}`);
        gameResultDiv.innerHTML = '<img src="wrong.jpg" alt="Wrong Answer">';
    }
}
