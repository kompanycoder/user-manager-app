import React from "react";
import { Switch, Route } from "react-router-dom";
import UserList from "./components/userList";
// import AddUser from './components/viewUser';
import EditUser from './components/EditUser';
import AppLayout from './App';

const Routes = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" exact component={UserList} />
        <Route path="/users/:id" exact component={EditUser} />
        {/* <Route path="/add" exact component={AddUser} /> */}
      </Switch>
    </AppLayout>
  );
};

export default Routes;