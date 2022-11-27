import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-time-picker";
import EventList from '../components/EventList';


export default function HomePage() {
  const [initial, setInitial] = useState(new Date());
  const [value, onChange] = useState(new Date());
  return (
    <main>
      <div style={{ margin: "3rem" }}>
        <Grid celled divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column width={5}>
              <p>Admin</p>
              <p>UserID: 456</p>
            </Grid.Column>
          </Grid.Row>

          <div>
            <Calendar onChange={onChange} value={value} />
            <TimePicker setInitial={setInitial} initial={initial} />
          </div>

          <Grid.Row>
            <Grid.Column width={5}>
              <p>Start Time</p>
            </Grid.Column>
            <Grid.Column width={5}>
              <p>Gap Time</p>
            </Grid.Column>
            <Grid.Column width={5}>
              <p>Break Time</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </main>
  );
}