import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import server from '../setUpTest';
import { WhiteButton } from '../components/common/Buttons';
import LabelTable from '../components/LabelTable';
// import Axios from 'axios';
import { axios } from '../api';
import { rest } from 'msw';
import MainContext from '../contexts';

test('지정한 속성을 가진 WhiteButton을 렌더링한다.', () => {
  render(<WhiteButton width='5rem'>화이트버튼</WhiteButton>);

  const whiteButton = screen.getByText('화이트버튼');
  expect(whiteButton).toBeInTheDocument('화이트버튼');
  expect(whiteButton).toHaveStyle({
    backgroundColor: '#ffffff',
    width: '5rem'
  });
});

const fetchData1 = async () => {
  try {
    // const { data } = await Axios.get('http://127.0.0.1:5000/label/1');
    const { data } = await axios.get('/api/label/1');
    return data;
  } catch (error) {
    console.error(error);
  }
};

const fetchData2 = async () => {
  try {
    // const { data } = await Axios.get('http://127.0.0.1:5000/label/1');
    const { data } = await axios.get('/api/labels/1');
    return data;
  } catch (error) {
    console.error(error);
  }
};

test('API GET LABEL TEST', async () => {
  const label = await fetchData1();
  expect(label).toEqual({
    id: 1,
    title: 'bug',
    description: "Something isn't working",
    color: '#cf0000',
    issueTrackerId: 1
  });
});

test('API GET LABELS TEST', async () => {
  const label = await fetchData2();
  expect(label.length).toEqual(3);
});

test('LABELTABLE', async () => {
  render(
    <MainContext>
      <LabelTable isLabelShowing={false} toggleIsLabelShowing />
    </MainContext>
  );
  await waitFor(() => screen.getByText('bug'));
});
