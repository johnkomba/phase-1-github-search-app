// js/index.js

document.getElementById('github-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const searchInput = document.getElementById('search').value;
    const userList = document.getElementById('user-list');
    const reposList = document.getElementById('repos-list');
  
    // Clear previous results
    userList.innerHTML = '';
    reposList.innerHTML = '';
  
    // Search users
    fetch(`https://api.github.com/search/users?q=${searchInput}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    .then(response => response.json())
    .then(data => {
      data.items.forEach(user => {
        // Display user information
        const userItem = document.createElement('li');
        userItem.innerHTML = `
          <img src='${user.avatar_url}' alt='${user.login}' class='avatar'>
          <span class='username'>${user.login}</span>
          <a href='${user.html_url}' target='_blank' class='profile-link'>View Profile</a>
          <button class='view-repos' data-username='${user.login}'>View Repositories</button>
        `;
        userList.appendChild(userItem);
      });
    });
  });
  