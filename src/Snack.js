// import './Snack.css';
import React from 'react';

function Snack({imgUrl, altText, imageName}) {
  return (
    <>
      {/*return a snack pic*/}
      <img src={imgUrl} alt={altText} width="500" height="600">{imageName}</img>
    </>
  );
}

export default Snack;
