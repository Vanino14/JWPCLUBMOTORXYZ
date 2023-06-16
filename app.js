function loadPage(page) {
    // Use AJAX or fetch to load the content of the specified page
    fetch(page)
      .then(response => response.text())
      .then(content => {
        // Update the content of the #content div with the loaded page content
        document.getElementById('content').innerHTML = content;
      })
      .catch(error => console.log(error));
  }
  