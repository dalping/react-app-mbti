import React,{useState, useEffect} from 'react'
import dummy from '../db/data.json';
import { useHistory } from 'react-router';

//EI SN TF JP
function Test() {

    const init = {
        Number:0,
        type:'SN'
    }

    const stat_init = {
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
    const [question, setQuestion] = useState(init)
    const [stat, setStat] = useState(stat_init)

    console.log(question)

    useEffect(() => {
        setData(dummy.question)
    }, [data]);

    if(data.length === 0) return <div>Loading...</div>;

    const onQuestionHandler = (N,e) => {
        
        isType(N)

        if(question.Number === 11){ //테스트 완료
            console.log(stat)
            history.push('/result');
            return
        }

        setQuestion({...question, 
            Number : question.Number + 1, 
            type:data[question.Number + 1].type}
        )
    }

    const isType = (val) => {

        const tmp = question.type[val] //'F'
        const copy = {...stat}
        copy[tmp] = stat[tmp] + 1

        setStat({...copy})

        if(question.Number === 11){ //테스트 완료
            console.log(stat)
            history.push('/result');
        }
    }

    return (
        <div className="test">
            <div className="question">
                Q. {data[question.Number].Q}
            </div>
                <div className="answer A" onClick={(e) => onQuestionHandler(0,e)}>{data[question.Number].A}</div>
                <div className="answer B" onClick={(e) => onQuestionHandler(1,e)}>{data[question.Number].B}</div>
        </div>
    )
}

export default Test
