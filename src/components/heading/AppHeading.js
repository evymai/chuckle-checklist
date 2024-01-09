import stevePic from "../../assets/steve.png"
import "./AppHeading.css"

export const AppHeading = () => {
  return (
    <div>
      <div className="app-heading">
        <div className="app-heading-circle">
          <img className="app-logo" src={stevePic} alt="Good job Steve" />
        </div>
      </div>

      <div className="app-heading">
        <h1 className="app-heading-text">Chuckle Checklist</h1>
      </div>
    </div>
  )
}
