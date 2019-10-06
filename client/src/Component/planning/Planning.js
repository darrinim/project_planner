import React from 'react'
import RadioForm from '../RadioForm/RadioForm';
import './planning.css'

class Planning extends React.Component {
  state = {
    days: "",
    people: "",
    location: this.props.location,
    gearValue: this.props.inputGear
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      days: e.target.value
    })
  };

  handleClickPeople = (e) => {
    e.preventDefault();

    this.setState({
      people: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      gearValue: e.target.value
    })
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      gearValue: e.target.value
    })
  };

  render() {
    console.log('gaer', this.state.gearValue)
    return (
      <React.Fragment>
        <div className="photo-container">
          <img
            className='photoPlanning'
            src="https://res.cloudinary.com/radiscipio/image/upload/c_fill,g_center,h_1000,w_4356,y_100/v1568906055/w3e5kc1ahvg0ivzucyim.jpg" alt='Planning' />
        </div>
        <div className="planning-container">
          <div className="camping">
            <h2 className="tripHeader">Plan Your Trip!</h2>
            <div className="tripSelectors">
              <label
                for="location">Enter Location: </label>
              <input
                onChange={this.props.handleChangeLoc}
                className="tripSelectors typeLocation"
                type="text"
                name="location"
                onSubmit={(e) => this.props.handleSubmit(e)}

              />

              <div className="gear-label">
              <label
                for="location">Gear: </label>
              <form
                onSubmit={(e) => this.props.makeGear(this.state.gearValue)}
              >
                <input
                  className="tripSelectors typeGear"
                  type="text"
                  name="Gear"
                  value={this.state.gearValue}
                  onChange={(e) => this.handleChange(e)}
                  onSubmit={(e) => this.handleSubmit(e)}
                  />
                </form>
              </div>

              <RadioForm
                className="tripSelectors"
                days={this.state.days}
                people={this.state.people}
                handleClickPeople={this.handleClickPeople}
                handleClick={this.handleClick}
              />
              <button
                className="finalize-button"
                onClick={(e) => this.props.handleTripClick(e)}
                type="submit">Finalize Itinerary</button>
            </div>

          </div>
          <div className="recommended-list-container">
            <h2 className="recommended-list-header">Recommended List</h2>
            <h4 className="recommended-list-header">(Select Items to Add to Gear)</h4>
            {this.props.gear.map((ele, i) => {
              return (
                <ul className="recommended-list-ul" key={i}>
                  <li
                    className="recommended-list-li"
                    onClick={() => this.props.handleGearClick(ele)}>{ele.gear}</li>
                  <button
                    className="deleteButtonStyle"
                    onClick={(e) => this.props.remove(ele.id)}>Delete</button>
                </ul>
              )
            })
            }
          </div>
          <div className="current-list-container">
            <h2 className="itineraryHeader">Itinerary</h2>
            <div className="location">
              Location: {this.props.location}</div>
            <div className="days">
              Days: {this.state.days}</div>
            <div className="people">
              People: {this.state.people}</div>
            <div className="gear">
              Gear:
              <div className="gear-list">
                {this.props.selectedGear.map((ele, i) => {
                  return (
                    <li
                      className="current-list-li"
                      index={i}
                      onClick={() => this.props.handleRemoveClick(i)}>- {ele.gear}</li>
                  )
                })
                }
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  };
};

export default Planning
