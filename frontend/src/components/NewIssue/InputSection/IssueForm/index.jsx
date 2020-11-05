import React, { useEffect, useState, useCallback, useRef } from 'react';
import useInputChange from '@hooks/useInputChange';
import { axios } from '@api';
import { RedButton, GreenButton } from '@common/Buttons';
import useMyInfo from '@hooks/useMyInfo';
import { useHistory } from 'react-router-dom';
import IssueFormContainer from './style';
import useDebouncer from './useDebouncer';

const IssueForm = ({ additionalInfo }) => {
  const [title, changeTitle] = useInputChange('');
  const [description, changeDescription] = useInputChange('');
  const [isDisabled, setisDisabled] = useState(true);
  const [showTextLength, setShowTextLength] = useState(false);
  const myInfo = useMyInfo();
  const history = useHistory();

  useDebouncer({ description, showTextLength, setShowTextLength });

  useEffect(() => {
    if (title.length) setisDisabled(false);
    else setisDisabled(true);
  }, [title]);

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const labelIds = additionalInfo.labels.map(label => label.id);
      const assigneeIds = additionalInfo.assignees.map(assignee => assignee.id);
      const milestone = additionalInfo.milestone?.id;
      const body = {
        joinUserId: myInfo.joinUserId,
        issueTrackerId: 1,
        title,
        description,
        milestone,
        labelIds,
        assigneeIds
      };
      const response = await axios.post('/api/issue', body);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <IssueFormContainer onSubmit={onSubmit}>
      <input value={title} onChange={changeTitle} placeholder='Title'></input>
      <div className='issue_form_text_area'>
        <textarea
          value={description}
          onChange={changeDescription}
          placeholder='Leave a comment'
        />
        <div className='issue_form_character_length'>
          {showTextLength && `${description.length} characters`}
        </div>
      </div>
      <div className='issue_form_btns'>
        <RedButton width='6rem' type='button'>
          Cancel
        </RedButton>
        <GreenButton width='11rem' disabled={isDisabled}>
          Submit new issue
        </GreenButton>
      </div>
    </IssueFormContainer>
  );
};

export default IssueForm;
