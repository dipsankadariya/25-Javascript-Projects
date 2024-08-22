
const searchBtn =document.getElementById('getMeaning');

searchBtn.addEventListener('click', async () => {
    const input = document.getElementById('input');

    const inputValue = input.value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;
    try {
        let response = await fetch(url);
        if (response.ok) {
            
            let meaning = await response.json();

            
            if (meaning.length > 0) {
               
                const answer = document.getElementById('answer');
                answer.textContent = meaning[0]['meanings'][0]['definitions'][0]['definition'];
            } else {
                
                const answer = document.getElementById('answer');
                answer.textContent = "Meaning not found";
            }
        } else {

            const answer = document.getElementById('answer');
            answer.textContent = "Meaning not found";
        }
    } catch (error) {

        const answer = document.getElementById('answer');
        answer.textContent = "Error fetching the meaning";
    }
});
