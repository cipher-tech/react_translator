import { useState, useEffect } from "react";

class NewWindow{
    stop(){}
    start(){}
    onresult(){}
}

const useSpeechToText = (activate: boolean) => {
    
    let webkitSpeechR = (window as any)[ "webkitSpeechRecognition" ] as any
    
    if (typeof webkitSpeechR == "undefined") {
        webkitSpeechR = NewWindow;
      }
    let recognition = new webkitSpeechR()

    const [ speechTranscript, setSpeechTranscript ] = useState('');
    const [ speechConfidence, setSpeechConfidence ] = useState('');
useEffect(() => {
    if (activate) {
        recognition.start()
            
            recognition.onresult = (event:any) => {
                setSpeechTranscript(event.results[0][0].transcript)
                setSpeechConfidence(event.results[0][0].confidence)
            }
        }else{
            recognition.stop()
        }
    }, [activate]);

    return [ speechTranscript, speechConfidence ];
};

export default useSpeechToText;