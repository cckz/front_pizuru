import React from 'react';
import { Redirect } from 'react-router-dom'
import WrappedProfileForm from '../components/forms/Profile'
import WrappedSiteForm from '../components/forms/Site'
import WrappedWorkersForm from '../components/forms/Workers'
import WrappedNotificationsForm from "../components/forms/Notofications";
import WrappedSupportForm from "../components/forms/Support"

export const routes = [{
        path: "/",
        exact: true,
        main: () => <Redirect to="/profile" />
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
        main: () => <WrappedNotificationsForm />
    },
    {
        path: "/support",
        main: () => <WrappedSupportForm />
    },
    {
        path: "/profile",
        main: () => <WrappedProfileForm />
    },
];