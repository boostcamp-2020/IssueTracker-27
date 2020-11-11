import React from 'react';
import { axios } from '@api';
import { WhiteButton } from '@common/Buttons';
import LabelTileContainer from './style';
import { removeLabelAction } from '../../../contexts';
import LabelForm from '../LabelForm';
import useToggle from '@hooks/useToggle';

const LabelTile = ({ label, labelDispatch }) => {
  const [isLabelShowing, toggleIsLabelShowing] = useToggle(false);

  const deleteLabel = async () => {
    try {
      const { status } = await axios.delete(`api/label/${label.id}`);
      if (status === 200) labelDispatch(removeLabelAction({ id: label.id }));
      else throw Error('Not deleted');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <LabelTileContainer bgcolor={label.color}>
        <div className='label_tile_title'>{label.title}</div>
        <div className='label_tile_description'>{label.description}</div>
        <WhiteButton width='5rem' onClick={toggleIsLabelShowing}>
          Edit
        </WhiteButton>
        <WhiteButton width='5rem' onClick={deleteLabel}>
          Delete
        </WhiteButton>
      </LabelTileContainer>
      {isLabelShowing && (
        <LabelForm
          submitButtonName='Save changes'
          type='updateLabel'
          label={label}
          toggleIsLabelShowing={toggleIsLabelShowing}
        />
      )}
    </>
  );
};

export default LabelTile;
