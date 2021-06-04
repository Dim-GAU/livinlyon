import React, {Fragment, useState} from "react";
import Appartment from "./Appartment";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

const DetailAppartment = () => {

    const [detail, setDetail] = useState('');

    let {id} = useParams();
    const list = [];

    const getDetails = async (e) => {
        try {
            const response = await fetch(`http://localhost:8000/appartment/${id}`);
            const jsonData = await response.json();

            setDetail(jsonData);
        } catch (err) {
            console.error(err.message);
        }

    }

    useEffect(() => {
        getDetails();
    }, []);


    const details = () => {

        for (let i in detail[0]) {
            list.push(detail[0][i])
        }

        console.log(list)

    }

    details()
    return (
        <Fragment>

            {list.map((index) => {
                return (
                    <div>
                        <p>{index}</p>
                    </div>
                )
            })}

        </Fragment>
        );

}

export default DetailAppartment;