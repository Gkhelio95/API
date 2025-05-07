let users = [];

window.onload = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await res.json();
    renderUsers(users);
  } catch (error) {
    console.error("Error al cargar usuarios:", error);
  }
};

function renderUsers(userArray) {
  const list = document.getElementById("userList");
  list.innerHTML = "";
  userArray.forEach(user => {
    const div = document.createElement("div");
    div.className = "user";
    div.innerHTML = `
      <strong>${user.name}</strong> <br/>
      Usuario: ${user.username} <br/>
      Email: ${user.email} <br/>
      Ciudad: ${user.address.city}
    `;
    div.onclick = () => showUserDetails(user);
    list.appendChild(div);
  });
}

document.getElementById("search").addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(term) ||
    user.address.city.toLowerCase().includes(term)
  );
  renderUsers(filtered);
});

async function showUserDetails(user) {
  document.getElementById("phone").textContent = user.phone;
  document.getElementById("website").textContent = user.website;
  document.getElementById("company").textContent = user.company.name;

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    const posts = await res.json();
    const postList = document.getElementById("posts");
    postList.innerHTML = "";
    document.getElementById("postContent").textContent = "Haz clic en un título para ver el contenido aquí.";

    posts.forEach(post => {
      const li = document.createElement("li");
      li.textContent = post.title;
      li.onclick = () => {
        document.getElementById("postContent").textContent = post.body;
      };
      postList.appendChild(li);
    });
  } catch (error) {
    console.error("Error al cargar publicaciones:", error);
  }
}
