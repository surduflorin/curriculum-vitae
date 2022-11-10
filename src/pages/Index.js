import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Surdu Valentin Florin's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Front-end Developer</Link></h2>
        </div>
      </header>
      <p>
        <b>Stack:</b><br/>
        Frontend Technologies: HTML5, CSS3, Javascript, Jquery, Less, Sass, Material, Bootstrap, Tailwind<br/>
        Frontend Framework: React by Next.JS<br/>
        Backend Framework: Strapi API by NodeJS or Prismic(Backend) hosted on Netfly<br/>
        CMS/Aplication: Magento, Umbraco, Wordpress, Drupal, OPEN CART, CS-CART, etc.<br/>
        SERVER: Git, Git Bash, WHM, CPanel, Putty SSH, Babel, Webpack, Gulp, Brew, Docker<br/>
        Backend Technologies : PHP, Dot.Net, Smarty.<br/>
        QA Automation testing: BrowserStack<br/>
        Database: PostMan, MySQLWorkBench, MYSQL<br/>
        <b>Activities:</b><br/>
        Flexible to work in group and independently when it needid. Able to work on several simultaneous projects and to adapt to fast evolving environments.<br/>
        Passionate ready to take on responsibities. Highly interested in expanding my knowledge, improving my skills or learning new technologies in order to become a professional.<br/> 
        Looking to learning new technologies and better ways to improve and develop my current skill set. I think true passion leads you to success.<br/>
        Based in Bucharest, Romania - proficient in building pixel perfect components and layouts.<br/>
        I am a self-taught developer who is extremely passionate about web development, linux, blockchain technology and finance.<br/>
        My goal is to increase my value as a developer and to produce valuable work which can help companies and individuals. I'm interested in the entire frontend and backend spectrum and working on ambitious projects with positive people.<br/>
        I love learning and I believe that our knowledge should have solid foundations. I am of the opinion that learning from different domains gives you original ideas, helps you innovate and brings value in your life.<br/> 
        My objective is to constantly progress, and loving what I do makes every day on the job not feel like work. I have been working closely with local and international teams and had the chance to have a big contribution to all the projects I've worked on professionally as a front-end dev.<br/>
        <b>Tasks:</b><br/>
        Developing new features, improving and maintaining for company platforms or external aplications or websites.<br/>
        Evaluate the quality of code by reviews and provide quick, effective feedback to the team.<br/>
        Working with all team members to adopt technical best practices and standards of scalability, performance and code style.<br/>
      </p>
    </article>
  </Main>
);

export default Index;
