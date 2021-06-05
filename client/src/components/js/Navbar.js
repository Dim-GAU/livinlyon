import React from "react";
import { Link, withRouter} from "react-router-dom";

class Navbar extends React.Component {

render () {
    return (
        <header className="row">
            <div>
                <a className="name" href="/">LivinLyon</a>
                <p>Make finding your next appartment easy!</p>
            </div>
            <div className="link">
                <a href="/add">Click to add your appartment</a>

            </div>
        </header>

    )
}

}

export default withRouter(Navbar);

