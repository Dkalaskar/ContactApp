import React from "react";

class AddContact extends React.Component{
    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <from className = "ui form">
                    <div className="field">
                        <lable>Name</lable>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div className="field">
                        <lable>Email</lable>
                        <input type="text" name="Email" placeholder="Email"/>
                    </div>
                    <button className="ui button blue">Add</button>
                </from>
            </div>
        );
    }

}
export default AddContact;