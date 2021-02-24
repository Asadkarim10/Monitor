import React, { useEffect, useState } from 'react';


import {  Image } from 'react-native';


const ImageShow = (props) => {
    const [imgUrlvalid , setImgUrlvalid] = useState(false);
    useEffect(() => {
        fetch(props.url)
        .then(res => {
        if(res.status == 200){
            setImgUrlvalid(true);
        } else{
            setImgUrlvalid(false);
       }
     })
    .catch(err=>{
        setImgUrlvalid(false);
    })


    }, []);

    return (
        <Image
      onError={() => setImgUrlvalid(false)}
      style={props.style ?? {} }
      source={ ( imgUrlvalid ) ?  { uri: props.url } :  require('../assets/Homepage/HomePage-Car.png') }
    />
    )
}



export default ImageShow;