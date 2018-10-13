$(document).ready(function () {

    // Make our variables global to the runtime of our application
   
    var result = 0;
    var wins = 0;
    var losses = 0;
   

    $("#loseMessage").hide();
    $("#winMessage").hide();




    // Use a function to initialize our calculator.
    // This way when the user hits clear, we can guarantee a reset of the app.
    function initializeCalculator() {
        firstCandy = Math.floor((Math.random() * 12) + 1);
        secondCandy = Math.floor((Math.random() * 12) + 1);
        thirdCandy = Math.floor((Math.random() * 12) + 1);
        fourthCandy = Math.floor((Math.random() * 12) +1);
        allowance = Math.floor((Math.random() * 120) + 19);

        $("#allowance").text(allowance);
        result = 0;

        console.log(firstCandy, secondCandy, thirdCandy, fourthCandy);

        // operator = "";
        // isOperatorChosen = false;
        // isCalculated = false;

        // $("#first-number, #second-number, #operator, #result").empty();

    }

    function winScript () {
        console.log("Winner!");
        initializeCalculator();
        $("#yourTotal").text("");
        wins++;
        $("#wins").text(wins);   
        $("#winMessage").fadeIn(2000);
        $("#winMessage").delay(2000);
        $("#winMessage").fadeOut(2000);
    }

    function loseScript() {
        console.log("loser");
        initializeCalculator();
        $("#yourTotal").text("");
        losses++;
        $("#losses").text(losses);
        $("#loseMessage").fadeIn(2000);
        $("#loseMessage").delay(2000);
        $("#loseMessage").fadeOut(2000);
        
    }

    $("#button-donuts").on("click", function () {
        result += firstCandy;
        $("#yourTotal").text(result);

        if(result === allowance){
            winScript();
        }

        else if (result > allowance) {
            loseScript();
        }
    });

    $("#button-chocolate").on("click", function () {
        result += secondCandy;

        console.log(result);
        $("#yourTotal").text(result);
        if(result === allowance){
            winScript();
            }

        else if (result > allowance) {
        loseScript();
        }
    });

    $("#button-gummyBears").on("click", function () {
        result += thirdCandy;

        console.log(result);
        $("#yourTotal").text(result);
        if(result === allowance){
        winScript();
        }

        else if (result > allowance) {
        loseScript();
        }
    });
    $("#button-popsicle").on("click", function () {
        result += fourthCandy;

        console.log(result);
        $("#yourTotal").text(result);
        if(result === allowance){
        winScript();
        }
        else if (result > allowance) {
        loseScript();
        }
    });


    initializeCalculator();
});