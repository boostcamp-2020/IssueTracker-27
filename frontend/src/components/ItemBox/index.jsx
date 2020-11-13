import React from 'react';
import ItemHeader from './ItemHeader';
import ItemTable from './ItemTable';

const ItemBox = ({ type, onClick, children }) => {
  return (
    <>
      <ItemHeader type={type} onClick={onClick} />
      <ItemTable type={type} children={children} />
    </>
  );
};

export default ItemBox;
