import React from 'react';
import './App.css';
import FileUploadComponent from './components/file-upload-component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h2>React File Upload Demo</h2> 
      <br/>
      <FileUploadComponent/> 
    </div>
  );
}

export default App;
