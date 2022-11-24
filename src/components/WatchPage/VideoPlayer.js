import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useStateContext } from '../../contexts/ContextProvider';
import './VideoPlayer.css';
import stayTunedBanner from '../../Stay-tuned-.png';
import stayTunedVid from "../../stay-tuned.mp4"

function VideoPlayer() {

  const barking = "https://vcpout-sf01-altnetro.internetmultimediaonline.org/vcp/av5xgmrwkg/playlist.m3u8"
  // const customStream = 'https://vcpout-ams01.internetmultimediaonline.org/vcp/GNW2022WPCngykyh/playlist.m3u8';
  const lsat = "https://c6v6m6p7.stackpathcdn.com/lwsat/lwsatmobile/playlist.m3u8"
  let youtube = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  const barking2 = "https://vcpout-sf01-altnetro.internetmultimediaonline.org/vcp/e877c883/playlist.m3u8";
  // const stayTuned = "../../stay-tuned.mp4"
 

  const { attendanceSubmitted } = useStateContext();
  const [videoSource, setVideoSource] = useState(barking2);
  const [config, setConfig] = useState( {
    file: {
      forceHLS: true
    }
  })
  const [ stayTuned, setStayTuned ] = useState(false)
  const [ playing, setPlaying ] = useState(true)

  // const aspectRatio = 0.5625;

  
  useEffect(()=>{
    if(videoSource !== barking2 ){
      setVideoSource(barking2)
    }
  }, [])

  // function changeDivHeight(){
  //   if(window.innerWidth > 900){
  //     setDivHeight("100%")
  //   } else {
  //     // setDivHeight('')
  //   }
  //   // setPlaying(true)
  // }

  // useEffect(()=>{
  //   console.log("Videoplayer will mount")

  //   setVideoSrc(lsat)
  //   let videoWidth = document.getElementById("video-player").clientWidth
  //   setWidth(videoWidth)
  //   window.addEventListener("resize", function(){
  //     let videoWidth = document.getElementById("video-player").clientWidth
  //     setWidth(videoWidth)
  //     setHeight(videoWidth*aspectRatio);
  //   });
  //   // changeDivHeight()
  //   // setPlaying(true)
  //   return () => {
  //     // setPlaying(false)
  //     console.log("Unmounting Video Player 1")
  //   }
  // }, [])

  // useEffect(()=>{
  //   console.log("not setting div height")
  //   // setHeight(width*aspectRatio);
    
  //   // changeDivHeight()
  //   // setPlaying(true)
  //   return () => {
  //     // setPlaying(false)
  //     console.log("Unmounting Video Player 2")
  //   }
  // }, [width])

  function handleMediaError(e){
    console.log(e)
    setTimeout(() => {
      console.log('Checking if error is resolved.'); 
      setStayTuned(false)
      setPlaying(false)
    }, 5000)
    setStayTuned(true)
  }
  

  function MutedVideoPlayer() {
    return (
      <ReactPlayer light={!playing} config={config} url={videoSource} width={'100%'} height={'100%'} id={"video-player"} volume={0} muted={true} playing={true} onError={handleMediaError} />
    )
  }

  return (
    <>
      
        {stayTuned? <img src={stayTunedBanner} alt='stay-tuned' width={'100%'} height={'100%'} /> : attendanceSubmitted? 
        <ReactPlayer config={config} pip={true} stopOnUnmount={false} url={videoSource} width={"100%"} height={'100%'} id={"video-player"} controls playing={true} light={true} onError={handleMediaError}  />
        :
        <MutedVideoPlayer />
        }
        {/* <div style={{height: '100%', width: '100%', padding: '20px'}}>

        <h2 style={{color: 'white', textDecoration: 'underline', textAlign: 'center'}} >NOTICE</h2>
          <h3 style={{color: 'white', textAlign: 'center'}}>
          This morning's service <br/>(SUNDAY 20/11/2022)<br/> will not be streamed online.
          </h3>
        </div> */}
        {/* <div style={{border: '2px solid grey', width: '100%', height: '50px', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <div style={{color: "white"}}>SHARE</div>
            <div style={{color: "white"}}>CHURCH DASHBOARD</div>
            <div style={{color: "white"}}>MY DASHBOARD</div>
          <Link to="/admin-dashboard" className="link">
            <div style={{color: "white"}}>CHURCH DASHBOARD</div>
          </Link>
          <Link to="/my-dashboard" className="link">
            <div style={{color: "white"}}>MY DASHBOARD</div>
          </Link>
        </div> */}
      
    </>
  )
}

export default VideoPlayer