// const transientState = {
//   text: "",
//   told: false,
// }

// export const setJokeText = (newJoke) => {
//   transientState.text = newJoke
//   console.log(transientState)
// }

export const addNewJoke = async (joke) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(joke),
  }
  const response = await fetch("http://localhost:8088/jokes", postOptions)
}

export const getAllJokes = async () => {
  return await fetch("http://localhost:8088/jokes").then((res) => res.json())
}

export const updateJoke = async (joke) => {
  const putRequest = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(joke),
  }
  const response = await fetch(`http://localhost:8088/jokes/${joke.id}`, putRequest)
}

export const deleteJoke = async (joke) => {
  const deleteRequest = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(joke),
  }
  const response = await fetch(`http://localhost:8088/jokes/${joke.id}`, deleteRequest)
}
