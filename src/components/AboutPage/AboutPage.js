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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare ullamcorper nunc,
          a aliquet dui tempor a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Praesent posuere eu justo a tempor. Integer bibendum mauris ante,
          et sagittis leo tempus eu. Nullam bibendum, erat eleifend consequat dapibus, mi quam
          congue orci, et sagittis mi dui a turpis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec scelerisque enim ligula, ac pellentesque odio ullamcorper ac.
        </p>
        <p>
          Nunc pulvinar scelerisque quam eget egestas. Aenean vestibulum ipsum posuere turpis
          sodales pharetra. Pellentesque vitae dui velit. Praesent eu hendrerit sem. Nunc sed orci
          pharetra, mollis turpis in, vestibulum ante. Cras dapibus, urna sit amet bibendum
          consequat, mauris mi vehicula ante, bibendum vestibulum quam leo nec risus. Proin maximus
          quis eros quis luctus. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Aliquam erat volutpat. Sed venenatis eu libero faucibus
          accumsan.
        </p>
      </div>
    </div>
    <div className="aboutSection">
      <div className="aboutLeft">
        <h1 className="aboutSectionTitle">About Website</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare ullamcorper nunc, a
        aliquet dui tempor a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Praesent posuere eu justo a tempor. Integer bibendum mauris ante, et
        sagittis leo tempus eu. Nullam bibendum, erat eleifend consequat dapibus, mi quam congue
        orci, et sagittis mi dui a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec scelerisque enim ligula, ac pellentesque odio ullamcorper ac. Nunc pulvinar
        scelerisque quam eget egestas. Aenean vestibulum ipsum posuere turpis sodales pharetra.
        Pellentesque vitae dui velit. Praesent eu hendrerit sem. Nunc sed orci pharetra, mollis
        turpis in, vestibulum ante. Cras dapibus, urna sit amet bibendum consequat, mauris mi
        vehicula ante, bibendum vestibulum quam leo nec risus. Proin maximus quis eros quis luctus.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Aliquam erat volutpat. Sed venenatis eu libero faucibus accumsan.
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
