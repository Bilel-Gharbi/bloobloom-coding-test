import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import routes from "./routes";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            {routes.map(({ url, id, Component }) => {
              return <Route key={id} path={url} element={<Component />} />;
            })}
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
