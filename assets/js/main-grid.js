async function renderGrid() {
    const response = await fetch('articles.json');
    const articles = await response.json();
    const grid = document.querySelector('.article-grid');

    // 1. Clear existing content
    grid.innerHTML = '';

    // 2. Convert the object to an array and sort by date (Newest to Oldest)
    const sortedArticles = Object.entries(articles).sort(([, a], [, b]) => {
        return new Date(b.date) - new Date(a.date);
    });

    // 3. Loop through the sorted array
    // [key, data] is used because Object.entries returns [key, value] pairs
    sortedArticles.forEach(([key, data]) => {
        
        const articleCard = document.createElement('article');
        articleCard.className = 'article';

        articleCard.innerHTML = `
            <a href="article.html#${key}">
                <img src="${data.mainImage}" alt="${data.title}" width="100%">
                <h2>${data.title}</h2>
                <p>${data.description}</p>
            </a>
        `;

        grid.appendChild(articleCard);
    });
}

window.addEventListener('load', renderGrid);