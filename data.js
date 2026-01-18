// data.js

// Initialize articles if not in localStorage
if(!localStorage.getItem('articles')){
  const articles = {
    "1": { id: "1", title: "Ancient Civilizations", author: "John Smith", date: "2026-01-01", issue: 1, content: "Lorem ipsum dolor sit amet, consectetur...", image: "https://via.placeholder.com/400x200", featured: true },
    "2": { id: "2", title: "Medieval Times", author: "Jane Doe", date: "2026-01-05", issue: 1, content: "Vestibulum ante ipsum primis in faucibus...", image: "https://via.placeholder.com/400x200", featured: false },
    "3": { id: "3", title: "Renaissance Art", author: "Alice Lee", date: "2026-01-10", issue: 2, content: "Pellentesque habitant morbi tristique...", image: "https://via.placeholder.com/400x200", featured: false },
    // Add more articles here...
  };
  localStorage.setItem('articles', JSON.stringify(articles));
}

// Initialize staff if not in localStorage
if(!localStorage.getItem('staff')){
  const staff = ["Alice", "Bob", "Charlie"];
  localStorage.setItem('staff', JSON.stringify(staff));
}
