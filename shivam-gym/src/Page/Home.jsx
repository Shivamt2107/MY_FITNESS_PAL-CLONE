import React from 'react'
import "./Home.css";
import SimpleImageSlider from 'react-simple-image-slider'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const images = [
    {
        url: "https://prod-ne-cdn-media.puregym.com/media/810686/tullymemberstory_blogheader.jpg?quality=80",
    },
    {
        url: "https://prod-ne-cdn-media.puregym.com/media/808187/dan_memberstory.jpg?quality=80",
    },
    {
        url: "https://prod-ne-cdn-media.puregym.com/media/811786/graham_blogheader.jpg?quality=80&width=992",
    },
    {
        url: "https://prod-ne-cdn-media.puregym.com/media/805099/maymah_blogheader-3.jpg?quality=80&width=992",
    },
    {
        url: "https://prod-ne-cdn-media.puregym.com/media/805550/parita_blogheader1.jpg?quality=80&mode=pad&width=992",
    },
    {
        url: "https://prod-ne-cdn-media.puregym.com/media/814043/mellodie_blogheader.jpg?quality=80&mode=pad&width=992",
    },
    {
        url: "https://prod-ne-cdn-media.puregym.com/media/793371/molly-1.jpg?quality=80&width=992",
    },
    {
        url: "https://prod-ne-cdn-media.puregym.com/media/808235/andywilson_featureimage2.jpg?quality=80&mode=pad&width=992",
    },
    {
        url: "https://prod-ne-cdn-media.puregym.com/media/810686/tullymemberstory_blogheader.jpg?quality=80",
    },


];



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
                    <div className='slider'>
                        {
                            <div className='slider_main'>
                                <SimpleImageSlider
                                    width={855}
                                    height={400}
                                    slideDuration={0.5}
                                    images={images}
                                    showBullets={true}
                                    showNavs={true}
                                />
                            </div>
                        }
                        <button className='victory_Button'>START YOUR JOURNEY TODAY</button>
                    </div>
                </div>

                {/*  */}

                <div className='Recipes_section'>
                    <div>
                        <h2 className='Recipes_section_hTwo'>Recipes & Inspiration</h2>
                        <p className='Recipes_section_pTag'>Get nutritionist-approved recipes and motivational workout tips from MyFitnessPal experts.</p>
                    </div>

                    <div className='Recipes_section_Div'>


                        <div>
                            <div><img className='recipeImg' src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=1920&q=75" alt="" /></div>
                            <div><h3 className='recipe_hone_tag'>15 Make-Ahead Breakfasts Under 300 Calories</h3></div>
                            <div>
                                <Link to="/"><h1 className='recipeLink'>MyFitnessPal Blog</h1></Link>
                            </div>
                        </div>

                        <div>
                            <div><img className='recipeImg' src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcheat-days.a49e92b5.jpg&w=1920&q=75" alt="" /></div>
                            <div><h3 className='recipe_hone_tag'>The Problem With Cheat Days</h3></div>
                            <div>
                                <Link to="/"><h1 className='recipeLink'>MyFitnessPal Blog</h1></Link>
                            </div>
                        </div>


                        <div>
                            <div><img className='recipeImg' src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgetting-moving.e3e4042a.png&w=1920&q=75" alt="" /></div>
                            <div><h3 className='recipe_hone_tag'>Essential Guide to Getting Moving</h3></div>
                            <div>
                                <Link to="/"><h1 className='recipeLink'>MyFitnessPal Blog</h1></Link>
                            </div>
                        </div>




                    </div>


                </div>

                {/*  */}

                <div className='ConnectSectionDiv'>
                    <div>
                        <h2 className='connect_section_hTwo'>Connect with over 50 apps.</h2>
                        <p className='connection_section_pTag'>Easily link your MyFitnessPal account with apps that support your healthier lifestyle. It’s not just about calories. It’s about feeling better, looking better, and living better.</p>
                    </div>


                    <div className='connectImg'>
                        <img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-apps%402x.85e549ef.png&w=1920&q=75" alt="" />
                    </div>
                </div>

                <div>
                        <p className='HomeLastPTag'>MyFitnessPal is one of the best weight loss apps and fitness apps, helping nearly 1 million members reach their nutrition and fitness goals every year. Members use it as a calories tracker and calorie counter to log their foods, and take advantage of the app’s food database that contains over 14 million foods. It’s not just a free calorie counter app — it’s also the best calorie counter app for people who are looking to take back control of their health and fitness.</p>
                </div>

            </div>
                <Footer/>

        </>
    )
}

export default Home