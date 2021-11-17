// import './Snack.css';
import React from 'react';

function Snack({imgUrl, altText, imageName}) {
  return (
    <>
      {/*return a snack pic*/}
      <div>
        <img src={imgUrl} alt={altText} width="500" height="600"></img>
      </div>
    </>
  );
}

export default Snack;
