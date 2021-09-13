import React,{useState, useEffect} from 'react'
import dummy from '../db/data.json';
import { useHistory } from 'react-router';

function Test(props) {

    const statInit = {
        //넘버부터 바꾸고 현재 타입을 넣어보자.
        E:0,
        I:0,
        S:0,
        N:0,
        T:0,
        F:0,
        J:0,
        P:0 
    }

    const history = useHistory();

    const [data, setData] = useState([])
    const [question, setQuestion] = useState(0)
    const [stat, setStat] = useState(statInit)

    useEffect(() => {
        setData(dummy.question)
    }, [data]);

    useEffect(()=>{ //테스트 종료 확인
        if(question === 12){ 
            props.onMbti(getResult())
            history.push('/result');
            return
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [question])

    if(data.length === 0) return <div>Loading...</div>;

    const onQuestionHandler = (N,e) => {
        updateStat(N)
        setQuestion(question + 1)
    }

    const updateStat = (val) => {
        const key = data[question].type[val]
        const copy = {...stat}
        copy[key] = stat[key] + 1
        setStat(copy) 
    }

    const getResult = () =>{
        let mbti = '';

        mbti += Compare('I','E')
        mbti += Compare('S','N')
        mbti += Compare('T','F')
        mbti += Compare('J','P')

        return [mbti, stat]
    }

    const Compare = (A, B) => {
        if(stat[A] < stat[B]){
            return B
        }else{
            return A
        }
    }

    if(question < 12){
        return (
            <div className="test">
                <div className="question">
                    {question + 1}. {data[question].Q}
                </div>
                    <div className="answer A" onClick={(e) => onQuestionHandler(0,e)}>{data[question].A}</div>
                    <div className="answer B" onClick={(e) => onQuestionHandler(1,e)}>{data[question].B}</div>
            </div>
        )
    }else{
        return null
    }
}

export default Test
