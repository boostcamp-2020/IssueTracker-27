import React from 'react';
import FilterItem from './FilterItem';
import {
  changeSomeKeyAction,
  resetFilterAction,
  addSomeKeyAction
} from '@contexts';
import { useDispatch, useSelector } from '@hooks/react-context';

const FilterList = () => {
  const filterBaseDispatch = useDispatch(dispatch => dispatch.filterBase);
  const myInfo = useSelector(state => state.myInfo);

  const list = [
    {
      id: 1,
      title: 'Open issues',
      onClick: () => {
        filterBaseDispatch(resetFilterAction());
      }
    },
    {
      id: 2,
      title: 'Your issues',
      onClick: () => {
        filterBaseDispatch(
          changeSomeKeyAction({
            isReset: true,
            key: 'author',
            value: myInfo
          })
        );
      }
    },
    {
      id: 3,
      title: 'Everything assigned to you',
      onClick: () => {
        filterBaseDispatch(
          changeSomeKeyAction({
            isReset: true,
            key: 'assignee',
            value: myInfo
          })
        );
      }
    },
    {
      id: 4,
      title: 'Everything mentioning you',
      onClick: () => {
        console.log('구현 중..');
        // TO DO
        // 댓글을 단 거 체크 해서 해야함
      }
    },
    {
      id: 5,
      title: 'Closed issues',
      onClick: () => {
        filterBaseDispatch(
          changeSomeKeyAction({
            isReset: true,
            key: 'isOpen',
            value: false
          })
        );
      }
    }
  ];
  return (
    <ul className='filter_list'>
      <li className='filter_item'>Filter Issues</li>
      {list.map(item => (
        <FilterItem key={item.id} title={item.title} onClick={item.onClick} />
      ))}
    </ul>
  );
};

export default FilterList;
