var questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "hyper text markup language",
        option:[
                "hypertext markup lanuage",
                "hyper tools markup language",
                "hyperlinks and text markup language"
        ]
    },
    {
        numb: 2,
        question: "What is the correct HTML element for inserting a line break?",
        answer: "< br >",
        option:[
                "< br >",
                "< break >",
                "< lb >"
        ]
    },
    {
        numb: 3,
        question: "Choose the correct HTML element to define important text?",
        answer: "< b >",
        option:[
                "< important >",
                "< i >",
                "< b >"
        ]
    },
    {
        numb: 4,
        question: "Choose the correct HTML element to define emphasized text?",
        answer: "< i >",
        option:[
                "< em >",
                "< i >",
                "< italic >"
        ]
    },
    {
        numb: 5,
        question: "An < iframe > is used to display a web page within a web page?",
        answer: "true",
        option:[
                "false",
                "true",
                "there is no such thing as an  < iframe >"
        ]
    }
]
var h3 = document.getElementById("h3");
var h2 = document.getElementById("h2");
var mainOption = document.getElementById("mainOption");
var indexNum = 0;
var scoure = 0;




function room(){
    h3.innerHTML =  questions[indexNum].question
    h2.innerHTML = " Question #" + (indexNum + 1) + "/" + (questions.length)
    mainOption.innerHTML = "";
    for(i = 0; i < questions[indexNum].option.length;i++){
        mainOption.innerHTML += 
        `<div>
        <button  onclick="result('${questions[indexNum].option[i]}','${questions[indexNum].answer}')" class="btn"> 
        ${questions[indexNum].option[i]}
         </button>
    </div>`
    }
}
room()


function newQuetion(){
    indexNum++
    room()
}


function result(a,b){
    if(a == b){
        scoure++;
    }
    if(indexNum + 1 == questions.length){
        alert("result is" +" "+scoure)
        
    }
    newQuetion()
    
}