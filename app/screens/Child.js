import React, { Component, useRef } from 'react';
//import withStyles from 'isomorphic-style-loader/lib/withStyles'
//import s from './Child.css'

class OtherClass extends Component {
    functionWithoutArg = () => {
      //function to be called from default class (without args)
      alert('Function Called Without Argument ');
    };
  
    functionWithArg = Value => {
      //function to called from default class (with args)
      alert(Value);
    };
  }

  export default OtherClass;