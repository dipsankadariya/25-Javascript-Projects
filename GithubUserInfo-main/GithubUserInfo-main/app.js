const searchBtn = document.getElementById('search-btn');
const input = document.getElementById('input-box');
const results = document.getElementById('results');
const image = document.getElementById('image');


const handleSearch = async () => {
    let inputValue = input.value.trim();
    let originalName = inputValue.split(' ').join('');

    if (originalName) {
        let response = await fetch('https://api.github.com/users/' + originalName);
        let data = await response.json();

        if (response.ok) {
            console.log(data);
            image.innerHTML = `<img src=${data.avatar_url}>`;
            results.innerHTML = `
                <p>Name: ${data.name}</p>
                <p>${data.bio}</p>
                <p>Followers: ${data.followers}</p>
                <p>Following: ${data.following}</p>
            `;
        } else {
            console.log("Error has occurred.");
        }
    } else {
        console.log("Please enter a username");
    }
};

searchBtn.addEventListener('click', handleSearch);


input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});
