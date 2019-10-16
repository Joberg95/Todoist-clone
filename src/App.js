import React from "react";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { Tasks } from "./components/Tasks";
import { SelectedProjectsProvider, ProjectsProvider } from "./context";

export const App = () => {
  <SelectedProjectsProvider>
    <ProjectsProvider>
      <div className="App">
        <Header />
        <Content />
        <Tasks />
      </div>
    </ProjectsProvider>
  </SelectedProjectsProvider>;
};
