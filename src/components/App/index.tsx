import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import { PATH_NAMES } from 'constants/constantsPaths';
import 'scss/application.scss';
import Home from 'screens/Home/index';
import Login from 'screens/Login';
import NavBar from 'screens/NavBar';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path={PATH_NAMES.navBar} element={<NavBar />} />
          <Route path={PATH_NAMES.signup} element={<Home />} />
          <Route path={PATH_NAMES.login} element={<Login />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
