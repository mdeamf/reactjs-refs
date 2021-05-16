import { useRef } from 'react';
import './App.css';

function App() {
  const inputEl = useRef();

  const changedText = (e) => {
    console.log('[INPUT EVENT]', e);
    console.log('[INPUT EVENT LAST INPUT VALUE]', e.nativeEvent.data);
    console.log('[INPUT EVENT FULL INPUT VALUE]', e.target.value);
    console.log('[INPUT REF]', inputEl.current);
    console.log('[INPUT REF FULL INPUT VALUE]', inputEl.current.value);
  };

  const focusedText = (e) => {
    console.log('[FOCUS EVENT]', e);
  };

  const blurredText = (e) => {
    console.log('[BLUR EVENT]', e);
  };

  const focusText = () => {
    inputEl.current.focus();
  };

  const blurText = () => {
    inputEl.current.blur();
  };

  return (
    <div className="App">
      <input
        ref={inputEl}
        type="text"
        onChange={changedText}
        onFocus={focusedText}
        onBlur={blurredText}
        onKeyDown={(e) => e.nativeEvent.key === 'Enter' ? blurText() : null}
      />

      <button className="App-button" type="button" onClick={focusText}>
        Focus Text
      </button>
      <button className="App-button" type="button" onClick={blurText}>
        Unfocus Text
      </button>
    </div>
  );
}

export default App;
