import React from 'react'
import styled from 'styled-components'

import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
const Openfooter = styled.div`
    color: rgb(255, 255, 255);
    height: auto;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    background-color: rgb(24, 104, 183);
    font-size: 15px;
    font-family: Poppins, sans-serif;
    line-height: 1.5;
`
const Footercontent = styled.div`
    color: rgb(255, 255, 255);
    height: auto;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    width: 100%;
    background-color: rgb(24, 104, 183);
    @media (min-width: 815px)
    {
        width: 82.5%;
    }
    @media (min-width: 600px)
    {
        width: 85%;
    }
    @media (max-width: 600px)
    {
        width: 85%;
    }
`
const Openfootergroup1 = styled.div`
    flex-wrap: wrap;
    padding-bottom: 40px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(229, 232, 235, 0.25);
    display: flex;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
`
const Openfootergroup1gru1 = styled.div`
  
    -webkit-box-align: center;
    flex-direction: column;
    display: flex;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
      @media (min-width: 1200px)
    {
        padding-right: 64px;
    }
    @media (min-width: 1200px)
    {
        width: 50%;
        padding-top: 40px;
        align-items: flex-start;
        text-align: left;
    }

`
const Openfootergroup1gru1header = styled.h2`
color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
    margin-top: 8px;
    display: block;
    @media (min-width: 1200px)
    {
        width: 50%;
        padding-top: 40px;
        align-items: flex-start;
        text-align: left;
    }
`
const Openfootergroup1context = styled.div`
    font-size: 16px;
    color: rgb(251, 253, 255);
        box-sizing: border-box;
        display: block;
        @media (min-width: 1200px)
        {
        padding-top: 40px;
        align-items: flex-start;
        text-align: left;
        }
`
const Openfootergroup1form = styled.div`
    margin-top: 16px;
    color: rgb(53, 56, 64);
    box-sizing: border-box;
    display: block;
    @media (min-width: 1200px)
    {
        padding-top: 40px;
        align-items: flex-start;
        text-align: left;
    }           
`
const Openfootergroup1addiv = styled.div`
    display: flex;
    box-sizing: border-box; 
    color: rgb(53, 56, 64);
    padding :10px;
`
const Openfootergroup1gru2 = styled.div`
   
    display: flex;
    -webkit-box-align: center;
    flex-direction: column;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    width: 100%;
    flex-direction: column;
    padding-top: 20px;
    padding-left: 0px;
    align-items: center;
    text-align: center;
    @media (min-width: 1200px){
        padding-left: 64px;
    }   
    @media (min-width: 1200px)
    {
        width: 50%;
        padding-top: 40px;
        align-items: flex-start;
        text-align: left;
    }
`
const Openfootergroup1gru2h2 = styled.h2`
        color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
    margin-top: 8px;
    box-sizing: border-box;
    display: block;
    @media (min-width: 1200px)
    {
        width: 50%;
        padding-top: 40px;
        align-items: flex-start;
        text-align: left;
    }
`
const Openfootergroup1gru2com = styled.div`
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    justify-content: center;
    box-sizing: border-box;
    @media (min-width: 1200px)
    {
        width: 50%;
        padding-top: 40px;
        align-items: flex-start;
        text-align: left;
    }
`
const footer = () => {
    return (
        <Openfooter>
            <Footercontent>
                <Openfootergroup1>
                    <Openfootergroup1gru1>
                        <Openfootergroup1gru1header>Stay in the loop</Openfootergroup1gru1header>
                        <Openfootergroup1context>Join our mailing list to stay in the loop with our newest feature release, NFT drops and tips and tricks for navigating Opeansea</Openfootergroup1context>
                        <Openfootergroup1form><Openfootergroup1addiv><Input type="text" ></Input><span style={{ padding: "20px" }}></span><Button variant="contained">Sign Up</Button></Openfootergroup1addiv></Openfootergroup1form>
                    </Openfootergroup1gru1>
                    <Openfootergroup1gru2>
                        <Openfootergroup1gru2h2>Join the Company</Openfootergroup1gru2h2>
                        <Openfootergroup1gru2com></Openfootergroup1gru2com>
                    </Openfootergroup1gru2>
                </Openfootergroup1>
            </Footercontent>
        </Openfooter>
    )
}

export default footer