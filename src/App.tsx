import React from 'react';
import GlobalStyle from './styles/global'
import Routes from './routes'
import Table from '../src/component/Table'
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => (
<>
  <BrowserRouter>
    <Routes />
    <Table />

  </BrowserRouter>
  <GlobalStyle />
</>
)


export default App;

