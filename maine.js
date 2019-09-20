let questionsOld = [
    {
        question: 'Why does Cain kill his brother Abel?',
        answers: [
            'God told him to', 
            'Abel was getting the inheritance', 
            'The angel said so', 
            'God was more pleased by Abel\'s sacrifice than by Cain\'s'
        ],
        rightAnswer: 'God was more pleased by Abel\'s sacrifice than by Cain\'s'
        
    }
];

console.log

let quest = document.getElementById("questions")
let h1 = document.createElement("P")
h1.innerHTML = questionsOld[0].question;
        quest.appendChild(h1)


 let button1 = document.getElementsByClassName("button1");
 let button2 = document.getElementsByClassName("button2");
 let button3 = document.getElementsByClassName("button3");
 let button4 = document.getElementsByClassName("button4");
 let buttonArray = [button1, button2, button3, button4];


//  for (let index = 0; index < questionsOld[0].answers.length; index++) {
    buttonArray.push(questionsOld[0].answers); 
    console.log(buttonArray); 
 
