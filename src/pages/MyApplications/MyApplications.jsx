import React, { Suspense } from 'react';
import ApplicationsStats from './ApplicationsStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { myApplicationPromise } from '../../api/applicationsApi';


const MyApplications = () => {
    const {user} = useAuth();
    return (
        <div>
            <ApplicationsStats></ApplicationsStats>
            <Suspense fallback={'Loading Application'}>
                <ApplicationList myApplicationPromise={myApplicationPromise(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;