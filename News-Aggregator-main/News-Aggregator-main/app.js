const input = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const articlesContainer = document.getElementById('articles-container');

searchBtn.addEventListener('click', async () => {
    let inputValue = input.value;
    const apiKey = 'afc2e4a15c8e472f89dcf268e373d118';
    const url = `https://newsapi.org/v2/everything?q=${inputValue}&apiKey=${apiKey}`;

    
    articlesContainer.innerHTML = '<p>Fetching data...</p>';

    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        displayNews(data.articles, 20);
    } else {
        console.log("Error:", response.statusText);
        articlesContainer.innerHTML = '<p>Error fetching data. Please try again later.</p>';
    } 
});

function displayNews(articles, count) {
    articlesContainer.innerHTML = ''; 

    for (let i = 0; i < count && i < articles.length; i++) {
        const article = articles[i];
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        articlesContainer.appendChild(articleElement);
    }
}

