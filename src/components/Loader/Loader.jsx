import { Container } from './Loader.styled';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Container>
      <ThreeDots
        color="rgba(52, 112, 255, 1)"
        // strokeWidth="5"
        // animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Container>
  );
};
