"use client";

import Form from "@components/Form";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    firstName: "",
    lastName: "",
    address: "",
    postCode: "",
    city: "",
    tel: "",
    email: "",
    password: "",
    birthDate: "",
    nationality: "",
  });

  const createUser = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/register/new", {
        method: "POST",
        body: JSON.stringify({
          firstName: post.firstName,
          lastName: post.lastName,
          address: post.address,
          postCode: post.postCode,
          city: post.city,
          tel: post.tel,
          email: post.email,
          password: post.password,
          birthDate: post.birthDate,
          nationality: post.nationality,
        }),
      });

      if (response.ok) {
        router.push("/");
      } else if (response.status == 406) {
        router.push("/register/registered-email");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createUser}
    />
  );
};

export default RegisterPage;
