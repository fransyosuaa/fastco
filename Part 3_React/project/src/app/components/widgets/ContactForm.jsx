'use client';
import { useRef } from 'react';
import styles from './ContactForm.module.scss';
import Card from '../Card';

const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
      Hi, ${nameRef.current.value}.
      Your email: ${emailRef.current.value}.
      Your phone: ${phoneRef.current.value}.
    `);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name :</label>
          <input type='text' name='name' ref={nameRef} />
        </div>
        <div>
          <label>Email :</label>
          <input type='email' name='email' ref={emailRef} />
        </div>
        <div>
          <label>Phone :</label>
          <input type='number' name='phone' ref={phoneRef} />
        </div>
        <div>
          <button className={styles.button} type='submit'>
            Submit
          </button>
        </div>
      </form>
    </Card>
  );
};

export default ContactForm;
