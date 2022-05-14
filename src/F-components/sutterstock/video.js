import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPlayer from "react-player";

const Videos = () => {
    const [gdata, setgdata] = useState([])
    const [error, seterror] = useState(false)
    const [search, setsearch] = useState("")
    const [url, seturl] = useState("https://player.vimeo.com/external/305250673.hd.mp4?s=8693586ed395358872da0c5be41267564e38ede4&profile_id=175&oauth2_token_id=57447761")
    const [currentpage, setcurrentpage] = useState(1)
    const [itemperpage, setitemperpage] = useState(5)
    const indexoflastitem = currentpage * itemperpage
    const indexoffirstitem = indexoflastitem - itemperpage
    const currentitems = gdata.slice(indexoffirstitem, indexoflastitem)
    const img="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"





    useEffect(() => {

        async function data() {
            try {
                const result = await axios(


                    {
                        method: "GET",
                        url: "https://api.shutterstock.com/v2/videos/search",

                        params: {
                            query: 'good',
                            limit: 10
                        },

                        headers: {
                            'Content-Type': "application/Json",
                            "Authorization": "Bearer v2/amRIU0MyZWJ0anRjMzRuaFlGZTRmUzZWZlE2dldETFEvMzIyMzUwNDMxL2N1c3RvbWVyLzQvRzVYZllhdVV5WGRfaXRlZHZEQ0EwaDRDYkpiN0hjWGNFY2JuenB5eER3U19LVkdPVzhoTldNRndOV3EySkZuenB2TGN6bmUwX1BwWUpxRzdQRVdxRkJFNkJ1NmRwRTNpZmR3U21zUXU3dmY1bWNuNEUwaGR3RzhzUjhiY1c5MG12S1hUSm1WeC16S2pvSmJaaFFaZUxvdUFDb0x5ZlJtWGY4dDVyRGJwUnRnajVnZFdvbl9zM3d1WDFDalBibWZ2cG1UeVB5TndLX3MxVDczZXRFdkxEdy9oc0F0QzJRaml0Z19vVXVLMzhxazVn"




                        }
                    }
                )

                setgdata(result.data.data)



            } catch (error) {

                seterror(true)

                alert("please we are fetching ")

            }

        }

        data()
    }, [])
    console.log(gdata)

    const pagination = () => {
        const arr = []
        for (let i = 1; i <= Math.ceil(gdata.length / itemperpage); i++) {
            arr.push(i)
        }
        return (
            <ul className='' >
                {
                    arr.map((e) => {
                        return (

                            <li className="li"><a className='a' onClick={() => { setcurrentpage(e) }}>{e}</a></li>

                        )
                    })
                }
            </ul>
        )
    }



    const videos = () => {
        return currentitems.map((videos) => {
            return (
                <div className='gifs' onClick={() => {
                    seturl(videos.assets.thumb_mp4.url)
                }}><img className='img' src={videos.assets.thumb_jpg.url} /></div>
            )
        })
    }


    const handle = (event) => { setsearch(event.target.value) }


    const handlesubmit = async (event) => {
        event.preventDefault();

        const result = await axios({
            method: "GET",
            url: "https://api.shutterstock.com/v2/videos/search",
            params: {
                query: search,
                per_page: 27
            },
            headers: {
                'Content-Type': "application/Json",
                "Authorization": "Bearer v2/amRIU0MyZWJ0anRjMzRuaFlGZTRmUzZWZlE2dldETFEvMzIyMzUwNDMxL2N1c3RvbWVyLzQvRzVYZllhdVV5WGRfaXRlZHZEQ0EwaDRDYkpiN0hjWGNFY2JuenB5eER3U19LVkdPVzhoTldNRndOV3EySkZuenB2TGN6bmUwX1BwWUpxRzdQRVdxRkJFNkJ1NmRwRTNpZmR3U21zUXU3dmY1bWNuNEUwaGR3RzhzUjhiY1c5MG12S1hUSm1WeC16S2pvSmJaaFFaZUxvdUFDb0x5ZlJtWGY4dDVyRGJwUnRnajVnZFdvbl9zM3d1WDFDalBibWZ2cG1UeVB5TndLX3MxVDczZXRFdkxEdy9oc0F0QzJRaml0Z19vVXVLMzhxazVn"




            }
        })

        setgdata(result.data.data)

    }


    const searchbar = () => {
        return (<div>
            <form action="">
                <input type="text" value={search} className="search" placeholder='search' onChange={handle} />
                <button type="submit" onClick={handlesubmit}>go</button>
            </form>
        </div>)
    }

    const Videoplayer = (props) => {
        return (


            <div><ReactPlayer controls url={props.url} /></div>

        )
    }


    return (
        <div className='v'>
           
                <div className='pagination'>{pagination()}</div>
                <div className='gifs'>{searchbar()}</div>
                <div className='gifs'><Videoplayer url={url} /></div>
                <div className='gifs'>{videos()}</div>
        
        </div>
    )
}

export default Videos