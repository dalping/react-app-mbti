import React,{useState, useEffect} from 'react'
import dummy from '../db/data.json';
import { useHistory } from 'react-router';

//EI SN TF JP
function Test() {

    const init = {
        Number:0,
        type:'TF',
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

    console.log(question)

    useEffect(async() => {
        setData(dummy.question)
    }, [data]);

    if(data.length === 0) return <div>Loading...</div>;

    const onQuestionHandlerA = (e) => {
        isFinal()
        const tmp = question.type[1]
        setQuestion({...question, Number : question.Number + 1, type:data[question.Number + 1].type})
    }

    const onQuestionHandlerB = (e) => {
        isFinal()
        const tmp = question.type[1]
        setQuestion({...question, Number : question.Number + 1, type:data[question.Number + 1].type})
    }

    const isFinal = () => {
        if(question.Number === 11){ //테스트 완료
            console.log('complete')
            history.push('/result');
        }
    }

    return (
        <div className="test">
            <div className="question">
                Q. {data[question.Number].Q}
            </div>

                <div className="answer A" onClick={onQuestionHandlerA}>{data[question.Number].A}</div>
                <div className="answer B" onClick={onQuestionHandlerB}>{data[question.Number].B}</div>
        </div>
    )
}

export default Test
