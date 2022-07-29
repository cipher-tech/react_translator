import Axios from "axios"
import { inputPosition, Language, UpdateInputType } from "../context/translatorContext"

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
        const apiKey = process.env.REACT_APP_API_KEY
        const URL1 = `https://api.cloudmersive.com/nlp-v2/translate/language/${ map[ from ] }/to/${ map[ to ] }`
        const URL = `http://localhost:4000/api/v1`;

        const response = await Axios.post(URL, {
            headers: {
                Apikey: apiKey
            },
            body: {
                TextToTranslate: text
            }
        })

        console.log("::::::::: response", {
            text,
            from,
            to,
            URL1,
            response: response.data
        });

        if(dispatch && position){
            dispatch(position, response.data.data.TranslatedTextResult )
        }
        return response.data
    } catch (error) {
        throw error;
    }

}

export default translate