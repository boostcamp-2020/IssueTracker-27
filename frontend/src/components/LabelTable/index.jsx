import React, { useEffect } from 'react';
import { axios } from '../../api';
import { useSelector, useDispatch } from '../../hooks/react-context';
import { loadLabelsAction } from '../../contexts';
import LabelTile from './LabelTile';
import LabelForm from './LabelForm';

const LabelTable = ({ isLabelShowing, toggleIsLabelShowing }) => {
  const labels = useSelector(state => state.label);
  const labelDispatch = useDispatch(dispatch => dispatch.label);
  const getAllLabels = async () => {
    try {
      const res = await axios.get('/api/labels/1');
      labelDispatch(loadLabelsAction(res.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllLabels();
  }, []);

  return (
    <>
      {isLabelShowing && (
        <LabelForm
          submitButtonName='Create Label'
          type='createLabel'
          toggleIsLabelShowing={toggleIsLabelShowing}
        />
      )}
      <div className='label_table_header'>{labels.length} labels</div>
      <ul>
        {labels.length ? (
          labels.map(label => (
            <LabelTile
              key={label.id}
              label={label}
              labelDispatch={labelDispatch}
            />
          ))
        ) : (
          <div>No Labels</div>
        )}
      </ul>
    </>
  );
};

export default LabelTable;
