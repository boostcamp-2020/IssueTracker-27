import React from 'react';
import ItemTableContainer from './style';
import { GreenButton, TagButton } from '@common/Buttons';
import { Link } from 'react-router-dom';

const ItemTable = ({ type, children }) => {
  return <ItemTableContainer>{children}</ItemTableContainer>;
};

export default ItemTable;
