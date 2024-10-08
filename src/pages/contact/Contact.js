import React from 'react';
import contactAvatar from '../../assets/contact.png';
import Container from '../../components/layout/container/Container';
import styles from './Contact.module.scss';

function Contact() {
  return (
    <div className={styles.contact}>
      <Container className={styles.container}>
        <img className={styles.avatar} src={contactAvatar} alt="" />
        <div className={styles.content}>
          <h2>thank you!</h2>
          <ul>
            <li>문희연</li>
            <li>010.7557.0533</li>
            <li>yeon7513@gmail.com</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
