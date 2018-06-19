
var random_number;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function () {

    $(".crystals").empty();

    var images=[
        'https://vignette.wikia.nocookie.net/mgefanon/images/6/69/Kinetic_Crystal.jpg/revision/latest?cb=20150409231719',

        'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642',
    

        'https://i.pinimg.com/736x/b8/c4/48/b8c448228be27466a76e2fe790d3df3f--gemstones-rocks.jpg',

        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0IQm1Rcmmq9jzFq6lqI_uDntMIn87fNI6s4Qy-xy-XVL6ieDeA'
    ];
    random_number = Math.floor(Math.random() * 69) + 30;



    $("#result").html('Random Result:' + random_number);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random);


        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        crystal.css({
                "background-image":"url(" +images[i] + ")",
                "background-size":"cover"
                
            });
    

        $(".crystals").append(crystal);


    }

    $("#previous").html("Total Score:" +previous);

}

    

resetAndStart();



$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score:"+ previous);

    console.log(previous);


    if (previous > random_number) {
        lost++;

        $("#lost").html("You lost" + lost);
        previous = 0;

          resetAndStart();

    }
    else if (previous === random_number) {
        win++;

        $("#win").html("You win:"+ win);
        previous = 0;


        resetAndStart();
    }


});

// speudo coding



// a game with 4 crystal and random result
// Every crystal needs to have a random number between 1-12
// A new random number should be generate every single time we win or lost
// to those 4 crystals
// When clicking any Crystal, it should be adding with the previous result
// Untill it equals to the total score
// If it is greater than the random result, we decrement a lost counter
// if it is equal, Then we increment a win counter