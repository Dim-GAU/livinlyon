import React, {Fragment, useState} from "react";

class InputAppartment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            owner: '',
            rooms: null,
            location: '',
            description:''
        };
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
            }
        )
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const body = this.state;
            const response = await fetch("http://localhost:8000/appartment/add", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            alert("Thank you !");
            document.getElementById("input-appartment").reset();
        } catch (err) {
            console.error(err.message)
        }

    }

    render() {

        const name = ["owner", "rooms", "location", "description"];
        return (
            <Fragment>
                <div className="input">
                    <p>You are a student and you are about to leave your appartment? Enter your appartment in our website to help the other students of your school to find an appartment faster!</p>
                    <form id="input-appartment">
                        <label>
                            {name.map((index) => {
                                return (
                                    <input type="text" className="form-control" name={index} placeholder={index} onChange={this.handleChange} />

                                )
                            })}
                        </label>


                        <button className="btn btn-success" onClick={this.handleSubmit}>Add</button>
                    </form>
                    </div>

                </Fragment>
            )
        }


    }

export default InputAppartment;