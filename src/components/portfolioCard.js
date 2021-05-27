import React from "react";


function PortfolioCard(props) {
    console.log("*&%");
    console.log(props);
    return (
        <div className="card">
            <h1>
                {props.description}
            </h1>
            <div className="img-container">
                <img className="img-fluid" alt={props.portfoliId} src={props.imageSrc} id={props.portfoliId} key={props.key} />
            </div>
        </div>)
}
export default PortfolioCard;