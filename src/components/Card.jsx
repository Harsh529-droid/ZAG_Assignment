import React, { useState } from 'react'
import arr from '../api.jsx'
import { Link, Navigate } from 'react-router-dom';

const Card = () => {

    const [cat, setCat] = useState("amount");
    const [data, setData] = useState(arr);

    const [isOpen, setIsOpen] = useState(0);

    const toggleDropdown = () => {
        if (isOpen === 1)
            setIsOpen(0);
        else
            setIsOpen(1);
    };

    const handleOptionClick = (str) => {
        setIsOpen(0);

        if (str == "Confirmed") {
            const nw = arr.filter((curr) => {
                return curr.status === "Confirmed";
            })
            setData(nw);
        }
        else
            if (str == "Pending") {
                const nw = arr.filter((curr) => {
                    return curr.status === "Pending";
                })
                setData(nw);

            }
            else
                if (str == "Delivered") {
                    const nw = arr.filter((curr) => {
                        return curr.status === "Delivered";
                    })
                    setData(nw);

                }
                else {
                    const nw = arr.filter((curr) => {
                        return curr.status === "Refund Completed (30d )";
                    })
                    setData(nw);

                }

    };

    const customSort = (a, b) => {
        const da = a.placed_on;
        const db = b.placed_on;
        if (da < db) return -1;
        else
            if (da > db) return 1;
            else
                return 0;
    }
    const handleClick = (str) => {
        setData(arr);
        setCat(str);
        if (str === "amount") {
            arr.sort((a, b) => a.amount - b.amount);
        } else {
            arr.sort(customSort);
        }
    };



    return (

        <>
            <div className="Card">

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" className='firstCol'>Search  </th>

                            <th scope="col">Active Orders
                                <div className="dropdown">
                                    <button className="dropdown-toggle" onClick={toggleDropdown}>
                                        Select
                                    </button>

                                    {isOpen &&
                                        <ul>
                                            <li> <button onClick={() => handleOptionClick("Pending")}>Pending</button> </li>
                                            <li> <button onClick={() => handleOptionClick("Confirmed")}>Confirmed</button> </li>
                                            <li> <button onClick={() => handleOptionClick("Delivered")}>Delivered</button> </li>
                                            <li> <button onClick={() => handleOptionClick("abc")}>Refund Completed (30d )</button> </li>

                                        </ul>


                                    }

                                </div>
                            </th>

                            <th scope="col">Amount<button onClick={() => handleClick("amount")}> * </button></th>
                            <th scope="col">Placed On<button onClick={() => handleClick("placed_on")}> * </button></th>
                            <th scope="col">Options</th>

                        </tr>
                    </thead>

                    <tbody>


                        {data.map((curr) => {

                            return (
                                <>
                                    <tr>
                                        <th scope="row" >

                                            <div className='cardDiv'>
                                                {curr.cat}
                                                <div>
                                                    <input type="checkbox" />
                                                    <img src={curr.url} alt="" />
                                                </div>


                                                <p>

                                                    <p>{curr.Company}</p>
                                                    <p>{curr.product}</p>
                                                </p>


                                            </div>
                                        </th>
                                        <td>{curr.active_order}</td>
                                        <td>{curr.amount}</td>
                                        <td>{curr.placed_on}</td>
                                        <td>
                                           <Link to={`/update/${curr.id}`} className='btn'>***</Link>
                                        </td>
                                    </tr>
                                </>

                            );
                        })}

                    </tbody>

                </table>
            </div>
        </>
    )
}

export default Card