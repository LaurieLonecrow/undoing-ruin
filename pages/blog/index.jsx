import { useAuthUserContext } from '../../context/AuthUserContext';
import { Container } from "../../styles/GlobalStyles"
import BlogForm from '../../components/BlogForm';

export default function Blog() {
  const { authUser } = useAuthUserContext();
  return (
    <Container height="true" padding={'200px 20px 0'}>
    <h1>
      Blog
    </h1>
    { authUser ? 
          <>
          <div>Add an new Blog</div> 
          <BlogForm/>
          </>
        : <div>A List of Blogs goes here.</div> }
        
    </Container>
  )
  }