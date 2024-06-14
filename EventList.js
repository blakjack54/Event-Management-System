import React, { useState } from 'react';

const EventList = () => {
  const [events, setEvents] = useState([]);

  // Fetch events from backend or use static data
  // For simplicity, using static data here
  const dummyEvents = [
    { id: 1, title: 'Event 1', date: '2024-06-30', location: 'Location A' },
    { id: 2, title: 'Event 2', date: '2024-07-15', location: 'Location B' },
    { id: 3, title: 'Event 3', date: '2024-08-01', location: 'Location C' }
  ];

  return (
    <div>
      <h2>Events</h2>
      {dummyEvents.map(event => (
