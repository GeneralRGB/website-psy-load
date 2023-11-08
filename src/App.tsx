/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import "./App.css";
import { MainPage } from "./MainPage";
import { Song } from "./SongPage/Song";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="song/:id" element={<Song />} />
            <Route path="*" element={<MainPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
