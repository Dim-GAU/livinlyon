import React, {Fragment} from "react";
import Appartment from "./Appartment";


const location = [1,2,3,4,5,6,7,8,9];

class SearchAppartment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            appartments: null,
            rooms: null,
            location: [],

        };

    }

    handleInputChange = async (event) => {
        const location = this.state.location;
        const target = event.target;

        const name = target.name;

        if (target.checked === true) {
            let appartmentsList = location.slice();
            appartmentsList.push(name);
            this.setState({location: appartmentsList})

        } else if (target.checked === false) {
            let appartmentsList = location.slice();
            let index = appartmentsList.indexOf(name);
            appartmentsList.splice(index, 1);
            this.setState({location: appartmentsList})


        }


    }

    handleSubmit = async (event) => {
        event.preventDefault();


        const {rooms, location, appartments} = this.state;


        if (rooms !== null && location !== null) {
            try {

                const response = await fetch(`http://localhost:8000/appartment/search/${rooms}/${location}`);
                const jsonData = await response.json();


                this.setState({appartments: jsonData})




            } catch (err) {
                console.error(err.message)
            }

        } else {

            try {



                if (location.length === 9) {
                    let location1 = location[0];
                    let location2 = location[1];
                    let location3 = location[2];
                    let location4 = location[3];
                    let location5 = location[4];
                    let location6 = location[5];
                    let location7 = location[6];
                    let location8 = location[7];
                    let location9 = location[8];
                    const response = await fetch(`http://localhost:8000/appartment/search/${location1}/${location2}/${location3}/${location4}/${location5}/${location6}/${location7}/${location8}/${location9}`);
                    const jsonData = await response.json();
                    this.setState({appartments: jsonData})

                }

                if (location.length === 8) {
                    let location1 = location[0];
                    let location2 = location[1];
                    let location3 = location[2];
                    let location4 = location[3];
                    let location5 = location[4];
                    let location6 = location[5];
                    let location7 = location[6];
                    let location8 = location[7];

                    const response = await fetch(`http://localhost:8000/appartment/search/${location1}/${location2}/${location3}/${location4}/${location5}/${location6}/${location7}/${location8}`);
                    const jsonData = await response.json();
                    this.setState({appartments: jsonData})

                }

                if (location.length === 7) {
                    console.log(location)
                    let location1 = location[0];
                    let location2 = location[1];
                    let location3 = location[2];
                    let location4 = location[3];
                    let location5 = location[4];
                    let location6 = location[5];
                    let location7 = location[6];

                    const response = await fetch(`http://localhost:8000/appartment/search/${location1}/${location2}/${location3}/${location4}/${location5}/${location6}/${location7}`);
                    const jsonData = await response.json();
                    this.setState({appartments: jsonData})

                }

                if (location.length === 6) {
                    let location1 = location[0];
                    let location2 = location[1];
                    let location3 = location[2];
                    let location4 = location[3];
                    let location5 = location[4];
                    let location6 = location[5];

                    const response = await fetch(`http://localhost:8000/appartment/search/${location1}/${location2}/${location3}/${location4}/${location5}/${location6}`);
                    const jsonData = await response.json();
                    this.setState({appartments: jsonData})

                }

                if (location.length === 5) {
                    let location1 = location[0];
                    let location2 = location[1];
                    let location3 = location[2];
                    let location4 = location[3];
                    let location5 = location[4];

                    const response = await fetch(`http://localhost:8000/appartment/search/${location1}/${location2}/${location3}/${location4}/${location5}`);
                    const jsonData = await response.json();
                    this.setState({appartments: jsonData})

                }

                if (location.length === 4) {
                    let location1 = location[0];
                    let location2 = location[1];
                    let location3 = location[2];
                    let location4 = location[3];

                    const response = await fetch(`http://localhost:8000/appartment/search/${location1}/${location2}/${location3}/${location4}`);
                    const jsonData = await response.json();
                    this.setState({appartments: jsonData})

                }

                if (location.length === 3) {
                    let location1 = location[0];
                    let location2 = location[1];
                    let location3 = location[2];

                    const response = await fetch(`http://localhost:8000/appartment/search/${location1}/${location2}/${location3}`);
                    const jsonData = await response.json();
                    this.setState({appartments: jsonData})

                }

                if (location.length === 2) {
                    let location1 = location[0];
                    let location2 = location[1];

                    const response = await fetch(`http://localhost:8000/appartment/search/${location1}/${location2}`);
                    const jsonData = await response.json();
                    this.setState({appartments: jsonData})

                }

                if (location.length === 1) {
                    let location1 = location[0];

                    const response = await fetch(`http://localhost:8000/appartment/search/${location1}`);
                    const jsonData = await response.json();
                    this.setState({appartments: jsonData})

                }




            } catch (err) {
                console.error(err.message)
            }


        }


    }



    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;


        this.setState({
                [name]: value
            }
        )




    }



    handleRender = () => {
        const {rooms, location} = this.state
        return(
            <div>

            </div>
        )
    }

    render() {


        let {appartments} = this.state

        return (
            <Fragment>
                <p>Select one or more locations:</p>
                <form className="text-center mt-5">
                    <div className="locations">
                    {location.map((index) => {

                        return (
                            <div>
                                <input type="checkbox" id="scales" name={index} onChange={this.handleInputChange} />
                                <label htmlFor="scales">{index}</label></div>
                        )

                    })
                    }
                    </div>



                    <button className="btn btn-success" onClick={this.handleSubmit} >Search</button>
                </form>


                {appartments === null ? appartments = '' : appartments.map((index) => {
                    return (
                        <div className="result">
                            <Appartment key={index.id} appartment={index} />
                        </div>

                    )

                })
                }


            </Fragment>)
            }






}

export default SearchAppartment;

