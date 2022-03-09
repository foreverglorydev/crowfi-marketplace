import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import img from '../assets/image/logo.png'
const Opennav = styled.div`
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    max-width: 100vw;
    height: 72px;
    top: 0px;
    position: sticky;
    z-index: 110;
    transition: top 0.5s ease 0s;
    background-color: rgb(255 255 255);
    display: block;
`
const Opennavcontent = styled.div`
   display: flex;
    height: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-left: 16px;
    box-sizing: border-box;
    color: rgb(53, 56, 64);
    align-items: center;
`
const Openlogo = styled.a`
    webkit-box-align: center;
    align-items: center;
    display: flex;
    font-size: 20px;
    font-weight: 500;
    height: 100%;
    padding: 8px 0px;
    position: relative;
    margin-left: 8px;
    hover: {
        color: rgb(24, 104, 183);
    }
    text-decoration: none;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    height: 100%;
    padding-right: 16px;
    @media (min-width: 1024px)
    {
        margin-left: 8px;
    }
`
const Openlogoimg = styled.div`
    height: 40px;
    width: 40px;
    position: relative;
    display: block;
    color: rgb(32, 129, 226);
    cursor: pointer;
    background-image: url(${img});
    background-size: cover;
`
const Openlogotxt = styled.div`
    width: 100px;
    margin-left: 10px;
    margin-top: 4px;
     font-size: 20px;
    font-weight: 500;
    color: rgb(32, 129, 226);
    cursor: pointer; 
    box-sizing: border-box;
    @media (min-width: 1024px)
    {
        display: initial;
    };
`
const OpenSearchParent = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
`
const OpenSearch = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
`
const OpenSearchcontent = styled.div`
    display: block;
    @media screen and (min-width: 600px){
        height: 45px;
    }
    @media screen and (max-width: 600px){
        display:none
    }
`
const OpenSearchdiv = styled.div`
    height: 45px;
    max-width: 768px;
    cursor: text;
    display: flex;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    border: 1px solid rgb(229, 232, 235);
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
`
const OpenSearchcontenticon = styled.div`
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    box-sizing: border-box;
    margin-right: 8px;
    cursor: text;
`
const OpenSearchcontentinput = styled.input`
    cursor: text;
    font-size: inherit;
    line-height: inherit;
    min-height: inherit;
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    color: inherit;
    font: inherit;
    margin: 0px;
    box-sizing: border-box;
    padding:
`
const Openui = styled.ul`
    display: flex;
    margin: 0px;
    list-style-type: none;
    box-sizing: border-box;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`
