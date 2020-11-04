import React from 'react';
import useInputChange from '@hooks/useInputChange';
import { axios } from '@api';
import { RedButton, GreenButton } from '@common/Buttons';
import { useMainState } from '@contexts/MainContext';
import { useHistory } from 'react-router-dom';
import IssueFormContainer from './style';

const IssueForm = ({ additionalInfo }) => {
  const [title, changeTitle] = useInputChange('');
  const [description, changeDescription] = useInputChange('');
  const { myInfo } = useMainState();
  const history = useHistory();

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
      <textarea
        value={description}
        onChange={changeDescription}
        placeholder='Leave a comment'
      ></textarea>
      <div className='issue_form_btns'>
        <RedButton width='6rem'>Cancel</RedButton>
        <GreenButton width='11rem'>Sumit new issue</GreenButton>
      </div>
    </IssueFormContainer>
  );
};

export default IssueForm;
