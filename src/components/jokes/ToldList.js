import { useEffect, useState } from "react"
import "./Jokes.css"
import { deleteJoke, updateJoke } from "../../services/jokeServices"

export const ToldList = ({ allJokes, renderJokes }) => {
  const [toldJokes, setToldJokes] = useState([])

  useEffect(() => {
    const toldJokes = allJokes.filter((joke) => joke.told === true)
    setToldJokes(toldJokes)
  }, [allJokes])

  return (
    <div className="joke-list-container told">
      <h2>
        Told <span className="told-count">{toldJokes.length}</span>
      </h2>
      <ul>
        {toldJokes.map((joke) => {
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
                <i className="fa-regular fa-circle-xmark"></i>
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
