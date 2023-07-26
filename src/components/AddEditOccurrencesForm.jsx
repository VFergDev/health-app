import React, { useState } from 'react';
import '../styles/addEditOccurrencesForm.css';

const AddEditOccurrencesForm = () => {
  const [occurrences, setOccurrences] = useState([]);
  const [activities, setActivities] = useState([]);
  const [otherOccurrence, setOtherOccurrence] = useState('');
  const [otherActivity, setOtherActivity] = useState('');
  const [time, setTime] = useState(getCurrentTime());
  const [date, setDate] = useState(getCurrentDate());

  const occurrenceOptions = [
    'Shortness of Breath',
    'Heart racing',
    'Heart Skipping or pounding',
    'Neck, jaw, or arm tingling',
    'Loss of consciousness',
    'Chest pain or pressure',
    'Nausea',
    'Tired/Fatigue',
    'Anxiety',
    'Blood pressure drop',
  ];

  const activityOptions = [
    'Sitting',
    'Walking',
    'Taking medication',
    'Eating',
    'Standing',
    'Exercising',
    'Sleeping',
    // Add more activities here
  ];

  const handleOccurrenceChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setOccurrences((prevOccurrences) => [...prevOccurrences, value]);
    } else {
      setOccurrences((prevOccurrences) => prevOccurrences.filter((item) => item !== value));
    }
  };

  const handleActivityChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setActivities((prevActivities) => [...prevActivities, value]);
    } else {
      setActivities((prevActivities) => prevActivities.filter((item) => item !== value));
    }
  };

  const handleOtherOccurrenceChange = (event) => {
    setOtherOccurrence(event.target.value);
  };

  const handleOtherActivityChange = (event) => {
    setOtherActivity(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  // Helper function to get the current date in 'YYYY-MM-DD' format
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Helper function to get the current time in 'hh:mm' format
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  return (
    <div className='Add_Occurrences_container'>
      <form onSubmit={handleSubmit}>
        <div className='Occurrences_Activities_container'>
          <div className='Occurrences_container'>
            <label>Occurrences:</label>
            {occurrenceOptions.map((option) => (
              <div key={option}>
                <label>
                  <input
                    type="checkbox"
                    value={option}
                    checked={occurrences.includes(option)}
                    onChange={handleOccurrenceChange}
                  />
                  {option}
                </label>
              </div>
            ))}
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Other"
                  checked={occurrences.includes('Other')}
                  onChange={handleOccurrenceChange}
                />
                Other:
                <input
                  type="text"
                  value={otherOccurrence}
                  onChange={handleOtherOccurrenceChange}
                />
              </label>
            </div>
          </div>
          <div className='Activities_container'>
            <label>Activities during occurrence:</label>
            {activityOptions.map((option) => (
              <div key={option}>
                <label>
                  <input
                    type="checkbox"
                    value={option}
                    checked={activities.includes(option)}
                    onChange={handleActivityChange}
                  />
                  {option}
                </label>
              </div>
            ))}
            <div>
              <label>
                <input
                  type="checkbox"
                  value="Other"
                  checked={activities.includes('Other')}
                  onChange={handleActivityChange}
                />
                Other:
                <input
                  type="text"
                  value={otherActivity}
                  onChange={handleOtherActivityChange}
                />
              </label>
            </div>
          </div>
        </div>
        <div>
          <label>Time:</label>
          <input type="time" value={time} onChange={handleTimeChange} />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEditOccurrencesForm;


