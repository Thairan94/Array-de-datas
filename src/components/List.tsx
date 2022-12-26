import api from './services/api'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type Date = {
    Data: any;
    children: Date;
    id: string;
}

export const List = () => {
    const [data, setData] = useState<Date[]>([]);

    useEffect(() =>{
        axios.get("https://619542f674c1bd00176c6ca2.mockapi.io/api/v1/Data").then((response) => setData(response.data))
        .catch((err) =>{
            console.error("ocoreu um erro" + err);
        });
    }, [])

    return(
        <ul>
            {data.map(seacrh =>{
                return(
                    <li key={seacrh.id}>
                        <strong>{seacrh.Data}</strong>
                        
                    </li>
                )
            })}
        </ul>
    )
}

