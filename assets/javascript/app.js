// array of questions
var questions = {
    q1: [{
        q: "Who was the butler on \"The Fresh Prince of Bel Air?\"",
        a1: "Geoffrey",
        a2: "Bertram",
        a3: "Carlton",
        c: "Geoffrey",
        gif: "https://media3.giphy.com/media/CZoOmrTeIeD6w/giphy.gif"
    }],
    q2: [{
        q: "Which TV show theme song had the following opening line? \"It's a rare condition in this day and age to read any good news on the newspaper page.\"",
        a1: "Boy Meets World",
        a2: "Family Matters",
        a3: "The Nanny",
        c: "Family Matters",
        gif: "https://media.giphy.com/media/a47DWEkcmoP8A/giphy.gif"
    }],
    q3: [{
        q: "Which of the following is NOT considered a grunge band?",
        a1: "Matchbox 20",
        a2: "Nirvana",
        a3: "Pearl Jam",
        c: "Matchbox 20",
        gif: "https://thumbs.gfycat.com/DearFlawedDairycow-small.gif"
    }],
    q4: [{
        q: "What is Bart Simpson's full name?",
        a1: "Bartemius Crouch Simpson",
        a2: "Bartholomew JoJo Simpson",
        a3: "Bart Simpson",
        c: "Bartholomew JoJo Simpson",
        gif: "https://media.giphy.com/media/xT5LMEcHRXKXpIHCCI/giphy.gif"
    }],
    q5: [{
        q: "What game came packaged with a Game Boy?",
        a1: "Donkey Kong",
        a2: "Tetris",
        a3: "Super Mario Bros",
        c: "Tetris",
        gif: "https://i.chzbgr.com/full/6086374912/h18618BDF/"
    }],
    q6: [{
        q: "Which '90s song was ranked the \"No. 1 greatest one-hit wonder of all time\" by VH1?",
        a1: "Macarena",
        a2: "Ice Ice Baby",
        a3: "I'm Too Sexy",
        c: "Macarena",
        gif: "https://media1.tenor.com/images/0c0ca05f3bba9f9899fb921f02f9a43d/tenor.gif?itemid=7369091"
    }],
    q7: [{
        q: "\"Wannabe\" was the Spice Girls' first single. What was the second?",
        a1: "2 Become 1",
        a2: "Say You'll Be There",
        a3: "Who Do You Think You Are",
        c: "Say You'll Be There",
        gif: "https://media.giphy.com/media/YvyuMxuGoUiOs/giphy.gif"
    }],
    q8: [{
        q: "Which was the highest grossing movie of the '90s?",
        a1: "Titanic",
        a2: "Jurassic Park",
        a3: "The Lion King",
        c: "Titanic",
        gif: "https://media.giphy.com/media/XOY5y7YXjTD7q/giphy.gif"
    }],
    q9: [{
        q: "Who sang the \"Friends\" theme song?",
        a1: "Third Eye Blind",
        a2: "The Rembrandts",
        a3: "Gin Blossoms",
        c: "The Rembrandts",
        gif: "https://s4.scoopwhoop.com/anj/ewf/901643154.gif"
    }],
    q10: [{
        q: "What was the name of the pink Mighty Morphin Power Ranger?",
        a1: "Katie",
        a2: "Kimberly",
        a3: "Kacey",
        c: "Kimberly",
        gif: "http://49.media.tumblr.com/ed50e73cd6585756fbef19ef4eaa3d18/tumblr_n8442xy9Av1ro8ysbo2_500.gif"
    }],
    q11: [{
        q: "Which of these Disney films was not released in the 90s?",
        a1: "Toy Story",
        a2: "Aladdin",
        a3: "Oliver And Company",
        c: "Oliver And Company",
        gif: "https://media.giphy.com/media/EwnV1gAap17eU/giphy.gif"
    }],
    q12: [{
        q: "Who was the villain in Batman Returns?",
        a1: "The Joker",
        a2: "Penguin",
        a3: "Mr Freeze",
        c: "Penguin",
        gif: "https://media.giphy.com/media/vrwAg9jj910aI/giphy.gif"
    }],
    q12: [{
        q: "Which of these Jim Carrey films was not released in the 1990s?",
        a1: "The Mask",
        a2: "Liar Liar",
        a3: "Me, Myself And Irene",
        c: "Me, Myself And Irene",
        gif: "https://media.giphy.com/media/JbZDQm5SCYXxm/giphy.gif"
    }],
    q13: [{
        q: "In which kids show did the character Buttercup feature?",
        a1: "Rugrats",
        a2: "Sabrina The Teenage Witch",
        a3: "The Powerpuff Girls",
        c: "The Powerpuff Girls",
        gif: "https://media.giphy.com/media/13vUC3G4F1HUTS/giphy.gif"
    }],
    q14: [{
        q: "Which of the following websites was NOT around in the 1990s?",
        a1: "Amazon",
        a2: "eBay",
        a3: "Facebook",
        c: "Facebook",
        gif: "https://media.giphy.com/media/cPNXOm7ln8HwK7UcbV/giphy.gif"
    }],
    q15: [{
        q: "This natural disaster -- one of the deadliest in a century -- killed at least 140,000 people in April 1991:",
        a1: "Earthquake in Iran",
        a2: "Tropical cyclone in Bangladesh",
        a3: "Hurricane Andrew in Florida",
        c: "Tropical cyclone in Bangladesh",
        gif: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sidr_15nov2007_0930-1500Z_rgb_4k.gif/300px-Sidr_15nov2007_0930-1500Z_rgb_4k.gif"
    }]
};

