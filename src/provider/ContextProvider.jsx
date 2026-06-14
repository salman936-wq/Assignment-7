'use client'
import { toast } from 'react-toastify';
import { createContext, useState } from "react";
export const Context = createContext();

const ContextProvider = ({ children }) => {
const [call, setCall] = useState([]);
const [text, setText] = useState([]);
const [video, setVideo] = useState([]);

    const handleCall = (data) => {
        const callArray = {
            name: data.name,
            type: 'Call',
            date: new Date()
                .toLocaleDateString('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric'
                })
                .replace(',', '')
        };
        toast.success(`📞 Called to ${data.name}`, {
            position: "top-center",
        });
        setCall([...call, callArray])
    };

    const handleText = (data) => {
        const textArray = {
            name: data.name,
            type: 'Text',
            date: new Date()
                .toLocaleDateString('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric'
                })
                .replace(',', '')
        };
        toast.success(`✉ Text to ${data.name}`, {
            position: "top-center",
        });
        setText([...text, textArray])
    };

    const handleVideo = (data) => {
        const videoArray = {
            name: data.name,
            type: 'Video',
            date: new Date()
                .toLocaleDateString('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric'
                })
                .replace(',', '')
        };
        toast.success(`🎥 Video to ${data.name}`, {
            position: "top-center",
        });
        setVideo([...video, videoArray])
    };

  const allCallingData = {
    handleCall,
    call,
    setCall,
    handleText,
    text, 
    setText,
    handleVideo,
    video, 
    setVideo
  };

  return (
    <Context.Provider value={allCallingData}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;