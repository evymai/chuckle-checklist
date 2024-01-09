import { useState } from "react"
import { addNewJoke } from "../../services/jokeServices"
import "./JokeForm.css"

export const JokeForm = ({ renderJokes }) => {
  const [newJoke, setNewJoke] = useState("")

  let newJokeObject = {
    text: newJoke,
    told: false,
  }

  return (
    <div>
      <h2>Add Joke</h2>
      <div className="joke-add-form">
        <input
          className="joke-input"
          type="text"
          placeholder="New One Liner"
          value={newJoke}
          onChange={(event) => {
            let jokeInput = event.target.value
            setNewJoke(jokeInput)
            console.log(`on change: ${jokeInput}`)
          }}
        />
        <button
          className="joke-input-submit"
          onClick={() => {
            //POST to API then rerender
            addNewJoke(newJokeObject).then(() => renderJokes())
            setNewJoke("")
          }}
        >
          Add
        </button>
      </div>
    </div>
  )
}
