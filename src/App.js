import React, { useEffect } from 'react';
import Theme1 from './themes/Theme1.jsx';
import './styles/app.css'
import FormTheme1 from './components/FormTheme1.jsx';
import ReactGa from 'react-ga';

export default function App() {
    useEffect(() => {
        ReactGa.initialize('create', 'G-4ZL9XL6MKX');
        // ReactGa.push(['', 'none']);
        ReactGa.pageview('/');
    }, []);
    return (
        <div>
            <FormTheme1 />
        </div>
    )
}
