import React from "react";
import "./Intro.css";
import profile_img from "../../assets/beaver_profile.png";

const Intro = () => {
    return (
        <div className="intro">
            <img src={profile_img} alt="" />
            <h1>
                <span>I'm Aleks,</span> frontend developer by day, toilet paper
                bandit by night.
            </h1>
            <p>
                A sordid past left me with an insatiable desire for toilet
                paper. After 10 long years of fighting this curse, I have now
                shed my old self and accepted the calling of the toilet paper.
            </p>
            <div className="intro-action">
                <div className="intro-connect">Connect with me</div>
                <div className="intro-resume">My resume</div>
            </div>
        </div>
    );
};

export default Intro;
