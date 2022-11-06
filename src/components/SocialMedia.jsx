import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div style={{ marginBottom: '25px' }}>
      <a href={'https://github.com/manuetov'} target="_blank" rel="noopener noreferrer"><BsGithub /></a>
    </div>
    <div>
    <a href={'https://www.linkedin.com/in/manuetov'} target="_blank" rel="noopener noreferrer"><BsLinkedin /> </a>
    </div>
  </div>
);

export default SocialMedia;