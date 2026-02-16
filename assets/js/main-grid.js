        async function renderGrid() {
        const response = await fetch('articles.json');
        const articles = await response.json();
        const grid = document.querySelector('.article-grid');

        // Clear existing static content if any
        grid.innerHTML = '';

        // Loop through each article key (e.g., "getting-started")
        Object.keys(articles).forEach(key => {
            const data = articles[key];
            
            // Create the article element
            const articleCard = document.createElement('article');
            articleCard.className = 'article';

            // Build the inner HTML using your exact structure
            // The href links to article.html#article-key
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

        // Call this function when the page loads
        window.addEventListener('load', renderGrid);