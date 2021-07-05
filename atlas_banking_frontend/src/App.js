import Header from "./components/Header/index";
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
import { Dashboard } from "@material-ui/icons";
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
    <>
    <Row>
      <Col>
        <Header/>
      </Col>
    </Row>
    <div style={styles.contentDiv}>
      <SideNavigation></SideNavigation>
      <div style={styles.contentMargin}>
      
      <div className="container">
        <Home/>
        
      </div>
     
      </div>
     
    </div>
    
  </>
  );
}
export default App;