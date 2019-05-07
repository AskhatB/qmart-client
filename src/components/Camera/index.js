import React from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

class Camera extends React.Component {
  state = {
    loading: true
  };

  componentDidMount = () => {
    const intervalCapture = setInterval(this.getData, 500);
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

  getData = async () => {
    try {
      const imageSrc = this.webcam.getScreenshot();
      const imageBase64 = imageSrc.split(',')[1];
      const data = await axios.post('http://159.65.201.192/', {
        image: imageBase64
      });
      if (data.data !== 'Not recognized') {
        this.props.history.push(`/product?id=${data.data}`);
      }
      console.log('BARCODE RESULT', data);
    } catch (error) {
      console.log('BARCODE READER ERROR: \n', error);
    }
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
