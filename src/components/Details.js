import React from "react";
import { createApi } from "unsplash-js";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [], countryName: this.props.country };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      countryName: props.country,
    };
  }

  componentDidMount() {
    this.getCountryImages();
  }

  getCountryImages() {
    const unsplash = createApi({
      accessKey: "gdm_-u4ujXDDMlp9metg0Jyg5tKhCtNMIueL0kkl8fE",
    });
    unsplash.search
      .getPhotos({
        query: `${this.state.countryName}`,
        page: 1,
        perPage: 2,
      })
      .then((result) => {
        if (result.errors) {
          // handle error here
          console.log("error occurred: ", result.errors[0]);
        } else {
          // handle success here
          const photo = result.response;
          this.setState({ images: photo.results });
        }
      });
  }
  componentDidUpdate(prevProps, prevstate) {
    if (this.state.countryName !== prevstate.countryName) {
      this.getCountryImages();
    }
  }

  render() {
    this.images = this.state.images.map((url) => {
      return url.urls.regular;
    });

    return (
      <section className="page-section">
        <div className="wrapper">
          <div className="detail-box">
            <div className="left">
              <h2>{this.props.country}</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                centuries,
              </p>
              <p className="viewGallery">
                <span>Visit Gallery</span>
                <span>
                  <img style={{ width: "30px" }} src="images/right-arrow.png" alt="" />
                </span>
              </p>

              <div className="facts-box">
                <h2>Facts</h2>
                <div className="facts">
                  <div className="factsHead">
                    <p>Country</p>
                    <p>Popuation</p>
                    <p>Popular for</p>
                    <p>Good to spend night </p>
                    <p>No. of crimes in last month</p>
                  </div>
                  <div className="factsDetails">
                    <p>Singapore</p>
                    <p>1m</p>
                    <p>Artifact building</p>
                    <p>Yes</p>
                    <p>10 crimes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="image-one">
                <img src={this.images[0]} alt="" />
              </div>
              <div className="image-two">
                <img src={this.images[1]} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Details;
