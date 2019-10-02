// this component handles the app template used on every page.
import React, {PropTypes} from "react";
import Header from './common/Header';
import {connect} from "react-redux";

class App extends React.Component {
  render() {
    return (
      <span>
        <Header loading={this.props.loading}/>
        <div className="container">
          {this.props.children}
        </div>
      </span>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxStatus > 0
  };
}

export default connect(mapStateToProps)(App);
