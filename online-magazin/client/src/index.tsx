import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
export const Context: any = createContext(null)
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore()
    }}>
        <App />
    </Context.Provider>
);