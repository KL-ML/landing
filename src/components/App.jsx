import React, { Suspense } from "react";

import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import { Suspense } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme';

import { Layout } from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
// import { Header } from './components/Layout/Header/Header';


export const App = () => {

    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter
                    // basename="/"
                >
                    <Layout>
                        {/* <Header /> */}
                        <Suspense fallback={<p>...Loading</p>}>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="*" element={<h1>not found page</h1>} />
                            </Routes>
                        </Suspense>
                    </Layout>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
};

//  <Route path="" element={<PublicRoute />}>
//    <Route path="/login" element={<LoginPage />} />
//    <Route path="register" element={<RegisterPage />} />
//  </Route>;