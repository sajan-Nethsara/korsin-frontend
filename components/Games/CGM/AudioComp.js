import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

const Audio = ({url,current}) => {
  const audioApi = `${url}/audio/${current}`
  const audioRef = useRef()
  const [audio, setAudio]= useState(null)
  const [isPlaying, setIsPlaying] = useState(false);
  const fetchAudio = async (url) => {
    try{
      const res = await axios.get(url)
      const blob = new Blob([res.data], {type: 'audio/mpeg'})
      const audioFile = window.URL.createObjectURL(blob)
      setAudio(audioFile)
      console.log(res.statusText)
      console.log(audioFile)
      setIsPlaying(true)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=> {
    fetchAudio(audioApi)
    if(isPlaying){
      audioRef.current.play()
    }
  },[])
  return (
    <div>
      <audio ref={audioRef}>
        <source src={audio} type='audio/mpeg'/>
      </audio>
    </div>
  )
}

export default Audio