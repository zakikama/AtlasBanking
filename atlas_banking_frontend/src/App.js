import Header from "./components/Header/index";
import { Container } from "react-bootstrap";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { Link } from 'react-router-dom'
import SideNavigation from "./components/Sidebar/index";
import { Col, Row } from "reactstrap";
import Footer from './components/Footer/index'
import Home from "./components/Dashboard/Home.js";
import './components/Assets/Styles/App.css'
import Money from  './components/Money/index'
import Account from './components/Accounts/index'
import Transactions from './components/Add_transaction/index'
import About from './components/AboutUs/index'
import Admin from './components/admin/index'
import TransactionsHistory from './components/Transactions/index'
function App() {
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "0px",
      width: "100%",
    },
  };
  return (
    
    <Router>
    <Row>
      <Col>
        <Header/>
      </Col>
    </Row>
    <div style={styles.contentDiv}>
      <SideNavigation></SideNavigation>
      <div style={styles.contentMargin}>
        
      <div className="container">
       
       
          <Route path="/dashboard" component={Home}  />
          <Route path="/Accounts" component={Account}  />
          <Route path="/Transactions" component={TransactionsHistory}  />
          <Route path="/Transfer" component={Transactions}  />
          <Route path="/About" component={About}  />
          <Route path="/Admin" component={Admin}  />
        
      
        
      </div>
     
      </div>
     
    </div>
    </Router>  
 
  );
}
export default App;