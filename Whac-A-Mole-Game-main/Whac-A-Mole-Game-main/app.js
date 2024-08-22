            const squares = document.querySelectorAll('.square');
            const mole = document.querySelector('.mole');
            const timeLeft = document.querySelector('#time-left');
            const scoreDisplay = document.querySelector('#score');
            const startButton = document.querySelector('#start-btn');
            const stopButton = document.querySelector('#stop-btn');
            const resetButton = document.querySelector('#reset-btn');

            let result = 0;
        let hitPosition;
        let currentTime = 60;
         let timerId = null;
         let gameStarted = false;

            function randomSquare() {
                squares.forEach(square => {
                    square.classList.remove('mole');
                });

            let randomSquare = squares[Math.floor(Math.random() * 9)];
            randomSquare.classList.add('mole');

            hitPosition = randomSquare.id;
                }

                squares.forEach(square => {
                square.addEventListener('mousedown', () => {
                    if (gameStarted && square.id == hitPosition) {
                    result++;
                    scoreDisplay.textContent = result;
                    hitPosition = null;
                    }
            });
            });

            function moveMole() {
            timerId = setInterval(randomSquare, 1000);
            }

            function startGame() {
            if (!gameStarted) {
                startButton.disabled = true;
                stopButton.disabled = false;
                resetButton.disabled = true;
                moveMole();
                countDown();
                gameStarted = true;
            }
            }

            function stopGame() {
            clearInterval(timerId);
            clearInterval(countDownTimerId);
            alert('GAME STOPPED! Your final score is ' + result);
            gameStarted = false;
            startButton.disabled = false;
            stopButton.disabled = true;
            resetButton.disabled = false;
            }

            function resetGame() {
            clearInterval(timerId);
            clearInterval(countDownTimerId);
            result = 0;
            scoreDisplay.textContent = result;
            currentTime = 60;
            timeLeft.textContent = currentTime;
            gameStarted = false;
            startButton.disabled = false;
            stopButton.disabled = true;
            resetButton.disabled = false;
            }

            function countDown() {
            currentTime--;
            timeLeft.textContent = currentTime;

            if (currentTime === 0) {
                clearInterval(countDownTimerId);
                clearInterval(timerId);
                alert('GAME OVER! Your final score is ' + result);
                gameStarted = false;
                startButton.disabled = false;
                stopButton.disabled = true;
                resetButton.disabled = false;
                currentTime = 60;
                timeLeft.textContent = currentTime;
            }
            else {
                countDownTimerId = setTimeout(countDown, 1000);
            }
            }

            let countDownTimerId;

            startButton.addEventListener('click', startGame);
            stopButton.addEventListener('click', stopGame);
            resetButton.addEventListener('click', resetGame);
