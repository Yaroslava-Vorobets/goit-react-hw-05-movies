import styled from 'styled-components';


export const Main = styled.main`   
    padding: 20px;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const MovieTitle = styled.h1`
    padding: 4px;   
    font-size:35px;
    color: #182351;
`;

export const SecondaryTitle = styled.h2`
    padding: 4px;  
    font-size:25px;
    color: #182351;
`;

 export const BackButton = styled.button`
  display: inline-block;
  width: 80px;
  height: 48px;
  margin-top: 15px;
  border: 0;
  border-radius: 4px;
  background-color: #3f51b5;
  background-position: center; 
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  
  &:hover {
  color: white;
  background-color: orangered;
 
}`

export const Card = styled.div`
    display:flex;
    justify-content: space-around;
    margin: 15px;
    padding: 20px;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

// export const Cover = styled.div`
//   margin-left: 35px;
 
  
// `;
export const Wrap= styled.div`
  width: 50%;
  border-radius: 10px;
  height: 400px;
 
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:last-child{
     margin-left: 20px;
}
  &:hover,
  &:focus {
    transform: scale(1.03);
    cursor: zoom-in;
  }`

  export const List = styled.ul`   
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 20px;
    color: #182351;
`;


export const Image = styled.img`
  width: 420px;
  border-radius: 10px;
  height: 400px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;