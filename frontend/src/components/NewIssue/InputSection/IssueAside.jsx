import React from 'react';
import SideBoxContainer from '../../common/SideBox';

const FirstChild = ({ onClick }) => {
  return (
    <>
      <div className='title'>Assignees</div>
      <div className='setting_btn' onClick={onClick}>
        <i className='fas fa-cog'></i>
      </div>
      <div>Selected</div>
    </>
  );
};

const SecondChild = () => {
  return <p>SECOND!!!</p>;
};

const IssueAside = () => {
  return (
    <SideBoxContainer
      FirstChild={FirstChild}
      SecondChild={SecondChild}
    ></SideBoxContainer>
  );
};

export default IssueAside;
