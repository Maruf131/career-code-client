import React, { use } from 'react';
import { Link } from 'react-router';

const JobsList = ({ jobCreatedByPromise }) => {
    const jobs = use(jobCreatedByPromise);
    return (
        <div>
            <h2 className="text-3xl">Jobs Created By you :{jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>View Application</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            jobs.map((job, index) =>
                                <tr key={job._id}>
                                    <th>{index + 1}</th>
                                    <td>{job.title}</td>
                                    <td>{job.deadline}</td>
                                    <td><Link to={`/applications/${job._id}`}>View Applications</Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobsList;