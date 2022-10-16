import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/Auth/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Page404 from "./pages/Page404";

import { paths } from "./data/paths";
import Profile from "./pages/Profile";
import Request from "./pages/Request";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.login} element={<Login />} />
          <Route path={paths.register} element={<Register />} />
          <Route path={paths.profile} element={<Profile />} />
          <Route path={paths.request} element={<Request />} />
          <Route path={paths.dashboard} element={<Dashboard />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
