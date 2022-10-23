import React from 'react';
// import myself from '../../images/farid.JPG';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className='px-12 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    {/* <figure><img width={400} src={farid} alt="Shoes" /></figure> */}
                    <div className="text-center p-4">
                        <p> <span className='text-xl font-bold'>Farid Hossain</span></p>
                        <p><span className='text-xl font-bold'>faridhossain.cse@gmail.com</span></p>
                    </div>
                </div>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold text-lime-700 mb-6'>My Educational Background</h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Institute</th>
                                    <th>Year / Borad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SSC</td>
                                    <td>Chandakora S/A Hight School</td>
                                    <td>2014 (Cumilla)</td>
                                </tr>
                                <tr>
                                    <td>HSC</td>
                                    <td>All-Haj Nurmia Degree Collage</td>
                                    <td>2016 (Cumilla)</td>
                                </tr>
                                <tr>
                                    <td>BSc in CSE</td>
                                    <td>Fareast International University</td>
                                    <td>2022 (Dhaka)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='text-center py-4 mt-4'>
                <h2 className='text-2xl font-bold text-lime-700 mb-6 shadow-lg py-2 w-40 mx-auto'>My Skill</h2>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <h1 className='text-xl font-bold mb-5 text-orange-500'>Web Design</h1>
                        <div className='grid grid-cols-1 gap-5 justify-items-center'>
                            <p>HTML</p>
                            <progress className="progress progress-primary w-56" value="95" max="100"></progress>
                            <p>CSS</p>
                            <progress className="progress progress-primary w-56" value="80" max="100"></progress>
                            <p>Tailwind</p>
                            <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                            <p>Bootstrap</p>
                            <progress className="progress progress-primary w-56" value="90" max="100"></progress>
                        </div>
                    </div>
                    <div className='mt-8 md:mt-0'>
                        <h1 className='text-xl font-bold mb-5 text-orange-500'>Web Development</h1>
                        <div className='grid grid-cols-1 gap-5 justify-items-center'>
                            <p>Javascript</p>
                            <progress className="progress progress-primary w-56" value="60" max="100"></progress>
                            <p>React.js</p>
                            <progress className="progress progress-primary w-56" value="80" max="100"></progress>
                            <p>node.js</p>
                            <progress className="progress progress-primary w-56" value="50" max="100"></progress>
                            <p>mongodb</p>
                            <progress className="progress progress-primary w-56" value="50" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-8'>
                <h4 className='text-xl font-bold mb-3'>My Completed Project</h4>
                <p><a target='_blank' className='underline' href="https://scintillating-quokka-d477fd.netlify.app/">https://hilarious-phoenix-b40936.netlify.app/</a></p>
                <p><a target='_blank' className='underline my-4' href="https://sparkly-travesseiro-3c9d55.netlify.app/">https://boisterous-dragon-e2aff8.netlify.app/blog#blog</a></p>
                <p><a target='_blank' className='underline' href="https://velvety-palmier-679f13.netlify.app/">https://velvety-palmier-679f13.netlify.app/</a></p>

            </div>
        </div>
    );
};

export default Portfolio;