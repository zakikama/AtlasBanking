import Header from "./components/Header/index";
import SideNavigation from "./components/Sidebar/index";
import { Col, Row } from "reactstrap";
import Home from "./components/Dashboard/Home.js";
import './components/Assets/Styles/App.css'
import Money from  './components/Money/index'
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
          <Money/>
        </div>
       
        </div>
       
      </div>
      
    </>
  );
}
export default App;