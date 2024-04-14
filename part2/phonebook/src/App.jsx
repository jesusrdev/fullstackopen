import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

function App() {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const inputs = [
    {
      name: 'name',
      value: newName,
      handleChange: e => setNewName(e.target.value),
      id: 1
    },
    {
      name: 'number',
      value: newNumber,
      handleChange: e => setNewNumber(e.target.value),
      id: 2
    }
  ]

  const [wordFiltered, setWordFiltered] = useState('')

  const addPerson = (e) => {
    e.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson))

    setNewName('')
    setNewNumber('')
  }

  const newListOfPersons = wordFiltered.length > 0
    ? persons.filter( (person) => person.name.toLocaleLowerCase().includes(wordFiltered.toLocaleLowerCase()) )
    : persons

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={wordFiltered} handleChange={e => setWordFiltered(e.target.value)} />

      <h2>add a new</h2>
      <PersonForm handleSubmit={addPerson} inputs={inputs} />

      <h2>Numbers</h2>
      <Persons list={newListOfPersons} />
    </div>
  )
}

export default App
