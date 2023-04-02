import { Button, Card, Grid, Icon } from "semantic-ui-react";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

import { useState } from "react";
import storage from "../firebaseConfig";

const Transfer = () => {
  const [isUpload, setIsUpload] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDownload, setIsDownload] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const uploadHandler = (uploadFile) => {
    setIsUpload((prevState) => !prevState);
    console.log(uploadFile.name);
    const storageRef = ref(storage, uploadFile.name);
    const uploadTask = uploadBytesResumable(storageRef, uploadFile);

    uploadTask.on("state_changed", (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setUploadProgress(progress);
    });
  };

  const downloadHandler = () => {
    setIsDownload((prevState) => !prevState);
  };

  return (
    <div className="center-card">
      <Card
        style={{
          width: "500px",
          paddingLeft: "40px",
          paddingRight: "40px",
          borderRadius: "15px",
        }}
      >
        <Card.Content>
          <Grid>
            <Grid.Row centered>
              <Grid.Column>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Icon name="cloud" color="grey" size="massive" />
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <input type="file" onChange={handleFileSelect} />
                  <Icon.Group size="huge">
                    {isUpload && uploadProgress !== 100 && (
                      <Icon
                        loading
                        size="big"
                        color="teal"
                        name="circle notch"
                      />
                    )}
                    {
                      <Icon
                        color="blue"
                        name="arrow alternate circle up"
                        disabled={!selectedFile}
                        onClick={() => uploadHandler(selectedFile)}
                      />
                    }
                  </Icon.Group>
                  <span>upload</span>
                  {uploadProgress > 0 && (
                    <div>
                      <progress value={uploadProgress} max="100" />
                      <span>{uploadProgress.toFixed(2)}% uploaded</span>
                    </div>
                  )}
                </div>
              </Grid.Column>
              <Grid.Column width={8} />
              <Grid.Column width={4}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Icon.Group size="huge">
                    {isDownload && (
                      <Icon
                        loading
                        size="big"
                        color="teal"
                        name="circle notch"
                      />
                    )}
                    <Icon
                      color="green"
                      name="arrow alternate circle down"
                      onClick={downloadHandler}
                    />
                  </Icon.Group>
                  <span>download</span>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Transfer;
