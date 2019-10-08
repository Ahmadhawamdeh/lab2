'use strict';
var user = prompt(" whats you name ? ")
alert("Welcome You Here " + user + " I wish You Enjoy Knowing Me..")
var counter = 0;
var questions = [
    ["Do you know what my name is?",
        " Great ",
        " It's OK.. Actually my name is ahmad",
    ],
    [
        "Now tell me do you know my address?",
        " Great Job..",
        " ooh !! why not?",
    ],
    [
        " now Tell me do you know what my studies are?",
        "  Yes Great Job..",
        " hmmmm , its oki ",
    ],
    [
        " do you know what my fav sport ?",
        " yes you are very good ",
        " oki ,, t love a boxing ",
    ],
    [
        "Do you know how old I am?",
        " Great You are amazing ",
        " oki but why not? ",
    ]
]
for (var i = 0; i < 5; i++) {
    var exactArray = questions[i];
    var promptQuestion = exactArray[0];
    var posetiveReply = exactArray[1];
    var negativeReply = exactArray[2];
    var defultReply = exactArray[3];
    var name = prompt(promptQuestion);
    promptQuestion = promptQuestion.toLowerCase();
    switch (name) {
        case "yes":
        case "y":
           
            alert(posetiveReply);
            counter = counter +1;
            break;
        case "no":
        case "n":
            alert(negativeReply);
            break;
        default:
            alert(defultReply);
            break;
    }
}
for (var sum = 0; sum < 4; sum++) {
    var smoke = prompt("Ok now tell me, how much cigarette I smoke today?")
    if (smoke == 15) {
        alert("Yes exactly!");
        counter = counter + 1;
        console.log(smoke);
        break;
    } else if (smoke > 15) {
        alert("mmm , not Daily");
      
        console.log(smoke);
    } else if (smoke < 15) {
        alert(" too low add A little");
        console.log(smoke);
    }
}
alert('i am smoke 15 segrit evry day')
var tourism = ["dubai", 'petra', 'sharm', 'taba', 'Dead Sea', 'paris'];
for (var times = 0; times < 5; times++) {
    var play = prompt("I like 7 different touristic places .. Can you guess one of them?");
    switch (play) {
        case tourism[0]:
        case tourism[1]:
        case tourism[2]:
        case tourism[3]:
        case tourism[4]:
        case tourism[5]:

            alert(" You are right.. My fav touristic places are:- dubai , petra , sharm , taba , Dead Sea , paris , roma ");
            counter = counter + 1;
           
            console.log(play);

            times = 5;

            break;

        default:

            alert("You are wrong .. plz Try it again ")
            console.log(play);
            break;
    }


}
alert(" Your points are " + counter)
alert("Thanks for being here " + user);