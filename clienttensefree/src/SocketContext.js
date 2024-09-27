import React, { createContext } from 'react'
import { createElement,useState,useEffect,useRef } from 'react'
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext  = createContext();
const socket  = io('http://localhost:3000/')

const ContextProvider