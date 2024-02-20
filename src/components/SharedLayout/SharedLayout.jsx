import { Outlet } from 'react-router-dom';
import { Container, Header, Menu, Link, Box } from './SharedLayout.styled';
import './SharedLayout.css';
import image1 from '../../images/notebook.png';
import image2 from '../../images/shopping-cart1.png';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        {/* <h1>Shopping record app</h1> */}

        <img src={image1} alt="notebook with pencil" className="title-image" />
        <h1 className="h1-title"> Aplicatie de evidenta a cumparaturilor</h1>
        <img src={image2} alt="shopping cart" className="title-image" />
      </Header>
      <Menu>
        <Link to="/" end>
          Creare lista
        </Link>
        <Link to="/receipt">Introducere bon</Link>
        <Link to="/data">Gestionare date</Link>
        <Link to="/statistics">Statistici</Link>
        <Link to="/about">Despre...</Link>
      </Menu>
      <Box>
        <Outlet />
      </Box>
    </Container>
  );
};
