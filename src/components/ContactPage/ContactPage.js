import React from 'react';
import { useSetTitle } from '../../services/titleservice';
import './ContactPage.scss';

const ContactPage = props => {
  useSetTitle('Contact');
  return (
    <div className="contactPage">
      <div className="title">Contact Me</div>
      <div className="description">
        While I may not be active on all of these accounts, I will see the notifications.
      </div>
      <div className="links">
        <div className="socialSection">
          <div className="subTitle">Social</div>
          {iconPair(
            <i className="fab fa-instagram" />,
            'Instagram',
            'https://www.instagram.com/sidetrail/',
          )}
          {iconPair(<i className="fab fa-twitter" />, 'Twitter', 'https://twitter.com/_Sidetrail')}
          {iconPair(
            <i className="fab fa-flickr" />,
            'Flikr',
            'https://www.flickr.com/photos/188185390@N02/',
          )}
          {iconPair(
            <i className="fab fa-youtube" />,
            'Youtube',
            'https://www.youtube.com/channel/UCPon5JvcOh6hPLQFc6AUvuw',
          )}
        </div>
        <div className="professionalSection">
          <div className="subTitle">Professional</div>
          {iconPair(
            <i className="fab fa-linkedin-in" />,
            'LinkedIn',
            'https://www.linkedin.com/in/john-t-williams/',
          )}
          {iconPair(<i className="fab fa-github" />, 'Sidetrail', 'https://github.com/Sidetrail')}
          {iconPair(
            <i className="far fa-envelope" />,
            'John_Williams@Sidetrail.io',
            'mailto:John_Williams@Sidetrail.io',
          )}
        </div>
      </div>
    </div>
  );
};

const iconPair = (icon, name, url) => (
  <a href={url} className="socialLink" target="_blank" rel="noreferrer noopener">
    <div className="linkIcon">{icon}</div>
    <div className="linkName">{name}</div>
  </a>
);

export default ContactPage;
