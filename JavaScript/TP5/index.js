const container = document.querySelector(".container")
const questionContainer = document.querySelector(".qestion_container")
const responseA = document.querySelector(".responseA")
const responseB = document.querySelector(".responseB")
const responseC = document.querySelector(".responseC")
const responseD = document.querySelector(".responseD")
const btnContainer = document.querySelector(".button_container")
const btnNext = document.querySelector(".btn_next")
const resultArea = document. querySelector(".result")
const questionList = [
    {
        question : "Quelle est le meilleur langage de programmation en 2022 ?",
        a: "Java",
        b: "Langage C",
        c: "Python",
        d: "Javascript",
        correct: "d"
    },
    {
        question : "Quelle est le meilleur palteform de CTF's  ?",
        a: "Hackthebox",
        b: "Rootme",
        c: "Overthewire",
        d: "tryhackme",
        correct: "a"
    },
    {
        question : " Comment passer d'un etiquette a un autre en assembleur?",
        a: "mov",
        b: "jmp",
        c: ".push",
        d: "nextEtiq",
        correct: "b"
    },
    {
        question : " Comment je m'appelle?",
        a: "ibrahima",
        b: "birahim",
        c: "raheem",
        d: "abraham",
        correct: "b"
    }
]
let currentQuestion = 0
let correctAnswer = 0
const replay = document.createElement("button")
function loadQuestion(){
    const currentQuestionData = questionList[currentQuestion]
    questionContainer.innerHTML = ` <h1>${currentQuestionData.question}</h1>`
    responseA.innerHTML = currentQuestionData.a
    responseB.innerHTML = currentQuestionData.b
    responseC.innerHTML = currentQuestionData.c
    responseD.innerHTML = currentQuestionData.d
}
loadQuestion()
btnNext.addEventListener("click", ()=>{
    const response = document.querySelector("input[name='response']:checked")
    console.log(response)
    if(response){
        if(questionList[currentQuestion].correct == response.id ){
            console.log("Bonne réponse")
            correctAnswer ++
        }else{
            console.log("Mauvaise réponse")
        }
        currentQuestion++
        if(currentQuestion < questionList.length){
            loadQuestion()
        }else{
            resultArea.innerHTML = "Votr Score  est de : " +  correctAnswer + "/ " + currentQuestion + "</br>"
            replay.innerHTML = "rejouer"
            replay.classList.add("replay")
            resultArea.appendChild(replay)
            // console.log(replay)
        }
    }
})
replay.addEventListener("click", ()=>{
    window.location.reload()
})

