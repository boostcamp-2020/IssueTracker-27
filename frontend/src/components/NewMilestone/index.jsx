import React, { useEffect, useState } from 'react';
import useInputChange from '@hooks/useInputChange';
import { GreenButton } from '@common/Buttons';

const NewMilestone = () => {
  const [title, changeTitle] = useInputChange('');
  const [isDisabled, setisDisabled] = useState(true);
  useEffect(() => {
    if (title.length) setisDisabled(false);
    else setisDisabled(true);
  }, [title]);

  const onSubmit = async e => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>New milestone</h1>
      <p>
        Create a new milestone to help organize your issues and pull requests.
        Learn more about milestones and issues.
      </p>
      <div>
        <div>Title</div>
        <input value={title} onChange={changeTitle} placeholder='Title'></input>
      </div>
      <div>
        <div>Due date (optional)</div>
        <input type='date' name='milestone' />
      </div>
      <div>
        <div>Description (optional)</div>
        <textarea id='story' name='story' rows='5' cols='33' />
      </div>
      <GreenButton width='11rem' disabled={isDisabled}>
        Create Milestone
      </GreenButton>
    </form>
  );
};

export default NewMilestone;
