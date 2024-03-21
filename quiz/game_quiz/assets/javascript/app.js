/* First step here is to create the ready master function that loads once DOM is ready */
$(document).ready(function () {
    //Global Variables Here
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //Object that holds questions, answers, and correct answer:

    var allQuestions = [
        {
            "№": "1",
            question: "Playstion 5 хэдэн сард гарсан бэ?",
            correctAnswer: "2020 оны 11 сар",
            answers: {
                a: "2020 оны 4 сар",
                b: "2020 оны 9 сар",
                c: "2020 оны 11 сар",
                d: "2020 оны 1 сар"
            }
        },
        {
            "№": "2",
            question: "Хамгийн их борлуулагдаж байсан тоглоом?",
            correctAnswer: "Minecraft",
            answers: {
                a: "Minecraft",
                d: "GTA 5",
                b: "Call of Duty: Modern Warfare",
                c: "Witcher 3"
            }
        },
        {
            "№": "3",
            question: "Хамгийн анхны видио тоглоом? ",
            correctAnswer: "1958",
            answers: {
                a: "1982",
                b: "1969",
                c: "1945",
                d: "1958"
            }
        },
        {
            "№": "4",
            question: "2019 оны Dota 2 The International тэмцээний шагналын сан хэд хүрсэн бэ?",
            correctAnswer: "34 сая $",
            answers: {
                a: "34 сая $",
                b: "29 сая $",
                d: "36 сая $",
                c: "32 сая $"
            }
        },
        {
            "№": "5",
            question: "Dota 2 нийт хэдэн баатартай вэ?",
            correctAnswer: "123",
            answers: {
                a: "111",
                c: "153",
                b: "123",
                d: "122"
            }
        },
        {
            "№": "6",
            question: "Super Smash Bros хэдэн онд гарсан бэ?",
            correctAnswer: "1999",
            answers: {
                a: "1990",
                d: "1991",
                b: "1983",
                c: "1999"
            }
        },
        {
            "№": "7",
            question: "Minecraft дээрх олборлож болдог хамгийн хатуу блок юу вэ?",
            correctAnswer: "Obsidian",
            answers: {
                a: "Diamond Block",
                b: "Obsidian",
                c: "Ender Chest",
                d: "Glass"
            }
        },
        {
            "№": "8",
            question: "Хамгийн их үнэд хүрсэн видео тоглоом?",
            correctAnswer: "Super Mario Bros.",
            answers: {
                a: "Atlantis II",
                b: "GTA V",
                c: "Super Mario Bros.",
                d: "Red Sea Crossing"
            }
        },
        {
            "№": "9",
            question: "Nintendo-гын хамгийн анхны гаргасан консол?",
            correctAnswer: "EVR race",
            answers: {
                a: "EVR race",
                b: "N64",
                c: "SNES",
                d: "NES"
            }
        },
        {
            "№": "10",
            question: "Mario хамгийн анх ямар тоглоом дээр гарч байсан бэ? ",
            correctAnswer: "Donkey Kong",
            answers: {
                a: "Super Mario 64",
                b: "Donkey Kong",
                c: "Super Mario Bros.",
                d: "Paper Mario"
            }
        },
        {
            "№": "11",
            question: "Анхны VR төхөөрөмж хэзээ гарж байсан бэ? ",
            correctAnswer: "1995",
            answers: {
                a: "1995",
                b: "1991",
                c: "1992",
                d: "1994"
            }
        },
        {
            "№": "12",
            question: "Хамгийн их зарагдаж байсан консол аль нь вэ? ",
            correctAnswer: "PlayStation 2",
            answers: {
                a: "XBOX 360",
                b: "PlayStation 4",
                c: "XBOX One",
                d: "PlayStation 2"
            }
        },
        {
            "№": "13",
            question: "Dota 2 хамгийн их skill-тэй баатар?",
            correctAnswer: "Invoker",
            answers: {
                a: "Rubick",
                b: "Lion",
                c: "Leshrac",
                d: "Invoker"
            }
        },

        {
            "№": "14",
            question: "CS GO тоглоом дээр хэдэн буу байдаг вэ?",
            correctAnswer: "34",
            answers: {
                a: "34",
                d: "30",
                b: "31",
                c: "32"
            }
        },
        {
            "№": "15",
            question: "Ямар улс шөнө дунд тоглоом тоглохыг хориглох гэж оролдсон бэ?",
            correctAnswer: "Өмнөд Солонгос",
            answers: {
                a: "Хятад",
                b: "Америк",
                c: "Орос",
                d: "Өмнөд Солонгос"
            }
        },
        {
            "№": "16",
            question: "АНУ-ын аль ерөнхийлөгчөөс Fallout 3 тоглоомын ерөнхийлөгчийн дүрт дуу оруулхыг хүссэн (мөн татгалзсан) вэ?",
            correctAnswer: "Bill Clinton",
            answers: {
                a: "Barack Obama",
                b: "Donald Trump",
                c: "Bill Clinton",
                d: "George Bush"
            }
        },
        {
            "№": "17",
            question: "Дотоод санах ойтой анхны тоглоомын консол юу байсан бэ?",
            correctAnswer: "SEGA Saturn",
            answers: {
                a: "SEGA Saturn",
                b: "PlayStation",
                c: "Nintendo Gameboy",
                d: "Nintendo 64"
            }
        },
        {
            "№": "18",
            question: "Хамгийн анхны Mortal Kombat хэдэн онд гарсан бэ?",
            correctAnswer: "1992",
            answers: {
                a: "1993",
                b: "1991",
                c: "1992",
                d: "1990"
            }
        },
        {
            "№": "19",
            question: "GTA Vice City тоглоомын гол дүрийн нэр?",
            correctAnswer: "Tommy Vercetti",
            answers: {
                a: "Carl Johnson",
                b: "Micheal De Santa",
                c: "Tommy Vercetti",
                d: "Claude"
            }
        },
        {
            "№": "20",
            question: "Видео тоглоомоос сэдэвлэсэн хамгийн их ашиг олсон кино юу вэ?",
            correctAnswer: "Detective Pikachu",
            answers: {
                a: "Detective Pikachu",
                b: "Warcraft",
                c: "Assassin's Creed",
                d: "Tomb Raider"
            }
        },
        {
            "№": "21",
            question: "'Doom' тоглоомыг бүтээхэд ямар киноны франчайз нөлөөлсөн бэ?",
            correctAnswer: "Aliens",
            answers: {
                a: "Dawn of the Dead",
                b: "Star Wars",
                c: "Aliens",
                d: "The Thing"
            }
        },
        {
            "№": "22",
            question: "Playstation анх хаана үйлдвэрлэгдсэн бэ?",
            correctAnswer: "Япон",
            answers: {
                a: "Америк",
                b: "Хятад",
                c: "Орос",
                d: "Япон"
            }
        },
        {
            "№": "23",
            question: "Half Life тоглоомын гол дүр?",
            correctAnswer: "Gordon Freeman",
            answers: {
                a: "Gordon Freeman",
                b: "Alyx Vance",
                c: "Geralt of Rivia",
                d: "Carl Johnson"
            }
        },
        {
            "№": "24",
            question: "Анхны нислэгийн симулятор тоглоомыг хэн гаргасан бэ?",
            correctAnswer: "Microsoft",
            answers: {
                a: "Sony",
                b: "Nintendo",
                c: "Microsoft",
                d: "SEGA"
            }
        },
        {
            "№": "25",
            question: "Halo-ийн Master Chief-ийн нэр ?",
            correctAnswer: "John",
            answers: {
                a: "John",
                b: "Tom",
                c: "Bob",
                d: "Ralph"
            }
        },
        {
            "№": "26",
            question: "Metal Gear Series-ийг бүтээсэн хүний нэр хэн бэ?",
            correctAnswer: "Hideo Kojima",
            answers: {
                a: "Hidetaka Miyazaki",
                b: "Shigeru Miyamoto",
                c: "Hideo Kojima",
                d: "Masahiro Sakurai"
            }
        },
        {
            "№": "27",
            question: "Elder Scrolls цуврал дээр гүрвэлэн хүмүүсийн төрлийг юу гэдэг вэ?",
            correctAnswer: "Argonian",
            answers: {
                a: "Redguard",
                b: "Argonian",
                c: "Nord",
                d: "Khajiit"
            }
        },
        {
            "№": "28",
            question: "Эндээс хамгийн бага үнэлгээтэй Call of Duty аль нь вэ?",
            correctAnswer: "Call of Duty: Ghosts",
            answers: {
                a: "Call of Duty: Modern Warfare 3",
                b: "Call of Duty: Infinte Warfare",
                c: "Call of Duty: Ghosts",
                d: "Call of Duty: Advanced Warfare"
            }
        },
        {
            "№": "29",
            question: "Call of Duty цуврал хэдэн оноос эхэлж жил болгон гардаг болсон бэ?",
            correctAnswer: "2005",
            answers: {
                a: "2005",
                b: "2004",
                c: "2006",
                d: "2007"
            }
        },
        {
            "№": "30",
            question: "Half-Life тоглоомыг бүтээгч хэн бэ?",
            correctAnswer: "Gabe Newell",
            answers: {
                a: "Hideo Kojima",
                b: "John Romero",
                c: "John Cormack",
                d: "Gabe Newell"
            }
        },

        

        
    ]

    //This will hold the new shuffled questions
    var shuffledQuestions = [];
    //This will hold the number of seconds on timer
    var timeRemaining;
    //This will hold the timer interval in milliseconds
    var intervalId = setInterval(countdown, 1000);
    //This will hold the number of correct questions answered by user
    var qCorrect = 0;
    //This will hold the number of wrong questions answered by user
    var qWrong = 0;
    //This will hold the number of questions not answered by user
    var qUnanswered = 0;
    //This will hold the index number user is on
    var indexNumber;



    //Functions Here
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //This function will start the game by displaying the timer, 1st shuffled question, answer buttons, and hide the start button
    function startGame() {
        //This on click event is for the user to click start button
        $("#startButton").click(function () {
            //When user hits start indexNumber will be set to 0, pull the first question out of shuffledQuestions
            indexNumber = 0;
            //When user hits start, timer will be set to 30 seconds
            timeRemaining = 20;
            //This function call will display timer and start counting down
            countdown();
            //This line makes the form show on the DOM
            $("#questionForm").show();
            //This line hides the start button
            $("#startButton").hide();
            //This calls the shuffle function to shuffle allQuestions object
            shuffle(allQuestions);
            //This puts the shuffled allQuestions into a new variable
            shuffledQuestions.push(allQuestions);
            //This updates the HTML with the first shuffled Question
            $("#question").text(shuffledQuestions[0][indexNumber].question);
            //This will update the HTML with the answer choices of first shuffled question
            $("#answerA").text(shuffledQuestions[0][indexNumber].answers.a);
            $("#answerB").text(shuffledQuestions[0][indexNumber].answers.b);
            $("#answerC").text(shuffledQuestions[0][indexNumber].answers.c);
            $("#answerD").text(shuffledQuestions[0][indexNumber].answers.d);
        });
    }

    //This function shuffles an array whenever it is called and given the parameter array
    function shuffle(array) {
        //Local variable created here
        var counter = array.length, temp, index;
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * counter);
            // Decrease counter by 1
            counter--;
            // And swap the last element with it
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

    //This function is for making the timer run down from 30 seconds
    function countdown() {
        if (timeRemaining === 0) {
            //This line stops the counter
            clearTimeout(intervalId);
            //This line will execute something else whenever time runs out
            console.log("Time is UP!");
            //This line adds 1 to the qUnanswered variable
            qUnanswered++;
            //This line will add 1 to the indexNumber variable if timer hits 0
            indexNumber++;
            //This line will call the nextInLine function
            nextInLine();
        } else {
            //This line updates HTML with the ticking counter
            $("#timer").html("Хугацаа: " + timeRemaining);
            //This line decreases the counter by one second
            timeRemaining--;
        }
    }


    //This function will hold the user's input to the question, check's wether wrong or right, adds to counter
    function userAnswer() {
        //This on click event recognizes user input A
        $("#answerA").click(function () {
            if (shuffledQuestions[0][indexNumber].answers.a === shuffledQuestions[0][indexNumber].correctAnswer) {
                //This adds 1 to the qCorrect variable
                qCorrect++;
                //This line will add 1 to the indexNumber if correct
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            } else {
                qWrong++;
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            }
        });
        //This on click event recognizes user input B
        $("#answerB").click(function () {
            if (shuffledQuestions[0][indexNumber].answers.b === shuffledQuestions[0][indexNumber].correctAnswer) {
                //This adds 1 to the qCorrect variable
                qCorrect++;
                //This line will add 1 to the indexNumber if correct
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            } else {
                //This adds 1 to the qWrong variable
                qWrong++;
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            }
        });
        //This on click event recognizes user input C
        $("#answerC").click(function () {
            if (shuffledQuestions[0][indexNumber].answers.c === shuffledQuestions[0][indexNumber].correctAnswer) {
                //This adds 1 to the qCorrect variable
                qCorrect++;
                //This line will add 1 to the indexNumber if correct
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            } else {
                //This adds 1 to the qWrong variable
                qWrong++;
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            }
        });
        //This on click event recognizes user input D
        $("#answerD").click(function () {
            if (shuffledQuestions[0][indexNumber].answers.d === shuffledQuestions[0][indexNumber].correctAnswer) {
                //This adds 1 to the qCorrect variable
                qCorrect++;
                //This line will add 1 to the indexNumber if correct
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            } else {
                //This adds 1 to the qWrong variable
                qWrong++;
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            }
        });

    }

    //This function will run after time expires or user selects right or wrong answer and pull the next question
    function nextInLine() {
        if (indexNumber === 8) {
            //This line will clear the interval timer
            clearTimeout(intervalId);
            //This line will hide the questions container
            $("#questionForm").hide();
            //This line will show the counters container
            $("#counterForm").show();
            //This line will display users correct questions number
            $("#qCorrect").html("Зөв хариулсан: " + qCorrect);
            //This line will display users wrong questions number
            $("#qWrong").html("Буруу: " + qWrong);
            //This line will display users unasnwered questions number
            $("#qUnanswered").html("Хариулаагүй: " + qUnanswered);
            //This line will show the reset button
            $("#resetButton").show();
        } else {

            //Will need to set a new interval for the timer
            intervalId = setInterval(countdown, 1000);
            //Time remaining will need to be reset again
            timeRemaining = 20;
            //This function call will redisplay counter and start counting down
            countdown();
            //This updates the HTML with the next indexNumber shuffled Question
            $("#question").text(shuffledQuestions[0][indexNumber].question);
            //This will update the HTML with the answer choices of the indexNumber shuffled question
            $("#answerA").text(shuffledQuestions[0][indexNumber].answers.a);
            $("#answerB").text(shuffledQuestions[0][indexNumber].answers.b);
            $("#answerC").text(shuffledQuestions[0][indexNumber].answers.c);
            $("#answerD").text(shuffledQuestions[0][indexNumber].answers.d);
        }
    }

    //This function will run if the user clicks the reset button at the end
    function resetGame() {
        $("#resetButton").click(function () {
            //When user hits reset button indexNumber will be set to 0, pull the first question out of shuffledQuestions
            indexNumber = 0;
            //When user hits reset, timer will be set to 30 seconds again
            timeRemaining = 20;
            //This will reset correct back to zero
            qCorrect = 0;
            //This will reset wrong back to zero
            qWrong = 0;
            //This will reset unasnwered back to zero
            qUnanswered = 0;
            //This function call will display timer and start counting down
            countdown();
            //This line makes the form show on the DOM
            $("#questionForm").show();
            //This will reset the timer interval in milliseconds
            intervalId = setInterval(countdown, 1000);
            //This line will hide the reset button
            $("#resetButton").hide();
            //This line will hide the counter form again
            $("#counterForm").hide();
            //This calls the shuffle function to shuffle allQuestions object
            shuffle(allQuestions);
            //This puts the shuffled allQuestions into the shuffledQuestions variable
            shuffledQuestions.push(allQuestions);
            //This updates the HTML with the first shuffled Question
            $("#question").text(shuffledQuestions[0][indexNumber].question);
            //This will update the HTML with the answer choices of first shuffled question
            $("#answerA").text(shuffledQuestions[0][indexNumber].answers.a);
            $("#answerB").text(shuffledQuestions[0][indexNumber].answers.b);
            $("#answerC").text(shuffledQuestions[0][indexNumber].answers.c);
            $("#answerD").text(shuffledQuestions[0][indexNumber].answers.d);
        });
    }

    //Main Process Executes Here
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // Call start game function to make it active, this will only run once unless user refreshes page
    startGame();

    //Call user answer function to make it active
    userAnswer();

    //Call reset game function to make it active, this will run multiple times (depending on how many times user re plays)
    resetGame();


});
