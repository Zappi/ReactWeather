import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather} from '../actions/actions.js';

//Don't export this class as a default
class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.value);
    this.setState({value: ''});
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="row center-block">
          <div className="col-md-10 col-md-offset-1">
              <div className="input-group col-md-12">
                <input
                type="text"
                className="form-control input-lg"
                placeholder="Give a city name"
                value={this.state.value}
                onChange={this.handleChange}
                />
                <span className="input-group-btn">
                  <button className="btn search-button btn-lg" type="button">
                    <i className="glyphicon glyphicon-search"></i>
                  </button>
                </span>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

//Not having a mapStateToProps argument
export default connect(null, mapDispatchToProps)(SearchBar);
