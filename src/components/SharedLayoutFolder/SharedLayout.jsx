import { Outlet } from 'react-router-dom'; 
import { Suspense } from "react";
import { Container, Header, Link } from '../AppFolder/App.Styled';
// import { GlobalStyle } from 'GlobalStyles';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export const SharedLayout = () => {
    <Container>
        <Header>
            <nav>
                <Link to="/" end>Home</Link>
                <Link to="/movies">Movies</Link>         
            </nav>
        </Header>  
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense> 
       {/* <GlobalStyle />
       <ToastContainer autoClose={2000} />   */}
    </Container> 
}
 



















