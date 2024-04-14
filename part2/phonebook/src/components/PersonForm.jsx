
const PersonForm = ({ handleSubmit, inputs }) => {
  return (

    <form onSubmit={handleSubmit}>

      {inputs.map( (input) => (
        <div key={input.id}>
          {input.name}: <input value={input.value} onChange={input.handleChange} />
        </div>
      ) )}

        {/* <div>name: <input value={newName} onChange={e => setNewName(e.target.value)} /></div>

        <div>number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)} /></div> */}

        <div><button type="submit">add</button></div>
    </form>

  )
}

export default PersonForm