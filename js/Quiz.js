export class Quiz {
    constructor(questions) {
        this.originalQuestions = [...questions];
        this.reset();
    }

    reset() {
        this.questions = [...this.originalQuestions];
        this.score = 0;
        this.difficulty = 1;
        this.askedCount = 0;
        this.level5count = 0;
    }

    getNextQuestion() {
        const available = this.questions.filter(q => q.difficulty === this.difficulty);

        if (this.difficulty === 5 && this.level5count >= 5) {
            return null;
        }

        if (available.length === 0) {
            if (this.difficulty < 5) {
                this.difficulty++;
                return this.getNextQuestion();
            } 
            else {
                return null;
            }
        }

        const index = Math.floor(Math.random() * available.length);
        const question = available[index];

        const removeIndex = this.questions.indexOf(question);
        this.questions.splice(removeIndex, 1);

        this.askedCount++;

        if(this.difficulty === 5) {
            this.level5count++;
        }

        if (this.askedCount % 5 === 0 && this.difficulty < 5) {
            this.difficulty++;
        }

        return question;
    }

    checkAnswer(question, answer) {
        if (answer === question.correct) {
            this.score++;
            return true;
        }
        return false;
    }

    getScore() {
        return this.score;
    }

    getRemainingCount() {
        return this.questions.length;
    }
}