window.onload = function () {

    // hide everything except for the newGameContainer
    $("#triviaQuestionContainer").hide();
    $("#resultContainer").hide();
    $("#endScreenContainer").hide();
};

$(".newGameButton").click(function () {

    // hide newGameContainer and show the question container
    $("#newGameContainer").hide();
    $("#endScreenContainer").hide();
    $("#triviaQuestionContainer").show(500);

    // start the game
    startGame();
});

// question timer and question interval variables
var qTimer;
var qInterval;

// result timer and result interval variables
var rTimer;
var rInterval;

// question counter
var qc;
// correct question counter
var cqc;
// incorrect question counter
var iqc;

function startGame() {

    // set the question counter to 1 so it begins on question 1
    qc = 1;

    // set correct and incorrect vars in 0
    cqc = 0;
    iqc = 0;

    // run the timer
    runQuestionTimer();
};

function runQuestionTimer() {

    // clear question interval
    clearInterval(qInterval);

    // set the timer for the question on 11 seconds
    qTimer = 11;
    console.log("set value of question timer = 11");

    // show new question
    showQuestion();

    // execute decrementQuestionTimer once every 1000 milliseconds
    qInterval = setInterval(decrementQuestionTimer, 1000);
};

function showQuestion() {

    // using bracket notation
    $("#question").text(questions["q" + qc][0]["q"]);
    $("#a1").text(questions["q" + qc][0]["a1"]);
    $("#a2").text(questions["q" + qc][0]["a2"]);
    $("#a3").text(questions["q" + qc][0]["a3"]);
};

function decrementQuestionTimer() {

    // decrement question timer
    qTimer--;

    // update the time text on the html
    $("#timer").text(qTimer);

    // if question timer is zero
    if (qTimer === 0) {

        // ! if it's zero it means the user didn't click anything

        // add 1 to incorrect counter
        iqc++;

        // set question timer on 11 again so it doesn't show as 0 in the next question
        qTimer = 11;

        // clear question interval
        clearInterval(qInterval);

        // call checkIfCorrect function and send no answer as a parameter
        checkIfCorrect("n/a");

        // hide the question container and show the result container
        $("#triviaQuestionContainer").hide();
        $("#resultContainer").show(500);

        // then run the result timer
        runResultTimer();
    }
};

$(".answer").click(function () {

    // clears the question interval
    clearInterval(qInterval);

    // get the user's choice text
    var a = $(this).text();

    // checks if the answer is correct and set values accordingly
    checkIfCorrect(a);

    // hide the question container and show the result container
    $("#triviaQuestionContainer").hide();
    $("#resultContainer").show(500);

    // run result timer
    runResultTimer();
});

function checkIfCorrect(a) {

    // show gif
    $("#gif").attr("src", questions["q" + qc][0]["gif"]);

    // if a is n/a means user didn't click anything
    if (a === "n/a") {

        $('#resultContainer').css("background-color", "darkkhaki");
        $("#coimsg").text("Hey, you forgot to choose an answer...");
        $("#coimsg2").text("Why you do that? (゜-゜)");
    }
    else {

        // if the choice equals to the correct answer
        if (a === questions["q" + qc][0]["c"]) {

            // set bg color to yellowgreen, show correct answer texct and empty the msg2
            $('#resultContainer').css("background-color", "yellowgreen");
            $("#coimsg").text("Yay! Correct answer 〔´∇｀〕");
            $("#coimsg2").text("");

            // add 1 to the correct question counter
            cqc++;
        }
        else {

            // set bg color to yellowgreen, show correct answer texct and empty the msg2
            $('#resultContainer').css("background-color", "darkred");
            $("#coimsg").text("Nope! （・∩・）");
            $("#coimsg2").text("(Correct answer was " + questions["q" + qc][0]["c"] + " btw)");

            // add 1 to the incorrect question counter
            iqc++;
        }
    }
};

function runResultTimer() {

    // clear result interval
    clearInterval(rInterval);

    // set the result timer to 6 seconds
    rTimer = 10;
    console.log("set value of result timer = 6");

    // execute decrementResultTimer once every 1000 milliseconds
    rInterval = setInterval(decrementResultTimer, 1000);
};

function decrementResultTimer() {

    // decrement result timer
    rTimer--;
    console.log("result timer: " + rTimer);

    // update the html with counter of next question
    $("#coimsg3").text("Next question coming up in: " + rTimer);

    // if result timer is zero
    if (rTimer === 0) {

        // if the question counter is less than the amount of questions in the array
        if (qc < Object.keys(questions).length) {

            // then increase the question counter
            qc++;

            // clear result interval
            clearInterval(rInterval);

            // hide the result container and show the question container
            $("#resultContainer").hide();
            $("#triviaQuestionContainer").show(500);

            //and run the question timer
            runQuestionTimer();
        }
        else {

            // ! if not it means game over

            //clear result interval
            clearInterval(rInterval);

            // finally show the end screen
            showEndScreen();
        }
    }
};

function showEndScreen() {

    // hide question and result container
    $("#triviaQuestionContainer").hide();
    $("#resultContainer").hide();

    $("#correctA").text("Correct answers: " + cqc);
    $("#incorrectA").text("Incorrect answers: " + iqc);

    // end screen container
    $("#endScreenContainer").show(500);
};