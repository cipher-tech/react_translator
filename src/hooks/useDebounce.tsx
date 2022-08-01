import { useState, useEffect, useContext } from "react";
import translate from "../api";
import { TranslatorContext } from "../context";

/* 
    @description: hook to debounce Api calls
*/
const useDebounce = (value: any) => {
    const [ data, setData ] = useState(null);
    const { translatorState, updateTextInputFromApi } = useContext(TranslatorContext)
    const {leftInput, rightInput} = translatorState
    useEffect(() => {

        // only make API calls after a number of milliseconds
        const timer = setTimeout(() => {
            (async (value) => {
                if(leftInput == null && rightInput == null) {
                    return
                }
                // update state after making call
                translate(translatorState[ translatorState.current ],
                    translatorState.from,
                    translatorState.to,
                    updateTextInputFromApi,
                    translatorState.current)
            })()
        }, 500)

        return () => {
            // clear timeout to prevent memory leak
            clearTimeout(timer)
        }
    }, value );

    return [ data ];
};

export default useDebounce;