import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth()
    console.log(jobId, user);

    const handleApplyFromSubmit = e => {
        e.preventDefault();
        const linkedIn = e.target.linkedin.value;
        const gitHub = e.target.Github.value;
        const resume = e.target.resume.value;

        const applications = {
            jobId,
            applicant: user.email,
            linkedIn,
            gitHub,
            resume
        }

        axios.post('http://localhost:5000/application', applications)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job Application Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                e.target.reset();

            })
            .catch(error => {
                console.log(error);

            })
    }

    return (
        <div>
            <h3 className="text-3xl text-center">Apply for this job: <Link to={`/jobs/${jobId}`}>Details</Link></h3>
            <div className='flex justify-center my-10'>
                <form onSubmit={handleApplyFromSubmit}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-5">
                        <legend className="fieldset-legend">Page details</legend>

                        <label className="label">LinkedIn</label>
                        <input type="url" className="input" name='linkedin' placeholder="LinkedIn profile link" />

                        <label className="label">GitHub</label>
                        <input type="url" className="input" name='Github' placeholder="GitHub profile link" />

                        <label className="label">Resume Link</label>
                        <input type="url" className="input" name='resume' placeholder="Resume Link" />

                        <input type="submit" className='btn btn-primary' value="Apply" />
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default JobApply;