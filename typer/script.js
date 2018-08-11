const PARAGRAPH = `NIH (Not Invented Here) isn’t a 4-letter word. We’re all presumably programmers because we like programming. We shouldn’t have to resign ourselves to the plumbing together of existing, poorly understood software, spending our days to write glue code we hate to produce a Frankenstein, monster system that sucks. We can do noble work and have it address problems from first principles. And that, in turn, makes us better more able engineers in the doing. NIH is a derogatory term for what I think is actually an incredibly important and virtuous impulse that is to invent and to create, to learn by doing. Of course, we have to strike a balance between self-actualizing and getting the job done, but I don’t think we should take inventing something from first principles out of our tool belt kind of reflexively. Sometimes it can be the right thing to do and it can help us grow as professionals and as human beings.`;

new Vue({
    el: '#app',
    data: {
        title: 'Typing Speed Tester',
        originalParagraph: PARAGRAPH,
        typedText: '',
        typoIndex: -1,
        timer: 60,
        typing: false,
        timerInterval: {},
        typos: 0,
        scores: []
    },
    computed: {
        outputHTML() {
            let newHTML = '<span class="correct">';
            if (this.typoIndex === -1) {
                newHTML += this.originalParagraph.substr(0, this.typedText.length);
                newHTML += '</span>';
                newHTML += this.originalParagraph.substr(this.typedText.length);
                return newHTML;
            }
            newHTML += this.originalParagraph.substr(0, this.typoIndex);
            newHTML += '</span>';
            newHTML += '<span class="typo">';
            newHTML += this.originalParagraph.subsstring(this.typoIndex, this.typedText.length);
            newHTML += '</span>';
            newHTML += this.originalParagraph.substr(this.typedText.length);
            return newHTML;
        },
        sortedScores() {
            return this.scores.sort((a, b) => {
                return a.wpm + a.typos - (b.wpm + b.typos);
            });
        }
    },
    watch: {
        typedText(value) {
            if (!this.typing) {
                this.startTypingSpeed();
            }
            for (let i = 0; i < value.length; i++) {
                if (value[i] !== this.originalParagraph[i]) {
                    this.typoIndex = i;
                    this.typos++;
                    break;
                }
                this.typoIndex = -1;
            }
        }
    },
    methods: {
        startTypingSpeed() {
            this.typing = true
            this.startTimer()
        },
        startTimer() {
            this.timerInterval = setInterval(() => {
                if (this.timer === 0) {
                    this.endTypingSpeed();
                    this.calculateScore();
                    return;
                }
                this.timer--
            }, 1000)
        },
        endTypingSpeed() {
            clearInterval(this.timerInterval);
            this.typing = false;
            this.timer = 60;
            document.activeElement.blur();
        },
        reset() {
            clearInterval(this.timerInterval);
            this.typing = false;
            this.typoIndex = -1;
            this.typedText = '';
            this.timer = 60;
        },
        calculateScore() {
            let score = {};
            let correctlyTypedText = this.typedText;
            if (this.typoIndex != -1) {
                correctlyTypedText = this.originalParagraph.substring(0, this.typoIndex);
            }
            let words = correctlyTypedText.split(' ').length;
            score = {
                wpm: words,
                typos: this.typos
            };
            this.typos = 0;
            this.scores.push(score);
        }
    }
});
