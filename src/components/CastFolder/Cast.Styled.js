import styled from 'styled-components';

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
  height: 200px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const List = styled.ul`
    display: flex;
    flex-flow: row wrap;
    margin: 15px;
    padding: 20px;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Item = styled.li`
    
    margin: 15px;
    padding: 20px;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Info = styled.p`
    padding: 4px;   
    font-size:15px;
    color: #182351;
`;

