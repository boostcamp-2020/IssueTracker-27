import React from 'react';
import { useLabelState } from '@contexts';
import LabelTile from './LabelTile';
import NewLabelForm from './NewLabelForm';

const LabelTable = ({ nowLabelIsShow }) => {
  const labels = useLabelState();

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
