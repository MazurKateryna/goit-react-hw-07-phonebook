import React, {Component} from "react";
import { connect } from "react-redux";
import contactsOperation from "../../redux/contacts/contactsOperation";
import "./ContactForm.css"

class ContactForm extends Component {
 state = {
  name: "",
  number: ""
 };

 handleSubmit = e => {
  e.preventDefault();

  this.props.changeIsAlready(this.state.name) && this.props.onAddItem(this.state.name, this.state.number);
  this.setState(() => {
   return { name: "", number: "" };
  });
 };

 handleChange = e => {
  let { value, name } = e.target;

  this.setState(() => {
   return { [name]: value };
  });
 };

 render() {
  return (
   <form className="ContactEditor" onSubmit={this.handleSubmit}>
    <label className="ContactEditor-label">
     Name
     <input
      className="ContactEditor-input"
      onChange={this.handleChange}
      value={this.state.name}
      name="name"
      type="text"
      maxLength="12"
      autoComplete="off"
      required
     />
    </label>
    <label className="ContactEditor-label">
     Number
     <input
      className="ContactEditor-input"
      onChange={this.handleChange}
      value={this.state.number}
      name="number"
      type="tel"
      autoComplete="off"
      maxLength="13"
     />
    </label>
    <button className="ContactEditor-button">Add contact</button>
   </form>
  );
 }
}

const mapDispatchToProps = { onAddItem: contactsOperation.addContact };

export default connect(null, mapDispatchToProps)(ContactForm);
