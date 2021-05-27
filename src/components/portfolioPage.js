import React, { Component } from "react";
import PortfolioData from "../assets/PortfolioData.js";
import PortfolioCard from "../components/portfolioCard"

class PortfolioPage extends Component {
    state = {
        PortfolioArray: PortfolioData
    }
    render() {
        return (
            <div className="container">
                <h2>
                    Ryan Anderson
            </h2>
                <div className="row">
                    {this.state.PortfolioArray.map(portData =>
                    (
                        <div className="col m-2">
                            <PortfolioCard
                                imageSrc={portData.imgSrc}
                                description={portData.description}
                                portfoliId={portData.id}
                                key={portData.id}
                            />
                        </div>
                    )
                    )}
                </div>
                <h2>
                    Portfolio
            </h2>
            </div>
        )
    }
};

export default PortfolioPage;