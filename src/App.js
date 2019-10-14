import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { Tasks } from './components/Tasks';


export const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <Tasks />
    </div>
  );
}
