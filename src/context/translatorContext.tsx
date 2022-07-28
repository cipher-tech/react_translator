import React from "react";
interface IActionType {
    UPDATE_TEXT: string;
    UPDATE_LANGUAGE: string;
    CLEAR_TEXT: string;
}
export type Language = "English" | "German" | "Russian" | "French"
export type languagePosition = "languageRight" | "languageLeft"
export type inputPosition = "rightInput" | "leftInput"

type options = {
    rightInput: string;
    leftInput: string;
    current: "rightInput" | "leftInput";
    languageRight: Language;
    languageLeft: Language;
    from: "languageRight" | "languageLeft";
    to: "languageRight" | "languageLeft";
};
interface IState {
    translatorState: options
}

type IProps = {
    children: JSX.Element;
};

interface IAction {
    type: string;
    payload?: {
        textInputPosition: inputPosition;
        languagePosition: languagePosition;
        value: string;
    };
}

interface IContextValues {
    translatorState: options,
    updateTextInput: (textInputPosition: inputPosition, languagePosition: languagePosition, value: string) => void,
    updateLanguage: (textInputPosition: inputPosition, languagePosition: languagePosition, value: string) => void,
    clearInputs: () => void
}

const initialState: IContextValues = {
    translatorState: {
        rightInput: "Language",
        leftInput: "Language",
        current: "rightInput",
        languageRight: "English",
        languageLeft: "English",
        from: "languageRight",
        to: "languageLeft"
    },
    updateTextInput: () => { },
    updateLanguage: () => { },
    clearInputs: () => { },
};

export const actions: IActionType = {
    UPDATE_TEXT: "UPDATE_TEXT",
    UPDATE_LANGUAGE: "REMOVE_TODO_ITEM",
    CLEAR_TEXT: "CLEAR_TEXT"
};

//Reducer to Handle Actions
const reducer: (translatorState: IState, action: IAction) => IState = (
    state: IState,
    action: IAction
) => {

    const { type,
        payload = { textInputPosition: '', value: '' }
    } = action;

    switch (type) {
        case actions.UPDATE_TEXT:
            return {
                ...state,
                translatorState: {
                    ...state.translatorState,
                    [ payload.textInputPosition ]: payload.value
                }
            }

        case actions.UPDATE_LANGUAGE: {
            return state;
        }
        case actions.CLEAR_TEXT:
            return {
                ...state,
                translatorState: {
                    ...state.translatorState,
                    rightInput: '',
                    leftInput: '',
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
        translatorState: state.translatorState,
        updateTextInput: (textInputPosition: inputPosition, languagePosition: languagePosition, value: string) => {
            dispatch({ type: actions.UPDATE_TEXT, payload: { textInputPosition, languagePosition, value } });
        },
        updateLanguage: (textInputPosition: inputPosition, languagePosition: languagePosition, value: string) => {
            dispatch({ type: actions.UPDATE_LANGUAGE, payload: { textInputPosition, languagePosition, value } });
        },
        clearInputs: () => {
            dispatch({ type: actions.CLEAR_TEXT });
        }
    };

    return <TranslatorContext.Provider value={value}>{children}</TranslatorContext.Provider>;
};
