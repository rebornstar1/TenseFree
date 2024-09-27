import React, { Children, createContext } from 'react'
import { createElement,useState,useEffect,useRef } from 'react'
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext  = createContext();
const socket  = io('http://localhost:3000/')

const ContextProvider = ({ Children}) => {
  
  const [stream,Setstream] = useState(null);
  const [me,Setme] = useState('');
  const [calluser,Setcalluser] = useState(null);
  const [callaccpeted,Setcallaccepted] = useState(false);
  const [callended,Setcallended] = useState(false);
  const [yname,Setyname] = useState('');
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(()=> {
    navigator.mediaDevices.getUserMedia({video : true, audio : true, location : true})
    .then((currentStream)=>{
        Setstream(currentStream);

        myVideo.current.srcObject = currentStream; // This Might Throw error if my video is not functioning then check this part first
        
      })

    socket.on('me', (id) => {
       Setme(id);
    })

    socket.on('calluser',({from,name : callerName, signal}) => {
       Setcalluser({isRecieved : true, from , name : callerName, signal});
    })
  },[])
  
  const answerCall = () => {
        Setcallaccepted(true);
         // It's initiator because we are only responding to the call
         // The Reason behind trickle being false is that it waits for 
         // all ICE Candidates to gather unlike the default trickle behavious of ICE Candidates in the communication
        const peer = new Peer({initiator : false, trickle : false, stream})

        peer.on('signal',(data)=>{
            socket.emit('answercall',{signal : data, to : data.from})
        });

        peer.on('stream',(currentStream) => {
            userVideo.current.srcObject = currentStream;
        })

        peer.signal(calluser.signal);

        connectionRef.current = peer;
    }

    const callUser = (id) => {
        const peer = new Peer({initiator : true, trickle : false, stream})

        peer.on('signal',(data)=>{
            socket.emit('calluser',{ userToCall : id, signalData : data, from : me, yname })
        });

        peer.on('stream', (currentStream) =>{
            userVideo.current.srcObject = currentStream;
        })

        socket.on('accepted',(signal) => {
           Setcallaccepted(true);
           peer.signal(signal);
        })

        connectionRef.current = peer;
    }

    const leaveCall = () => {
       Setcallended(true);
       connectionRef.current.destroy();

       window.location.reload(); // this is being done so that now the user could call to another client so we can get the id different now
    }

    return (
      <SocketContext.Provider value = {{
       calluser,
       callaccpeted,
       callended,
       yname,
       Setyname,
       myVideo,
       userVideo,
       me,
       callUser,
       answerCall,
       leaveCall
      }}>
        {Children}
      </SocketContext.Provider>
    )
}

export {ContextProvider, SocketContext};