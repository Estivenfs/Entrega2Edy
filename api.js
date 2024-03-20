async function getUser(id=1) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await response.json();
  return user;
}

function showUser(user) {
  console.log(user);
}

async function insertUser() {
    const user = await getUser();
    showUser(user);
}

insertUser();
