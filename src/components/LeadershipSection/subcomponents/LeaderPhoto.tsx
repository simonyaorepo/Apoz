import React from "react";
import styled from "styled-components";

const PhotoHalfTop = styled.div`
  width: 100%;
  height: 125px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
  }
`;

const PhotoHalfBottom = styled.div`
  width: 100%;
  height: 125px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
    transform: translateY(-125px);
  }
`;

interface LeaderPhotoProps {
  photo: string;
  name: string;
  half: 'top' | 'bottom';
}

export const LeaderPhoto: React.FC<LeaderPhotoProps> = ({ photo, name, half }) => {
  const PhotoComponent = half === 'top' ? PhotoHalfTop : PhotoHalfBottom;
  
  return (
    <PhotoComponent>
      <img src={photo} alt={name} />
    </PhotoComponent>
  );
};
