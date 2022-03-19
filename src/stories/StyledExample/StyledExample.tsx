import styled from 'styled-components';

const StyledExample: React.FC<{ bgColor?: string }> = ({
  bgColor = 'blue',
}) => {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const Wrapper = styled.section`
    padding: 4em;
    background: pink;
  `;

  const WrapperFirstApproach = styled(Wrapper)`
    background: ${bgColor};
  `;

  const WrapperSecondApproach = styled(Wrapper)<{ bgCol: string }>`
    background: ${({ bgCol }) => bgCol};
  `;

  return (
    <>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <WrapperFirstApproach>
        <Title>Extending style - first approach!</Title>
      </WrapperFirstApproach>
      <WrapperSecondApproach bgCol="rebeccapurple">
        <Title>Extending style - second approach!</Title>
      </WrapperSecondApproach>
    </>
  );
};

export default StyledExample;
