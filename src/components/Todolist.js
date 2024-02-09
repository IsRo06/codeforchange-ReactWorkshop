import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import '../App.css';
import 'react-circular-progressbar/dist/styles.css';


var done = 0;
var tot_tasks = 0;
var nextId = 0;

export default function List() {

  //use state allows to re-render after changes are done to these variables
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const [full, setFull] = useState(false);
  
  //uses useState to add items to the list
  function addToList(){
    
    tot_tasks++;  
  }
  //increases the done variable and updates the full variable
  function increaseDone(){
    done++;
  }
  //prevents Nan and Infinity from being results
  function percentageDone(){
    if(tot_tasks=== 0){
      return 0;
    }
    else{
      return Math.round(done/tot_tasks * 100)
    }
  }

  //triggers useEffect
  function resetTasks(){
  }

  //re renders the website and sets values to 0
  useEffect(()=>{
    
  }, [full])


  return (
    <>
    
    <h1>Today's Tasks📝!</h1>
    <div  class="c" style={{width: 400, height:400}}>
    <CircularProgressbar 
        value={done} 
        maxValue={tot_tasks} 
        text={`${percentageDone() }%`}
        styles={buildStyles({
            pathColor: "#6A5F9E",
            textColor: '#897BCC',
            trailColor: '#6A5F9E',
            backgroundColor: '#3e98c7',
        })} />
    </div>
    <div class="input_box">
      <input class="b"
        value={task}
        // everytime a change is detected set value aka task to whats in the input field
        onChange={e => setTask(e.target.value)}
        //if the change is the enter key tehn trigger addToList
        onKeyDown={e => e.key === 'Enter' ? addToList(): ""}
      />
      {
      //when button is clicked addToList is triggered
      }
      <Button type="button" variant="dark" size="lg" onClick={addToList}>Add task</Button>
      
    </div>
      {
      //iterates through all items in list and displays them alonsgide a checkmark button
      }
        {list.map(item => (
          <div>
              <p class="a" key={item.id}>{item.task}</p>
              <Button variant="light" size="lg" onClick={() => {increaseDone()}} >✔️</Button>
          </div>
          
        ))}
        {list.length>0 && <Button type="button" variant="dark" size="lg" onClick={resetTasks}>Reset to-do List</Button>}   
    </>
  );
}


