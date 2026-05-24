import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import Landing from "../pages/Landing"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard"



const AppRoutes = () => {

const token = localStorage.getItem("token")



  return (

    <Routes>

      {/* Landing Page */}

      <Route
        path="/"
        element={<Landing />}
      />



      {/* Login */}
<Route
  path="/login"
  element={<Login />}
/>



      {/* Register */}

      <Route
        path="/register"
        element={
        
            <Register />
        }
      />



      {/* Protected Dashboard */}

      <Route
        path="/dashboard"
        element={
          token
            ? <Dashboard />
            : <Navigate to="/login" />
        }
      />



      {/* Unknown Routes */}

      <Route
        path="*"
        element={<Navigate to="/" />}
      />

    </Routes>
  )
}

export default AppRoutes