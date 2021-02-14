import { Container } from 'react-bootstrap'
import './Products.css'

const Products = ({search}) => {
    return ( 
        <Container>
            <h3>Buscaste: {search} </h3>
        </Container>
     );
}
 
export default Products;