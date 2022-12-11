import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './features/allData/store';
import { userSlice } from './features/allData/userSlice';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';



//uncomment for redux
// import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import { rootReducer } from './redux/reducers';
// const store = createStore(rootReducer, applyMiddleware(thunk))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={userSlice}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApiProvider>
    </Provider>
  </React.StrictMode>,
);

