import React, { Component } from "react";
import axios from 'axios';

export default class FileUploadComponent extends Component {
  state = {
    selectedFile: null,
}
  componentDidMount(){
    axios.get('/')
    .then((res) => {console.log(res)})
    .catch(new Error('error getting all images occured'));
  }
  fileSelectedHandler = event =>{
    this.setState({
      selectedFile: event.target.files[0]
    })
    console.log(this.state.selectedFile);
  }

  upload = (event) => {
    debugger;
    //encType="multipart/form-data"
    const fd = new FormData();
    console.log(this.state.selectedFile);
    console.log(this.state.selectedFile.name);
    //console.log(this.state);
    fd.append('image' , this.state.selectedFile , this.state.selectedFile.name);
    console.log(fd);
    axios.post('/upload',fd).then(res => alert(res));
    event.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <div className="row"> 
            <form onSubmit={this.upload}>
            <div>
              <label>Select your profile picture:</label>{" "}
              <input type="file" onChange={this.fileSelectedHandler} />
            </div>
            <div>
              <input
                type="submit"
                name="btn_upload_profile_pic"
                value="Upload"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
