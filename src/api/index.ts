import Axios from "axios"
import { inputPosition, Language, UpdateInputType } from "../context/translatorContext"

// define type for mapping languages
type LanguageMap = {
    [ key: string ]: string,
}
const translate = async (text: string, from: Language, to: Language, dispatch?: UpdateInputType, position?: inputPosition) => {
    const map: LanguageMap = {
        English: "eng",
        Russian: "rus",
        French: "fra",
        German: "deu"
    }

    try {
        // if text is null we don't send a request
        if (text === '') {
            return
        }
        // Get api key from environment variable
        const apiKey = process.env.REACT_APP_API_KEY
        const URL1 = `https://api.cloudmersive.com/nlp-v2/translate/language/${ map[ from ] }/to/${ map[ to ] }`
        const URL = `http://localhost:4000/api/v1`;

        //  send request and set headers
        const response = await Axios.post(URL1, {
                TextToTranslate: text
        },{
            headers: {
                "Apikey": apiKey || "",
            },
        })

        // update appropriate text input
        if(dispatch && position){
            dispatch(position, response.data.TranslatedTextResult )
        }
        return response.data
    } catch (error) {
        throw error;
    }

}

export default translate