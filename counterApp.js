
let decrementBtn = document.querySelector(".decrement-btn");

let incrementBtn = document.querySelector(".increment-btn");

let resetBtn = document.querySelector(".reset");



let text = document.querySelector(".inner_text");


  
//    INCREMENTING THE VALUE
    incrementBtn.addEventListener("click", () =>{
        const value = Number(text.innerText);
        if (value >= 10){
            alert("10+ values are  not allowed")
           }
    
           text.innerText = value + 1;
    });
 //             DECREMENTING THE VALUE
   decrementBtn.addEventListener("click", () =>{
    const value = Number(text.innerText);
    if (value > 0){
        text.innerText = value -1;
    }
    else{
        alert("Entry not allowed")
    }
   })

        // RESETTING THE VALUE

resetBtn.addEventListener("click", () =>{
    text.innerText = Number(0);
})
