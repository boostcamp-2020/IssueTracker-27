import React, { useEffect, useState } from 'react';
import ItemBox from '@components/ItemBox';
import LabelTable from '@components/LabelTable'

const LabelPage = () => {
  const [nowLabelIsShow, setLabelIsShow] = useState(false);

  const onClick = () => {
    setLabelIsShow(nowLabelIsShow => !nowLabelIsShow);
  }

  return <ItemBox type={'label'} onClick={onClick}><LabelTable  nowLabelIsShow={nowLabelIsShow}/></ItemBox>;
};

export default LabelPage;
