/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import "./App.css";
import { MainPage } from "./MainPage";
import { Song } from "./SongPage/Song";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <>
      <BrowserRouter>
        <Header language={language} setLanguage={setLanguage} />
        <main>
          <Routes>
            <Route path="/" element={<MainPage language={language} />} />
            <Route path="song/:id" element={<Song language={language} />} />
            <Route path="*" element={<MainPage language={language} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
