let arrWord = ["style", "javascript", "truc"]
let findedWord = ""
let arrLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let hidden = ""
let gameover = false
let errorCount = 0 

function getRandomWord() {
 findedWord = arrWord[randomize(0, arrWord.length - 1)]
}

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hiddenWord() {
    let str = ""
    for (let i = 0; i < findedWord.length; i++) {
        str += "_"
        hidden = str
        
    }
    document.querySelector("#wordContainer").innerHTML= str
}

function displayeLetter() {
    let letterContainer =  document.querySelector("#letterContainer")
    letterContainer.innerHTML = ""
    arrLetter.forEach((letter)=>{
        let para = document.createElement('p')
        letterContainer.appendChild(para)
        para.innerText = letter;
        para.addEventListener('click' ,()=>{
            choiceWord(letter)
        })
    })
}

function choiceWord(letter) {
    let str = ""
    let error = true
    for (let i = 0; i < findedWord.length; i++) {
        if (findedWord[i] == letter.toLowerCase()) {
            str += letter
            error = false
        }else{
            str += hidden[i]
        }
        
    }
    if (errorCount == 6) {
        gameOver()
        return
    }   
    if (error == true) {
        errorCount++
        document.querySelector("#pendu").src = `./assets/images/pendu${errorCount}.png`
        }
   
    hidden = str
    document.querySelector("#wordContainer").innerHTML= str
    checkWin()

}

function gameOver() {
   
        
        document.querySelector("#win").innerHTML = "Perdu !!! <button onclick='prepareGame()'>Rejouer</button>"
    
}

function checkWin() {
    if (hidden.toLowerCase() == findedWord) {
        
        document.querySelector("#win").innerHTML = "Gagné !!! <button onclick='prepareGame()'>Rejouer</button>"
    }
}


function prepareGame() {
    document.querySelector("#win").innerHTML = ""
    error = 0
    document.querySelector("#pendu").src = "./assets/images/pendu0.png"
    getRandomWord()
    hiddenWord()
    displayeLetter()
}

prepareGame()



