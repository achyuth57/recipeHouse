import React from "react";
import TopNav from "./components/TopNav";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import MainContainer from "./components/ContentHolder";
import { AuthProvider } from "./AuthContext/AuthContext";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <TopNav />

          <MainContainer />

          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
