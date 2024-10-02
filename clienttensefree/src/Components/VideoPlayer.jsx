import React, { useContext } from 'react'
import Options from './Options'
import { SocketContext } from '../SocketContext'

function VideoPlayer() {
    const {
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
        leaveCall,
        stream
     } = useContext(SocketContext);
  return (
    <div>
        {
            stream && (
                <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 shadow-xl">
                    <div class="absolute inset-px rounded-lg bg-white opacity-20"></div>
                        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            {/* My Own Video */}
                            <div>
                            <video playsInline muted ref = {myVideo} autoPlay  ></video>
                            <div>{yname}</div>
                            </div>
                        </div>
                    <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                    <Options className = "mx-auto"/>
                </div>
            )
        }

        {
            callaccpeted && !callended && (
                <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                    <div class="absolute inset-px rounded-lg bg-white opacity-20"></div>
                        <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            {/* Another User's Video */ }
                            <div>
                                <video playsInline ref = {userVideo} autoPlay  ></video>
                            <div>{yname}</div>
                        </div>
                    </div>
                        <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                        <Options className = "mx-auto"/>
                </div>
            )
        }

</div>
  )
}

export default VideoPlayer
