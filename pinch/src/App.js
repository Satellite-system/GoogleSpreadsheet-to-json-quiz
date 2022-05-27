import './App.css';
import React,{ useEffect,useState } from 'react';
import Quiz from './Components/Quiz';
import Spinner from './Components/Spinner'

function App() {
  const [record, setRecord] = useState([])
  const [randomRecord, setRandom] = useState([])
  const [score, setScore] = useState(0)

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const records = await response.json();
      setRecord(records);
    }
  
    getRecords();
    console.log(record);
    // getRandom();
    // randomRecord.map((Element)=>{
    //   console.log('el',Element)
    // })

  },[record.length]);
  
  const getRandom = ()=> {
    var result = [];
    for(var i=0;i<10;i++){
      const randomIndex = Math.floor(Math.random() * record.length);

      // get random item
      const item = record[randomIndex];
      // return item;
      result.push(item);
      //   console.log(i," ",result);
        // setRandom((prevState) => ({randomRecord: [item, ...prevState.randomRecord],     }));
    }
    // console.log('console',result);
    setRandom(result);
}

  const renderQuiz = ()=>{
    if(randomRecord.length<10){
      getRandom();
    }
    console.log(randomRecord);
  }

  const finish = ()=>{
    alert('Your Attempt has now finished');
    window.location.reload();
  }
  
  return (
    <div className="App">
      <h2>Your Score: {score} </h2>

      {record.length>=10 ? renderQuiz(): <Spinner />}
      {randomRecord.length>=10 ? randomRecord.map((item)=>{
      return(
        <Quiz qu={item.qu} optionA={item.optionA} optionB={item.optionB} optionC={item.optionC} optionD={item.optionD} ans={item.ans} explanation={item.explanation}
        key={item._id} 
        score = {score}
        setScore = {setScore}/>
      );
    }) : <Spinner/>}

    <button onClick={finish} >Finish The Quiz</button>

      
    </div>
  );
}

export default App;
