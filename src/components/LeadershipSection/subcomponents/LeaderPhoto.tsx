import React from "react";
import styled from "styled-components";

const PhotoHalfTop = styled.div<{ $mobile?: string }>`
  width: 100%;
  height: 125px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
    display: block;
  }
  
  @media (max-width: 992px) {
    height: ${({ $mobile }) => $mobile === 'full' ? '250px' : '125px'};
  }
`;

const PhotoHalfBottom = styled.div`
  width: 100%;
  height: 125px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
    display: block;
    transform: translateY(-125px);
  }
`;

interface LeaderPhotoProps {
  photo: string;
  name: string;
  half: 'top' | 'bottom';
  mobile?: 'full';
}

export const LeaderPhoto: React.FC<LeaderPhotoProps> = ({ photo, name, half, mobile }) => {
  const PhotoComponent = half === 'top' ? PhotoHalfTop : PhotoHalfBottom;
  
  return (
    <PhotoComponent $mobile={mobile}>
      <img src={photo} alt={name} />
    </PhotoComponent>
  );
};
