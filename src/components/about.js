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
                    <img class="img-fluid d-block mx-auto" src={Headshot} alt="Headshot" />
                </header>
                <section class="py-5 col">
                    <div class="container" id="about">
                        <h1>About Me</h1>
                        <p class="lead">Life is the best when you can enjoy the journey!</p>
                        <p>I am on the journey of becoming a Software Devoloper! I am in the final stages of finishing up UCSD's Coding Bootcamp.
                        I can't believe how much I have learned so far and how bad my head hurts from studying daily. I have been intrigued with Coding and Software development for several years but now finally taking the leap to becoming knowledgle and experienced.
                        I know I can do anything I put my mind to and excited for the endless learning in this great field!
                        
                        </p>
                        <p>I am so fortunate to call San Diego my home! Growing up in Colorado, I have always appreciated the outdoors and
                        making great friends.
                        Surfing is my favorite hobby and favorite workout. I dream about surfing when I am not coding! I have been
                        fortunate to be able to surf all over Ecuador, Costa
                        Rica, Mexico and Hawaii.
                        Traveling has always been one of my favorite hobbies, along with experiencing new cultures and people!

                        Living out true passions and making slight improvements everyday is amazing.
                        </p>
                    </div>
                </section>
                </div>
            </div>
        </div>

    );
}

export default about;