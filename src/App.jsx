import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicLayout } from "./components/layout";
import { Home } from "./pages/home";
import LoginPage from "./pages/login";
import ContactUs from "./pages/contactUs";
import RegisterPage from "./pages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<PublicLayout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/contactus"} element={<ContactUs />} />
        </Route>
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
