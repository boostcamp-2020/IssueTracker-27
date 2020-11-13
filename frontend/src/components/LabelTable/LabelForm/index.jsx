import React, { useState } from 'react';
import { axios } from '../../../api';
import useInputChange from '../../../hooks/useInputChange';
import { LabelFormContainer, LabelPreview } from './style';
import { GreenButton, WhiteButton } from '../../common/Buttons';
import { useDispatch } from '../../../hooks/react-context';
import {
  addLabelAction,
  updateLabelAction
} from '../../../contexts/LabelContext';

const LabelForm = ({ submitButtonName, type, label, toggleIsLabelShowing }) => {
  const [labelTitle, changeLabelTitle] = useInputChange(
    label ? label.title : ''
  );
  const [labelDescription, changeLabelDescription] = useInputChange(
    label ? label.description : ''
  );
  const [labelColor, setLabelColor] = useState(label ? label.color : '#bfd4f2');
  const labelDispatch = useDispatch(dispatch => dispatch.label);

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const body = {
        title: labelTitle,
        description: labelDescription,
        color: labelColor,
        issueTrackerId: 1
      };

      if (type === 'createLabel') {
        const { data } = await axios.post('api/label', body);
        labelDispatch(addLabelAction(data.newLabel));
        toggleIsLabelShowing();
      } else {
        const { status } = await axios.patch(`api/label/${label.id}`, body);
        if (status === 200) {
          const updatedLabel = {
            id: label.id,
            title: labelTitle,
            description: labelDescription,
            color: labelColor
          };
          labelDispatch(updateLabelAction(updatedLabel));
          toggleIsLabelShowing();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getRandomColor = () => {
    const letters = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeColor = () => {
    setLabelColor(getRandomColor());
  };

  return (
    <LabelFormContainer onSubmit={onSubmit}>
      <LabelPreview bgcolor={labelColor}>
        {labelTitle ? labelTitle : 'Label Preview'}
      </LabelPreview>
      <div className='label_input'>
        <div className='label_input_group'>
          <label htmlFor='label_title'>Label name</label>
          <input
            id='label_title'
            value={labelTitle}
            onChange={changeLabelTitle}
            placeholder='Label name'
          />
        </div>
        <div className='label_input_group'>
          <label htmlFor='label_description'>Description</label>
          <input
            id='label_description'
            value={labelDescription}
            onChange={changeLabelDescription}
            placeholder='Description (optional)'
          />
        </div>
        <div className='label_input_group'>
          <label>Color</label>
          <div className='label_color_selector'>
            <button type='button' onClick={changeColor}>
              change
            </button>
            <div>{labelColor}</div>
          </div>
        </div>
        <WhiteButton width='5rem' onClick={() => {}}>
          Cancel
        </WhiteButton>
        <GreenButton width='5rem'>{submitButtonName}</GreenButton>
      </div>
    </LabelFormContainer>
  );
};

export default LabelForm;
