import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
`;

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const AboutVideo: React.FC = () => {
  return (
    <VideoContainer>
      <VideoWrapper>
        <VideoIframe
          src="https://drive.google.com/file/d/1j8KMJ-fWVsQtqdaopfwYG8ujN8blj_N8/preview"
          allow="autoplay"
          allowFullScreen
        />
      </VideoWrapper>
    </VideoContainer>
  );
};

export default AboutVideo;
