import React from "react";
import {Link} from "react-router-dom";

class Appartment extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className="result">
                <Link className="result" to={`/detail/${this.props.appartment.appartment_id}`}>
                    <p>{this.props.appartment.owner}</p>
                    <p>{this.props.appartment.rooms}</p>
                    <p>{this.props.appartment.location}</p>
                </Link>
            </div>
        )
    }
}

export default Appartment;