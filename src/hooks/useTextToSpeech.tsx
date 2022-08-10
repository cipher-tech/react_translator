import { useState, useEffect, useCallback } from "react";

// define our window function types
class NewWindow {
    text() { }
}

const useTextToSpeech = (activate: boolean, text: string) => {
    // get the class from the window object
    let speech = (window as any)[ "SpeechSynthesisUtterance" ] as any

    // if its undefined set it to a custom object to prevent crashing
    if (typeof speech == "undefined") {
        speech = NewWindow;
    }
    const msg = new speech()

    const speechHandler = useCallback((msg: SpeechSynthesisUtterance) => {
        msg.text = text
        window.speechSynthesis.speak(msg)
    },
        [ text ],
    )


    useEffect(() => {
        if (activate) {
            speechHandler(msg)
        }
    }, [ activate, text ])



    return <></>
};

export default useTextToSpeech;