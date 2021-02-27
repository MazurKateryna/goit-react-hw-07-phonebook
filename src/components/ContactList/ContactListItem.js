import React from "react";
import "./ContactList.css"
import { connect } from "react-redux";
import contactsOperation from "../../redux/contacts/contactsOperation";

let ContactListItem = ({ contact, onDelContact, id }) => (
 <li className="ContactList-item">

  <span className="ContactList-text">{contact.name}: {contact.number}</span>
   <button
    className="ContactList-button"
    onClick={() => {
     onDelContact(id);
    }}
   >
    Delete
   </button>
 </li>
);

const mapDispatchToProps = { onDelContact: contactsOperation.delContact };

export default connect(null, mapDispatchToProps)(ContactListItem);