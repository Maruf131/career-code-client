import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobsList from './JobsList';
import { jobCreatedByPromise } from '../../api/jobsApi';

const MyPostedJobs = () => {
    const {user} = useAuth();
    return (
        <div>
            <Suspense>
                <JobsList jobCreatedByPromise= {jobCreatedByPromise(user.email)}></JobsList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;