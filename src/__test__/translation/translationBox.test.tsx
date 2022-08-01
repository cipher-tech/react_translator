import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TranslatorContext, TranslatorProvider } from '../../context';
import { value } from '../mock/contextMock';
describe('TranslationBox', () => {
  test('updates input', async () => {
    const TestComponent = () => {
      const { translatorState, updateTextInput } = React.useContext(TranslatorContext)
      let textContentRight = translatorState[ 'rightInput' ];
      const onChange = jest.fn();
      return <>
        <textarea
          className="translatorBox-input__area--input"
          name="input"
          id="1"
          data-testid="textInput"
          value={textContentRight}
          onChange={(e) =>{ onChange()}}
          cols={50}
          rows={10}
          placeholder="Enter text here"
        >
          {textContentRight}
        </textarea>
        <div data-testid="content">
          {textContentRight}
        </div>
      </>
    }
   render(<TranslatorProvider>
      <TestComponent />
    </TranslatorProvider>);

    const element = screen.getByTestId('textInput')
    expect(element).toBeInTheDocument();
    expect(element.nodeValue).toEqual(null);

  });
})
