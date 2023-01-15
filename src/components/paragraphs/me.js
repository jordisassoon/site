import React from 'react';
import profile from './photos/profile.JPEG'
import surfer from './photos/surfer.jpg'

function Me() {
  const text = 
  "I might be busy studying, working, traveling or artsy-ing." + "\n" +
  "Most of the time though, it's a combination or everything." + "\n\n" +
  "Computer Science head, focused on building a future in research." + "\n" +
  "Check out the projects for my latest endeavours." + "\n\n" +
  "Take care,\nJordan Sassoon"
  return (
    <div className="vert">
      {text}
      <div className="horiz">
        <img src={profile} alt="Profile"></img>
        <img src={surfer} alt="Surfer"></img>
      </div>
    </div>
  );
}

export default Me;