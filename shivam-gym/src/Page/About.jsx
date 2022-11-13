import { Button, Checkbox, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import Footer from "../Components/Footer";
import SecoundNavbar from "../Components/SecoundNavbar";
import "./About.css"

const SignUpText=()=>{
    return(
        <>
            <h1>Sign UP</h1>
        </>
    )
}


const About = () => {
    return (
        <>
            <SecoundNavbar text={SignUpText}/>
            <div>

                <div className="MainContainer">

                    <div className="LoseSectionDiv">

                        <h1 className="LoseSectionHeader">Lose Weight with MyFitnessPal.com — for FREE!</h1>

                        <div className="LoseSectionPTagSection">

                            <div>
                                <p className="LossPTagOrigin">Losing weight isn't easy - we know. But with a membership to MyFitnessPal.com, you'll get the tools you need to successfully take weight off - and keep it off. And best of all, you can signup for free, no strings attached. So put away your credit card - you'll never have to pay a cent.</p>
                                <p className="LossPTagOrigin">Study after study has confirmed the benefits of keeping track of the food you eat and the activity you do. It's simple - the more consistently you track your food intake, the more likely you are to lose weight. That's why every successful weight management program suggests that you keep a food diary and/or an activity log. But recording everything you eat without the right tools can be tedious at best, or simply impossible at worst.</p>
                                <p className="LossPTagOrigin">At MyFitnessPal.com, we focus on making sure you can log your meals as quickly and easily as possible. Because the easier we make it for you, the more likely you are to stay on track, and the more likely you are to succeed in your weight loss goals.</p>
                                <br />

                                <div className="HowDoesItWorkDiv">
                                    <div className="HowDoesTag">

                                        <h1 className="HowDoesHTwoTag">How does it work?</h1>
                                        <p className="HowDoesThePTag">The reason our system is so easy to use is because it learns from you! All of us tend to eat the same foods over time. MyFitnessPal.com remembers what you've eaten and done most often in the past, and makes it easy for you to add those foods again to your log.</p>
                                        <p className="HowDoesThePTag">So the more you track your meals, the easier it becomes!</p>
                                    </div>
                                </div>

                                <div className="WithFreeSection">

                                    <h1 className="WithFreeHTwoTag">With a FREE membership you get:</h1>
                                    <p className="WithFreePTag"><span style={{ fontWeight: "bold", paddingLeft: "23px", backgroundImage: "url(https://www.myfitnesspal.com/assets/sprite.v6.gif)", backgroundRepeat: "no-repeat" }}>The easiest to use food diary on the web -</span> Track what you eat with just a few clicks from anywhere with an internet connection - at home or at work</p>
                                    <p className="WithFreePTag"><span style={{ fontWeight: "bold", paddingLeft: "23px", backgroundImage: "url(https://www.myfitnesspal.com/assets/sprite.v6.gif)", backgroundRepeat: "no-repeat" }}>A searchable food database of over 300,000,000 items -</span> Track what you eat with just a few clicks from anywhere with an internet connection - at home or at work</p>
                                    <p className="WithFreePTag"><span style={{ fontWeight: "bold", paddingLeft: "23px", backgroundImage: "url(https://www.myfitnesspal.com/assets/sprite.v6.gif)", backgroundRepeat: "no-repeat" }}>Your own personal food database -</span> Track what you eat with just a few clicks from anywhere with an internet connection - at home or at work</p>
                                    <p className="WithFreePTag"><span style={{ fontWeight: "bold", paddingLeft: "23px", backgroundImage: "url(https://www.myfitnesspal.com/assets/sprite.v6.gif)", backgroundRepeat: "no-repeat" }}>Free mobile apps for iPhone and Android -</span> Track what you eat with just a few clicks from anywhere with an internet connection - at home or at work</p>
                                    <p className="WithFreePTag"><span style={{ fontWeight: "bold", paddingLeft: "23px", backgroundImage: "url(https://www.myfitnesspal.com/assets/sprite.v6.gif)", backgroundRepeat: "no-repeat" }}>Support and motivation</span> Track what you eat with just a few clicks from anywhere with an internet connection - at home or at work</p>
                                    <p className="WithFreePTag"><span style={{ fontWeight: "bold", paddingLeft: "23px", backgroundImage: "url(https://www.myfitnesspal.com/assets/sprite.v6.gif)", backgroundRepeat: "no-repeat" }}>A personalized diet profile -</span> Track what you eat with just a few clicks from anywhere with an internet connection - at home or at work</p>
                                    <p className="WithFreePTag"><span style={{ fontWeight: "bold", paddingLeft: "23px", backgroundImage: "url(https://www.myfitnesspal.com/assets/sprite.v6.gif)", backgroundRepeat: "no-repeat" }}>Flexibility -</span> Track what you eat with just a few clicks from anywhere with an internet connection - at home or at work</p>


                                </div>

                                <div className="WaitSection">
                                    <h2 className="WithFreeHTwoTag">Don't wait! Start losing weight the healthy way - all for FREE!</h2>
                                </div>

                                <div className="StartLosing">
                                    <div className="HowDoesTag">
                                        <p className="HowDoesThePTag">All the tools you need for healthy, sustainable weight loss are right at your fingertips - and you'll never have to pay a cent! So what are you waiting for? Stop wasting money on other dieting programs.</p>
                                        <p style={{ fontWeight: "700", marginTop: "-5px" }}>Join today and get on the path to healthier living!</p>
                                        <button className="JoinBtn">Join Now For FREE!</button>
                                    </div>
                                </div>


                            </div>

                            <div className="AboutLogin">
                                <h1 className="AboutLoginHead">Member Login</h1>
                                <Button style={{ marginLeft: "50px", marginTop: "7px" }} colorScheme='facebook' leftIcon={<FaFacebook />}>
                                    Login With Facebook
                                </Button>
                                <p style={{ textAlign: "center", fontSize: "20px" }}>or</p>

                                <div className="InputFormDiv">


                                    <FormControl isRequired>
                                        <FormLabel>Email address</FormLabel>
                                        <Input type='email' />
                                        <FormHelperText>We'll never share your email.</FormHelperText>

                                        <FormLabel>Password</FormLabel>
                                        <Input type='email' />
                                        <Checkbox mt="5px" colorScheme='green' defaultChecked>
                                            Remember me next time
                                        </Checkbox>
                                        <br />
                                        <Button colorScheme='teal' size='lg' w="full" mt='6px'>
                                           Login
                                        </Button>
                                    </FormControl>

                                </div>


                            </div>


                        </div>

                    </div>

                </div>
                <div className="FooterAbout">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default About;