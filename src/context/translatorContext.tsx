import React from "react";

// define interface for our action types
interface IActionType {
    UPDATE_TEXT: string;
    UPDATE_TEXT_FROM_API: string;
    UPDATE_LANGUAGE: string;
    CLEAR_TEXT: string;
    TOGGLE_LOADING: string;
}

// define our language types
export type Language = "English" | "German" | "Russian" | "French" | string;

// define our language position type; used to specify the language source
export type languagePosition = "languageRight" | "languageLeft";

// define our input position type; used to specify our input source
export type inputPosition = "rightInput" | "leftInput"

// define interface for our state
type options = {
    rightInput: string;
    leftInput: string;
    current: "rightInput" | "leftInput";
    selectedLanguage: Language;
    from: Language;
    to: Language;
    isLoading: boolean;
};

// define interface to separate our state from action creators
interface IState {
    translatorState: options
}

// define our context provider props
type IProps = {
    children: JSX.Element;
};

// define interface for our dispatched actions
interface IAction {
    type: string;
    payload?: {
        textInputPosition?: inputPosition;
        languagePosition?: languagePosition;
        value?: string;
    };
}

// define type for UpdateInputType action creator
export type UpdateInputType = (textInputPosition: inputPosition, value: string) => void

// define type for our context values
interface IContextValues {
    translatorState: options,
    updateTextInput: UpdateInputType,
    updateTextInputFromApi: UpdateInputType,
    updateLanguage: (value: Language) => void,
    clearInputs: () => void,
    toggleLoading: () => void
}

// defining our initialState
const initialState: IContextValues = {
    translatorState: {
        rightInput: "",  // the right input box
        leftInput: "", // the left input box
        current: "leftInput", // were the user is currently typing on
        selectedLanguage: "German", // the language selected by the user
        from: "english", // language to translate from 
        to: "German", // language to trans to
        isLoading: false // is our app currently performing any action?
    },
    updateTextInput: () => { }, // action creator to update left or right input
    updateTextInputFromApi: () => { },  // action creator to update left or right input when a request is made
    updateLanguage: () => { }, // action creator to update language
    clearInputs: () => { },  // action creator to clear all inputs
    toggleLoading: () => { }, //  action creator to toggle loading state
};

// defining our actions
export const actions: IActionType = {
    UPDATE_TEXT: "UPDATE_TEXT",
    UPDATE_TEXT_FROM_API: "UPDATE_TEXT_FROM_API",
    UPDATE_LANGUAGE: "REMOVE_TODO_ITEM",
    CLEAR_TEXT: "CLEAR_TEXT",
    TOGGLE_LOADING: "TOGGLE_LOADING"
};

//Reducer to Handle Actions
const reducer: (translatorState: IState, action: IAction) => IState = (
    state: IState,
    action: IAction
) => {
    const { type,
        payload = { textInputPosition: '', value: '' }
    } = action;

    // selecting the right reducer to handle our action
    switch (type) {
        case actions.UPDATE_TEXT:
            if (!payload.textInputPosition) {
                return state
            }
            //set current, to, from and text input from the user input
            let current = payload.textInputPosition;
            let from = "English"
            let to = state.translatorState.selectedLanguage;

            if (payload.textInputPosition === 'leftInput') {
                from = state.translatorState.selectedLanguage;
                to = 'English'
            }
            return {
                ...state,
                translatorState: {
                    ...state.translatorState,
                    [ payload.textInputPosition ]: payload.value,
                    current,
                    from,
                    to,
                    isLoading: true
                }
            }

        case actions.UPDATE_TEXT_FROM_API:
            if (!payload.textInputPosition) {
                return state
            }

            //set text input from the api request

            return {
                ...state,
                translatorState: {
                    ...state.translatorState,
                    [ payload.textInputPosition === 'leftInput'? 'rightInput' : 'leftInput' ]: payload.value,
                    isLoading: false

                }
            }

        case actions.UPDATE_LANGUAGE:
            if (payload.value == null) {
                return state
            }
            //set to, from and language from the user input

            return {
                ...state,
                translatorState: {
                    ...state.translatorState,
                    selectedLanguage: payload.value,
                    to: payload.value,
                    from: "English",
                }
            }
        case actions.CLEAR_TEXT:
            //clear all texts
            return {
                ...state,
                translatorState: {
                    ...state.translatorState,
                    rightInput: '',
                    leftInput: '',
                }
            };
            
        case actions.TOGGLE_LOADING:
            //toggle loading state
            return {
                ...state,
                translatorState: {
                    ...state.translatorState,
                    isLoading: !state.translatorState.isLoading
                }
            };
        default:
            return state;
    }
};

//Context and Provider
export const TranslatorContext = React.createContext<IContextValues>(initialState);

export const TranslatorProvider = ({ children }: IProps) => {
    const [ state, dispatch ] = React.useReducer(reducer, initialState);

    const value: IContextValues = {
        translatorState: state.translatorState, // our state object

        // action to update text
        updateTextInput: (textInputPosition: inputPosition, value: string) => {
            dispatch({ type: actions.UPDATE_TEXT, payload: { textInputPosition, value } });
        },

        // action to update text from APi
        updateTextInputFromApi: (textInputPosition: inputPosition, value: string) => {
            dispatch({ type: actions.UPDATE_TEXT_FROM_API, payload: { textInputPosition, value } });
        },

        // action to update language
        updateLanguage: (value: Language) => {
            dispatch({ type: actions.UPDATE_LANGUAGE, payload: { value } });
        },

        // action to clear input
        clearInputs: () => {
            dispatch({ type: actions.CLEAR_TEXT });
        },

        // action to toggle loading state
        toggleLoading: () => {
            dispatch({ type: actions.TOGGLE_LOADING });
        }
    };

    // return our context provider
    return <TranslatorContext.Provider value={value}>{children}</TranslatorContext.Provider>;
};
