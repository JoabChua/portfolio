import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import 'bulma/css/bulma.css';

const App = () => {
  return (
    <div>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
