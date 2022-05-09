import React from 'react';

const Country = (props) => {
//    console.log(props.country);

   const {name , population , region ,flag } =props.country;

   const falgStyle = {
       height : '50px'
   }
   const  countryStyle = {
       border : '1px solid red', 
       margin : '20px',
       padding : '20px'
   }
//    console.log(props)
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h1>this is my country name : {name}</h1>
            <img style={falgStyle} src={flag} alt="" />
            <p>population : {population}</p>
            <p><small>region : {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add country</button>

        </div>
    );
};

export default Country;