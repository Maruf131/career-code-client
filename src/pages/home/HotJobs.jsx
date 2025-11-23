import React, { use } from 'react';
import JobsCard from '../shared/JobsCard';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise)
    return (
        <div className='max-w-5/6 mx-auto my-10'>
            <h1 className='text-4xl font-bold py-3'>Hot Jobs Of The Day !!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    jobs.map(job => <JobsCard key={job._id} job ={job}></JobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;