        var countDownTimer;
        var timerInterval;
        var arrayOfQuestions = [];
        var gameScore = 0;
        const timePenalty = 30; //time in seconds

        const maxTime = 5 * 60; //time is in seconds
        function setCountDownTimer() {
            countDownTimer = maxTime;
            console.log("countDownTimer: ", countDownTimer);
        }

        //when the person clicks the begin button the timer starts
        //start time
        function startTimer() {
        timerInterval = setInterval(updateTimer, 1000);
        console.log("startTimer: ", timerInterval);
        }

        function updateTimer() {
            console.log("updateTimer: begun");
            countDownTimer--;
            presentTimer();
        }

        function presentTimer() {
            let currentTime = document.getElementById('timer');
            currentTime.innerText = countDownTimer;
        }


        function showScoreBoard() {
            let scoreBoard = document.getElementById('score-board');
            //scoreBoard.classList.toggle('hide', false);
            scoreBoard.classList.remove('hide');
        }

        function presentScore() {
            let currentScore = document.getElementById('score');
            currentScore.innerText = gameScore;
            console.log("presentScore: currentScore", currentScore);
        }

        function hideWelcome () {
            let welcome = document.getElementById('welcome');
            console.log("hideWelcome: welcome", welcome);
            //scoreBoard.classList.toggle('hide', false);
            scoreBoard.classList.add('hide');
        }

        //question is asked
        function SetUpQuestions () {
            console.log("SetUpQuestions started");
            let question1 = {
                id:"quest0",
                question:"To select elements with a specific class: ",
                answer1:" write a semicolon (;) character, followed by",
                answer2:" write a period (.) character, followed by the ",
                answer3:" write a period (.) character",
                nswer4:"write a comma (,) character",
                correctAnswer:2
            };

            let question2 = {
                id:"quest1",
                question:"In CSS, a color can be specified by using a pred",
                answer1:"yes",
                answer2:"no",
                answer3:null,
                answer4:null,
                correctAnswer:1
            };

            arrayOfQuestions.push(question1);
            arrayOfQuestion.push(question2);

            console.log("SetupQuestions arrayOfQuestions: ", arrayOfQuestions);
        }

        function getQuestion(questionId) {
            console.log('getQuestion questionId', questionId);

            let found = false;

            for(let i=0; i<arrayOfquestions.length; i++) {
                if(questionId == arrayOfQuestions[i].id) {
                    prepareQuestionAndAnswers(i);
                }
            }
        }

        function prepareQuestionAndAnswers(questionIndex) {
            let questionSection = document.getElementId('questions');
            let newQuestion = document.createElement('div');
            newQuestion.id = arrayOfQuestions[questionIndex].id;
            newQuestion.innerText = arrayOfQuestions[questionIndex].question;

        }

        if(arrayOfQuestions[questionIndex].answer1) {
            let answer = document.createElement('div');
            answer.innerText = arrayOfQuestions[questionIndex].answer1
            answer.classList.add('answer');
            answer.id = `${arrayOfQuestions[questionIndex].id}_answer1`;
            questionSection.appendChild(answer);
        }
        
        if(arrayOfQuestions[questionIndex].answer2) {
            let answer = document.createElement('div');
            answer.innerText = arrayOfQuestions[questionIndex].answer2
            answer.classList.add('answer');
            answer.id = `${arrayOfQuestions[questionIndex].id}_answer2`;
            questionSection.appendChild(answer);

        function doGame () {
            setCountDownTimer();
            startTimer();
            hideGreeting();
            showScoreBoard();
            presentScore();
            getQuestion('quest0')
        }
          
        //if question is correct next question
        //if question is incorrect time penalty
        //if question is incorrect time penalty
        //if answer is correct show points and then go to the next question