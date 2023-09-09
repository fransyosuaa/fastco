import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactForm from './ContactForm';

const widgetDivs = document.querySelectorAll('.widget-contact-form');

widgetDivs.forEach((div) => {
  createRoot(
    <React.StrictMode>
      <ContactForm />
    </React.StrictMode>,
    div
  );
});
