// eslint-disable-next-line object-curly-spacing
import { useState, useMemo, useLayoutEffect } from 'react';
import style from './FunctionalComponent.module.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-spacing
export const FunctionalComponent = ({ min, max }) => {
  const [userNumber, setUserNumber] = useState('');
  const [result, setResult] = useState('result');
  const [count, setCount] = useState(0);
  const [tempRandom, setTempRandom] = useState(0);

  const [finish, setFinish] = useState(false);

  const randomNumber = useMemo(() => {
    setFinish(false);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }, [finish]);

  useLayoutEffect(() => {
    if (tempRandom >= 1) {
      setTempRandom(Math.random());
    }
  }, [tempRandom]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setCount((prevCount) => prevCount + 1);
    setTempRandom(1);

    setResult(() => {
      if (!userNumber || userNumber < min || userNumber > max) {
        return `Введите число от ${min} до ${max}`;
      }

      if (userNumber < randomNumber) {
        return `${userNumber} меньше загаданного числа`;
      }

      if (userNumber > randomNumber) {
        return `${userNumber} больше загаданного числа`;
      }

      setFinish(true);

      return `Вы угадали, число ${randomNumber}`;
    });
  };

  const handleChange = (e) => {
    setUserNumber(e.target.value);
  };

  console.log(randomNumber);

  return (
    <div className={style.game}>
      <p className={style.result}>{result}</p>
      <p className={style.result}>{tempRandom}</p>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor="user_number">
          Попыток: {count}
        </label>
        <input
          className={style.input}
          type="number"
          id="user_number"
          value={userNumber}
          onChange={handleChange}
        />
        <button className={style.btn}>Угадать</button>
      </form>
    </div>
  );
};

FunctionalComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
