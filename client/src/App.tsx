import { useMemo, FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Page404 from "./pages/Page404";

import { paths } from "./data/paths";
import Profile from "./pages/Profile";
import {get} from "./services/apiCalls";
import Request from "./pages/Request";

function App() {
  get();
  return (
        <BrowserRouter>
          <Routes>
            <Route path={paths.home} element={<Home />} />
            <Route path={paths.login} element={<Login />} />
            <Route path={paths.register} element={<Register />} />
            <Route path={paths.profile} element={<Profile />} />
            <Route path={paths.request} element={<Request />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
