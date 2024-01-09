import { useEffect, useState } from "react"
import "./App.css"
import {
  getAllJokes
} from "./services/jokeServices"
import { JokeForm } from "./components/forms/JokeForm"
import { UntoldList } from "./components/jokes/UntoldList"
import { ToldList } from "./components/jokes/ToldList"
import { AppHeading } from "./components/heading/AppHeading"

export const App = () => {
  const [allJokes, setAllJokes] = useState([])

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

  return (
    <div className="app-container">
      <AppHeading />

      <JokeForm renderJokes={renderJokes} />

      <div className="joke-lists-container">
        <UntoldList allJokes={allJokes} renderJokes={renderJokes} />
        <ToldList allJokes={allJokes} renderJokes={renderJokes} />
      </div>
    </div>
  )
}
