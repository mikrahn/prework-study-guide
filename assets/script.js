<<<<<<< HEAD
<<<<<<< HEAD
/* var topic = "Something";

if (topic === "HTML") {
    console.log("Let's study HTML!");
} else if (topic === "CSS") {
    console.log("Let's study CSS!")
} else if (topic === "Git") {
    console.log("Let's study Git!")
} else if (topic === "JavaScript") {
    console.log("Let's study JavaScript!")
} else {
    console.log("Please try again!")
}

*/


// var shapes = ["Triangle", "Square", "Pentagon", "Circle"];

// console.log(shapes[3])


var topics = ["HTML", "CSS", "Git", "JavaScript"]

for (topic = 0; topic < topics.length; topic++) {
    console.log(topics[topic])
=======
=======
>>>>>>> bdd70eeea1938cc96e1f6e97227831ee63e87693
var topics = ["HTML", "CSS", "Git", "JavaScript"]

var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
<<<<<<< HEAD
>>>>>>> bdd70eeea1938cc96e1f6e97227831ee63e87693
=======
>>>>>>> bdd70eeea1938cc96e1f6e97227831ee63e87693
}




<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> bdd70eeea1938cc96e1f6e97227831ee63e87693
function selectTopic() {
    if (randomTopic === "HTML") {
        console.log("Let's study HTML!");
    } else if (randomTopic === "CSS") {
        console.log("Let's study CSS!")
    } else if (randomTopic === "Git") {
        console.log("Let's study Git!")
    } else if (randomTopic === "JavaScript") {
        console.log("Let's study JavaScript!")
    } else {
        console.log("Please try again!")
    }

}


console.log('Here are the topics we learned through Prework:');
listTopics()

console.log('Which topic should we study first?');
<<<<<<< HEAD
selectTopic()
>>>>>>> bdd70eeea1938cc96e1f6e97227831ee63e87693
=======
selectTopic()
>>>>>>> bdd70eeea1938cc96e1f6e97227831ee63e87693
