// articles.js

// Renders all articles in a 3-column grid with search/filter functionality
function renderArticles() {
  const grid = document.getElementById("articles-grid");
  if (!grid) return;

  // Get search box and issue filter elements
  const searchBox = document.getElementById("search-box");
  const filterIssue = document.getElementById("filter-issue");

  // Dynamically populate issue dropdown
  const allIssues = [...new Set(Object.values(articles).map(a => a.issue))].sort((a,b)=>a-b);
  filterIssue.innerHTML = '<option value="">All Issues</option>' +
    allIssues.map(i=>`<option value="${i}">Issue ${i}</option>`).join('');

  // Function to display filtered articles
  function displayArticles() {
    const query = searchBox.value.toLowerCase();
    const selectedIssue = filterIssue.value;
    grid.innerHTML = '';

    Object.entries(articles).forEach(([id,a])=>{
      // Filter by issue
      if(selectedIssue && a.issue != selectedIssue) return;

      // Filter by query
      const combinedText = `${a.title} ${a.author} ${a.content}`.toLowerCase();
      if(query && !combinedText.includes(query)) return;

      // Create article card
      const card = document.createElement('div');
      card.className = 'article-card';
      card.onclick = () => openArticle(id);
      card.innerHTML = `
        <h2 class="article-title">${a.title.toUpperCase()}</h2>
        <div class="article-meta">By ${a.author} · ${a.date} · Issue ${a.issue}</div>
        ${a.image ? `<img src="${a.image}" alt="${a.title}">` : ''}
        <p class="article-synopsis">${a.content.slice(0, 180)}...</p>
      `;
      grid.appendChild(card);
    });
  }

  // Attach events
  searchBox.addEventListener('input', displayArticles);
  filterIssue.addEventListener('change', displayArticles);

  // Initial render
  displayArticles();
}

// Open article page
function openArticle(id){
  // Store selected article in localStorage to load on article.html
  localStorage.setItem('currentArticle', id);
  window.location.href = 'article.html';
}

// Function to render a single article on article.html
function renderArticlePage(){
  const articleId = localStorage.getItem('currentArticle');
  if(!articleId || !articles[articleId]) return;

  const a = articles[articleId];
  const container = document.getElementById('article-container');
  if(!container) return;

  container.innerHTML = `
    <div class="article-page">
      <h1 class="article-title">${a.title.toUpperCase()}</h1>
      <div class="article-meta">By ${a.author} · ${a.date} · Issue ${a.issue}</div>
      ${a.image ? `<img src="${a.image}" alt="${a.title}">` : ''}
      <p class="article-content">${a.content}</p>
    </div>
  `;
}
