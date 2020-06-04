import React from "react";

import { useSelector } from "react-redux";

import { Header } from "./components/Header";
import { AppRouters } from "./AppRouters";
import { Footer } from "./components/Footer";

import { Loading } from "./components/Loading";
function App() {
  const isLoading = useSelector((state) => state.Loading.isLoading);

  return (
    <div className="App">
      <Header />
      <AppRouters />
      
      <Footer />

      <Loading isLoading={isLoading} />
    </div>
  );
}

export default App;
