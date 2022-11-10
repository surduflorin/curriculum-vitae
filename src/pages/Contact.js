import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Surdu Valentin Florin via email @ surduvalentinflorin@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
      </div>
      <div className="links">
        <span>Links in the site: </span>
        <Link to="/about">About </Link> 
        <Link to="/resume">Resume </Link>
        <Link to="/projects">Projects </Link>
        <Link to="/stats">Statistics </Link>
        <Link to="/contact">Contact</Link>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
