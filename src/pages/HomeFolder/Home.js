import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const MovieTitle = styled.h1`
    padding: 4px;
    margin-left: 35px;
    font-size: 20px;
    color: #182351;

`;

export const Link = styled(NavLink)`
   
    text-decoration: none;
    color: rgb(0, 0, 0);
    font-weight: 500;
`;

export const Lists = styled.ul`   
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 20px;
`;

export const ImageItem = styled.li`
   flex-basis: calc((100% - 60px) / 4);
`;

export const Image = styled.img`
 margin-bottom: 10px;
    transition: background 250ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s, box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    border-radius: 5px;
 
`;