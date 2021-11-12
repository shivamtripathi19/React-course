import React from "react";
import PropTypes from 'prop-types';

class Name extends React.Component {
  render() {
    console.log(this.props);
    return <div>{this.props.name}</div>;
  }
}
Name.propTypes={
  name: PropTypes.string.isRequired,
}
export default Name;
