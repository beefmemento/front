import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import WriteMento from "./pages/WriteMento";
import WriteMenti from "./pages/WriteMenti";
import MentoDetail from "./pages/MentoDetail";
import MentiSelect from "./pages/MentiSelect";
import HomeMenti from "./pages/Homementi";
import ShowMentoList from "./pages/ShowMentoLIist";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writemento" element={<WriteMento />} />
        <Route path="/writementi" element={<WriteMenti />} />
        <Route path="/menti" element={<HomeMenti />} />
        <Route path="/detail" element={<MentoDetail />} />
        <Route path="/teacherdetail" element={<MentiSelect />} />
        <Route path="/mentolist" element={<ShowMentoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
