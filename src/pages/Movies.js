import styled from 'styled-components';

// export const Section = styled.header`
//    top: 0;
//   left: 0;
//   position: sticky;
//   z-index: 1100;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 64px;
//   padding-right: 24px;
//   padding-left: 24px;
//   padding-top: 12px;
//   padding-bottom: 12px;
//   color: #fff;
//   background-color: #3f51b5;
//   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//     0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
// `;
export const MovieTitle = styled.h1`
    padding: 4px;
    margin-left: 35px;
    font-size:35px;
    color: #182351;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 15px auto;
  max-width: 600px;
  background-color: #d4d5d8;
  border-radius: 3px;
  overflow: hidden;`


  export const SearchButton = styled.button`
  display: inline-block;
  width: 80px;
  height: 48px;
  border: 0;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  
  &:hover {
  opacity: 1;
}`




export const SearchFormInput = styled.input `
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    background-color: #d4d5d8;
    border: none;
    outline: none;
    padding: 20px;
    
  

&::placeholder {
  font: inherit;
  font-size: 18px;
}`



export const ImageItem = styled.li`
    display:flex;
    justify-content: space-around;
    margin: 15px;
    padding: 20px;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Image = styled.img`
  width: 50%;
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


