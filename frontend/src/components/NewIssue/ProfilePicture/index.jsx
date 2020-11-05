import React from 'react';
import { useMainState } from '@contexts/MainContext';
import ProfileContainer from './style';
import useMyInfo from '@hooks/useMyInfo';

const ProfilePicture = () => {
  const myInfo = useMyInfo();
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
