const quizData = [
    {
        vraag: "Wie werd Darth Vader?",
        a: "Obi-Wan Kenobi",
        b: "Yoda",
        c: "Anakin Skywalker",
        d: "Padmé Amidala",
        correct: "c",
    },
    {
        vraag: "In welk jaar kwam Star Wars III: Revenge Of The Sith uit?",
        a: "2003",
        b: "2005",
        c: "2007",
        d: "2009",
        correct: "b",
    },
    {
        vraag: "Wat is de naam van de regisseur van Star Wars III: Revenge Of The Sith? ",
        a: "J.J. Abrams ",
        b: "Steven Spielberg",
        c: "George Lucas",
        d: "James Cameron ",
        correct: "c",
    },
    {
        vraag: "Wat is de naam van de hoofdrolspeler in Star Wars III: Revenge Of The Sith?",
        a: "Mark Hamill",
        b: "Harrison Ford",
        c: "Ewan McGregor",
        d: "Hayden Christensen",
        correct: "d",
    },
    {
        vraag: "Wat is de naam van de clone-legers die de Jedi-orde tegen de separatisten helpen?",
        a: " The Republic Clone Troopers",
        b: "The Imperial Stormtroopers",
        c: "The Separatist Battle Droids",
        d: "The Resistance Fighters",
        correct: "a",
    },
    {
        vraag: "Hoeveel Oscarnominaties kreeg de film Star Wars III Revenge of the Sith?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "b",
    },
    {
        vraag: "Wat is de naam van Anakin's liefde in de film?",
        a: "Padmé Amidala ",
        b: "Leia Organa ",
        c: "Rey",
        d: "Ahsoka Tano ",
        correct: "a",
    },
    {
        vraag: "Waar speelt de grootste slag in de film plaats? ",
        a: "Coruscant",
        b: "Naboo",
        c: "Mustafar",
        d: "Tatooine ",
        correct: "c",
    },
    {
        vraag: "Wat is de naam van het ruimteschip dat Anakin Skywalker gebruikt in de film?",
        a: "Millennium Falcon ",
        b: "Death Star",
        c: "X-Wing",
        d: "Jedi Starfighter ",
        correct: "d",
    },
    {
        vraag: "Wat is de bijnaam van Obi-Wan Kenobi in de film?",
        a: "Luke Skywalker ",
        b: "Yoda ",
        c: "Anakin Skywalker ",
        d: "Ben Kenobi ",
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