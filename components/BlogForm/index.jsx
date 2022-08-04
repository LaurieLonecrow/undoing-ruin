import { useState } from 'react';
import Quill from '../../components/Quill';
import { Container } from "../../styles/GlobalStyles"


export default function BlogForm() {
const [title, setTitle] = useState();
const [image, setImage] = useState();
const [html, setHtml] = useState();

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(title, image, html)
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
      <p>
        <label>Title</label>
          <input type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                name="title"
                id="blogTitle"
                placeholder="Title" />
      </p>
      <p>
        <label>Blog Image</label>
          <input type="file"
                name="image"
                value={image}
                onChange={(event) => setImage(event.target.value)}
                id="blogImage" />
      </p>
      <Quill name="html" value={html} onChange={(event) => setHtml(event.target.value)}/>
      <button type="submit">Submit</button>
    </form>
    </Container>
  );
}