
import React from 'react';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddJob = () => {

    const { user } = useAuth();

    const handleAddJobs = e => {
        e.preventDefault();
        const form = e.target;
        const fromData = new FormData(form);
        const data = Object.fromEntries(fromData.entries());
        // process salary range data
        const { min, max, currency, ...newJobs } = data;
        newJobs.salaryRange = { min, max, currency };
        // process requirements
        newJobs.requirements = newJobs.requirements.split(',').map(req => req.trim());
        // process responsibilities
        newJobs.responsibilities = newJobs.responsibilities.split(',').map(res => res.trim());
        newJobs.status = "Active";
        console.log(newJobs);

        // add jobs to the db
        axios.post('http://localhost:5001/jobs', newJobs)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Added jobs Successfully !",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
            .catch(error => {
                console.log(error);

            })

    }
    return (
        <div>
            <form onSubmit={handleAddJobs}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label"> Job Title</label>
                    <input type="text" className="input" name='title' placeholder="Job title" />

                    <label className="label">Company</label>
                    <input type="text" className="input" name='company' placeholder="Company Name" />

                    <label className="label">location</label>
                    <input type="text" className="input" name='location' placeholder="Company Location" />

                    <label className="label">Company Logo</label>
                    <input type="url" className="input" name='company_logo' placeholder="Company Logo URL" />
                </fieldset>

                {/* Job type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />

                        <input className="btn" type="radio" name="jobType" value="On-site" aria-label="On-site" />
                        <input className="btn" type="radio" name="jobType" value="Remote" aria-label="Remote" />
                        <input className="btn" type="radio" name="jobType" value="Hybrid" aria-label="Hybrid" />
                    </div>

                </fieldset>
                {/* Job category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Category</legend>

                    <select defaultValue="Job Category" name='category' className="select select-neutral">
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>

                </fieldset>
                {/* Application Deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Application Deadline</legend>

                    <input type="date" name='deadline' className="input" />

                </fieldset>
                {/* Salary Range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2f'>
                            <div>
                                <label className="label">Min Salary</label>
                                <input type="text" className="input" name='min' placeholder="Minimum Salary" />

                            </div>
                            <div>
                                <label className="label">Max Salary</label>
                                <input type="text" className="input" name='max' placeholder="Maximum Salary" />

                            </div>
                            <div>
                                <label className="label">Currency</label>
                                <select defaultValue="salary range" name='currency' className="select select-neutral">
                                    <option>BDT</option>
                                    <option>US</option>
                                    <option>EU</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>


                </fieldset>
                {/* Job Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Description</legend>
                    <textarea className="textarea" name='description' placeholder="Enter job description"></textarea>



                </fieldset>
                {/* Job requirement */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job requirement</legend>
                    <textarea className="textarea" name='requirements' placeholder="Job requirement-(separate by comma)"></textarea>


                </fieldset>
                {/* Job responsibilities*/}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job responsibilities</legend>
                    <textarea className="textarea" name='responsibilities' placeholder="Job responsibilities-(separate by comma)"></textarea>


                </fieldset>
                {/* HR related information */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">HR information</legend>

                    <label className="label">HR Name</label>
                    <input type="text" className="input" name='hr_name' placeholder="HR Name" />

                    <label className="label">HR Email</label>
                    <input type="text" className="input" name='hr_email' defaultValue={user.email} placeholder="HR Email" />

                </fieldset>

                <button className='btn'>Add Jobs</button>
            </form>
        </div >
    );
};

export default AddJob;