import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(24, 22, 21, 0.9);
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

const LoaderSpinner = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 200px;
`;

const Item = styled.div`
  position: absolute;
  border-radius: 50%;
  border-style: solid;
  animation: rotate 3s linear infinite;

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }

  :nth-child(1) {
    width: 100%;
    height: 100%;
    color: rgb(255, 136, 0);
    border-color: currentColor transparent;
    border-width: 2px 2px 0px 0px;
    --deg: -45deg;
    animation-direction: normal;
  }

  :nth-child(2) {
    width: 70%;
    height: 70%;
    color: rgb(245, 211, 21);

    border-color: currentColor transparent;
    border-width: 2px 0px 0px 2px;
    --deg: -135deg;
    animation-direction: reverse;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 50%;
  height: 1px;
  top: 50%;
  left: 50%;
  background-color: transparent;
  transform: rotate(var(--deg));
  transform-origin: left;

  ::before {
    content: '';

    position: absolute;
    top: -5px;
    right: -5px;
    width: 10px;
    height: 10px;

    background-color: currentColor;
    border-radius: 50%;
    box-shadow: 0 0 20px, 0 0 40px, 0 0 60px, 0 0 80px, 0 0 100px,
      0 0 0 5px rgba(255, 255, 0, 0.1);
  }
`;

export { Wrapper, Container, LoaderSpinner, Item, Circle };
