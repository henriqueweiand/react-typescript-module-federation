import React from "react";
import { Routes, Route } from "react-router-dom";
import { ContainerApp } from "./components/ContainerApp";

const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));

const App = () => (
  <>
    <Routes>
      <Route
        path="/"
        element={
          <ContainerApp
            CounterAppOne={CounterAppOne}
          />
        }
      />
      <Route path="app1/*" element={<CounterAppOne />} />
    </Routes>
  </>
);

export default App;
