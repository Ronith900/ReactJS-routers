import React from "react";
import SideBar from './sidebar';
import Route from "react-router-dom/Route";
import Users from './users';
import Posts from './posts';


const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar/>
      {/* <Route path="/admin/users" component={Users}></Route> */}
      
    </div>
  );
};

export default Dashboard;