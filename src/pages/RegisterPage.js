import { useState } from "react";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function register(ev) {
    ev.preventDefault();

    const responce = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (responce.status === 200) {
      alert("User registered Successfully");
    } else {
      alert("registration failed");
    }
  }
  return (
    <form action='' className='register' onSubmit={register}>
      <h1>Register</h1>
      <input
        type='text'
        name=''
        id=''
        placeholder='username'
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type='password'
        name=''
        id=''
        placeholder='password'
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button>Register</button>
    </form>
  );
}
export default RegisterPage;
