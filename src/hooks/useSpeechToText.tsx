import { useState, useEffect } from "react";

// define our window function types
class NewWindow {
    stop() { }
    start() { }
    onresult() { }
}

const useSpeechToText = (activate: boolean) => {

    // get the class from the window object
    let webkitSpeechR = (window as any)[ "webkitSpeechRecognition" ] as any

    // if its undefined set it to a custom object to prevent crashing
    if (typeof webkitSpeechR == "undefined") {
        webkitSpeechR = NewWindow;
    }
    let recognition = new webkitSpeechR()

    const [ speechTranscript, setSpeechTranscript ] = useState('');
    const [ speechConfidence, setSpeechConfidence ] = useState('');
    useEffect(() => {

        if (activate) {
            // start listening if activate is true
            recognition.start()

            // when we have a result up date local variables
            recognition.onresult = (event: any) => {
                setSpeechTranscript(event.results[ 0 ][ 0 ].transcript)
                setSpeechConfidence(event.results[ 0 ][ 0 ].confidence)
            }
        } else {
            recognition.stop()
        }
    }, [ activate ]);

    return [ speechTranscript, speechConfidence ];
};

export default useSpeechToText;