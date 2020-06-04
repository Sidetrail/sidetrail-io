import React from 'react';
import { Link } from 'react-router-dom';
import { useSetTitle } from '../../services/titleservice';
import './ContactPage.scss';

const ContactPage = props => {
  useSetTitle('Contact');
  return (
    <div className="contactPage">
      <div>Contact Me</div>
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
        <i className="fab fa-reddit" />,
        'Reddit',
        'https://old.reddit.com/user/Sidetrail/',
      )}
      {iconPair(
        <i className="fab fa-youtube" />,
        'Youtube',
        'https://www.youtube.com/channel/UCPon5JvcOh6hPLQFc6AUvuw',
      )}
      {iconPair(
        <i className="fab fa-linkedin-in" />,
        'LinkedIn',
        'https://www.linkedin.com/in/john-t-williams/',
      )}
      {iconPair(
        <i className="far fa-envelope" />,
        'John_Williams@Sidetrail.io',
        'mailto:John_Williams@Sidetrail.io',
      )}
      {iconPair(<i className="fab fa-github" />, 'Sidetrail', 'https://github.com/Sidetrail')}
    </div>
  );
};

const iconPair = (icon, name, url) => (
  <a href={url}>
    <div>{icon}</div>
    <div>{name}</div>
  </a>
);

export default ContactPage;
