import React from 'react'
import { useHistory } from 'react-router';

function Main({mbti}) {

    console.log(mbti)
    const history = useHistory();

    const onRestartHandler = (e) =>{
        history.push('/');
    }
    
    return (
        <div className="test result">
            <h1>당신은 [{mbti[0]}] 입니다.</h1>
            <div className="image"></div>
            <div className="desc">
                <label>당신은 이런 사람입니다..</label>
                <div>
                    <p>♥ 착하다</p>
                    <p>♥ 착하다</p>
                    <p>♥ 착하다</p>
                    <p>♥ 착하다</p>
                </div>
            </div>
            <div className="restart" onClick={onRestartHandler}><p>다시하기</p></div>
        </div>
    )
}

export default Main
