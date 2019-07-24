import React from "react";

const technologies = [
  "AWS",
  "React.js",
  "Webpack",
  "Javascript testing frameworks (mocha, testcafe)",
  "Redux",
  "SASS",
  "Kubernetes",
  "Guidewire (enterprice software)",
  "Terraform",
  "Ruby/Rails",
  "Git",
  "Selenium/Testcafe"
];

console.log(technologies, technologies.length);

const AboutPage = () => (
  <div>
    <h1>About</h1>
    <h3>Hey everyone,</h3>
    <p>
      I am a self-taught front-end focused developer passionate about
      pixel-perfect design, UX and products that make a difference. My most
      common weapons of choice are React/Redux and Node. Javascript in 2019 is
      quite exciting and has a really enthusiastic developer community. I enjoy
      attending conferences and talks, discussing the latest alternatives to
      API's, Cloud based engineering, JS trends and when NOT to use them;) My
      passion for programming started when I was working as a freelance
      Wordpress developer.
    </p>

    <p>
      I decided to go through an intensive study period and change my career
      from design to software engineering. At my first employment at Tradeo I
      was hired to do their re-design, mainly styling. I was able to gain a
      deeper knowledge of web development, especially with Ruby on Rails and
      Backbone.js and started slowly teaching myself in programming paradigms,
      eventually implementing fully realised features.
    </p>
    <p>
      At Babbel and my current company I managed to actively get into
      programming, familiarising myself with AWS and React/Redux and it became
      my favourite thing to use. I am able to work efficiently in a team, follow
      agile principles, improve legacy code, implement new features always
      having a client-first mentality. I improved my understanding of how the
      layers of a large project come together and how they differ from
      microservice infrastructure. Below are listed some technologies I am
      skilled in:
    </p>
    {technologies.map(option => {
      return <li>{option}</li>;
    })}
  </div>
);

export default AboutPage;
