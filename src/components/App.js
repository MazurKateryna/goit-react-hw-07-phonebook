import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import IsAlreadyTrue from "./IsAlreadyTrue/IsAlreadyTrue";
import "./App.css";
import animationIsAlready from "./IsAlreadyTrue/isAlreadyTrueAnimation.module.css";
import FilterAnimation from "./Filter/FilterAnimation.module.css";
import { connect } from "react-redux";
import contactsOperation from "../redux/contacts/contactsOperation";
import contactsSelector from "../redux/contacts/contactsSelectors";
import contactsSelectors from "../redux/contacts/contactsSelectors";

class App extends Component {
 state = {
  isAlready: false
 };

 componentDidMount() {
  this.props.getContacts();
 }

 changeIsAlready = name => {
  if (contactsSelectors.getContactIsAlready(this.props.state, name)) {
   this.setState({ isAlready: true });
   return false;
  } else {
   this.setState({ isAlready: false });
  }
  return true;
 };

 render() {
  const { contacts, loading, contactsArrayFiltered } = this.props;

  return (
   <div className='wrapper'>
    <CSSTransition
     in={this.state.isAlready === true}
     timeout={300}
     classNames={animationIsAlready}
     unmountOnExit
    >
      
     <IsAlreadyTrue onChangeIsAlready={this.changeIsAlready} />
    </CSSTransition>

    <div className="header">
      <CSSTransition
          in={true}
          appear={true}
          classNames='fade'
          timeout={500}
          unmountOnExit
        >
          <h1 className='logo'>Phonebook</h1>
      </CSSTransition>
      </div>
      
     <ContactForm changeIsAlready={this.changeIsAlready} />

     <CSSTransition in={contacts.length > 1} timeout={300} classNames={FilterAnimation} unmountOnExit>
      <Filter />
     </CSSTransition>
     {loading && <h3>Loading...</h3>}
     <ContactList contacts={contactsArrayFiltered} />
    
   </div>
  );
 }
}

const mapStateToProps = state => ({
 filter: contactsSelector.getFilter(state),
 contacts: contactsSelectors.getContactsSelector(state),
 loading: contactsSelectors.getLoading(state),
 contactsArrayFiltered: contactsSelectors.contactsArrayFilteredSel(state),
 state
});

let mapDispatchToProps = { getContacts: contactsOperation.getContacts };

export default connect(mapStateToProps, mapDispatchToProps)(App);
