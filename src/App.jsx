// App.jsx
import React from 'react';
import Header from "./components/Header";  
import Content from "./components/Content/Content.css";
import { Ways } from "./data";  

const App = () => {
    return (
        <div>
            <Header />  {/* Компонент Header */}
            <Ways />  
            <Content/>  {/* Компонент Ways */}
        </div>
    );
};

export default App;
