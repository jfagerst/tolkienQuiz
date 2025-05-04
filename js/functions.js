import { questions } from "./questions.js";
import { Quiz } from "./Quiz.js"

const quiz = new Quiz(questions)

const menu_output = document.getElementById('menu')
const quiz_output = document.getElementById('quiz')
const question_output = document.getElementById('question')
const answers_output = document.getElementById('answers')
const nextBtn_button = document.getElementById('nextBtn')
const result_output = document.getElementById('result')
const history_output = document.getElementById('history')

document.getElementById('startBtn').onclick = startGame
document.getElementById('resultsBtn').onclick = showResults
nextBtn_button.onclick = showNextQuestion

let currentQuestion = null

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

function startGame() {
    quiz.reset();
    menu_output.classList.add("hidden");
    result_output.classList.add("hidden");
    history_output.classList.add("hidden");
    quiz_output.classList.remove("hidden");
    showNextQuestion();
}

function showNextQuestion() {
    const q = quiz.getNextQuestion();
    if (!q) return endGame();

    currentQuestion = q;

    const shuffledOptions = shuffleArray([...q.options]);

    question_output.textContent = q.question;
    answers_output.innerHTML = "";

    shuffledOptions.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => handleAnswer(option);
        answers_output.appendChild(btn);
    })

    nextBtn_button.classList.add("hidden");
}

function handleAnswer(selected) {
    const isCorrect = quiz.checkAnswer(currentQuestion, selected);
    const buttons = answers_output.querySelectorAll('button');

    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent ===currentQuestion.correct) {
            btn.style.backgroundColor = "#4caf50";
        } else if (btn.textContent === selected){
            btn.style.backgroundColor = "#f44336";
        }
    })

    if (!isCorrect) {
        setTimeout(() => endGame(true), 2000);
    }
    else {
        nextBtn_button.classList.remove("hidden");
    }
}

function endGame() {
    const score = quiz.getScore();
    quiz_output.classList.add("hidden");
    result_output.classList.remove("hidden");
    result_output.innerHTML = `
        <h2>Game Over</h2>
        <p>You scored ${score} point${score !== 1 ? "s" : ""} out of 25.</p>
        <button onclick="location.reload()">Back to menu</button>
    `;
    saveScore(score);
}

function saveScore(score) {
    const scores = JSON.parse(localStorage.getItem("quizScores")) || [];
    scores.push({ score, date: new Date().toLocaleString() });
    localStorage.setItem("quizScores", JSON.stringify(scores));
    
}

function showResults() {
    const scores = JSON.parse(localStorage.getItem("quizScores")) || [];

    menu_output.classList.add("hidden");
    history_output.classList.remove("hidden");
    result_output.classList.add("hidden");

    if (scores.length === 0) {
        history_output.innerHTML = `
            <h2>No results yet</h2>
            <button onclick="location.reload()">Back</button>
        `;
        return;
    }

    history_output.innerHTML = `
        <h2>Previous results</h2>
        <ul>
            ${scores.slice().reverse().map(s => `<li>${s.date}: ${s.score} point${s.score !== 1 ? "s" : ""}</li>`).join("")}
        </ul>
        <button onclick="location.reload()">Back</button>
    `;
}
