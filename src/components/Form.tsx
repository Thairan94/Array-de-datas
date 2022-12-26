import React, { useState } from 'react'
import styled from 'styled-components'
import {useForm} from 'react-hook-form'



type TitleProps = {
    children: React.ReactNode
    size?: "small" | "large";
}

export const Form = ( {children, size} : TitleProps) => {
    const {register, handleSubmit, formState: {errors} } = useForm()
    const [data, setData] = useState("")

   return (
    <Container onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <h1 style ={{ fontSize: size === "small" ? "1.5rem" : "3rem"}}>
            {children}
        </h1>

        <input 
            type="date" 
            placeholder='Digite uma data'
            {...register('date', {required:'Você precisar digitar uma data!'})}
        />
        <button type="submit">Checar</button>

        <h3>{data}</h3>
        
    </Container>

   );
};

export const Container = styled.form`
    max-width: 450px;
    width: 100%;
    min-height: 500px;
    border: 1px solid #000400;
    margin: auto;
    margin-top: 20px;
    padding: 10px;
    background: #FFFAFA;

    input{
        outline: none;
        width: 200px;
        height: 20px;
        background: #F0F8FF;
        border:none;
        padding: 5px;
        
    }
    button{
        outline: none;
        height: 30px;
        background: #191970;
        border:none;
        color: white;
        cursor: pointer;
        transition: 250ms;
        
        &:hover{
            background: #483D8B;
        }
    }
`



