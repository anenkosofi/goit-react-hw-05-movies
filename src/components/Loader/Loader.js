import {
  Wrapper,
  Container,
  LoaderSpinner,
  Item,
  Circle,
} from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <Container>
        <LoaderSpinner>
          <Item>
            <Circle></Circle>
          </Item>
          <Item>
            <Circle></Circle>
          </Item>
        </LoaderSpinner>
      </Container>
    </Wrapper>
  );
};
