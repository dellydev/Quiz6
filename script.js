let questionData = [
    {
        question: "Saudi-Arabia is in which continent",
        answers:[
                   { text: "Africa", correct: false},
                   { text: "Europe", correct: false},
                   {text: "Asia", correct: true},
                    {text: "Antartica", correct: false},
        ]
    },

   {
      question: "River nile is in which continent",     
      answers:[ 
                { text: "Africa", correct: true},
                { text: "Europe", correct: false},
                {text: "Asia", correct: false},
                {text: "Antartica", correct: false},
               ]
   },
    
    {
        question: "Red represents what",
        answers:[
                  { text:  "Elegance", correct: false},
                  { text: "Success", correct: false},
                  {text: "Danger", correct: true},
                  {text: "peace", correct: false},
                ]  
    },
    
    {
        question: "Which of the following is not a programming language?",
        answers:[ { text: "HTML", correct: true},
                  { text: "Python", correct: false},
                  {text: "Javascript", correct: false},
                  {text: "C++", correct: false},
                ]
    },
     
    {
        question: "The Nigeria Flag has how many colors ?",
        answers:[ { text: 7, correct: false},
                  { text: 2, correct: true},
                  {text: 3, correct: false},
                  {text: 4, correct: false},
                ]
    },
    
    {
        question: "The tallest mountain in the world is -",
        answers:[ { text: "Mount.Kilimanjaro", correct: false},
                  { text: "Mount.Everest", correct: true},
                  {text: "Mount.Olumo", correct: false},
                  {text: "Mount.Africa", correct: false},
 ]
       
    },

    {
        question: "How many colors has a rainbow?",
        answers:[ { text: 1, correct: false},
                  { text: 8, correct: false},
                  {text: 7, correct: true},
                  {text: 9, correct: false},
                ]      
    },
    
    {
        question: "How many continents do we have?",
        answers:[ { text: 10, correct: false},
                  { text: 8, correct: false},
                  {text: 7, correct: true},
                  {text: 6, correct: false},
                ]    
    },

];



const btnanswers = document.getElementById("btn-answers");
const btnNext = document.getElementById("btn-next");
const questionE1 = document.getElementById("quiz");


let currentQuestionIndex = 0;
let Score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    Score = 0;
    btnNext.innerHTML = "Next";
    showQuestion();
}

 function showQuestion() {
      resetState();
     let currentQuestion = questionData[currentQuestionIndex];
     let questionNo = currentQuestionIndex + 1;
     questionE1.innerHTML =  questionNo + " ." + currentQuestion.question;


     currentQuestion.answers.forEach(answer => {
         const button = document.createElement("button");
         button.innerHTML = answer.text;
         button.classList.add("btn");
         btnanswers.appendChild(button);
         if (answer.correct) {
            button.dataset.correct = answer.correct;
             }
          button.addEventListener("click", selectanswer );
        

        });
    
    }

    function resetState() {
     btnNext.style.display = "none";
      while (btnanswers.firstChild){
     btnanswers.removeChild(btnanswers.firstChild);
     }
            
  }

    function selectanswer(e) {
            const selectbtn = e.target
            const isCorrect = selectbtn.dataset.correct === "true";
            if (isCorrect){
                selectbtn.classList.add("correct");
                 Score++;
            } else {
                selectbtn.classList.add("incorrect");
         }
         Array.from(btnanswers.children).forEach(button => {
                if (button.dataset.correct === "true"){
                    button.classList.add("correct");
                }
                button.disabled = true;
             });
             btnNext.style.display = "block";
        
        }

        function showScore(){
            resetState();
            questionE1.innerHTML = `You scored ${Score} out of ${questionData.length} `;
            btnNext.innerHTML = "Play Again";
            btnNext.style.display = "block";
     }

        function handlebtnNext(){
            currentQuestionIndex++;
            if (currentQuestionIndex < questionData.length){
                showQuestion();
            }else{
                showScore();
            }
        }
        btnNext.addEventListener("click", () => {
            if(currentQuestionIndex < questionData.length){
                handlebtnNext();
                }else{
                    startQuiz();
                }
            });
         startQuiz();
        
//          
 
 
//

// 
// 

// // 
// //  
// // }

// // 
// // }

// // 

// // 
// //
 