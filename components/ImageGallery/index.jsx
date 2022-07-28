import { redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { uploadImage } from "~/models/post.server";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const image = formData.get("image")
  console.log(image) 
  await uploadImage(image)
};

export default function ImageGallery() {
 const actionData = useActionData();

  return (
    <>
    <Form method='post' encType="multipart/form-data">
      <input type="file" name="image"/>
      <button type="submit">Upload to Firebase</button>
    </Form>
    <div>{actionData?.data ? "UpLoaded" : null}</div>
    </>
  );
}

