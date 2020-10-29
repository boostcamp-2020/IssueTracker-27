import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../public/styles/Button';

const LabelButton = () => {
  return (<Link to="/label"><Button tag>Labels</Button></Link>);
}

export default LabelButton;