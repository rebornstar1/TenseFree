import React, { useContext, useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { SocketContext } from '../SocketContext';
import { Button} from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function Options({}) {

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

 const [IdToCall,SetIdToCall] = useState('');

  return (
    <div className='flex flex-col gap-2 p-4 mx-auto bg-gradient-to-r rounded from-gray-300 to-gray-200 py-10'>
        <div className='mx-auto text-3xl font-semibold'>Account Info</div>
        <form className='flex flex-col mx-auto gap-2'>
            <label>Name</label>
            <input className='bg-white text-black rounded-2xl' placeholder={yname} value = {yname} onChange={(e)=> Setyname(e.target.value)}></input>
            <CopyToClipboard text = {me}>
               <Button className='bg-green-400 rounded-2xl px-4'>Copy My Id</Button>
            </CopyToClipboard>
        </form>
    </div>
  )
}

export default Options
