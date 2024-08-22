const btn = document.getElementById("speak");
const inputBox = document.getElementById("textInput");

if ('speechSynthesis' in window) {  //checks if the browers supports the speechSynthesis..
    const synth = window.speechSynthesis;  //Access the SpeechSynthesis API

    let voices = [];          //to fetch the available voices
    synth.onvoiceschanged = () => {
        voices = synth.getVoices();
    };

    textToSpeech = () => {   //just a regular aarow function
        const text = inputBox.value.trim();  //validate input
        if (!text) {
            alert("Please enter some text.");
            return;
        }

        const message = new SpeechSynthesisUtterance(text);

        if (voices.length > 0) {   //selecting voices
            message.voice = voices[0];
        }

        synth.speak(message);  //speak the message
 
        btn.textContent = "Speaking...";
        btn.disabled = true;

        message.onend = () => {
            btn.textContent = "Speak";
            btn.disabled = false;
        };
    };

    btn.addEventListener("click", textToSpeech);
} else {
    alert("Sorry,doesnt support this functionality.");
}
