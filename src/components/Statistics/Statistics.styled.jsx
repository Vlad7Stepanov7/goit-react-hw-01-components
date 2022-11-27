import styled from '@emotion/styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const ContainerStatistics = styled.section`
margin-bottom: 20px;
border: 2px solid #000;
`;

export const Title = styled.h2`
margin: 0;
text-align: center;
fonst-size: 40px
`;

export const Text = styled.span`
font-size: 40px;
`;

export const ListItem = styled.li` 
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-size: 20px;
width: 100px;

background-color: ${getRandomHexColor};
`;