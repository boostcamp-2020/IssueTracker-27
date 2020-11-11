import React from 'react';
import ProfileContainer from './style';
import { useSelector } from '@hooks/react-context';

const ProfilePicture = () => {
  const myInfo = useSelector(state => state.myInfo);
  const profileUrl =
    myInfo.profileImage ||
    'https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png';

  return (
    <ProfileContainer>
      <img src={profileUrl}></img>
    </ProfileContainer>
  );
};

export default ProfilePicture;
