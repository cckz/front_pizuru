import React from 'react';
import { Redirect } from 'react-router-dom'
import WrappedProfileForm from '../components/forms/Profile'
import WrappedSiteForm from '../components/forms/Site'
import WrappedWorkersForm from '../components/forms/Workers'

export const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Redirect to="/profile"/>
    },
    {
        path: "/site",
        main: () => <WrappedSiteForm />
    },
    {
        path: "/workers",
        main: () => <WrappedWorkersForm />
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
        main: () => <WrappedProfileForm />
    },
];