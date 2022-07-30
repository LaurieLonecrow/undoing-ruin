


export default function LoginForm() {
  
  return (<div>
<h1>Login Page</h1>

<form method="post">
  <p>
    <label>
      Email
      <input type="email" name="email" />
    </label>
  </p>
  <p>
    <label>
      Password
      <input type="password" name="password" />
    </label>
  </p>

  <button type="submit">Login</button>
</form>
</div>

    );   
  }