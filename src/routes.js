import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UserList from "./components/userList";
import SearchUser from './components/searchUser';
import EditUser from './components/EditUser';
import AppLayout from './App';

const AppRoutes = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" exact element={<UserList />} />
        <Route path="/" element={<Navigate to="/users" element={<UserList />}  />} />
        <Route path="/users/:id" exact element={<EditUser />} />
        <Route path="/search" exact element={<SearchUser/>} />
        {/* look into this  */}
        <Route path="*/*" element={ <Navigate replace to="/users"  />}  />
      </Routes>
    </AppLayout>
  );
};

export default AppRoutes;