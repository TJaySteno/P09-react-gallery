import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import PhotoList from "./PhotoList";
import NotFound from "./NotFound";

export default class PhotoContainer extends Component {

  constructor() {
    super();
    this.state = {
      photosFound: null
    }
  }

  componentDidMount() {
    this.setState({
      photosFound: (() => this.props.photos.length > 0)()
    });
  }
      // <Switch>
      //   <Redirect exact from="/" to="/search/waterfall" />
      //   <Redirect exact from="/search" to="/search/waterfall" />
      //   <Route path="/not-found" component={NotFound} />
      //   <PhotoList photos={this.props.photos} />
      // </Switch>

  render() {
    if (!this.photosFound) <Redirect to="/not-found" />
    console.log(this.state);

    return (
      <div className="photo-container">
        <h2>Results</h2>
        {
          (this.state.photosFound === false)
            ? <NotFound />
            : <PhotoList photos={this.props.photos} />
        }
      </div>
    )
  }
}

PhotoContainer.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired
}
