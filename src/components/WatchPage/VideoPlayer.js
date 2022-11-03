import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useStateContext } from '../../contexts/ContextProvider';

function VideoPlayer() {

  console.log("Mounting Video Player")

  const { attendanceSubmitted } = useStateContext();

  const aspectRatio = 0.5625;

//   let youtube = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  const lsat = "https://c6v6m6p7.stackpathcdn.com/lwsat/lwsatmobile/playlist.m3u8"
  // const barking = "https://vcpout-sf01-altnetro.internetmultimediaonline.org/vcp/av5xgmrwkg/playlist.m3u8"
  // const barking2 = "https://vcpout-sf01-altnetro.internetmultimediaonline.org/vcp/e877c883/playlist.m3u8"
  // const customStream = 'https://vcpout-ams01.internetmultimediaonline.org/vcp/GNW2022WPCngykyh/playlist.m3u8';
  
  const videoSource = lsat;
  
  const [width, setWidth] = useState('100');
  const [height, setHeight] = useState(width*aspectRatio);
  const [divHeight, setDivHeight] = useState('100%');
  // const [playing, setPlaying] = useState(false)

  function changeDivHeight(){
    if(window.innerWidth > 900){
      setDivHeight("100%")
    } else {
      setDivHeight('')
    }
    // setPlaying(true)
  }

  useEffect(()=>{
    console.log("Videoplayer will mount")
    let videoWidth = document.getElementById("video-player").clientWidth
    setWidth(videoWidth)
    window.addEventListener("resize", function(){
      let videoWidth = document.getElementById("video-player").clientWidth
      setWidth(videoWidth)
      setHeight(videoWidth*aspectRatio);
    });
    changeDivHeight()
    // setPlaying(true)
    return () => {
      // setPlaying(false)
      console.log("Unmounting Video Player")
    }
  }, [])

  useEffect(()=>{
    console.log("setting height")
    setHeight(width*aspectRatio);
    
    changeDivHeight()
    // setPlaying(true)
    return () => {
      // setPlaying(false)
      console.log("Unmounting Video Player")
    }
  }, [width])

  function MutedVideoPlayer() {
    return (
      <ReactPlayer url={videoSource} width={"100%"} height={height} id={"video-player"} volume={0} muted={true} playing={true} onError={console.log} />
    )
  }

  // console.log(ReactPlayer.canPlay(lsat))

  return (
    <>
      <div style={{backgroundColor: "black", display:"flex", height:divHeight, flexDirection: 'column', justifyContent: 'center'}}>
        {attendanceSubmitted? 
        <ReactPlayer pip={true} stopOnUnmount={false} url={videoSource} width={"100%"} height={height} id={"video-player"} controls playing={true} light={true} />
        :
        <MutedVideoPlayer />
        }
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
      </div>
    </>
  )
}

export default VideoPlayer