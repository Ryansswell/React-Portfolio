import React from "react";
import Headshot from '../assets/Headshot.jpg'

function about() {
    return (
        <div>
            <h2>
                Ryan Anderson
            </h2>
            <div className="container">
                <div className="row">
                    <header className="py-5 col" >
                        <img className="img-fluid d-block mx-auto" src={Headshot} alt="Headshot" />
                    </header>
                    <section className="py-5 col">
                        <div className="container" id="about">
                            <h1>About Me</h1>
                            <p className="lead">Life is the best when you can enjoy the journey!</p>
                            <p>I am on the journey of becoming a Full-Stack Software Devoloper! I have finished my UCSD Coding Bootcamp.
                                I have been intrigued with Coding and Software development for several years and now finally taking the leap to becoming knowledgeable and experienced.
                                I am shocked at how much I have learned so far and excited to keep learning. I know I can do anything I put my mind to and excited for the endless learning in this great field!

                            </p>
                            <p>
                                Living out true passions and making slight improvements everyday is rewarding!.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}

export default about;