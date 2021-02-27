import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsAction from "./contactsAction";

const appFilter = createReducer("", { [contactsAction.filter]: (state, action) => action.payload });

const appContacts = createReducer([], {
 [contactsAction.getContactsSuccess]: (state, action) => action.payload,
 [contactsAction.addContactSuccess]: (state, action) => [...state, action.payload],
 [contactsAction.delContactSuccess]: (state, action) => state.filter(contact => contact.id !== action.payload)
});

const loading = createReducer(false, {
 [contactsAction.addContactRequest]: () => true,
 [contactsAction.addContactSuccess]: () => false,
 [contactsAction.addContactError]: () => false,
 [contactsAction.getContactsRequest]: () => true,
 [contactsAction.getContactsSuccess]: () => false,
 [contactsAction.getContactsError]: () => false,
 [contactsAction.delContactRequest]: () => true,
 [contactsAction.delContactSuccess]: () => false,
 [contactsAction.delContactError]: () => false
});

export default combineReducers({ filter: appFilter, contacts: appContacts, loading });
