const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
const  btn = document.querySelector(".calculate");
const text =document.querySelector(".text");
const condition =document.querySelector(".condition");

btn.addEventListener("click", ()=>{

    let weightValue =weight.value;
    let heightVaule =height.value;

    if(weightValue==="" || heightVaule  === ""){
    alert("Please Fill out the required fields");
    }

    heightVaule = heightVaule / 100;
    let BMI = (weightValue / (heightVaule * heightVaule));
    BMI=BMI.toFixed(2);

    text.innerHTML= `Body Mass Index : ${BMI}.`;

    let weightStatus = "";

    if(BMI < 18.5){
        weightStatus = "UnderWeight";
    }
    if(BMI >= 18.5 && BMI < 25){
        weightStatus ="Healthy";
    }
    if(BMI>=25 & BMI <30){
        weightStatus = "OverWeight";
    } 
    if(BMI >=30)
    {
        weightStatus =  "Obese";
    }
    condition.innerHTML = `You are : ${weightStatus}`;
});