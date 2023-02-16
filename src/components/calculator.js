import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
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
              <p />
            </div>
          </div>

          <div className="c-grid">
            <button
              type="button"
              id="AC"
              className="top-btn"
              value="ac"
              onClick={null}
            >
              ac
            </button>
            <button
              type="button"
              id="+/-"
              className="top-btn"
              value="+/-"
              onClick={null}
            >
              +/-
            </button>
            <button
              type="button"
              id="%"
              className="top-btn"
              value="%"
              onClick={null}
            >
              %
            </button>
            <button
              type="button"
              id="÷"
              className="top-btn special"
              value="÷"
              onClick={null}
            >
              ÷
            </button>

            <button
              type="button"
              id="7"
              className="normal"
              value="7"
              onClick={null}
            >
              7
            </button>
            <button
              type="button"
              id="8"
              className="normal"
              value="8"
              onClick={null}
            >
              8
            </button>
            <button
              type="button"
              id="9"
              className="normal"
              value="9"
              onClick={null}
            >
              9
            </button>

            <button
              type="button"
              id="x"
              className="special"
              value="*"
              onClick={null}
            >
              x
            </button>
            <button
              type="button"
              id="4"
              className="normal"
              value="4"
              onClick={null}
            >
              4
            </button>
            <button
              type="button"
              id="5"
              className="normal"
              value="5"
              onClick={null}
            >
              5
            </button>
            <button
              type="button"
              id="6"
              className="normal"
              value="6"
              onClick={null}
            >
              6
            </button>

            <button
              type="button"
              id="-"
              className="special"
              value="-"
              onClick={null}
            >
              -
            </button>
            <button
              type="button"
              id="1"
              className="normal"
              value="1"
              onClick={null}
            >
              1
            </button>
            <button
              type="button"
              id="2"
              className="normal"
              value="2"
              onClick={null}
            >
              2
            </button>
            <button
              type="button"
              id="3"
              className="normal"
              value="3"
              onClick={null}
            >
              3
            </button>
            <button
              type="button"
              id="+"
              className="special"
              value="+"
              onClick={null}
            >
              +
            </button>

            <button
              type="button"
              id="0"
              className="span-two normal"
              value="0"
              onClick={null}
            >
              0
            </button>
            <button
              type="button"
              id="."
              className="normal"
              value="."
              onClick={null}
            >
              .
            </button>
            <button
              type="button"
              id="="
              className="special"
              value="="
              onClick={null}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
