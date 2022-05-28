import React,{useState, useEffect} from 'react'
import './styles/quiz.css'

const Quiz = (props) => {
   const {qu, optionA, optionB, optionC, optionD, ans, explanation, score, setScore} = props;

   const [disabled, setDisabled] = useState(false);
   const [clicked, setclicked] = useState(null);

   useEffect(() => {
     console.log('Selected Ans: ',clicked);
     if(clicked==ans){
      setScore(score+1);
      console.log('Correct Answer',score);
    }else{
      console.log('Incorrect Answer');
    }
    if(clicked!=null){
      setDisabled(true);
    }
   }, [clicked])
   

  return (
    <div className='quiz'>
      <div className="question">
      Q. <b> {qu} </b>
      </div>
       <div className="options">
          <button className="quiz_a" onClick={()=> setclicked(optionA)} disabled={disabled}>(A) {optionA}</button>
          <button className="quiz_b" onClick={()=> setclicked(optionB)} disabled={disabled}>(B) {optionB}</button>
           <button className="quiz_c" onClick={()=> setclicked(optionC)} disabled={disabled}>(C) {optionC}</button>
          <button className="quiz_d" onClick={()=> setclicked(optionD)} disabled={disabled}>(D) {optionD}</button>

       </div>
       {disabled && <>
         Correct Ans: {ans} 
       </>}

       
    </div>
  )
}

export default Quiz