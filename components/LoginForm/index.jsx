import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthUserContext } from '../../context/AuthUserContext';
import { Container } from '../../styles/GlobalStyles';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { authUser, loading, logOut, signIn } = useAuthUserContext();

  const onSubmit = event => {
    setError(null)
    signIn(email, password)
    .then(authUser => {
      console.log("Success. The user is created in firebase", authUser)
      router.push('/blog');
    })
    .catch(error => {
      setError(error.message)
    });
    event.preventDefault();
  };

  useEffect(() => {
    if (!loading && !authUser)
      router.push('/')
  }, [authUser, loading])
  
  return (
    <Container padding={'200px'}>
      <h1>Login Page</h1>
      { error ? <h1>{error}</h1> : null }
        { authUser ? 
          <>
          <div>Congratulations {authUser?.email}! You are logged in.</div> 
          <button onClick={logOut}>Log Out</button>
          </>
        :
    <form onSubmit={onSubmit}>
      <p>
        <label>Email</label>
          <input type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                name="email"
                id="loginEmail"
                placeholder="Email" />
      </p>
      <p>
        <label>Password</label>
          <input type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                id="loginPassword"
                placeholder="Password" />
      </p>
      <button type="submit">Login</button>
    </form>
      }
    </Container>
    );   
  }