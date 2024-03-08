const getPosts = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
      const response = await fetch(url);
      const data = await response.json();
      let showData = document.getElementById("post-data");
      data.forEach((post) => {
          showData.innerHTML += ` 
              <ul>
                  <li style="font-weight: bold;">${post.title}</li>
                  <li style="list-style-type: none;">${post.body}</li>
              </ul>
          `;
      });
  } catch (error) {
    console.error('Error:', error.message);
    alert('Error al obtener los posts.');
  }
}

