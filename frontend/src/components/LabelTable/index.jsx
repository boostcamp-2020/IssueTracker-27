import React from 'react';
import { useSelector } from '@hooks/react-context';
import LabelTile from './LabelTile';
import NewLabelForm from './NewLabelForm';

const LabelTable = ({ nowLabelIsShow }) => {
  const labels = useSelector(state => state.label);

  return (
    <>
      {nowLabelIsShow && <NewLabelForm />}
      <div className='label_table_header'>{labels.length} labels</div>
      <ul>
        {labels.length ? (
          labels.map(label => <LabelTile key={label.id} label={label} />)
        ) : (
          <div>No Labels</div>
        )}
      </ul>
    </>
  );
};

export default LabelTable;
