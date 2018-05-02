import React, { Component } from 'react';
import './App.css';

import SearchForm from './SearchForm';
import MainNav from './MainNav';
import PhotoContainer from './PhotoContainer';

class App extends Component {
  state = {
    photos: [
      {
        src: "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg", alt: "First doggy",
        id: 1
      },
      {
        src: "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
        alt: "Second",
        id: 2
      },
      {
        src: "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg", alt: "third puppy!",
        id: 3
      },
      {
        src: "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg", alt: "FINAL PUPPY!",
        id: 4
      },
      {
        src: "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg", alt: "First doggy",
        id: 1
      },
      {
        src: "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
        alt: "Second",
        id: 2
      },
      {
        src: "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg", alt: "third puppy!",
        id: 3
      },
      {
        src: "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg", alt: "FINAL PUPPY!",
        id: 4
      },
      {
        src: "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg", alt: "First doggy",
        id: 1
      },
      {
        src: "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
        alt: "Second",
        id: 2
      },
      {
        src: "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg", alt: "third puppy!",
        id: 3
      },
      {
        src: "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg", alt: "FINAL PUPPY!",
        id: 4
      }
    ]
  }

  render() {
    return (
      <div className="container">
        <SearchForm />
        <MainNav />
        <PhotoContainer
          photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
