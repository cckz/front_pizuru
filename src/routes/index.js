import React from 'react';
import { Redirect } from 'react-router-dom'

export const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Redirect to="/profile"/>
    },
    {
        path: "/site",
        main: () => <h2>Bubblegum</h2>
    },
    {
        path: "/workers",
        main: () => <h2>Shoelaces</h2>
    },
    {
        path: "/notifications",
        main: () => <h2>Shoelaces</h2>
    },
    {
        path: "/support",
        main: () => <h2>Shoelaces</h2>
    },
    {
        path: "/profile",
        main: () => <h2>Home</h2>
    },
];