/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div id="contact-page-container" className="pt-32 bg-[#0a0a0a]">
      {/* Reuses the fully validated, gorgeous ContactForm with standard inputs and Calendly integrations */}
      <ContactForm />
    </div>
  );
}
