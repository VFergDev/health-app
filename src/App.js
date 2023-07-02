import React from "react";
// import { Footer, Header } from "./containers";

import Header from './containers/header/Header';
import Footer from './containers/footer/Footer';
import AddEditOccurrenceForm from './components/AddEditOccurrencesForm';
// import Dashboard from './components/Dashboard';
// import Forms from './components/Forms';
// import Visualization from './components/Visualization';
// import MedicationList from './components/MedicationList';
// import DoctorList from './components/DoctorList';
// import Forum from './components/Forum';
// import Profile from './components/Profile';
// import CloudAccess from './components/CloudAccess';
// import AccountSettings from './components/AccountSettings';
// import DataExport from './components/DataExport';
// import DataImport from './components/DataImport';
// import Notes from './components/Notes';
// import DoctorSearch from './components/DoctorSearch';
// import Practice from './components/Practice';
// import DoctorCard from './components/DoctorCard';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <AddEditOccurrenceForm />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
