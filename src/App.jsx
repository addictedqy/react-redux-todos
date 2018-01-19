import React from 'react';
import ReactDom from 'react-dom';

const root = document.getElementById('root');

import Header from './views/Header/Header.jsx';
import Input from './views/Input/Input.jsx';
import List from './views/List/List.jsx';
import Bottom from './views/Bottom/Bottom.jsx';
import Footer from './views/Footer/Footer.jsx';

import { Provider } from 'react-redux';
import configureStore from './baseRedux/configureStore.js';

import './styles/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="header">
            <Header />
          </div>
          <div className="main">
            <Input/>
            <List/>
            <Bottom/>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  }  
}

ReactDom.render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  root
)
