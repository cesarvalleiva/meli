import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Header from '../Components/Header';

const Routes = ({search, handlerSearch}) => {
    return ( 
        <Router>
            <Header handleSearch={handlerSearch} />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/products">
                    <Products search={search} />
                </Route>
            </Switch>
        </Router>
     );
}
 
export default Routes;