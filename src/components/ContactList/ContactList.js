import React from "react";
import ContactListItem from "./ContactListItem";
import PropTypes from "prop-types";
import "./ContactList.css"
import { CSSTransition, TransitionGroup } from "react-transition-group";

let ContactList = ({ contacts }) => (
 <section>
  <TransitionGroup component="ul" className="ContactList">
   {contacts.map(contact => (
    <CSSTransition key={contact.id} timeout={200} classNames="ContactList-item">
     <ContactListItem contact={contact} id={contact.id} />
    </CSSTransition>
   ))}
  </TransitionGroup>
 </section>
);

export default ContactList;

ContactList.propTypes = {
 contacts: PropTypes.array.isRequired
};
