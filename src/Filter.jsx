import { useState } from 'react'
import people from './people'
export default function Filter({people,setPeople, filteredPeople, setFilteredPeople}){
    const [input, setInput] = useState("")

    function filterPeople(){
        const filtered = people.filter(person => {
            return person.name.toLowerCase().includes(input.toLowerCase())
        })
        setFilteredPeople(filtered)
    }
    const inputChange = (e) => {
        const inputValue = e.target.value;
        setInput(inputValue);
        if (!inputValue) {
          setFilteredPeople([]); 
        } else {
          const filtered = people.filter(person =>
            person.name.toLowerCase().includes(inputValue.toLowerCase())
          );
          setFilteredPeople(filtered);
        }
      };
      
    
    
      
    return(
        <>
        <div className="col-12 d-flex align-items-center">
            <input type="text" placeholder='search by name...' className="form-control my-3 mx-2"  value={input} onChange={(e)=>inputChange(e)}  />
            {/* <button className='btn btn-primary'>search</button> */}
        </div>
        {filterPeople.length > 0 && (
            <ul>
                {filteredPeople.map(person => (
                    <li key={person.id} >{person.name}</li>
                ))}
            </ul>
        )}
        </>
        
    )
}