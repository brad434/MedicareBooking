import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai';

const FeedbackForm = () => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    return <form action=''>
        <div>
            <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4'>How would you rate the overall experience?*</h3>

            {/* ---- This div allows us to choose any amount of rating stars for the feedback of doctor section ------ */}
            <div>
                {[...Array(5).keys()].map((_, index) => {
                    const starValue = index + 1;

                    return (
                        <button
                            key={starValue}
                            type='button'
                            className={`${(starValue <= (rating && hover)) ? 'text-yellowColor' : 'text-gray-400'
                                } bg-transparent border-none outline-none text-[22px] cursor-pointer `}
                            onClick={() => setRating(starValue)}
                            onMouseEnter={() => setHover(starValue)}
                            onMouseLeave={() => setHover(0)}
                            onDoubleClick={() => {
                                setHover(0);
                                setRating(0);
                            }}
                        >
                            <span>
                                <AiFillStar />
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    </form >
}

export default FeedbackForm;