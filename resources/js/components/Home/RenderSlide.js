import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const ImgBox = styled.div`
  overflow: hidden;
`;

const ImgBelt = styled.div`
  transition: all 0.4s ease;
  width: ${props => props.width};
  margin-left: ${props => props.marginLeft};
`;
const Img = styled.div`
  float: left;
  width: 100vw;
  height: 50vh;
  background: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const ButtonBox = styled.div`
  > div {
    position: absolute;
    display: flex;
    cursor: pointer;
    &:nth-of-type(1) {
      top: 50%;
      left: 5%;
      transform: translate(-50%, -50%);
    }
    &:nth-of-type(2) {
      top: 50%;
      right: 3%;
      transform: translate(-50%, -50%);
    }
  }
  i {
    color: grey;
    opacity: 0.2;
    transition: all 0.4s ease;
    &:hover {
      color: black;
      opacity: 0.4;
    }
  }
`;

const DotBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Dot = styled.div`
  width: 25px;
  transition: all 0.6s ease
  height: ${props => (props.on ? '12px' : '5px')};
  background: ${props => (props.on ? 'red' : 'black')};
  margin: 0 0.3rem;
`;
const RenderSlide = ({
  page,
  images,
  handleNext,
  handlePrev,
  handleMoveTo,
}) => {
  return (
    <Wrapper>
      <ImgBox>
        <ImgBelt
          width={'100' * images.length + 'vw'}
          marginLeft={'-' + '100' * page + 'vw'}
        >
          {images.map(image => (
            <div key={image.id}>
              <Img url={image.src} />
            </div>
          ))}
        </ImgBelt>
      </ImgBox>
      <ButtonBox>
        <div onClick={() => handlePrev()}>
          <i className="fas fa-chevron-left fa-3x" />
        </div>
        <div onClick={() => handleNext()}>
          <i className="fas fa-chevron-right fa-3x" />
        </div>
      </ButtonBox>
      <DotBox>
        {images.map(image => (
          <Dot
            key={image.id}
            onClick={() => handleMoveTo(image.id)}
            on={page === image.id - 1}
          />
        ))}
      </DotBox>
    </Wrapper>
  );
};

export default RenderSlide;
