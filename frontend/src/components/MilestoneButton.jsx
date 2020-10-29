import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../public/styles/Button';

const MilestoneButton = () => {
  return (<Link to="/milestone"><Button tag>Milestones</Button></Link>);
}

export default MilestoneButton;