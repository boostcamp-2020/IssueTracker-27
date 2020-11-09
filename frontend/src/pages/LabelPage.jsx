import React, { useEffect, useState } from 'react';
import ItemBox from '@components/ItemBox';
import LabelTable from '@components/LabelTable'

const LabelPage = () => {
  const [newLabelIsShow, setLabelIsShow] = useState(false);

  const onClick = () => {
    setLabelIsShow(newLabelIsShow => !newLabelIsShow);
  }

  return <ItemBox type={'label'} onClick={onClick}><LabelTable  newLabelIsShow={newLabelIsShow}/></ItemBox>;
};

export default LabelPage;
