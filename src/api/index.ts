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
        if (text === '') {
            return
        }
        const apiKey = process.env.REACT_APP_API_KEY
        const URL1 = `https://api.cloudmersive.com/nlp-v2/translate/language/${ map[ from ] }/to/${ map[ to ] }`
        const URL = `http://localhost:4000/api/v1`;

        const response = await Axios.post(URL, {
                TextToTranslate: text
        },{
            headers: {
                "Apikey": apiKey || "",
            },
        })

        console.log("::::::::: response", {
            text,
            from,
            to,
            URL1,
            position,
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