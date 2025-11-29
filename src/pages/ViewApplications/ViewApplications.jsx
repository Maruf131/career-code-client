import React from 'react';
import { useLoaderData } from 'react-router';

const ViewApplications = () => {
    const applications = useLoaderData();
    console.log(applications);
    
    return (
        <div>
            <h3 className="text-3xl">Total application data : {applications.length}</h3><div className="overflow-x-auto">
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                    
                </div>
            </div>

        </div>
    );
};

export default ViewApplications;