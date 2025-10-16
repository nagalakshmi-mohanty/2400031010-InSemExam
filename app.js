function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "student1" && password === "123456") {
    document.body.innerHTML = `
      <div style="text-align:center; margin-top:100px;">
        <h1 style="color: green;">✅ Login Successful!</h1>
        <p>Welcome, ${username}!</p>
      </div>
    `;
  } else {
    alert("❌ Invalid username or password. Please try again.");
  }
}
