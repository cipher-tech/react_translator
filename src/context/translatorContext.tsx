import React from "react";
interface IActionType {
    UPDATE_TEXT: string;
    UPDATE_TEXT_FROM_API: string;
    UPDATE_LANGUAGE: string;
    CLEAR_TEXT: string;
    TOGGLE_LOADING: string;
}
export type Language = "English" | "German" | "Russian" | "French" | string;
export type languagePosition = "languageRight" | "languageLeft"
export type inputPosition = "rightInput" | "leftInput"

type options = {
    rightInput: string;
    leftInput: string;
    current: "rightInput" | "leftInput";
    selectedLanguage: Language;
    from: Language;
    to: Language;
    isLoading: boolean;
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
        textInputPosition?: inputPosition;
        languagePosition?: languagePosition;
        value?: string;
    };
}

export type UpdateInputType = (textInputPosition: inputPosition, value: string) => void
interface IContextValues {
    translatorState: options,
    updateTextInput: UpdateInputType,
    updateTextInputFromApi: UpdateInputType,
    updateLanguage: (value: Language) => void,
    clearInputs: () => void,
    toggleLoading: () => void
}

const initialState: IContextValues = {
    translatorState: {
        rightInput: "",
        leftInput: "",
        current: "leftInput",
        selectedLanguage: "German",
        from: "english",
        to: "German",
        isLoading: false
    },
    updateTextInput: () => { },
    updateTextInputFromApi: () => { },
    updateLanguage: () => { },
    clearInputs: () => { },
    toggleLoading: () => { },
};

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

    switch (type) {
        case actions.UPDATE_TEXT:
            if (!payload.textInputPosition) {
                return state
            }
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
            return {
                ...state,
                translatorState: {
                    ...state.translatorState,
                    rightInput: '',
                    leftInput: '',
                }
            };
            
        case actions.TOGGLE_LOADING:
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
        translatorState: state.translatorState,
        updateTextInput: (textInputPosition: inputPosition, value: string) => {
            dispatch({ type: actions.UPDATE_TEXT, payload: { textInputPosition, value } });
        },
        updateTextInputFromApi: (textInputPosition: inputPosition, value: string) => {
            dispatch({ type: actions.UPDATE_TEXT_FROM_API, payload: { textInputPosition, value } });
        },
        updateLanguage: (value: Language) => {
            dispatch({ type: actions.UPDATE_LANGUAGE, payload: { value } });
        },
        clearInputs: () => {
            dispatch({ type: actions.CLEAR_TEXT });
        },
        toggleLoading: () => {
            dispatch({ type: actions.TOGGLE_LOADING });
        }
    };

    return <TranslatorContext.Provider value={value}>{children}</TranslatorContext.Provider>;
};
