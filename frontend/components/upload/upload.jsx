import React from 'react';
import UploadForm from './upload_form';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className="upload-outer-container">
        <div className="upload-inner-container">
          <UploadForm 
            createTrack={this.props.createTrack}
            currentUserId={this.props.currentUserId}/>
        </div>
      </div>
    );
  }
}
 
export default Upload;