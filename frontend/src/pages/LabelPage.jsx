import React from 'react';
import ItemBox from '@components/ItemBox';
import LabelTable from '@components/LabelTable';
import useToggle from '@hooks/useToggle';

const LabelPage = () => {
  const [isLabelShowing, toggleIsLabelShowing] = useToggle(false);

  return (
    <ItemBox type={'label'} onClick={toggleIsLabelShowing}>
      <LabelTable
        isLabelShowing={isLabelShowing}
        toggleIsLabelShowing={toggleIsLabelShowing}
      />
    </ItemBox>
  );
};

export default LabelPage;
