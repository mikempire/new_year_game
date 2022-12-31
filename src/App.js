import React, {useEffect} from 'react';
import './App.css';
import Char from "./components/Char/Char";
import baraban from './pictures/baraban.png'
import arrow from './pictures/arrow.png'

function App() {
    const [answer, setAnswer] = React.useState('Слово');
    const [hideWord, setHideWord] = React.useState(true);
    const [rotateValue, setRotateValue] = React.useState(0);

    const onRotate = () => {
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }
        setRotateValue(360);
        setTimeout(() => {
            setRotateValue(getRandomArbitrary(0, 360));
        }, 1000);

    }


    return (
        <div className="App">
            <div className={'Word'}>
                {answer.split('').map((char, i) => (
                    char !== '' ?
                        <Char char={char} key={`${i}${char}`}/> :
                        <div key={i}/>
                ))}
            </div>
            <div className="">
                <div className="Baraban">
                    <div className="Baraban-wrapper">
                        <img src={baraban} alt="" className='Baraban-pic' style={{transform: `rotate(${rotateValue}deg)`}}/>
                        <img src={arrow} alt="" className='Arrow'/>
                    </div>
                    <div className='Answer'>
                        <div className="Answer_wrapper">
                            <input
                                onChange={(e) => setAnswer(e.target.value)}
                                value={answer}
                                className={`Input ${hideWord? 'Input-hide' : ''} `}
                            />
                            <button onClick={() =>setHideWord(!hideWord)} className='btn'>{hideWord ? 'Показать' : 'Спрятать'} слово</button>
                        </div>
                        <button onClick={onRotate} className='btn btn-role'>Крутить барабан</button>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;