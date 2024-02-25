let value = document.querySelector("#value");
let btn = document.querySelector("#submit");
let result = document.querySelector(".result");

let random = Math.floor(Math.random()*100 + 1);

let attempt = document.querySelector("#attempt");
let score = document.querySelector("#score");

result.addEventListener("click", ()=>{
    result.innerHTML = "Play your move..";
    result.style.backgroundColor = "orange";
})

btn.addEventListener("click",()=>{
    let val = value.value;

    if(val == "")
    {
        result.innerHTML = "Firstly enter a valid value!";
        result.style.backgroundColor = "red";
    }
    else if(random == val)
    {
        result.style.backgroundColor = "green";
        result.innerHTML = "You hit the correct number!";
        result.style.color = "whitesmoke";
        
        let atmpVal = parseInt(attempt.innerHTML) + 1;
        attempt.innerHTML = String(atmpVal);

        setTimeout(()=>{
            random = Math.floor(Math.random()*100 + 1);
            result.innerHTML = "Wanna Play your move again..?";
            result.style.backgroundColor = "orange";
            value.value = "";
            score.innerHTML = "100";
            attempt.innerHTML = "0";
        }, 5000)
    }
    else if(random > val && val >= 1)
    {
        // value.value = "";
        result.style.backgroundColor = "lightcoral";
        result.innerHTML = "Entered number is smaller!";
        
        let atmpVal = parseInt(attempt.innerHTML) + 1;
        attempt.innerHTML = String(atmpVal);

        let scoreVal = parseInt(score.innerHTML) - 2;
        score.innerHTML = String(scoreVal);
    }
    else if(random < val && val <= 100)
    {
        // value.value = "";
        result.style.backgroundColor = "aquamarine";
        result.innerHTML = "Entered value is greater!";
        result.style.color = "black";
        
        let atmpVal = parseInt(attempt.innerHTML) + 1;
        attempt.innerHTML = String(atmpVal);
        
        let scoreVal = parseInt(score.innerHTML) - 2;
        score.innerHTML = String(scoreVal);
    }
    else{
        result.style.backgroundColor = "red";
        result.innerHTML = "Enter a valid value!";
    }

    setTimeout(()=>{
        value.value = "";
    }, 2000);
    
});

let restart = document.querySelector("#restart");

restart.addEventListener("click", ()=>{
    
    random = Math.floor(Math.random()*100 + 1);

    result.innerHTML = "Play your move..";
    result.style.backgroundColor = "orange";
    
    value.value = "";

    attempt.innerHTML = "0";
    score.innerHTML = "100"; 
});