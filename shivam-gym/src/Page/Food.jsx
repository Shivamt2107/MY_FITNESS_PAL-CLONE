import React from "react";
import SecoundNavbar from "../Components/SecoundNavbar";
import "./Food.css"
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";


function Food() {
    return (
        <>
            <SecoundNavbar />


            <div className="FoodMainDiv">
                <div className="foodSearchDiv">
                    <div>
                        {/* <Input   padding="25px" placeholder='Search for a food,brand,or restaurant' fontWeight="100" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" /> */}

                        <InputGroup>
                            <InputLeftElement
                                marginTop="10px"
                                marginLeft="2px"
                                pointerEvents='none'
                                children={<SearchIcon color='teal.700' />}
                            />
                            <Input type='tel' placeholder='Search for a food,brand,or restaurant' boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" height="60px" />
                        </InputGroup>

                        <div className="FoodImgDiv">
                            <img src="https://www.myfitnesspal.com/_next/static/media/food-search.ca9350e8.svg" alt="" />
                        </div>

                        <div>
                            <h2 className="FoodAnaLysHTwo">Food Analysis</h2>
                            <p className="FoodAnaLysPTag">Understand how the food you’re eating contributes to your daily calories, macronutrients, and micronutrients.</p>
                        </div>
                        <br />
                        <br />

                        <div>
                            <h2 className="RecipeAnaLysHTwo">Recipes & Inspiration</h2>

                            <div className='Recipes_section_DivFoodPage'>


                                <div>
                                    <div><img className='recipeImg' src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=1920&q=75" alt="" /></div>
                                    <div><h3 className='recipe_tag'>15 Make-Ahead Breakfasts Under 300 Calories</h3></div>
                                    <div>
                                        <Link to="/"><h1 className='recipeLink'>MyFitnessPal Blog</h1></Link>
                                    </div>
                                </div>

                                <div>
                                    <div><img className='recipeImg' src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frunning.deb62de2.png&w=1200&q=75" alt="" /></div>
                                    <div><h3 className='recipe_tag'>Essential Guide to Getting Moving</h3></div>
                                    <div>
                                        <Link to="/"><h1 className='recipeLink'>MyFitnessPal Blog</h1></Link>
                                    </div>
                                </div>






                            </div>

                        </div>

                    </div>

                    <div className="SideAdDiv">

                        <div>
                            <img src="https://tpc.googlesyndication.com/simgad/4330415497910999471" alt="ad" />
                        </div>
                        <div>
                            <img  src="https://tpc.googlesyndication.com/simgad/209815274509593167" alt="dfg" />
                        </div>
                        
                    </div>
                </div>


            </div>

            <div className="FooterOnFoodPage">

                <Footer />
            </div>


        </>
    )
}

export default Food;