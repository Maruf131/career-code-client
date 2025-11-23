import React from 'react';
import { FaMapPin } from 'react-icons/fa';
import { Link } from 'react-router';

const JobsCard = ({ job }) => {
    const { title, location, description, company,_id, company_logo, salaryRange, requirements } = job
    return (
        <div className="card bg-base-200 w-96 p-5 shadow-lg">
            <div className='flex gap-5 items-center'>
                <figure>
                    <img
                        className='w-15'
                        src={company_logo}
                        alt="logo" />
                </figure>
                <div>
                    <h3 className='text-2xl font-bold'>{company}</h3>
                    <p className='flex items-center gap-2 text-gray-400'><FaMapPin></FaMapPin>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-primary">NEW</div>
                </h2>
                <p><span className='font-semibold text-lg'>Salary</span>: {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
                <p>{description}</p>
                <div className="card-actions">
                    {
                        requirements.map((skill, index) => <div key={index} className="badge badge-outline">{skill}</div>)
                    }

                </div>
                <div className="card-actions justify-end">
                    <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;