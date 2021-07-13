import React from 'react';
import './AboutPage.scss';

const AboutPage = props => (
  <div className="aboutPage">
    <div className="aboutSection">
      <div className="aboutLeft">
        <img
          src="https://i.imgur.com/9Beeo55.jpg"
          className="aboutImage"
          alt="Me finishing the Appalachian Trail at Mount Katahdin"
        />
      </div>
      <div className="aboutRight">
        <h1 className="aboutSectionTitle">About Me</h1>
        <p>
          My name is John Williams and I am a Software Engineer and eclectic hobbyist always looking for new things to do and new adventures to go on.
        </p>
        <h4 className="aboutSectionTitle">Work</h4>
        <p>
          I am a Senior Software Engineer focused on the full stack of applicaiton development from project management and user experience design to 
          cloud deployments and production monitoring. My goal is to be competent at everything required to build an applicaiton in order to
          solve whatever problem I come across.
        </p>
        <h4 className="aboutSectionTitle">Hobby</h4>
        <p>
          I have many different hobbies ranging from very outdoorsy activities like backpacking and landscape photography to very indoorsy activities like video editing and model building.
          </p>
          <p>These hobbies come in waves, so one week I may post new photos every day and then might not post again for months. I rotate through them as my mood changes or they become convienient to do.</p>
      </div>
    </div>
    <div className="aboutSection">
      <div className="aboutLeft">
        <h1 className="aboutSectionTitle">About Website</h1>
        This website is both a portfolio website for my software engineering skills and
        photography, as well as a sandbox for me to play around with. I have plenty of grandiose
        plans for the future, including a blog, and some fun little proof-of-concept apps. I also
        grabbed this domain for the email routing, when you have a extremely common name like mine
        getting an email that won't get me made fun of is difficult, and buying a domain goes right
        around that. There are only so many number/letter replacements you can go through before
        things start to get silly.
        <br />
        <br />I don't plan to update this site too much, as it's usefullness to me is limited since
        I don't actually need a portfolio website in my line of work. However if you see something
        broken (how embarrassing) feel free to reach out to me via{' '}
        <a className="emailLink" href="mailto:john_williams@sidetrail.io">
          email here
        </a>
        <h4 className="aboutSectionTitle">What/Who is Sidetrail?</h4>
        That's me, it was my trail name during my Appalachian Trail thru-hike in 2016. It's a
        relatively unique name so I've grabbed all the online handles for it that I could. I got the
        name because I would always take the optional blue-blazed trails, usually to some scenic
        overlook or waterfall or something similar.
      </div>
      <div className="aboutRight">
        <img
          src="https://i.imgur.com/9Beeo55.jpg"
          className="aboutImage"
          alt="Me finishing the Appalachian Trail at Mount Katahdin"
        />
      </div>
    </div>
  </div>
);

export default AboutPage;
