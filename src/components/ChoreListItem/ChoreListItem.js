import "./ChoreListItem.css"

export default function ChoreListItem({name, frequency, duration}) {
  return (
    <div>
        <div>
            <li>{name}</li>
            <button>X</button>
        </div>
        <div>
            <li>{frequency}</li>
            <li>{duration}</li>
        </div>
    </div>
  )
}
