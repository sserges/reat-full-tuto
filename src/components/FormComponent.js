import React from 'react'

function FormComponent({handleChange, data}) {
    return (
        <main>
            <form>
                <input
                    name="firstName"
                    value={data.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                /><br />
                <input
                    name="lastName"
                    value={data.lastName}
                    onChange={handleChange} 
                    placeholder="Last Name"
                /><br />
                <input
                    name="age"
                    value={data.age}
                    onChange={handleChange}
                    placeholder="Age"
                /><br />
                
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male" 
                        checked={data.gender === "male"}
                        onChange={handleChange}
                    />Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female" 
                        checked={data.gender === "female"}
                        onChange={handleChange}
                    />Female
                </label>
                <br />
                
                <select 
                    value={data.destination}
                    onChange={handleChange}
                    name="destination"
                >
                    <option value="">-- Please Choose a destination --</option>
                    <option value="germany">Germany</option>
                    <option value="norway">norway</option>
                    <option value="north pole">North Pole</option>
                    <option value="south pole">South Pole</option>
                </select>
                <br />
                
                <label>
                    <input
                        type="checkbox"
                        name="isVegan"
                        onChange={handleChange}
                        checked={data.isVegan}    
                    /> Vegan?
                </label>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="isKosher"
                        onChange={handleChange}
                        checked={data.isKosher}    
                    /> Kosher?
                </label>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={handleChange}
                        checked={data.isLactoseFree}    
                    /> LactoseFree?
                </label>
                <br />
                
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {data.firstName} {data.lastName}</p>
            <p>Your age: {data.age}</p>
            <p>Your gender: {data.gender}</p>
            <p>Your destination: {data.destination}</p>
            <p>
                Your dietary restrictions: 
            </p>
            <p>Vegan {data.isVegan ? "Yes" : "No"}</p>
            <p>Kosher {data.isKosher ? "Yes" : "No"}</p>
            <p>Lactose Free {data.isLactoseFree ? "Yes" : "No"}</p>
        </main>
    )
}

export default FormComponent;