import styled from '@emotion/styled';

export const ListItem = styled.li` 
display: flex;
justifly-content: center;
align-items: center;
margin-bottom: 10px;
`;

export const Status = styled.span`
margin-right: 15px;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${p => {
    switch (p.isOnline) {
        case true:
            return 'green';
        case false:
            return 'red';
        default:
            return 'black';
    }
}};
`;