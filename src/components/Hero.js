import React from "react";
import NavButton from "./NavButton";

function Hero() {
  return (
    
      <div className="col-12">
        <div className="row  align-items-center">
          <div className="col-4">
          <h1>End The Struggle !!</h1>
        <p>Try ALGOs</p>
        <p>
          Always struggled to learn difficult algorithms. Don’t worry anymore
          ALGOs is here to help you grab the most difficult concepts in the most
          simple way
        </p>
        <NavButton url="algorithms" samepage text='learn now' />
          </div>
        </div>
      </div>
    
  );
}

export default Hero;
