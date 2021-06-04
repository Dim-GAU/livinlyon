import React, {Fragment, useEffect, useState} from "react";
import InputAppartments from "./InputAppartment";

const ListAppartments = () => {

    const [appartments, setAppartments] = useState([]);

    const getAppartments = async () => {
        try {
            const response = await fetch("http://localhost:8000/appartment");
            const jsonData = await response.json();
            setAppartments(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getAppartments();
    }, [])

    return (
        <Fragment>
            <div className="text-center mt-5">
            <InputAppartments />

            {appartments.map((appartment) => {
                return (
                    <p>{appartment.owner}</p>
                )
            })}
            </div>
        </Fragment>
    )
}

export default ListAppartments;
