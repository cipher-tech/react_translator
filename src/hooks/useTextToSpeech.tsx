import { useState, useEffect, useCallback } from "react";

// define our window function types


const useTextToSpeech = (activate: boolean, text: string) => {
    // const [ text, setOurText ] = useState("go home")
    const msg = new SpeechSynthesisUtterance()

    const speechHandler = useCallback((msg: SpeechSynthesisUtterance) => {
        msg.text = text
        window.speechSynthesis.speak(msg)
    },
        [text],
    )


    useEffect(() => {
        if (activate) {            
            speechHandler(msg)
        }
    }, [ activate, text ])



    return <></>
};

export default useTextToSpeech;