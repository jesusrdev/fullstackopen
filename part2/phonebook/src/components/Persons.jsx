
const Persons = ({ list }) => {
  return (
    <>
      {list.map(note => {
        return(
        <p key={note.id}> {note.name} {note.number} </p>
        )
      })}
    </>
  )
}

export default Persons