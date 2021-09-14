import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import dummy from '../db/data.json';

function Main({type}) {

    const history = useHistory();
    const arr =[1,2,3,4,5,5]
    
    const [data, setData] = useState()
    const myType = type[0]

    useEffect(() => {
        setData(dummy.mbti[myType].desc)
        console.log('데이터 호출!')
        console.log(data)
    }, [data])

    if(!data) return null;

    const onRestartHandler = (e) => {
        history.push('/');
    }
    
    return (
        <div className="test result">
            <h1>당신은 [{type[0]}] 입니다.</h1>
            <div className="image"></div>
            <div className="desc">
                <label>당신은 이런 사람입니다..</label>
                <div>
                    {
                        data&&data.map((tmp,idx) =>(
                            <p key={idx}>{tmp}</p>
                        ))
                    }
                </div>
            </div>
            <div className="restart" onClick={onRestartHandler}><p>다시하기</p></div>
        </div>
    )
}

export default Main
