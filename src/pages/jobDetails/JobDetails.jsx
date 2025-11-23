import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const {company} = useLoaderData();
    return (
        <div>
            <h1>Company NAme: {company}</h1>
        </div>
    );
};

export default JobDetails;