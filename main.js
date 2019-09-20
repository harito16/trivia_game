// These are where the questions for the Old testament are stored.
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
        
    },
    {
        question: 'How does Jacob steal his brother, Esau\'s, inheritance rights?',
        answers: [
            'He stole the testament and re-wrote it', 
            'He tricked his father with his mother\'s help', 
            'He got a judge to do it for him', 
            'By killing his brother'
        ], 
        rightAnswer: 'He tricked his father with his mother\'s help'
    },
    {
        question: 'From which catastrophe does Joseph save Egypt?',
        answers: [
            'From the plagues of Egypt', 
            'From the furious Red Sea', 
            'From a sandstorm', 
            'From famine'
        ],
        rightAnswer: 'From famine'
    },
    {
        question: 'How does God first appear to Moses?',
        answers: [
            'As an angel', 
            'As talking sand', 
            'As a cloud', 
            'As a burning bush'
        ],
        rightAnswer: 'As a burning bush'
    },
    {
        question: 'What object that God gives Moses allows him to perform signs and wonders?',
        answers: [
            'An arch', 
            'A wooden staff', 
            'A serpent', 
            'The Ten Commandments'
        ],
        rightAnswer: 'A wooden staff'
    },
    {
        question: 'How does God feed the Israelites in the desert?',
        answers: [
            'Bread', 
            'Fishes', 
            'Manna', 
            'Beef'
        ],
        rightAnswer: 'Manna'
    },
    {
        question: 'Why does Moses break the stone tablets inscribed with God\'s commandments at Mount Sinai?',
        answers: [
            'He fell coming from the mountain', 
            'His people told him to', 
            'He didn\'t want to follow them', 
            'His people were worshipping golden statues'
        ],
        rightAnswer: 'His people were worshipping golden statues'
    },
    {
        question: 'Why does God curse the Israelities to wander the deser for forty years before entering the Promised Land?',
        answers: [
            'Israelities didn\'t have faith', 
            'Israelities didn\'t know how to read a map', 
            'Moses didn\'t know where to go',
            'They lost their camels when exiting Egypt'
        ],
        rightAnswer: 'Israelities didn\'t have faith'
    },
    {
        question: 'Who betrays Samson to the Philistines?',
        answers: [
            'Ruth', 
            'Rebecca', 
            'Jezebel', 
            'Delilah'
        ],
        rightAnswer: 'Delilah'
    },
    {
        question: 'Why does the prophet Nathan rebuke David?',
        answers: [
            'David went to war', 
            'David commits murder', 
            'David commits adultery', 
            'David kills Goliath'
        ],
        rightAnswer: 'David commits adultery'
    },
    {
        question: 'What does David bring to Jerusalem to bless the religious city?',
        answers: [
            'A golden statue', 
            'Holy bread', 
            'The Ark of the Covenant', 
            'A wooden staff'
        ],
        rightAnswer: 'The Ark of the Covenant'
    },
    {
        question: 'Who is Elisha?',
        answers: [
            'David\'s apprentice and successor', 
            'Joseph\'s apprentice and successor', 
            'Elijah\'s apprentice and successor', 
            'Abraham\'s apprentice and successor'
        ],
        rightAnswer: 'Elijah\'s apprentice and successor'
    },
    {
        question: 'Which Jwish fesitval results form the events in Esther?',
        answers: [
            'Yom Kippur', 
            'Purim', 
            'Shabbat', 
            'Hanukkah'
        ],
        rightAnswer: 'Purim'
    },
    {
        question: 'What does King Solomon do in Israel?',
        answers: [
            'He builds a statue', 
            'He bakes bread', 
            'He brings treasures from around the world', 
            'He builds the grand temple'
        ],
        rightAnswer: 'He builds the grand temple'
    },
    {
        question: 'What is one of the main criteria in Leviticus for living in the Israelite camp?',
        answers: [
            'To be married', 
            'To be ceremonially clean', 
            'To have children', 
            'To know how to pray'
        ],
        rightAnswer: 'To be ceremonially clean'
    },
    {
       question:  'Why does God reprimand Job?',
       answers: [
        'He didn\'t love his wife', 
        'He ate too much meat', 
        'He didn\'t pray everyday',
        'He listened the advice of this frineds'
       ],
       rightAnswer: 'He listened the advice of this frineds'
    },
    {
        question: 'What did King Solomon ask for from God?',
        answers: [
            'Solomon asked for riches',
            'Solomon asked for gold',
            'Solomon asked for a wife', 
            'Solomon asked for wisdom'
        ],
        rightAnswer: 'Solomon asked for wisdom'
    },
    {
        question: 'Who wrote this line \'The Lord is my Shepherd, I shall not want\'?',
        answers: [
            'Elijah',
            'Abraham',
            'King David',
            'King Solomon'
        ],
        rightAnswer: 'King David'
    },
    {
        question: 'What does \'Eve\' mean?',
        answers: [
            'Daughter of God',
            'Mother of all living',
            'Disobedience', 
            'Humbleness'
        ],
        rightAnswer: 'Mother of all living'
    },
    {
        question: 'Who married Abraham?',
        answers: [
            'Rebecca',
            'Esther',
            'Sarah',
            'Ruth'
        ],
        rightAnswer: 'Sarah'
    }

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
