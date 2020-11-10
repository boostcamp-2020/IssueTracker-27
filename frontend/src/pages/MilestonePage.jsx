import React, { useEffect, useState } from 'react';
import ItemBox from '@components/ItemBox';
import MileStoneTable from '@components/MileStoneTable'

const MilestonePage = () => {
  return <ItemBox type={'milestone'}><MileStoneTable/></ItemBox>;
};

export default MilestonePage;
