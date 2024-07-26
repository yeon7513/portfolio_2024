import styled from 'styled-components';

export const Circle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: 90px 0 20px;
`;

export const Article = styled.article`
  width: 100%;
  height: 100vh;
  /* media - tablet */
  @media screen and (max-width: 1023px) {
    height: auto;
  }

  /* media - mobile */
  @media screen and (max-width: 767px) {
  }
`;

export const HomeContent = styled(Article)`
  height: calc(100vh - 90px);
  /* media - tablet */
  @media screen and (max-width: 1023px) {
    height: auto;
  }

  /* media - mobile */
  @media screen and (max-width: 767px) {
  }
`;

export const Title = styled.h2`
  margin-bottom: 50px;
  font-family: 'Cafe24Supermagic-Bold-v1.0';
  font-size: 100px;
  font-style: italic;
  text-align: right;
  text-transform: uppercase;
  color: #b67352;
  &:after {
    content: '';
    opacity: 0.5;
    display: block;
    width: 100%;
    height: 3px;
    background: repeating-linear-gradient(
      to right,
      #b67352,
      #b67352 5px,
      transparent 5px,
      transparent 10px
    );
    transform: skew(-30deg);
  }
`;

export const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  gap: 20px;
  margin: 0 auto;
  max-width: 75rem;
  height: 100%;

  /* media - tablet */
  @media screen and (max-width: 1023px) {
    flex-wrap: nowrap;
    max-width: 50rem;
    height: auto;
  }

  /* media - mobile */
  @media screen and (max-width: 767px) {
  }
`;
