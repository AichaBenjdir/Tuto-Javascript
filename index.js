// SELECTEURS
// document.querySelector('h4').style.background = "yellow";
// const balisehtml = document.querySelector("h4");
// console.log(balisehtml);

// CLICK event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector("p");

// console.log(btn1, btn2);
// console.log(questionContainer);

questionContainer.addEventListener("click", () => {
   
    questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
    response.classList.add("show-response");  
    response.style.background = "green";
});

btn2.addEventListener("click", () => {
    response.classList.add("show-response");  
    response.style.background = "red";
});

/* <div> > #id > .class > baliseHTML */
// ----------------------------------------------------
// Mouse Events
const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e)=>{
mousemove.style.left=e.pageX +"px";
mousemove.style.top=e.pageY +"px";
});

window.addEventListener("mousedown", ()=>{
    
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", ()=>{
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";

});

questionContainer.addEventListener("mousecenter", ()=>{
    questionContainer.style.background = "green";
});
questionContainer.addEventListener("mouseout", ()=>{
    questionContainer.style.background = "pink";
});
questionContainer.addEventListener("mouseover", ()=>{
    // questionContainer.style.transform = "rotate(2deg)";
});

//------------------------------------
//keyPress event
const keyPressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");


const ring = ()=>{
    const audio = new Audio();
    audio.src = "./Enter.mp3";
    audio.play();
};


document.addEventListener("keypress", (e)=>{
    // console.log(e.key);
    key.textContent = e.key;

    if(e.key==="j"){
        keyPressContainer.style.background ="pink";
    } else if(e.key ==="h"){
        keyPressContainer.style.background ="teal"; 
    }else {
        keyPressContainer.style.background ="red";
    }

    ring();
    if(e.key ==="z") ring(e.key);
});

//-------------------------
//scrollEvent

const nav = document.querySelector("nav");

window.addEventListener("scroll", ()=>{
    console.log(window.scrollY);
    if(window.scrollY > 100){
    nav.style.top = 0;
}else {
    nav.style.top ="-50px";
}
});

//------------------------------------------
// Form event
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = "";


inputName.addEventListener("input", (e)=>{
    pseudo = e.target.value;
});

select.addEventListener("input", (e)=>{
    //  console.log(e.target.value);
    language = e.target.value;
});


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
console.log(cgv.checked);
    if(cgv.checked){
       
        document.querySelector('form > div').innerHTML = `
            <h3>Pseudo : ${pseudo}</h3>
            <h4>Langage préféré: ${language}</h4>
        `;
    }else{
        alert('Veuillez accepter les cgv');
    }
});

//----------------------------------------------


window.addEventListener("load", ()=>{
    console.log("Document Chargé !");
})
//-------------------------------------------------

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", (e)=>{
        console.log(e.target);
        box.style.transform = "scale(0.7)";
    });

});
//------------------------------------------------
// addEventListener Vs onclick
// document.body.onclick = function() {
//   console.log("Scroll !");
// };

// Bubbling => fin (de base l'eventlistener est paramétré en mode Bublbing)

document.body.addEventListener("click", ()=>{
    console.log("click 1!")
});

//Usecapture 
document.body.addEventListener("click", ()=>{
    console.log("click 2!")
},
true
);

// https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/

//-------------------------------------------------
// Stop propagation
// questionContainer.addEventListener("click", (e) => {
//   alert("Test !");
//   e.stopPropagation();
// });

// removeEventListener

//-------------------------------------------------
// BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("http://google.com", "cours js", "height=600, width=800");
// window.close()

// Evénements adossés à Window
// alert("hello");

// confirm


btn2.addEventListener("click", ()=>{
    confirm("Voulez-vous vraiment cliquer ?"); 
} );

let answer;
//prompt  
btn1.addEventListener("click", ()=>{
  answer =  prompt("Entrez votre nom ?"); 

 questionContainer.innerHTML += 
            "<h3>Bravo " + answer + "</h3>";
        
} );
// Timer, compte à rebours
setTimeout( ()=>{

   questionContainer.style.borderRadius = "300px"
}, 2000 );

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//       <div class='box'>
//         <h2>Nouvelle Boite !</h2>
//       </div>
//     `;
// }, 4000);

