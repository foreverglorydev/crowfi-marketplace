import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import img1 from '../assets/image/home_bg1.jpg'
import img2 from '../assets/image/home_bg2.jpg'
import img3 from '../assets/image/home_bg3.jpg'
import Card from '../component/cards'

const Opencontext = styled.div`
    flex-direction: column;
    display: flex;
    height: 100%;
    flex: 1 1 0%;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
    line-height: 1.5;
`
const OpenInterface = styled.div`
    flex-direction: column;
    display: flex;
    height: 100%;
    flex: 1 1 0%;
    box-sizing: border-box;
`
const Opendash = styled.div`
    display: flex;
    box-sizing: border-box;
    @media (min-width: 993px)
    {
        height: 586px;
    }
`
const Opendashboard = styled.div`
    width: 100%;
    position: absolute;
    overflow: hidden;
    box-sizing: border-box;
    display: block;

`
const Opendashboardimg = styled.div`
    background-size: cover;
    background-image: url(${img3});
    background-color: rgb(255, 255, 255);
    background-position: center center;
    opacity: 1;
    @media (min-width: 993px)
    {
        height: 586px;
    }
`
const Opensection = styled.div`
    width: 100%;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 120px;
    display: flex;
`
const Opensectionheader = styled.h1`
    font-weight: 600;
    font-size: 24px;
    color: rgb(4, 17, 29);
    margin-bottom: 8px;
    text-align: center;
    line-height: 110%;
    box-sizing: border-box;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`
const Opensectioncard = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    @media (min-width: 1200px)
    {
        max-width: calc(3 * var(--totalWidth));
    }
    @media (min-width: 815px)

    {
        max-width: calc(2 * var(--totalWidth));
    }
`
const Opensectioncarddiv = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: block;
`
const Opentopranking = styled.div`
    width: 100%;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    @media (min-width: 1200px)
    {
        padding: 40px;
    }
`
const Opentoprankingselect = styled.section`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    flex-direction: column;
`
const Opentoprankingselecttxt = styled.div`
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    margin-bottom: 56px;
    text-align: cent
    box-sizing: border-box;

`
const Opentoprankingselecth2 = styled.h2`
    font-weight: 600;
    font-size: 24px;
    color: rgb(4, 17, 29);
    box-sizing: border-box;
    margin: 0px;
    line-height: 110%;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
`
const Openrankingsection = styled.section`
    width: 100%;
    flex-direction: column;
    display: flex;
    box-sizing: border-box;
`
const Openrankingbtn = styled.a`
    display: inline-flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 10px;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 20px;
    background-color: rgb(32, 129, 226);
    border: 1px solid rgb(32, 129, 226);
    color: rgb(255, 255, 255);
    margin: 40px auto 0px;
    width: fit-content;
    cursor: pointer;
    text-decoration: none;
`

const content = () => {
    return (
        <Opencontext>
            <OpenInterface>
                <Opendash><Opendashboard><Opendashboardimg />
                </Opendashboard></Opendash>
                <Opensection><Opensectionheader>Product Manager</Opensectionheader>
                    <Opensectioncard><Opensectioncarddiv><Card></Card></Opensectioncarddiv></Opensectioncard>
                </Opensection>
                <Opentoprankingselect>
                    <Opentoprankingselecttxt>
                        <Opentoprankingselecth2>Top Collections over Last 7 days</Opentoprankingselecth2>
                    </Opentoprankingselecttxt>
                    <Openrankingsection><Openrankingbtn>Go to Rankings</Openrankingbtn></Openrankingsection>
                </Opentoprankingselect>
            </OpenInterface>
        </Opencontext>
    )
}

export default content