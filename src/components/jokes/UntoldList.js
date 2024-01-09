import { useEffect, useState } from "react"
import "./Jokes.css"
import { deleteJoke, updateJoke } from "../../services/jokeServices"

export const UntoldList = ({ allJokes, renderJokes }) => {
  const [untoldJokes, setUntoldJokes] = useState([])

  useEffect(() => {
    const untoldJokes = allJokes.filter((joke) => joke.told === false)
    setUntoldJokes(untoldJokes)
  }, [allJokes])

  return (
    <div className="joke-list-container untold">
      <h2>
        Untold <span className="untold-count">{untoldJokes.length}</span>
      </h2>
      <ul>
        {untoldJokes.map((joke) => {
          return (
            <li className="joke-list-item" key={joke.id}>
              <p className="joke-list-item-text">{joke.text}</p>
              <button
                className="joke-list-action-toggle"
                onClick={() => {
                  joke.told = !joke.told
                  updateJoke(joke).then(() => renderJokes())
                  console.log(joke)
                }}
              >
                <i className="fa-regular fa-circle-check"></i>
              </button>
              <button
                className="joke-list-action-delete"
                onClick={() => {
                  deleteJoke(joke).then(() => renderJokes())
                  console.log(joke)
                }}
              >
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
