import { Button, Card, Grid, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { useState } from "react";

const StyledCenter = styled.div`
  text-align: center;
`;
const Transfer = () => {
    const [isUpload, setIsUpload] = useState(false);
    const [isDownload, setIsDownload] = useState(false);

  const uploadHandler = () => {
    setIsUpload((prevState) => (!prevState));
  };

  const downloadHandler = () => {
    setIsDownload((prevState) => (!prevState));
  };

  return (
    <div className="center-card">
      <Card
        style={{
          width: '500px',
          paddingLeft: '40px',
          paddingRight: '40px',
          borderRadius: '15px',
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
                  <Icon.Group size="huge">
                    {isUpload && <Icon loading size="big" color="teal" name="circle notch" />}
                    <Icon color="blue" name="arrow alternate circle up" onClick={uploadHandler}/>
                  </Icon.Group>
                  <span>upload</span>
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
                    {isDownload && <Icon loading size="big" color="teal" name="circle notch" />}
                    <Icon color="green" name="arrow alternate circle down" onClick={downloadHandler}/>
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
