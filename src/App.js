import { useEffect, useState } from "react"
import "./App.css"
import {
  addNewJoke,
  deleteJoke,
  getAllJokes,
  updateJoke,
} from "./services/jokeServices"
import stevePic from "./assets/steve.png"

export const App = () => {
  const [newJoke, setNewJoke] = useState("")
  const [allJokes, setAllJokes] = useState([])
  const [untoldJokes, setUntoldJokes] = useState([])
  const [toldJokes, setToldJokes] = useState([])

  let newJokeObject = {
    text: newJoke,
    told: false,
  }

  const renderJokes = () => {
    getAllJokes().then((jokeArr) => {
      setAllJokes(jokeArr)
    })
  }

  useEffect(() => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray)
      console.log("jokes are here!")
    })
  }, []) //on render

  useEffect(() => {
    const toldJokes = allJokes.filter((joke) => joke.told === true)
    setToldJokes(toldJokes)
  }, [allJokes])

  useEffect(() => {
    const untoldJokes = allJokes.filter((joke) => joke.told === false)
    setUntoldJokes(untoldJokes)
  }, [allJokes])

  return (
    <div className="app-container">
      <div className="app-heading">
        <div className="app-heading-circle">
          <img className="app-logo" src={stevePic} alt="Good job Steve" />
        </div>
      </div>

      <div className="app-heading">
        <h1 className="app-heading-text">Chuckle Checklist</h1>
      </div>

      <h2>Add Joke</h2>
      <div className="joke-add-form">
        <input
          className="joke-input"
          type="text"
          placeholder="New One Liner"
          value={newJoke}
          onChange={(event) => {
            // What's the value of event?
            let jokeInput = event.target.value
            // setNewJoke(event.target.value)
            setNewJoke(jokeInput)
            console.log(`on change: ${jokeInput}`)
          }}
        />
        <button
          className="joke-input-submit"
          onClick={() => {
            //POST to API
            addNewJoke(newJokeObject).then(() => renderJokes())
            setNewJoke("")
          }}
        >
          Add
        </button>
      </div>
      <div className="joke-lists-container">
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
      </div>
    </div>
  )
}
