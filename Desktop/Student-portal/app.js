function login(username, password) {
  const users = [
    { username: "student1", password: "123456" },
    { username: "student2", password: "abcdef" },
  ];

  const found = users.find(
    (user) => user.username === username && user.password === password
  );

  if (found) {
    console.log(` Welcome ${username}! You have successfully logged in.`);
  } else {
    console.log(" Invalid username or password. Please try again.");
  }
}
login("student1", "123456");
