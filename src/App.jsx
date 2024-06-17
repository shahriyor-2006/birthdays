import { useState } from 'react'
import list from "./people"
import List from "./List"
import Add from "./Add"
import Filter from './Filter'

function App() {
  const [people, setPeople] = useState(list)
  const [isAdding, setIsAdding] = useState(false)
  const [filteredPeople, setFilteredPeople] = useState([])
  function showInputs(){
    setIsAdding(true)
  }
  
  return (
    <>
      <div className="container">
        <div className="row">
          
          <div className="col-12 border border-primary rounded mx-auto">
            <h1 className='mx-3 my-3 display-4'>Birthdays</h1>
            <h4 className='mx-3 my-0 fs-6'>{people.length} birthdays added</h4>
            <Filter  people={people} setPeople={setPeople} setFilteredPeople={setFilteredPeople} filteredPeople={filteredPeople}/>
            {isAdding ? "" : (<button className='btn btn-info mx-3' onClick={showInputs}>Add a birthday</button>)}
            
            
            {isAdding ? (<Add people={people} setPeople={setPeople} isAdding={isAdding} setIsAdding={setIsAdding}></Add>) : ""}
              
                <List people={filteredPeople.length > 0 ? filteredPeople : people} setPeople={setPeople} />
            <button className='btn btn-info mx-3 my-4' 
            onClick={()=> setPeople([])}>clear all</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
