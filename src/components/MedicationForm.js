import React, { useState } from "react";
import '../styles/medicationForm.css';
import { insertMedicationData } from './database';

const MedicationForm = () => {
  const [genericName, setGenericName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [dosage, setDosage] = useState(0);
  const [dosageUnit, setDosageUnit] = useState('');
  const [instructions, setInstructions] = useState('');
  const [reminder, setReminder] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Insert medication data into the database
    try {
      insertMedicationData(genericName, brandName, dosage, dosageUnit, instructions, reminder);
      // Reset form fields after successful submission
      setGenericName('');
      setBrandName('');
      setDosage('');
      setDosageUnit('');
      setInstructions('');
      setReminder('');
    } catch (error) {
      console.error('Error submitting medication data:', error);
      // Handle error case here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
};

export default MedicationForm;
