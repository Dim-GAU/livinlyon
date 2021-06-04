import React from "react";

import InputAppartment from "./InputAppartment";
import ListAppartments from "./ListAppartments";
import SearchAppartment from "./SearchAppartment";

class Home extends React.Component {
    render () {
        return (
            <div className="search">
                <div className="description">
                    <p>This website has been designed to make students'life way easier! Livinlyon references all the appartments rented by the students of your school so you can contact them directly. This way you will be able to find your appartment way faster!</p>
                </div>
                <div className="search-appartment">
                <SearchAppartment />

                </div>



            </div>
        )
    }
}

export default Home;