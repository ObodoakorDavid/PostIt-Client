/** @format */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import SignupPage from "./pages/SignupPage";
import Stories from "./pages/Stories";
import MyStories from "./pages/MyStories";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster/>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/my-stories" element={<MyStories />} />
            </Route>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
