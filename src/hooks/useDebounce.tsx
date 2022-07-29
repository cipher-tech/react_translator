import { useState, useEffect, useContext } from "react";
import translate from "../api";
import { TranslatorContext } from "../context";
const useDebounce = (value: any) => {
    const [ data, setData ] = useState(null);
    const { translatorState, updateTextInputFromApi } = useContext(TranslatorContext)
    const {leftInput, rightInput} = translatorState
    useEffect(() => {
        const timer = setTimeout(() => {
            (async (value) => {
                if(leftInput == null && rightInput == null) {
                    console.log("::::::: IS NULL");
                    
                    return
                }
                translate(translatorState[ translatorState.current ],
                    translatorState.from,
                    translatorState.to,
                    updateTextInputFromApi,
                    translatorState.current)
            })()
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, value );

    return [ data ];
};

export default useDebounce;