import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './components/redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<
    React.StrictMode >
    <Provider store = {store}>
    <App />
    </Provider>
    </React.StrictMode>
    );
