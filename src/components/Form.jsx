import { useState } from "react";

const Form = ({setValueEmoji}) => {
const [value, setVlaue]=useState('')

const handleSearch = e =>{
  e.preventDefault()
  setValueEmoji(value)
  console.log(value);
}

  return ( 
    <section className="form">
      <form onSubmit={handleSearch}>
        <input 
        type="text"
        placeholder="some emoji word..."
        onChange={e=>setVlaue(e.target.value)}
        />
      </form>
    </section>
  );
}

export default Form;