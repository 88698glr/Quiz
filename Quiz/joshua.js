function myFunction() {
    var x = document.getElementById("nav2");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }

const quizData = [
    {
        vraag: "Welke stad is de hoofdlocatie van de film?",
        a: "Detroit",
        b: "Los Angeles",
        c: "Chicago",
        d: "New York",
        correct: "d",
    },
    {
        vraag: "In welk jaar kwam Spider-Man Homecoming uit?",
        a: "2013",
        b: "2018",
        c: "2017",
        d: "2019",
        correct: "c",
    },
    {
        vraag: "Wat is de naam van de regisseur van Spider-Man Homecoming? ",
        a: "Tom Holland ",
        b: "Jon Watts",
        c: "Laura Harrier",
        d: "Michael Keaton ",
        correct: "b",
    },
    {
        vraag: "Wie is Spiderman in Spider-Man Homecoming ",
        a: "Peter Parker",
        b: "Liz Allan",
        c: "Ned Leeds",
        d: "Tony Stark",
        correct: "a",
    },
    {
        vraag: "Wie was Vulture?",
        a: "Adrian Toomes",
        b: "Liz Allan",
        c: "Ned Leeds",
        d: "Tony Stark",
        correct: "a",
    },
    {
        vraag: "Waar ging Peter parker naar school",
        a: "GLR",
        b: "Forest Hills High School",
        c: "Midtown School of Science and Technology",
        d: "Franklin K Lane High School",
        correct: "b",
    },
    {
        vraag: "Wie had de pak gemaakt voor Peter Parker?",
        a: "Ant-Man",
        b: "Tony Stark ",
        c: "Steve Rogers",
        d: "Thanos ",
        correct: "b",
    },
    {
        vraag: "Welk lego model was Ned en Peter aan het maken? ",
        a: "Millennium Falcon",
        b: "Star Destroyer",
        c: "Death Star",
        d: "Jabbas palace ",
        correct: "c",
    },
    {
        vraag: "Hoe noemde Spider-Man de kunstmatige intelligentie in zijn pak??",
        a: "Liz ",
        b: "Jane",
        c: "Mary",
        d: "Karen ",
        correct: "d",
    },
    {
        vraag: "Wat was MJ's voornaam?",
        a: "Melissa ",
        b: "Mary  ",
        c: "Max ",
        d: "Michelle ",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('quenstions')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.vraag
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d
}

function deselectAnswer() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEls => {
        if(answerEls.checked) {
            answer = answerEls.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>Je hebt vragen ${score}/${quizData.length} correct beantwoord</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})