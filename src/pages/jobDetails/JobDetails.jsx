import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const { _id,company } = useLoaderData();
    return (
        <div>
            <h1>Company NAme: {company}</h1>
            <Link to={`/jobApply/${_id}`}>
                <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;