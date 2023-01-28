import React from 'react';
import whitsundays from './photos/whitsundays.jpg';
import car from './photos/car.jpg';
import smoke from './photos/smoke.jpg';
import gibsons from './photos/gibsons.jpg';

function Travels() {
  return (
    <div className="vert">
      <div className="horiz">
        <img src={smoke} alt="Magnus"></img>
        <img src={gibsons} alt="Gibsons"></img>
      </div>
      <div className="horiz">
        <img src={whitsundays} alt="Whitsundays"></img>
        <img src={car} alt="The Lads"></img>
      </div>
    </div>
  );
}

export default Travels;