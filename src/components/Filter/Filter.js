import React from "react";
import "./Filter.css";
import PropTypes from "prop-types";
import contactsAction from "../../redux/contacts/contactsAction";
import { connect } from "react-redux";

let Filter = ({ filter, onChangeFilter }) => {
 return (
  <form className="filterEditor">
   <label className="filterLabel">
    Find contacts by name
    <input
     className="filterInput"
     onChange={e => onChangeFilter(e.target.value)}
     value={filter}
     name="filter"
     type="text"
     autoComplete="off"
    />
   </label>
  </form>
 );
};

const mapDispatchToProps = { onChangeFilter: contactsAction.filter };

export default connect(null, mapDispatchToProps)(Filter);

Filter.propTypes = {
 onChangeFilter: PropTypes.func.isRequired,
 filter: PropTypes.string
};
