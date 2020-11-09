import React from 'react';
import { useMainState } from '@contexts/MainContext';
import LabelTile from './LabelTile';
import NewLabelForm from './NewLabelForm';

const LabelTable = ({ newLabelIsShow }) => {
  const { labels } = useMainState();

  return (
    <>
      {newLabelIsShow && <NewLabelForm />}
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
