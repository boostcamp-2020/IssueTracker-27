import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../public/styles/Button';

const GreenButton = ({buttonText}) => {
  return(<Link to='/new-issue'><Button>{buttonText}</Button></Link>);
}

export default GreenButton;