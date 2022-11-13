import React from "react"
import "./Exercise.css"
import { Input, InputGroup, InputLeftAddon, InputRightAddon, Select } from '@chakra-ui/react'
import SecoundNavbar from "../Components/SecoundNavbar"
import { Link } from "react-router-dom"
import Footer from "../Components/Footer"

const Exercise = () => {
    return (
        <>
            <SecoundNavbar />

            <div className="ExerciseMainDiv">

                <div className="ExerciseIMGFirstDiv">
                    <img src="https://tpc.googlesyndication.com/simgad/4841471653946608601" alt="sss" />
                </div>
                <br />

                <div className="CaloriesBurnedDiv">

                    <div>
                        <h1 className="CaloriesBurnedHTwoTag"> Calories Burned From Exercise</h1>

                        <div className="searchOurExerciseMainDiv">
                            <div>
                                <h1 className="searchOurExerciseHTwoTag">Search our exercise database by name:</h1>
                                <InputGroup size='sm' w="95%">
                                    <Input height="38px" placeholder="Search Something" />
                                    <InputRightAddon children='search' color="white" height="38px" bg="#51a351" />
                                </InputGroup>
                            </div>
                            <div>
                                <h1 className="searchOurExerciseHTwoTag">...or choose an exercise below:</h1>
                                <Select placeholder='Select option' color="gray">
                                    <option value='option1'>Abdominal Crunches</option>
                                    <option value='option2'>Abdominal Leg Raise</option>
                                    <option value='option3'>Abdominal Twist, Seated, Machine</option>
                                    <option value='option4'>Activity tracker</option>
                                    <option value='option5'>Abs</option>
                                    <option value='option6'>Adaptive Motion Trainer</option>
                                    <option value='option7'>Aerobics</option>
                                    <option value='option8'>Automobile repair</option>
                                    <option value='option9'>Back Butterfly</option>
                                    <option value='option10'>Back Extension</option>
                                    <option value='option11'>Backpacking, general</option>
                                    <option value='option12'>Badminton, social, general</option>
                                    <option value='option13'>Bar Dip, Palms In, Neutral Grip</option>
                                    <option value='option14'>Barbell Row, Bent-over</option>

                                </Select>
                            </div>

                        </div>

                        <div className="MatchingExerciseMainDiv">
                            <h1 className="searchOurExerciseHTwoTag">Matching exercises:</h1>

                            <div className="MatchingExerciseUnderDiv">
                                <div></div>
                                <div>
                                    <h3 className="MatchHeadHThree">How Many Calories Did I Burn?</h3>
                                    <h4 className="MatchHFourTag">Abdominal Crunches</h4>

                                    <div className="KiloWeightDiv">
                                        <div>
                                            <h1 className="LiTagKilo">Your Weight:</h1>
                                        </div>
                                        <div className="YourWeightInput">
                                            <input type="text" style={{ textAlign: "center" }} placeholder="68" />
                                        </div>

                                        <div>

                                            <select placeholder="Select Weight">
                                                <option value="kilo">Kilo</option>
                                                <option value="pounds">Pounds</option>
                                                <option value="stone">Stone</option>

                                            </select>
                                        </div>
                                    </div>

                                    <div className="KiloWeightDiv">
                                        <div>
                                            <h1 className="LiTagKilo">How Long:</h1>
                                        </div>
                                        <div className="YourWeightInput">
                                            <input type="text" placeholder="2911" style={{ textAlign: "center" }} />
                                        </div>
                                        <p>Minutes</p>
                                    </div>

                                    <div className="CaloriesBurnedDiv">
                                        <h2>Calories burned :<span className="CaloriesBurnedSpan"> 0</span></h2>
                                    </div>

                                </div>
                            </div>


                        </div>

                    </div>




                    <div>
                        <img src="https://tpc.googlesyndication.com/simgad/17903055369230987743" alt="" />
                    </div>

                </div>

                <div className="BrowseOurMainDiv">
                    <div className="BrowseOurDiv">
                        <h1 className="BrowseOurExercise">Browse our exercise database by name:</h1>
                        <div className="pagination">
                            <Link>A</Link>
                            <Link>B</Link>
                            <Link>C</Link>
                            <Link>D</Link>
                            <Link>E</Link>
                            <Link>F</Link>
                            <Link>G</Link>
                            <Link>H</Link>
                            <Link>I</Link>
                            <Link>J</Link>
                            <Link>K</Link>
                            <Link>L</Link>
                            <Link>M</Link>
                            <Link>N</Link>
                            <Link>O</Link>
                            <Link>P</Link>
                            <Link>Q</Link>
                            <Link>R</Link>
                            <Link>S</Link>
                            <Link>T</Link>
                            <Link>U</Link>
                            <Link>V</Link>
                            <Link>W</Link>
                            <Link>X</Link>
                            <Link>Y</Link>
                            <Link>Z</Link>


                        </div>
                    </div>

                </div>

            </div>

            <div>
                <Footer/>
            </div>
        </>
    )
}

export default Exercise;