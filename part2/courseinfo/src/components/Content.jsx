import Part from "./Part"


const Content = ({ parts }) => {
  return (
    <div>
      {parts.map( (part) => (
        <Part key={part.id} part={part} />
      ) )}
      <p>
        <strong>
          total of {
            parts.reduce( (s, p) => {
            let sum = Number.isInteger(s) ? s : s.exercises
            return (
              sum + p.exercises
            )
          } )} exercises
        </strong>
      </p>
    </div>
  )
}

export default Content