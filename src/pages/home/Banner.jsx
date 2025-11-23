import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/team/team-1.jpg'
import team2 from '../../assets/team/team-2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-150">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{ y: [50, 100, 50], transition: { duration: 10, repeat: Infinity } }}
                        src={team1}
                        className="max-w-sm  rounded-t-[40px] rounded-br-[40px] border-blue-400 border-b-8 border-l-8 shadow-2xl"
                    />
                    <motion.img
                        animate={{ x: [100, 150, 100], transition: { duration: 10, repeat: Infinity, delay:2 } }}
                        src={team2}
                        className="max-w-sm  rounded-t-[40px] rounded-br-[40px] border-yellow-400 border-b-8 border-l-8 shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={
                            { scale: 1, transition: { duration: 2 } }}
                        className="text-5xl font-bold">Latest <motion.span animate={
                            {
                                color: ['#F54927', '#27F52E', '#2742F5', '#DA27F5'],
                                transition: { duration: 7, repeat: Infinity }
                            }}>jobs</motion.span> for you!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;