import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



export default function HomePage() {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{margin: "3rem"}}>
      <Grid celled divided='vertically'>
        
        <Grid.Row columns={2}>
          <Grid.Column width={5}>
            <p>User Name</p>
            <p>UserID: 123</p>
          </Grid.Column>
          
        </Grid.Row>
        
        <div>
        <Calendar onChange={onChange} value={value} />
        <p>Time Zone</p>
        </div>
        
        <Grid.Row>

          <Grid.Column width={5}>
          <p>Appointment 1</p>
          </Grid.Column>
          <Grid.Column width={8}>
          <p>Appointment 2</p>
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column width={5}>
          <p>Appointment 3</p>
          </Grid.Column>
          <Grid.Column width={5}>
          <p>Appointment 4</p>
          </Grid.Column>
          <Grid.Column width={5}>
          <p>Appointment 5</p>
          </Grid.Column>
        </Grid.Row>
      
      </Grid>
    </div>
  );
}
