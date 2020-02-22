import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import ErrorMessage from '../helpers/formErrors';

import Container from '../components/atoms/Container';
import SEO from '../components/molecules/Seo';

const Contact = () => {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <SEO title="Contact" />
      <Container>
        <h1>Get in touch</h1>
        <p>
          Wanna talk? Send me an email through the form below or get in touch
          through my social media profiles.
        </p>

        <Form className="App" onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <label>Your Name</label>
            <input name="name" ref={register({ required: true })} />
          </Row>
          <ErrorMessage error={errors.name} />

          <Row>
            <label>Your Email</label>
            <input
              name="email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
          </Row>
          <ErrorMessage error={errors.email} />

          <Row>
            <label>Your Message</label>
            <textarea name="message" ref={register} />
          </Row>

          <Row>
            <button disabled={isSubmitting} type="submit">
              Send &raquo;
            </button>
          </Row>
        </Form>
      </Container>
    </>
  );
};

const Form = styled.form`
  label {
    width: 30%;
    font-size: 1.5rem;
  }

  input {
    height: 30px;
  }

  textarea {
    height: 90px;
  }

  button {
    background: #e94e1b;
    color: #fff;
    margin-bottom: 5rem;
  }

  input,
  textarea,
  button {
    flex-grow: 1;
    border-radius: calc(15px + 0.25rem);
    border: none;
    padding: 0.25rem 1rem;
    font-size: 1.25rem;
    font-family: 'brandon-grotesque', sans-serif;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 90%;
  width: 500px;
  margin: 1.5rem auto 0;
`;

export default Contact;
