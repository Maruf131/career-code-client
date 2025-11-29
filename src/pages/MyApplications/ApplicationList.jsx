import React, { use } from 'react';
import ApplicationsRows from './ApplicationsRows';

const ApplicationList = ({ myApplicationPromise }) => {
    const applications = use(myApplicationPromise);
    return (
        <div>
            <h1 className="text-3xl">Application length: {applications.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map((application, index) => <ApplicationsRows key={application._id} index={index} application={application}></ApplicationsRows>)
                        }
                        
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;