import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Audio = () => {
    const [gdata, setgdata] = useState([])
    const [error, seterror] = useState(false)
    const [search,setsearch]=useState("")
    const[url,seturl]=useState("")
    const[currentpage,setcurrentpage]=useState(1)
    const[itemperpage,setitemperpage]=useState(5)
    const indexoflastitem=currentpage*itemperpage
    const indexoffirstitem=indexoflastitem-itemperpage
    const currentitems=gdata.slice(indexoffirstitem,indexoflastitem)


    


    useEffect(() => {

        async function data() {
          try {
            const result = await axios(
    
            
              {
                method: "GET",
                url: "https://api.shutterstock.com/v2/audio/search",
      
                params: {
                // query:'good',
                limit:10
                },
      
                headers: {
                  'Content-Type': "application/Json",
                  "Authorization":"Bearer v2/amRIU0MyZWJ0anRjMzRuaFlGZTRmUzZWZlE2dldETFEvMzIyMzUwNDMxL2N1c3RvbWVyLzQvRzVYZllhdVV5WGRfaXRlZHZEQ0EwaDRDYkpiN0hjWGNFY2JuenB5eER3U19LVkdPVzhoTldNRndOV3EySkZuenB2TGN6bmUwX1BwWUpxRzdQRVdxRkJFNkJ1NmRwRTNpZmR3U21zUXU3dmY1bWNuNEUwaGR3RzhzUjhiY1c5MG12S1hUSm1WeC16S2pvSmJaaFFaZUxvdUFDb0x5ZlJtWGY4dDVyRGJwUnRnajVnZFdvbl9zM3d1WDFDalBibWZ2cG1UeVB5TndLX3MxVDczZXRFdkxEdy9oc0F0QzJRaml0Z19vVXVLMzhxazVn"

                  
      
      
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


       
  const handle=(event)=>{setsearch(event.target.value)}
  
  
  const handlesubmit= async (event)=>{
    event.preventDefault();
    
      const result= await axios({
        method:"GET",
        url:"https://api.shutterstock.com/v2/audio/search",
        params:{
          query:search
        },
        headers: {
          'Content-Type': "application/Json",
          "Authorization":"Bearer v2/amRIU0MyZWJ0anRjMzRuaFlGZTRmUzZWZlE2dldETFEvMzIyMzUwNDMxL2N1c3RvbWVyLzQvRzVYZllhdVV5WGRfaXRlZHZEQ0EwaDRDYkpiN0hjWGNFY2JuenB5eER3U19LVkdPVzhoTldNRndOV3EySkZuenB2TGN6bmUwX1BwWUpxRzdQRVdxRkJFNkJ1NmRwRTNpZmR3U21zUXU3dmY1bWNuNEUwaGR3RzhzUjhiY1c5MG12S1hUSm1WeC16S2pvSmJaaFFaZUxvdUFDb0x5ZlJtWGY4dDVyRGJwUnRnajVnZFdvbl9zM3d1WDFDalBibWZ2cG1UeVB5TndLX3MxVDczZXRFdkxEdy9oc0F0QzJRaml0Z19vVXVLMzhxazVn"

          


        }
      })

      setgdata(result.data.data)

  }
  

      const searchbar=()=>{return(<div>
        <form action="">
          <input type="text" value={search} className="search" placeholder='search' onChange={handle} />
          <button  type="submit" onClick={handlesubmit}>go</button>
        </form>
      </div>)}

const Audioplayer = () => {

    return(
        <div className='gifs'>{
    
    gdata.map((e)=>{return(<div><ReactAudioPlayer controls src={e.assets.preview_mp3.url}/></div>)}
    )
        }
    </div>

  
    )
  }




  return  (
    <div>
        <div>
            <div className='gifs'>{searchbar()}</div>
            <div><Audioplayer /></div>
        </div>

        
    </div>
  )
}

export default Audio