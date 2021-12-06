const buttonCont = document.getElementById("countButton")

function criarObjLetra(){
    let typedText = document.getElementById("textInput").value.toLowerCase()
    
    typedText = typedText.replace(/[^a-z'\s]+/g, "")
    
    let letterCounts = {}
    
    for(let i = 0; i < typedText.length; i++){
        let currentLetter = typedText[i]

        if(letterCounts[currentLetter] === undefined && currentLetter !== " "){
            letterCounts[currentLetter] = 1
        } else if(letterCounts[currentLetter] !== undefined && currentLetter !== " "){
            letterCounts[currentLetter]++
        }   
    }
    return letterCounts
}

function criarObjPalavra(){
    let typedText = document.getElementById("textInput").value.toLowerCase()
    
    typedText = typedText.replace(/[^a-z'\s]+/g, "")

    let separaPalavras = typedText.split(" ")
    
    let wordCounts = {}
    
    for(let i = 0; i < separaPalavras.length; i++){
        let currentWord = separaPalavras[i]

        if(wordCounts[currentWord] === undefined && currentWord !== " "){
            wordCounts[currentWord] = 1
        } else if(wordCounts[currentWord] !== undefined && currentWord !== " "){
            wordCounts[currentWord]++
        }   
    }
    return wordCounts
}

function listarExemploLetra(objeto){
    const resetarSpan = document.querySelectorAll("#lettersDiv span")
    for(let i = 0; i < resetarSpan.length; i++){
        resetarSpan[i].innerText = ""
    }
    let oObjs = objeto 

    let elementosObj = Object.keys(oObjs)
    for(let i = 0; i < elementosObj.length; i++){
        const spanLetter = document.createElement("span")
        spanLetter.innerText = `${elementosObj[i]}: ${oObjs[elementosObj[i]]}, `
        const blocoLetters = document.getElementById("lettersDiv")
        blocoLetters.appendChild(spanLetter)
        if(i === elementosObj.length - 1){
            spanLetter.innerText = `${elementosObj[i]}: ${oObjs[elementosObj[i]]}.`
        }
    }
    
}


function listarExemploPalavra(objeto){
    const resetarSpan = document.querySelectorAll("#wordsDiv span")
    for(let i = 0; i < resetarSpan.length; i++){
        resetarSpan[i].innerText = ""
    }
    let oObjs = objeto

    let elementosObj = Object.keys(oObjs)
    for(let i = 0; i < elementosObj.length; i++){
        const spanWord = document.createElement("span")
        spanWord.innerText = `${elementosObj[i]}: ${oObjs[elementosObj[i]]}, `
        const blocoWords = document.getElementById("wordsDiv")
        blocoWords.appendChild(spanWord)
        if(i === elementosObj.length - 1){
            spanWord.innerText = `${elementosObj[i]}: ${oObjs[elementosObj[i]]}.`
        }
    }
    
}

function listarOrdemAlfaLetra(objeto){
    const resetarSpan = document.querySelectorAll("#lettersDivAlfa span")
    for(let i = 0; i < resetarSpan.length; i++){
        resetarSpan[i].innerText = ""
    }
    let oObjs = objeto

    let elementosObj = Object.keys(oObjs)
    elementosObj.sort()

    for(let i = 0; i < elementosObj.length; i++){
        const spanLetter = document.createElement("span")
        spanLetter.innerText = `${elementosObj[i]}: ${oObjs[elementosObj[i]]}, `
        const blocoLetters = document.getElementById("lettersDivAlfa")
        blocoLetters.appendChild(spanLetter)
        if(i === elementosObj.length - 1){
            spanLetter.innerText = `${elementosObj[i]}: ${oObjs[elementosObj[i]]}.`
        }
    }
}

function listarOrdemAlfaPalavra(objeto){
    const resetarSpan = document.querySelectorAll("#wordsDivAlfa span")
    for(let i = 0; i < resetarSpan.length; i++){
        resetarSpan[i].innerText = ""
    }
    let oObjs = objeto

    let elementosObj = Object.keys(oObjs)
    elementosObj.sort()

    for(let i = 0; i < elementosObj.length; i++){
        const spanWord = document.createElement("span")
        spanWord.innerText = `${elementosObj[i]}: ${oObjs[elementosObj[i]]}, `
        const blocoWords = document.getElementById("wordsDivAlfa")
        blocoWords.appendChild(spanWord)
        if(i === elementosObj.length - 1){
            spanWord.innerText = `${elementosObj[i]}: ${oObjs[elementosObj[i]]}.`
        }
    }
}

function listarFrequenciaLetra(objeto){
    const resetarSpan = document.querySelectorAll("#lettersDivFreq span")
    for(let i = 0; i < resetarSpan.length; i++){
        resetarSpan[i].innerText = ""
    }
    let oObjs = objeto

    let elementosObj = Object.keys(oObjs)
    elementosObj.sort()

    let frequenciaLetra = []

    for(let i = 0; i < elementosObj.length; i++){
        frequenciaLetra.push(`${elementosObj[i]}: ${oObjs[elementosObj[i]]}`)
    }

    for(let i = 0; i < frequenciaLetra.length; i++){
        frequenciaLetra[i] = frequenciaLetra[i].split(" ")
    }
    
    frequenciaLetra.sort(function(a, b){
        return Number(b[1]) - Number(a[1])
    })

    for(let i = 0; i < frequenciaLetra.length; i++){
        frequenciaLetra[i] = frequenciaLetra[i].join(" ")
    }

    for(let i = 0; i < frequenciaLetra.length; i++){
        const spanLetter = document.createElement("span")
        spanLetter.innerText = `${frequenciaLetra[i]}, `
        const blocoLetters = document.getElementById("lettersDivFreq")
        blocoLetters.appendChild(spanLetter)
        if(i === frequenciaLetra.length - 1){
            spanLetter.innerText = `${frequenciaLetra[i]}.`
        }
    }
    
}

function listarFrequenciaPalavra(objeto){
    const resetarSpan = document.querySelectorAll("#wordsDivFreq span")
    for(let i = 0; i < resetarSpan.length; i++){
        resetarSpan[i].innerText = ""
    }
    let oObjs = objeto

    let elementosObj = Object.keys(oObjs)
    elementosObj.sort()

    let frequenciaPalavra = []

    for(let i = 0; i < elementosObj.length; i++){
        frequenciaPalavra.push(`${elementosObj[i]}: ${oObjs[elementosObj[i]]}`)
    }

    for(let i = 0; i < frequenciaPalavra.length; i++){
        frequenciaPalavra[i] = frequenciaPalavra[i].split(" ")
    }

    frequenciaPalavra.sort(function(a, b){
        return Number(b[1]) - Number(a[1])
    })

    for(let i = 0; i < frequenciaPalavra.length; i++){
        frequenciaPalavra[i] = frequenciaPalavra[i].join(" ")
    }
    
    for(let i = 0; i < frequenciaPalavra.length; i++){
        const spanWord = document.createElement("span")
        spanWord.innerText = `${frequenciaPalavra[i]}, `
        const blocoWords = document.getElementById("wordsDivFreq")
        blocoWords.appendChild(spanWord)
        if(i === frequenciaPalavra.length - 1){
            spanWord.innerText = `${frequenciaPalavra[i]}.`
        }
    }
}


function histogramaLetra(objeto){
    let seçaoHist = document.querySelector(".bloco-histograma-letra")
    
    let apagar = document.querySelectorAll(".bloco-histograma-letra div")
    apagar.forEach(element => {element.style.display = "none"});
    
    let theObj = objeto
    
    let elementosObj = Object.keys(theObj)
    elementosObj.sort()

    let arrayObj = []
    for(let i = 0; i < elementosObj.length; i++){
        arrayObj.push(`${elementosObj[i]}: ${theObj[elementosObj[i]]}`)
    }

    for(let i = 0; i < arrayObj.length; i++){
        arrayObj[i] = arrayObj[i].split(": ")
        const blocoHist = document.createElement("div")
        let letraQuantidade = document.createElement("span")
        letraQuantidade.innerText = arrayObj[i][1]
        let letraTamanho = document.createElement("div")
        letraTamanho.style.height = `${arrayObj[i][1]}px`
        let letraSpan = document.createElement("span")
        letraSpan.innerText = arrayObj[i][0]

        blocoHist.appendChild(letraQuantidade)
        blocoHist.appendChild(letraTamanho)
        blocoHist.appendChild(letraSpan)

        seçaoHist.appendChild(blocoHist)
    }
}

function histogramaPalavra(objeto){
    let seçaoHist = document.querySelector(".bloco-histograma-palavra")

    let apagar = document.querySelectorAll(".div-palavras")
    apagar.forEach(element => {element.style.display = "none"});
    
    let theObj = objeto
    
    let elementosObj = Object.keys(theObj)

    let arrayObj = []
    for(let i = 0; i < elementosObj.length; i++){
        arrayObj.push(`${elementosObj[i]}: ${theObj[elementosObj[i]]}`)
    }

    for(let i = 0; i < arrayObj.length; i++){
        arrayObj[i] = arrayObj[i].split(": ")
        const blocoHist = document.createElement("div")
        let palavraQuantidade = document.createElement("span")
        palavraQuantidade.innerText = arrayObj[i][1] 

        let palavraTamanho = document.createElement("div")
        palavraTamanho.style.width = `${arrayObj[i][1] + 5}px`
        

        let palavraSpan = document.createElement("span")
        palavraSpan.innerText = arrayObj[i][0] 
        palavraSpan.classList.add("gira-palavras")

        let divHist = document.createElement("div")

        divHist.appendChild(palavraQuantidade)
        divHist.appendChild(palavraTamanho)
        blocoHist.appendChild(divHist)
        blocoHist.appendChild(palavraSpan)
    
        blocoHist.classList.add("div-palavras")
        seçaoHist.appendChild(blocoHist)
    }
}

buttonCont.addEventListener("click", function(){

    listarExemploLetra(criarObjLetra())
    listarExemploPalavra(criarObjPalavra())

    listarOrdemAlfaLetra(criarObjLetra())
    listarOrdemAlfaPalavra(criarObjPalavra())

    listarFrequenciaLetra(criarObjLetra())
    listarFrequenciaPalavra(criarObjPalavra())

    histogramaLetra(criarObjLetra())
    histogramaPalavra(criarObjPalavra())
})


