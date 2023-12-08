import { Home } from "../pages/Home";
import { Services } from "../pages/Services";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Doctors } from "../pages/Doctors/Doctors";
import { DoctorDetails } from "../pages/Doctors/DoctorDetails";
import { Contact } from "../pages/Contact";
import { Routes, Route } from "react-router-dom";
import MyAccount from "../Dashboard/User/MyAccount";
import Dashboard from "../Dashboard/Doctor/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/auth/signin" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoutes allowedRoles={["patient"]}>
            <MyAccount />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRoutes allowedRoles={["doctor"]}>
            <Dashboard />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
};
