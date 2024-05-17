import { SideBar } from "./components/SideBar";
import { GenresInDb } from "./components/GenresInDb";
import { LastMovieInDb } from "./components/LastMovieInDb";
import { ContentRowMovies } from "./components/ContentRowMovies";
import { ContentWrapper } from "./components/ContentWrapper";
import { TopBar } from "./components/TopBar";
import { Footer } from "./components/Footer";
import { NotFound } from "./components/NotFound";
import { Route, Routes } from "react-router";
import { Header } from "./components/Header";

import "./App.css";

export function App() {
  return (
    <>
      <div id="wrapper">
        <div id="content-wrapper" >
          {/*<!-- Main Content -->*/}
          <div id="content" className="flex flex-col">
            {/* <TopBar /> 
            <h1 className="text-3xl font-bold underline">
              Hello world!
            </h1>*/}
            <Header></Header>
            <SideBar />
            <Routes>
              <Route path="/" element={<ContentWrapper />} />
              <Route path="/allGenres" element={<GenresInDb />} />
              <Route path="/lastMovie" element={<LastMovieInDb />} />
              <Route path="/allMovies" element={<ContentRowMovies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
