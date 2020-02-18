import React from "react"
import { useForm } from 'react-hook-form'

import ErrorMessage from '../helpers/formErrors';

import Layout from "../components/templates/Layout"
import Container from "../components/atoms/Container"
import SEO from "../components/molecules/Seo"

const Contact = () => {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    formState: { isSubmitting }
  } = useForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <h1>Contact</h1>
        <p>Wanna talk? Send me an email through the form below or get in touch through my social media.</p>

        <form className="App" onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign Up</h1>
          <label>First Name:</label>
          <input name="firstName" ref={register({ required: true })} />
          <ErrorMessage error={errors.firstName} />

          <label>Last Name:</label>
          <input name="lastName" ref={register({ required: true, minLength: 2 })} />
          <ErrorMessage error={errors.firstName} />

          <label>Email</label>
          <input
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          <ErrorMessage error={errors.email} />

          <label>Age</label>
          <input
            name="age"
            type="number"
            ref={register({ required: true, min: 18 })}
          />
          <ErrorMessage error={errors.age} />

          <label>About you</label>
          <textarea name="aboutyou" ref={register} />

          <input disabled={isSubmitting} type="submit" />
        </form>
      </Container>
    </Layout>
  );
}

export default Contact
