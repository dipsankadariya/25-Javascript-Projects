let qrImage = document.getElementById("qr-code-image");
let btn = document.getElementById("generate-btn");
let inputText = document.getElementById("input-text");

function getQr(){
    let inputValue = inputText.value;
   qrImage.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputValue;
}
btn.addEventListener("click",()=>{
    getQr();
 inputText.value ="";
});

inputText.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        getQr();
        inputText.value="";
    }
});


