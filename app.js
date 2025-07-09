// app.js

function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  
  function savePost(post) {
    const posts = JSON.parse(localStorage.getItem('blothic_posts') || '[]');
    const filtered = posts.filter(p => p.id !== post.id);
    filtered.unshift(post);
    localStorage.setItem('blothic_posts', JSON.stringify(filtered));
  }
  
  function loadPosts() {
    return JSON.parse(localStorage.getItem('blothic_posts') || '[]');
  }
  
  function findPostById(id) {
    const posts = loadPosts();
    return posts.find(p => p.id === id) || null;
  }
  
  function extractExcerpt(markdown) {
    let stripped = markdown
      .replace(/```[\s\S]*?```/g, '')
      .replace(/[#>*_~\-`[\]()]/g, '')
      .replace(/\n+/g, ' ')
      .trim();
  
    if (stripped.length > 150) {
      return stripped.slice(0, 147) + '...';
    }
    return stripped;
  }