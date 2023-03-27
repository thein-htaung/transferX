import { Button, Card, Grid, Icon } from "semantic-ui-react";
import styled from "styled-components";

const StyledCenter = styled.div`
  text-align: center;
`;
const Transfer = () => {
    return (
        <div className="center-card">
            <Card style={{ borderRadius: '15px', paddingLeft: '20px', paddingRight: '20px' }}>
                <Card.Content>
                        <Grid>
                            <Grid.Row centered>
                                <Grid.Column>     
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Icon name='cloud' color='grey' size='massive'/>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={4}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                        <Button circular icon>
                                            <Icon name='arrow alternate circle up' color='teal' size='huge'/>
                                        </Button>
                                        <span>upload</span>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={8}/>
                                <Grid.Column width={4}>     
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Icon name='arrow alternate circle down'color='green' size='huge'/>
                                        <span>download</span>
                                    </div>
                                </Grid.Column>                                    
                            </Grid.Row>
                        </Grid>
                   
                </Card.Content>
            </Card>
        </div>
    );
}

export default Transfer;