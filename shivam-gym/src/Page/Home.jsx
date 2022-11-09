import React from 'react'
import "./Home.css"

function Home() {
    return (
        <>

            <div className='main_container'>

                <div className='good_health_section'>

                    <div className='good_health_first_div'>
                        <h1>Good health starts with what you eat.</h1>
                        <p>Want to eat more mindfully? Track meals, learn about your habits, and reach your goals with MyFitnessPal.</p>
                        <button>START FOR FREE</button>
                    </div>

                    <div className='good_health_imageSide'>
                        <img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=1920&q=75" alt="good_health_image" />
                    </div>
                </div>

                {/*  */}

                <div className='log_from_14_section'>
                    <div>
                        <img className='log_from_imageSide' src='https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fsecondary-hero-slice%402x.png&w=1080&q=75' />
                    </div>

                    <div className='log_from_sec_div'>
                        <h1>Log from over 14 million foods.</h1>
                        <p>See a breakdown of calories and nutrients, compare serving sizes, and discover how the food you eat supports your goals.</p>
                    </div>
                </div>

                {/*  */}


                <div className='Your_Goal_section'>
                    <div>
                        <h2>The Tools for Your Goals</h2>
                        <p>Trying to lose weight, tone up, lower your BMI, or invest in your overall health? We give you the right features to get there.</p>
                    </div>
                    <div className='Your_goal_Flex_root_section'>
                        <div>
                            <div className='Your_Goal_root_section_img'>
                                <img src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg" alt="" />
                            </div>
                            <div className='Your_goal_root_section_tagS'>
                                <h2 className='Your_Goals_hTwo_Tag'>Learn. Track. Improve.</h2>
                                <p className='Your_goal_p_tags'>Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals.</p>
                            </div>

                        </div>
                        <div>
                            <div className='Your_Goal_root_section_img'>
                                <img src="https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg" alt="" />
                            </div>
                            <div className='Your_goal_root_section_tagS'>
                                <h2 className='Your_Goals_hTwo_Tag'>Logging Simplified.</h2>
                                <p className='Your_goal_p_tags'>Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking.</p>
                            </div>

                        </div> <div>
                            <div className='Your_Goal_root_section_img'>
                                <img src="https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg" alt="" />
                            </div>
                            <div className='Your_goal_root_section_tagS'>
                                <h2 className='Your_Goals_hTwo_Tag'>Stay Motivated.</h2>
                                <p className='Your_goal_p_tags'>Join the World’s Largest Fitness Community for advice, tips, and support 24/7.</p>
                            </div>

                        </div>
                        

                    </div>

                </div>


                {/*  */}

                <div className='Victory_section'>
                    <div>
                        <h2>Victory Stories</h2>
                        <p>Every day, more than 3,000 members reach their goals with MyFitnessPal. Get inspired for the journey ahead.</p>
                    </div>
                    <div></div>
                </div>

            </div>

        </>
    )
}

export default Home