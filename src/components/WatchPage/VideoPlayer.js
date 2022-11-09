import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useStateContext } from '../../contexts/ContextProvider';
import './VideoPlayer.css';

function VideoPlayer() {

  console.log("Mounting Video Player")

  const { attendanceSubmitted } = useStateContext();

  const aspectRatio = 0.5625;

  let youtube = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  const lsat = "https://c6v6m6p7.stackpathcdn.com/lwsat/lwsatmobile/playlist.m3u8"
  // const barking = "https://vcpout-sf01-altnetro.internetmultimediaonline.org/vcp/av5xgmrwkg/playlist.m3u8"
  // const barking2 = "https://vcpout-sf01-altnetro.internetmultimediaonline.org/vcp/e877c883/playlist.m3u8"
  // const customStream = 'https://vcpout-ams01.internetmultimediaonline.org/vcp/GNW2022WPCngykyh/playlist.m3u8';
  
  const videoSource = lsat;

  const welcomeImg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F4%2F3%2Fe%2F14037.jpg&f=1&nofb=1&ipt=5d3fecf2e91dcf081f3c6d15e5a93cdfb588c4e48fcdc416847ca3bf1c9db8c8&ipo=images'

  
  const [width, setWidth] = useState('100%');
  const [height, setHeight] = useState('100%');
  // const [divHeight, setDivHeight] = useState('100px');
  // const [playing, setPlaying] = useState(false)
  const [videoSrc, setVideoSrc] = useState(youtube);

  console.log('player width = ', width)
  console.log('player height = ', height)

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

  

  function MutedVideoPlayer() {
    return (
      <ReactPlayer url={videoSource} width={width} height={height} id={"video-player"} volume={0} muted={true} playing={true} onError={console.log} />
    )
  }

  console.log(ReactPlayer.canPlay(videoSource))

  return (
    <>
      
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
      
    </>
  )
}

export default VideoPlayer