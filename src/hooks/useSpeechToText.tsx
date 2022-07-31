import { useState, useEffect } from "react";

interface IWindow extends Window {
    webkitSpeechRecognition: any;
}
interface IWindow2 extends Window {
    webkitSpeechGrammarList: any;
}

const useSpeechToText = (activate: boolean) => {
    let webkitSpeechR: IWindow = (window as any)[ "webkitSpeechRecognition" ]
    let webkitSpeechRecList: IWindow2 = (window as any)[ "webkitSpeechGrammarList" ]

    let colors = [ 'aqua', 'azure', 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral' ];
    let grammar = '#JSGF V1.0; grammar colors; public <colors> = ' + colors.join(' | ') + ' ;'

    var SpeechRecognition: any = webkitSpeechR
    let recognition = new SpeechRecognition()

    var SpeechGrammarList: any = webkitSpeechRecList
    let speechRecognitionList = new SpeechGrammarList()
    speechRecognitionList.addFromString(grammar, 1);

    recognition.grammars = speechRecognitionList;

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