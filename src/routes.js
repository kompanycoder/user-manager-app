import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UserList from "./components/userList";
import SearchUser from './components/searchUser';
import EditUser from './components/EditUser';
import AppLayout from './App';

const Routes = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path="/users" exact component={UserList} />
        <Route path="/users/:id" exact component={EditUser} />
        <Route path="/search" exact component={SearchUser} />
        <Redirect path="**" to="/users" />
      </Switch>
    </AppLayout>
  );
};

export default Routes;