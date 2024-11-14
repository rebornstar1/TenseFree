import React, { useContext, useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../SocketContext';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
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

  const [IdToCall, SetIdToCall] = useState('');
  const [tape, Settape] = useState('');
  const [copymsg, Setcopymsg] = useState('');
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const copyContent = async () => {
    try{
    await navigator.clipboard.writeText(me);
    Setcopymsg("Content copied to clipboard");
    setShowCopyMessage(true);
    setTimeout(() => {
      setShowCopyMessage(false);
    }, 2000);
    }
    catch(error)
    {
      Setcopymsg("Some Issue during copying");
      setShowCopyMessage(true);
      setTimeout(() => {
        setShowCopyMessage(true);
      }, 2000);
    }
  };

  return (
    <div className='flex flex-col gap-2 p-4 mx-auto bg-gradient-to-r rounded from-gray-300 to-gray-200 py-10'>
      <div className='mx-auto text-3xl font-semibold'>Account Info</div>
      <form className='flex flex-col mx-auto gap-2'>
        <label>Name</label>
        <input className='bg-white text-black rounded-2xl' placeholder={yname} value={yname} onChange={(e) => Setyname(e.target.value)}></input>
        <label>{me}</label>
        <CopyToClipboard text={me}>
          <Button variant="contained" color="secondary" className="bg-green-400 rounded-2xl px-4 hover:bg-green-600" onClick={copyContent}>
            Copy My Id
          </Button>
        </CopyToClipboard>
        {showCopyMessage && <div>{copymsg}</div>}
      </form>
    </div>
  )
}

export default Options