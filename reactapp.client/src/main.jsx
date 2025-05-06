import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Layout } from './layout/Layout.jsx';
import { Towar } from './pages/TowarPage.jsx';
import { Zakupy } from './pages/ZakupyPage.jsx';
import { Szukaj } from './pages/SzukajPage.jsx';
import { Zamowienia } from './pages/ZamowieniaPage.jsx';
import { Zwroty } from './pages/ZwrotyPage.jsx';
import { Promocje } from './pages/PromocjePage.jsx';
import { Magazyn } from "./pages/MagazynPage.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                <Route path='/towar' element={<Layout />}>
                    <Route index element={<Towar />} />
                </Route>
                <Route path='/zakupy' element={<Layout />}>
                    <Route index element={<Zakupy />} />
                </Route>
                <Route path='/szukaj' element={<Layout />}>
                    <Route index element={<Szukaj />} />
                </Route>
                <Route path='/zamowienia' element={<Layout />}>
                    <Route index element={<Zamowienia />} />
                </Route>
                <Route path='/zwroty' element={<Layout />}>
                    <Route index element={<Zwroty />} />
                </Route>
                <Route path='/promocje' element={<Layout />}>
                    <Route index element={<Promocje />} />
                </Route>
                <Route path='/magazyn' element={<Layout />}>
                    <Route index element={<Magazyn />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
