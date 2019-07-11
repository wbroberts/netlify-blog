import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const ContactPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Contact"></SEO>
      <div className="container m-auto py-4">
        <h1 className="text-3xl font-bold mb-8">Say Hi</h1>

        <form
          name="contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
          method="POST"
          action="/contact/thanks"
          className="flex flex-col text-xl"
        >
          <p class="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <div className="flex flex-col mb-6">
            <label className="my-3">Name</label>
            <input
              className="border rounded p-2"
              type="text"
              required
              name="name"
            />
          </div>
          <div className="flex flex-col text-xl">
            <label className="my-3">Email</label>
            <input
              className="border rounded p-2"
              type="email"
              required
              name="email"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label className="my-3">Message</label>
            <textarea className="border rounded p-2 h-32" required></textarea>
          </div>

          <button type="submit" className="w-full bg-pink-900 text-white py-2">
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;
