// eslint-disable-next-line object-curly-spacing
import { useState } from 'react';
import style from './FuncComplex.module.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-spacing
export const FuncComplex = ({ min, max }) => {
  const [state, setState] = useState({
    userNumber: '',
    count: 0,
    result: 'result',
  });

  const [randomNumber] = useState(
    Math.floor(Math.random() * (max - min + 1)) + min
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    setState((prevState) => {
      let result = '';
      let count = prevState.count;
      if (
        !state.userNumber ||
        state.userNumber < min ||
        state.userNumber > max
      ) {
        // eslint-disable-next-line object-curly-spacing
        return { ...prevState, result: `Введите число от ${min} до ${max}` };
      }

      count++;

      if (state.userNumber < randomNumber) {
        result = `${state.userNumber} меньше загаданного числа`;
      } else if (state.userNumber > randomNumber) {
        result = `${state.userNumber} больше загаданного числа`;
      } else {
        result = `Вы угадали, число ${randomNumber}, попыток ${count}`;
      }

      // eslint-disable-next-line object-curly-spacing
      return { ...prevState, count, result };
    });
  };

  const handleChange = (e) => {
    // eslint-disable-next-line object-curly-spacing
    setState({ ...state, userNumber: e.target.value });
  };

  return (
    <div className={style.game}>
      <p className={style.result}>{state.result}</p>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor="user_number">
          Попыток: {state.count}
        </label>
        <input
          className={style.input}
          type="number"
          id="user_number"
          value={state.userNumber}
          onChange={handleChange}
        />
        <button className={style.btn}>Угадать</button>
      </form>
    </div>
  );
};

FuncComplex.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
