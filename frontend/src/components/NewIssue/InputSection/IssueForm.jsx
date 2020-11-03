import React from 'react';
import useInputChange from '@hooks/useInputChange';
import { axios } from '@api';
import { GreenButton } from '@common/Buttons';
import { useMainState } from '@contexts/MainContext';
import { useHistory } from 'react-router-dom';

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
      history.push('/main');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={title} onChange={changeTitle}></input>
      <textarea value={description} onChange={changeDescription}></textarea>
      <button>Cancel</button>
      <GreenButton width='200px'>Sumbit new issue</GreenButton>
    </form>
  );
};

export default IssueForm;
