import { Outlet } from 'react-router-dom'; 
import { Suspense } from "react";
import { Container, Header, Link } from '../AppFolder/App.Styled';
import { Loader } from 'components/Loader/Loader.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export const SharedLayout = () => { 
    return (
         <Container>
            <Header>
                <nav>
                    <Link to="/" end>Home</Link>
                    <Link to="/movies">Movies</Link>         
                </nav>
            </Header>  
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>         
            <ToastContainer autoClose={2000} />   
        </Container> 
    )
   
}


 



















