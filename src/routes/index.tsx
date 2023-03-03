import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';

import HorizontalBar from '../components/HorizontalBar';
import NotFound from '../pages/NotFound';
import AuthContext from '../context/AuthProvider';
import LanguageContext from '../context/LanguageProvider';
import { refreshToken } from '../services';
import Loading from '../shared/Loading';

const Paths: React.FC = () => {
    const { token, setToken } = useContext(AuthContext);
    const { language, checkLanguage } = useContext(LanguageContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            if (!token) {
                try {
                    const result = await refreshToken();
                    if (result) setToken(result.data.accessToken);
                } catch {}
            }
            setLoading(false);
        };
        checkLanguage().then().catch();
        checkAuth();
    }, []);

    return (
        <div className="routes-container">
            {!loading ? (
                <BrowserRouter>
                    <HorizontalBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            ) : (
                <Loading/>
            )}
        </div>
    );
};

export default Paths;
