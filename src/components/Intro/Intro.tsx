import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import "./Intro.css";

interface ContainerProps {
  showAnimation?: boolean;
}

const Intro: React.FC<ContainerProps> = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Start the animation after a 2-second delay
    const animationTimeout = setTimeout(() => {
      setShowAnimation(true);
    }, 3500);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <Container showAnimation={showAnimation}>
      <CenteredText className="introText">
        <h1>
          <span>D</span>
          <span>D</span>
          <span>L</span>
          <span>&nbsp;&nbsp;</span>
          <span>A</span>
          <span>r</span>
          <span>q</span>
          <span>u</span>
          <span>i</span>
          <span>t</span>
          <span>e</span>
          <span>c</span>
          <span>t</span>
          <span>o</span>
          <span>s</span>
        </h1>
      </CenteredText>
    </Container>
  );
};

const CenteredText = styled.div`
  color: white;
  font-size: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%; /* Ensures vertical centering */
`;

const coverDisappear = keyframes`
  0% {
    transform: translateY(0%);
    opacity: 1;
  }
  60% {
    transform: translateY(-100%);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000fc;
  z-index: 10000;
  animation: ${({ showAnimation }) => (showAnimation ? coverDisappear : "none")}
    2s ease-in-out;
`;

export default Intro;
