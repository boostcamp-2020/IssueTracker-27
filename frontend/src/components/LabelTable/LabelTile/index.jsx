import React from 'react';
import LabelTileContainer from './style';

const LabelTile = ({label}) => {

  return (<LabelTileContainer bgcolor={label.color}>
    <div className="label_tile_title">{label.title}</div>
    <div className="label_tile_description">{label.description}</div>
    <div>Edit</div>
    <div>Delete</div>
  </LabelTileContainer>);

}

export default LabelTile;