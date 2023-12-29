
import styled from 'styled-components';
import { boxShadow } from 'styled/veriableStyle';


export const List = styled.ul`
width: calc((100% - (3 * 35px)) / 4);
 list-style-type: none;
 margin:0;
   display: flex;
  flex-direction: column;
  gap: 10px;
  

  padding: 15px;

  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 15px;

  text-align: center;
  font-size: 20px;

  background-color: #fafcffee;
  box-shadow: ${boxShadow};

  overflow: hidden;
  min-width: min-content;
`;

export const Item = styled.li`
list-style-type: none;
  display: flex;
  width:300px
  align-items: center;

  padding: 5px 15px;

  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  box-shadow: ${boxShadow};
`;
export const Status = styled.span`
width: 30px;
  height: 30px;
  border-radius: 15px;
   background-color: ${({ status }) => (status ? 'green' : 'red')};
`;

export const Avatar = styled.img`
   margin: 0 15px;
    width: 70px;
  height: 70px;
`;
export const Name = styled.p`
  font-size: 22px;
  font-weight: 700;
`;