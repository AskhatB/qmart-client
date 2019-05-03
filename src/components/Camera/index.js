import React from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

class Camera extends React.Component {
  state = {
    loading: true
  };

  componentDidMount = () => {
    const intervalCapture = setInterval(this.capture, 1000);
    this.setState({ intervalCapture: intervalCapture });
  };

  componentWillUnmount = () => {
    clearInterval(this.state.intervalCapture);
  };

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ image: imageSrc });
  };

  getData = () => {
    const imageSrc = this.webcam.getScreenshot();
    const imageBase64 = imageSrc.split(',')[1];
    this.setState({ image: imageSrc });
    axios
      .post('http://127.0.0.1:5000/', { image: imageBase64 })
      .then(res => console.log('res', res));
  };

  render() {
    const { image } = this.state;
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user'
    };
    // console.log("image", image)
    // setInterval(() => this.capture(), 1000)
    return (
      <Webcam
        audio={false}
        height={this.props.height}
        ref={this.setRef}
        screenshotFormat="image/jpeg"
        width={this.props.width}
        videoConstraints={videoConstraints}
      />
    );
  }
}

export default Camera;
