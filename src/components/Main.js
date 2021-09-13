import React from 'react'
import { useHistory } from 'react-router';

function Main({mbti}) {

    console.log(mbti)
    const history = useHistory();

    const onRestartHandler = (e) =>{
        history.push('/');
    }
    
    return (
        <div className="test">
            <h1>당신은 [{mbti[0]}] 입니다.</h1>
            <div className="image"></div>
            <div className="restart" onClick={onRestartHandler}>다시하기</div>
        </div>
    )
}

export default Main
