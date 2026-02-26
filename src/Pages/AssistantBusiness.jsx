import React from 'react';
import BusinessInfo from '../components/BusinessInfo';
import BusinessHours from '../components/BusinessHour';
import BusinessSummary from "../components/BusinessSummary"
export default function Assistant() {
  return (
    <div>
     <BusinessInfo/>
     <BusinessHours/>
      <BusinessSummary/>
    </div>
  );
}