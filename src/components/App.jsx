'use client'
import React, { useState } from 'react';

const App = () => {
    const [response, setResponse] = useState(null); // to track the response, null by default
    const [positive, setPositive] = useState(null);
    const [house, setHouse] = useState(null);

    return (
        <>
            <h1 className="text-4xl">
                Hi, This is David. May I speak to the General Manager?
            </h1>
            <div className='mt-10 flex items-center gap-2'>
                <button onClick={() => setResponse('yes')} className='text-green-600 btn btn-outline'>
                    Yes
                </button>
                <button onClick={() => setResponse('no')} className='text-red-600 btn btn-outline'>
                    No
                </button>
            </div>

            {/* Content to show when 'Yes' is clicked */}
            {
                response === 'yes' && (
                    <div className='bg-white rounded-md shadow-md p-4 mt-10'>
                        <p className='text-green-400 my-2'>Yes</p>
                        <p className='text-xl'>
                            I am a dispatcher from &quot;ABC Company.&quot; We are your local service provider specializing in cleaning services in .......... Right now we are providing
                            free estimates about cleaning services without obligations. It will hardly take 5 to 10 minutes of your time. So can you give me a good time to
                            stop by your facility to provide a free estimate? How about ........?
                        </p>
                        <div className='mt-10 flex items-center gap-2'>
                            <button onClick={() => setPositive('yes')} className='text-green-600 btn btn-outline'>
                                Positive
                            </button>
                            <button onClick={() => setPositive('no')} className='text-red-600 btn btn-outline'>
                                Negative
                            </button>
                        </div>
                        {
                            positive === 'yes' && (
                                <p className='mt-10 text-xl'>
                                    <p className='text-green-500 my-2'>Positive</p>
                                    I just need to verify a few things, it will just take a 1 minute of your time.
                                    <ul className='space-y-3 mt-3'>
                                        <li>(1) Will you personally receive the estimate?</li>
                                        <li>(2) Can I have your first and last name please?</li>
                                        <li>(3) I have your business  address as.........is it correct?</li>
                                        <li>(4) Can you describe the size of your facility in square foot? So how many rooms and washrooms do you have at your facility?
                                        </li>
                                        <li>(5) How are you currently taking care of the cleaning of the facility, is it inhouse or outsourced?
                                            <ul className='px-10 mt-2 space-y-2'>
                                                <li>(A) Inhouse: How many times do you clean your facility in a week?</li>
                                                <li>(B) Outsourced ( how many times does your current vendors clean your facility in a week?)</li>
                                            </ul>
                                        </li>
                                        <li>(6) Is the best number to reach you?
                                        </li>
                                    </ul>
                                    <div className='mt-10 flex items-center gap-2'>
                                        <button onClick={() => setHouse('house')} className='text-green-600 btn btn-outline'>
                                            In House
                                        </button>
                                        <button onClick={() => setHouse('outsourced')} className='text-red-600 btn btn-outline'>
                                            Out Sourced
                                        </button>
                                    </div>
                                    {
                                        house === 'house' && (
                                            <p className='mt-10'>
                                                <p className='my-2 text-green-500'>In House</p>
                                                If you like our price will you consider to outsource for the cleaning at your facility?
                                                <p className='mt-2'>(9) Please make a note  i am fixing the appointment on next ...................... Thanks for the time, have a great day. </p>
                                            </p>
                                        )
                                    }
                                    {
                                        house === 'outsourced' && (
                                            <p className='mt-10'>
                                                <p className='my-2 text-red-500'>Outsourced</p>
                                                It&apos;s a totally free estimate,  If you like our pricing and service as well you will you consider to switch your current vendor, If you
                                                get a better deal.
                                                <p className='mt-2'>(9) Please make a note  i am fixing the appointment on next ...................... Thanks for the time, have a great day. </p>
                                            </p>
                                        )
                                    }
                                </p>
                            )
                        }

                        {
                            positive === 'no' && (
                                <p className='mt-10'>
                                    <p className='text-red-500'>Negative</p>
                                    <p className='text-2xl my-4'>Possible Questions</p>
                                    <div className='space-y-4'>
                                        <div className="collapse collapse-arrow bg-base-200">
                                            <input type="checkbox" name="accordion-1" />
                                            <div className="collapse-title text-lg font-semibold text-blue-600">I already have a company.</div>
                                            <div className="collapse-content">
                                                <p className="text-gray-700">
                                                    Right now we are offering the best possible price available in the market. And we promise to provide the most efficient services.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="collapse collapse-arrow bg-base-200">
                                            <input type="checkbox" name="accordion-2" />
                                            <div className="collapse-title text-lg font-semibold text-blue-600">We are really satisfied with our current cleaning company. They are doing a good job.</div>
                                            <div className="collapse-content">
                                                <p className="text-gray-700">We can do the cleaning for less than the amount you are paying your current vendors.</p>
                                            </div>
                                        </div>

                                        <div className="collapse collapse-arrow bg-base-200">
                                            <input type="checkbox" name="accordion-3" />
                                            <div className="collapse-title text-lg font-semibold text-blue-600">Send me the proposal on Email?</div>
                                            <div className="collapse-content">
                                                <p className="text-gray-700">
                                                    I can provide a confirmation email, but it&apos;s hard to give you an accurate price because it totally depends on the size of your facility and your cleaning requirements. Our estimator will be the best person to discuss pricing after seeing your place physically and assessing your cleaning needs. How about next...?
                                                </p>
                                            </div>
                                        </div>

                                        <div className="collapse collapse-arrow bg-base-200">
                                            <input type="checkbox" name="accordion-4" />
                                            <div className="collapse-title text-lg font-semibold text-blue-600">What&apos;s the price you charge?</div>
                                            <div className="collapse-content">
                                                <p className="text-gray-700">
                                                    We offer custom prices. Without seeing your place physically, it&apos;s hard to give you an accurate price. How about I set up an appointment for you to receive a free estimate? My estimator will give you a free walkthrough and determine the best price for your needs.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="collapse collapse-arrow bg-base-200">
                                            <input type="checkbox" name="accordion-5" />
                                            <div className="collapse-title text-lg font-semibold text-blue-600">What type of cleaning services do you offer?</div>
                                            <div className="collapse-content">
                                                <p className="text-gray-700">
                                                    We provide all kinds of cleaning services, like sweeping floors, dusting offices, taking out the trash, tile cleaning, scrubbing, window cleaning, and carpet cleaning. If there is any specific cleaning you require, we are here to serve you to the best of our ability.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="collapse collapse-arrow bg-base-200">
                                            <input type="checkbox" name="accordion-6" />
                                            <div className="collapse-title text-lg font-semibold text-blue-600">I am in a contract.</div>
                                            <div className="collapse-content">
                                                <p className="text-gray-700">
                                                    If you don&apos;t mind sharing when your contract expires with your current vendor, I will call 30 to 60 days before it expires, and you&apos;ll be able to check what you are missing out on. Does that sound good?
                                                </p>
                                            </div>
                                        </div>

                                        <div className="collapse collapse-arrow bg-base-200">
                                            <input type="checkbox" name="accordion-7" />
                                            <div className="collapse-title text-lg font-semibold text-blue-600">Where are you located/local from?</div>
                                            <div className="collapse-content">
                                                <p className="text-gray-700">Check the city and give them a random local location (specific to the city).</p>
                                            </div>
                                        </div>

                                        <div className="collapse collapse-arrow bg-base-200">
                                            <input type="checkbox" name="accordion-8" />
                                            <div className="collapse-title text-lg font-semibold text-blue-600">If you don&apos;t know the business address?</div>
                                            <div className="collapse-content">
                                                <p className="text-gray-700">
                                                    I&apos;m working remotely, so I don&apos;t have your business address in front of me right now. Just to make sure I have the right address, can you verify your current business address?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </p>
                            )
                        }
                    </div>
                )
            }

            {/* Content to show when 'No' is clicked */}
            {
                response === 'no' && (
                    <div className='bg-white rounded-md shadow-md p-4 mt-10'>
                        <p className='text-xl'>
                            # The manager is expecting my call. Can you please transfer the line?
                            <p className='mt-10'>
                                If asked, &quot;How do you expect that?&quot;: <br />
                                <span className=''>
                                    We had a conversation two (2) weeks ago. You were pretty busy at the time, and you told me to call back at this time. That&apos;s why I am calling!
                                </span>
                            </p>
                            <p className='text-green-500 mt-2'>
                                if manager click yes
                            </p>
                        </p>
                    </div>
                )
            }
        </>
    );
};

export default App;
