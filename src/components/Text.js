import React from "react";
import styled from "styled-components";

const Text = ({
  font = "Pretendard-Regular",
  weight = 400,
  size = 20,
  color = "black",
  children,
}) => {
  return (
    <StyledText font={font} size={size} color={color} weight={weight}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.span`
  font-family: ${({ font }) => font};
  font-size: ${({ size }) => `${size}px`};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
`;

export default Text;
