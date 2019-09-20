// These are where the questions for the Old testament are stored.
let questionsOld = [
    {
        question: 'In what city was Jesus born?',
        answers: [
            'Galilea', 
            'Israel', 
            'Bethlehem', 
            'Jerusalem'
        ],
        rightAnswer: 'Bethlehem'
        
    },
    {
        question: 'What type of insect did John the Batptist eat in the dessert',
        answers: [
            'Pork', 
            'Scorpion', 
            'Locusts', 
            'Snake'
        ], 
        rightAnswer: 'Locusts'
    },
    {
        question: 'Who were the first apostles called to follow Jesus',
        answers: [
            'Peter and Andrew', 
            'Andrew and Judas', 
            'John and Peter', 
            'Peter and Luke'
        ],
        rightAnswer: 'Peter and Andrew'
    },
    {
        question: 'How many people did Jesus feed with five loaves of bread and two fish',
        answers: [
            'About 500', 
            'About 100', 
            'About 1000', 
            'About 5000'
        ],
        rightAnswer: 'About 5000'
    },
    {
        question: 'After Jesus was arrested, which apostle disowned him three times?',
        answers: [
            'John', 
            'Judas', 
            'Peter', 
            'Luke'
        ],
        rightAnswer: 'Peter'
    },
    {
        question: 'Who recognized Jesus as the Messiah when he was presented at the Temple as a baby?',
        answers: [
            'Maria', 
            'John', 
            'Simeon', 
            'Pharaoh'
        ],
        rightAnswer: 'Simeon'
    },
    {
        question: 'What is the shortest book in the New Testament?',
        answers: [
            'Chronicles', 
            'Revelation', 
            '2 John', 
            '1 Chronicles'
        ],
        rightAnswer: '2 John'
    },
    {
        question: 'To what city was Saul traveling when he encountered a great and blinding light?',
        answers: [
            'Rome', 
            'Syria', 
            'Jerusalem',
            'Damascus'
        ],
        rightAnswer: 'Damascus'
    },
    {
        question: 'What does Simon Peter do for a living before he becomes an apostle? ',
        answers: [
            'Carpenter', 
            'Fisherman', 
            'Priest', 
            'Judge'
        ],
        rightAnswer: 'Fisherman'
    },
    {
        question: 'According to Paul’s formulation in 1 Corinthians, which is the greatest of the imperishable qualities? ',
        answers: [
            'Wisdom', 
            'Patience', 
            'Love', 
            'Peace'
        ],
        rightAnswer: 'Love'
    },
    

];

let quest = document.getElementById("questions")

    for(let i = 0; i < questionsOld.length; i++){
       let h1 = document.createElement("p")
        h1.innerHTML = questionsOld[i].question
        quest.appendChild(h1)
            for(let j = 0; j < questionsOld[i].answers.length; j++){
                let buttons = document.createElement("button")
                 
                buttons.innerText = questionsOld[i].answers[j];
                if (buttons.innerText == questionsOld[i].rightAnswer) {
                    buttons.setAttribute("class", "rightAnswer");
                }
                h1.appendChild(buttons);
                buttons.addEventListener('click', compareAnswer);
            }
    };
    let scoreValue = 0;
    function compareAnswer(e) {
        // console.log(e.target.classList.contains("rightAnswer"));
if (e.target.classList.contains("rightAnswer")) {
        alert("You got the right answer")
       let score = document.getElementById("score");
       score.innerText = `This is your score: ${++scoreValue}` ;
 } else {
            alert ("Keep trying")
 }
};
