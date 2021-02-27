import axios from "axios";
import contactsAction from "./contactsAction";

const addContact = (name, number) => dispatch => {
 dispatch(contactsAction.addContactRequest());
 axios
  .post("http://localhost:2000/contacts", { name, number })
  .then(respons => dispatch(contactsAction.addContactSuccess(respons.data)))
  .catch(error => dispatch(contactsAction.addContactError(error)));
};

const getContacts = () => dispatch => {
 dispatch(contactsAction.getContactsRequest());

 axios
  .get("http://localhost:2000/contacts")
  .then(respons => dispatch(contactsAction.getContactsSuccess(respons.data)))
  .catch(error => dispatch(contactsAction.getContactsError(error)));
};

const delContact = id => dispatch => {
 dispatch(contactsAction.delContactRequest());

 axios
  .delete("http://localhost:2000/contacts/" + id)
  .then(dispatch(contactsAction.delContactSuccess(id)))
  .catch(error => dispatch(contactsAction.delContactError(error)));
};

export default { addContact, getContacts, delContact };
