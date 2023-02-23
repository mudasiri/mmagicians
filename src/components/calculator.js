import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const initialValue = {
    total: null,
    next: null,
    operation: null,
  };

  const [result, setResults] = useState(initialValue);
  const { total, operation, next } = result;

  const handleBtn = (btn) => {
    setResults((Object) => calculate(Object, btn));
  };

  return (
    <div className="container">
      <h1>Lets do some Math</h1>
      <div className="calculator">
        <div className="c-wrapper">
          <div className="ctc c-screen">
            <div className="c-history-answer">
              <i className="fa-solid fa-clock" />
            </div>
            <div className="c-answer" />
          </div>

          <div className="ctc c-compute">
            <div className="number">
              <p>
                <span>{total}</span>
                <span>{operation}</span>
                <span>{next}</span>
              </p>
            </div>
          </div>

          <div className="c-grid">
            <button
              type="button"
              id="AC"
              className="top-btn"
              value="ac"
              onClick={(e) => handleBtn(e.target.id)}
            >
              ac
            </button>
            <button
              type="button"
              id="+/-"
              className="top-btn"
              value="+/-"
              onClick={(e) => handleBtn(e.target.id)}
            >
              +/-
            </button>
            <button
              type="button"
              id="%"
              className="top-btn"
              value="%"
              onClick={(e) => handleBtn(e.target.id)}
            >
              %
            </button>
            <button
              type="button"
              id="÷"
              className="top-btn special"
              value="÷"
              onClick={(e) => handleBtn(e.target.id)}
            >
              ÷
            </button>

            <button
              type="button"
              id="7"
              className="normal"
              value="7"
              onClick={(e) => handleBtn(e.target.id)}
            >
              7
            </button>
            <button
              type="button"
              id="8"
              className="normal"
              value="8"
              onClick={(e) => handleBtn(e.target.id)}
            >
              8
            </button>
            <button
              type="button"
              id="9"
              className="normal"
              value="9"
              onClick={(e) => handleBtn(e.target.id)}
            >
              9
            </button>

            <button
              type="button"
              id="x"
              className="special"
              value="*"
              onClick={(e) => handleBtn(e.target.id)}
            >
              x
            </button>
            <button
              type="button"
              id="4"
              className="normal"
              value="4"
              onClick={(e) => handleBtn(e.target.id)}
            >
              4
            </button>
            <button
              type="button"
              id="5"
              className="normal"
              value="5"
              onClick={(e) => handleBtn(e.target.id)}
            >
              5
            </button>
            <button
              type="button"
              id="6"
              className="normal"
              value="6"
              onClick={(e) => handleBtn(e.target.id)}
            >
              6
            </button>

            <button
              type="button"
              id="-"
              className="special"
              value="-"
              onClick={(e) => handleBtn(e.target.id)}
            >
              -
            </button>
            <button
              type="button"
              id="1"
              className="normal"
              value="1"
              onClick={(e) => handleBtn(e.target.id)}
            >
              1
            </button>
            <button
              type="button"
              id="2"
              className="normal"
              value="2"
              onClick={(e) => handleBtn(e.target.id)}
            >
              2
            </button>
            <button
              type="button"
              id="3"
              className="normal"
              value="3"
              onClick={(e) => handleBtn(e.target.id)}
            >
              3
            </button>
            <button
              type="button"
              id="+"
              className="special"
              value="+"
              onClick={(e) => handleBtn(e.target.id)}
            >
              +
            </button>

            <button
              type="button"
              id="0"
              className="span-two normal"
              value="0"
              onClick={(e) => handleBtn(e.target.id)}
            >
              0
            </button>
            <button
              type="button"
              id="."
              className="normal"
              value="."
              onClick={(e) => handleBtn(e.target.id)}
            >
              .
            </button>
            <button
              type="button"
              id="="
              className="special"
              value="="
              onClick={(e) => handleBtn(e.target.id)}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
