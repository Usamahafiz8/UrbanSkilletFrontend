import React from "react";

const UTopBanner = ({ backgroundImage, text, subheading , styles}) => {
  const bannerStyle = {
    background: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white', // You can customize the text color here
    padding: '20px',
    textAlign: 'center',
    width:"100%",
    
    ...styles
  };

  return (

    <div style={bannerStyle}>
      <div>{text}</div>
      <div>{subheading}</div>
    </div>
  );
};

export default UTopBanner;
