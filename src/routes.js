import React from "react";
import { Switch, Route } from "react-router-dom";
import UserList from "./components/userList";
import AddUser from './components/addUser';
import ViewUser from './components/viewUser';
import AppLayout from './App';
const Routes = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" exact component={UserList} />
        <Route path="/users/:id" exact component={ViewUser} />
        <Route path="/users" exact component={UserList} />
        <Route path="/users/add" exact component={AddUser} />
      </Switch>
    </AppLayout>
  );
};

export default Routes;