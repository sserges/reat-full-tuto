import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            comment: "",
            gender: "",
            favColor: "",
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    
    render() {
        return (
            <div>
                <input 
                    type="text"
                    name="firstName" 
                    value={this.state.firstName} 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    placeholder="First Name"
                    onChange={this.handleChange} 
                />

                <textarea
                    name="comment"
                    value={this.state.comment}
                    placeholder="Comment"
                    onChange={this.handleChange} 
                />

                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Is friendly?
                </label>

                <br/>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>

                <br/>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>

                <br/>

                <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                </select>
                

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <p>
                    { this.state.comment }
                </p>
                <h2>You are a {this.state.gender}</h2>
                <h2>Your favorite color is { this.state.favColor }</h2>

            </div>
        )
    }
}

export default App