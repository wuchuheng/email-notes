import React from "react";
import { RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const routes: RouteObject[] = [
    {
        path: '/',
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'login',
                element: <LoginPage />
            }
        ]
    }
];

export default routes;