const Openuibtn = styled.div`
    display: flex;
    list-style-type: none;
    box-sizing: border-box;
    list-style-type: none;
    @media screen and (max-width: 1200px){
    display:none
}
`
const Openexplore = styled.li`
    height: 72px;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-weight: 600;
    font-size: 16px;
    flex-shrink: 0;
    text-align: -webkit-match-parent;
`
const Openexplorea = styled.a`
    -webkit-box-align: center;
    align-items: center;
    color: rgba(4, 17, 29, 0.75);
    display: flex;
    height: 100%;
    padding: 0px 20px;
    position: relative;
    width: 100%;
    text-decoration: none;
    font-size: 16px;
    list-style-type: none;
    text-align: -webkit-match-parent;
`
const Openstates = styled.li`
    height: 72px;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-weight: 600;
    font-size: 16px;
    flex-shrink: 0;
    text-align: -webkit-match-parent;
`
const Openstatesa = styled.a`
    -webkit-box-align: center;
    align-items: center;
    color: rgba(4, 17, 29, 0.75);
    display: flex;
    height: 100%;
    padding: 0px 20px;
    position: relative;
    width: 100%;
    text-decoration: none;
    font-size: 16px;
    list-style-type: none;
    text-align: -webkit-match-parent;
`
const Openres = styled.li`
    height: 72px;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-weight: 600;
    font-size: 16px;
    flex-shrink: 0;
    text-align: -webkit-match-parent;
`
const Openresa = styled.a`
    -webkit-box-align: center;
    align-items: center;
    color: rgba(4, 17, 29, 0.75);
    display: flex;
    height: 100%;
    padding: 0px 20px;
    position: relative;
    width: 100%;
    text-decoration: none;
    font-size: 16px;
    list-style-type: none;
    text-align: -webkit-match-parent;
`
const Opencreate = styled.li`
    height: 72px;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-weight: 600;
    font-size: 16px;
    flex-shrink: 0;
    text-align: -webkit-match-parent;
`
const Opencreatea = styled.a`
    -webkit-box-align: center;
    align-items: center;
    color: rgba(4, 17, 29, 0.75);
    display: flex;
    height: 100%;
    padding: 0px 20px;
    position: relative;
    width: 100%;
    text-decoration: none;
    font-size: 16px;
    list-style-type: none;
    text-align: -webkit-match-parent;
`
const Openicon = styled.div`
    display: flex;
    list-style-type: none;
    
`
const Openuser = styled.li`
    height: 72px;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-weight: 600;
    font-size: 16px;
    flex-shrink: 0;
    list-style-type: none;
    text-align: -webkit-match-parent;
    @media screen and (max-width: 1024px){
    display:none
    }
`
const Openuserbtn = styled.button`
    -webkit-box-align: center;
    align-items: center;
    color: rgba(4, 17, 29, 0.75);
    display: flex;
    height: 100%;
    padding: 0px 20px;
    position: relative;
    width: 100%;
    font-size: 100%;
    font-family: inherit;
    border: 0px;
    background: inherit;
    @media (min-width: 1200px)
    {
        color: rgb(112, 122, 131);
    }
`
const Openwallet = styled.li`
    height: 72px;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-weight: 600;
    font-size: 16px;
    flex-shrink: 0;
    list-style-type: none;
    text-align: -webkit-match-parent;
    @media screen and (max-width: 1024px){
    display:none
    }
`
const Openwalletbtn = styled.button`
    -webkit-box-align: center;
    align-items: center;
    color: rgba(4, 17, 29, 0.75);
    display: flex;
    height: 100%;
    padding: 0px 20px;
    position: relative;
    width: 100%;
    font-size: 100%;
    font-family: inherit;
    border: 0px;
    background: inherit;
    @media (min-width: 1200px)
    {
        color: rgb(112, 122, 131);
    }
`
const Openmenuicon = styled.li`
    height: 72px;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-weight: 600;
    font-size: 16px;
    flex-shrink: 0;
    list-style-type: none;
    text-align: -webkit-match-parent;
    @media (min-width: 1200px)
    {
        display:none
    }
`
const Openmenuiconbtn = styled.button`
    -webkit-box-align: center;
    align-items: center;
    color: rgba(4, 17, 29, 0.75);
    display: flex;
    height: 100%;
    padding: 0px 20px;
    position: relative;
    width: 100%;
    font-size: 100%;
    font-family: inherit;
    border: 0px;
    background: inherit;
    @media (min-width: 1200px)
    {
        color: rgb(112, 122, 131);
    }
`
const header = () => {
    return (
        <Opennav>
            <Opennavcontent>
                <Openlogo>
                    <Openlogoimg></Openlogoimg>
                    <Openlogotxt>Australia</Openlogotxt>
                </Openlogo>
                <OpenSearchParent>
                    <OpenSearch>
                        <OpenSearchcontent>
                            <OpenSearchdiv><OpenSearchcontenticon><SearchOutlinedIcon /></OpenSearchcontenticon>
                                <OpenSearchcontentinput></OpenSearchcontentinput></OpenSearchdiv>
                        </OpenSearchcontent>
                    </OpenSearch>
                </OpenSearchParent>
                <Openui>
                    <Openuibtn>
                        <Openexplore><Openexplorea>Explore</Openexplorea></Openexplore>
                        <Openstates><Openstatesa>States</Openstatesa></Openstates>
                        <Openres><Openresa>Resources</Openresa></Openres>
                        <Opencreate><Opencreatea>Create</Opencreatea></Opencreate>
                    </Openuibtn>
                    <Openicon>
                        <Openuser><Openuserbtn><AccountCircleOutlinedIcon style={{ width: "32px", height: "32px" }} /></Openuserbtn></Openuser>
                        <Openwallet><Openwalletbtn><AccountBalanceWalletOutlinedIcon style={{ width: "32px", height: "32px" }} /></Openwalletbtn></Openwallet>
                        <Openmenuicon><Openmenuiconbtn><MenuOutlinedIcon style={{ width: "32px", height: "32px" }}></MenuOutlinedIcon></Openmenuiconbtn></Openmenuicon>
                    </Openicon>

                </Openui>
            </Opennavcontent>
        </Opennav>
    )
}

export default header