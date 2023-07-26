import React from "react";
// import { Footer, Header } from "./containers";

import Header from './containers/header/Header';
import Footer from './containers/footer/Footer';
import AddEditOccurrencesForm from "../components/AddEditOccurrencesForm";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="AddEditOccurrenceForm">
        <AddEditOccurrencesForm />
        </div>
        <div className="AddEditMedicationForm">

        </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
