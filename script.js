function loadUsers(){
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(res => res.json())
   .then(get => {

    const result = document.getElementById("userList");
    result.innerHTML = "";

    get.forEach(user => {
      result.innerHTML += `<li> <strong>${user.name}</strong>- ${user.email} </li>`
      
    });

   });
  }
  function eraseUsers(){
     const result = document.getElementById("userList");
    result.innerHTML = "";

  }