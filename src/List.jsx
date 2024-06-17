import { useState } from "react"

export default function List({people, setPeople}){    

    function del(id){
        const updatedPeople = people.filter(person =>
            {return person.id !== id}
        )
        setPeople(updatedPeople)
    }
    function setMonths(m){
        switch(m){
            case "01":
                return "January";
                break;
            case "02":
                return "Febrauary";
                break;
            case "03":
                return "March";
                break;
            case "04":
                return "April";
                break;
            case "05":
                return "May";
                break;
            case "06":
                return "June";
                break;
            case "07":
                return "July";
                break;
            case "08":
                return "August";
                break;
            case "09":
                return "September";
                break;
            case "10":
                return "October";
                break;
            case "11":
                return "November";
                break;
            case "12":
                return "December";
                break;
        }
        console.log(m);
    }
    return(
        <>
            {people.map((person) => {
                const {id, name, age, image, date} = person
                const day = date.slice(0,2)
                const month = date.slice(3,5)
                const year = date.slice(6,10)
                let data = new Date()
                let calculatedAge = data.getFullYear() - Number(year)
                return <div key={id} className="mx-3 d-flex my-4">
                    <img className="rounded" src={image} width="300" alt={name} />
                    <div className="info mx-4">
                        <h4>{name}</h4>
                        <p className="fw-normal">{calculatedAge} years</p>
                        <p className="fw-light">Birthday in <mark>{`${day} ${setMonths(month)}`}</mark> </p>
                        <button className="btn btn-danger" onClick={() => del(id)}>delete</button>
                    </div>
                </div>
            })}
        </>
    )
}