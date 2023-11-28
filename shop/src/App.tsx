import React, { Suspense } from "react";
import "./App.css";
import LoadingComp from "./Components/LoadingComponent/LoadingComp";
import Header from "./Components/HeaderComp/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

// const Header = React.lazy(() => import ('./Components/HeaderComp/Header'));
const CarouselComp = React.lazy(
  () => import("./Components/HomeComp/CarouselComp")
);
const AboutPage = React.lazy(
  () => import("./Components/AboutPage/AboutPage")
);

function App() {
  return (
    
     <>
      <Header />

        <Suspense fallback={<LoadingComp />}>
           <BrowserRouter>
      <Routes>
          <Route path="home" element={<CarouselComp />}></Route>
          <Route path="page" element={<LoadingComp />}></Route>
          <Route path="about" element={<AboutPage />}></Route>

          </Routes>
      </BrowserRouter>
        </Suspense>
        <Footer/>
        </>
     
   
  );
}

export default App;
