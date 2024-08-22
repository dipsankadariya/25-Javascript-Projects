const chars ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const captcha = document.querySelector(".captcha");
const input =document.querySelector("#input");
const submit=document.querySelector("#submit");
const refresh = document.querySelector("#refresh");
const CaptchError =document.querySelector(".captcha_error")



submit.addEventListener('click',()=>{
    const inputValue= input.value;
    const captchaValue= captcha.textContent.trim();
    if(inputValue==captchaValue){
        CaptchError.innerHTML = "Captcha Matched";
      
    }
    else{
       CaptchError.innerHTML ="captcha not matched";
    }
   
});

refresh.addEventListener('click',()=>{
    captcha.textContent = generateCaptcha();
    CaptchError.textContent="";
    input.value ='';
   
})

function generateCaptcha(){
    let captcha_gen="";
    for(i=0;i<6;i++){
        captcha_gen +=  chars[Math.floor(Math.random()*chars.length)];
    }
    return captcha_gen;
}
