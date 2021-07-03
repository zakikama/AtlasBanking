import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "../Assets/Styles/custom.scss";
import Footer from "../Footer/index";
import { Link } from "react-router-dom";
const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);
  // added styles 
  const styles = {
    sideBarHeight: {
      height: "100vh",
    },
    menuIcon: {
      float: "right",
      margin: "10px",
    },
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
      <SidebarHeader>
        
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
          
          <AiOutlineMenu />
        </div>
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem icon={<DashboardOutlinedIcon/>}> Dashboard</MenuItem>
        <MenuItem icon={<AccountBalanceOutlinedIcon />}>Accounts</MenuItem>
        <MenuItem icon={<MonetizationOnOutlinedIcon />}>Transactions</MenuItem>
        <MenuItem icon={<SendOutlinedIcon />}>Transfer</MenuItem>
        <MenuItem icon={<SupervisorAccountOutlinedIcon />}>Administration</MenuItem>
        <MenuItem icon={<HelpOutlineOutlinedIcon />}>Help</MenuItem>
        <MenuItem icon={<InfoOutlinedIcon />}>About Us</MenuItem>
      </Menu>
      <Footer/> 
    </ProSidebar>
  );
};
export default SideNavigation;