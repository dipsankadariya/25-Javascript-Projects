const input = document.querySelector('#input');
const output = document.querySelector('#meaning');
const search = document.querySelector('#search');
const clearBtn = document.querySelector("#clear");

search.addEventListener('click', async () => {
    const value = input.value;
    if (value === '') {
        alert("Please enter a word");
    } else {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;
        let response = await fetch(url);
        let meaning = await response.json();
        if (response.ok && meaning.length > 0) {
            output.textContent = meaning[0]['meanings'][0]['definitions'][0]['definition'];
        } else {
            output.textContent = "Meaning not found";
        }
    }
});

clearBtn.addEventListener('click', () => {
    input.value = '';
    output.textContent = '';
});
