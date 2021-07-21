import { FC } from "react";
import MasonryLayout from "react-masonry-css";
import styled from "styled-components";

const StyledMasonry = styled(MasonryLayout)`
  display: flex;
  width: auto;
  gap: 20px;

  div {
    margin-bottom: 20px;
  }
`;

export const Masonry: FC = ({ children }) => {
  return (
    <>
      <StyledMasonry
        breakpointCols={4}
        className="Masonry"
        columnClassName="Masonry-Column"
      >
        {children}
      </StyledMasonry>
    </>
  );
};
