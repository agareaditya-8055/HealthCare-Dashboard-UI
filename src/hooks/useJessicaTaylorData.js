import { useEffect, useState } from 'react';
import { fetchPatients } from '../services/patientService';

export function useJessicaTaylorData() {
  const [patient, setPatient] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadPatient() {
      try {
        setIsLoading(true);
        setError('');
        const data = await fetchPatients();
        console.log('DATA LENGTH : ', data.length);
        const jessicaTaylor = data.find((p) => p.name === 'Jessica Taylor');
        setPatient(jessicaTaylor ?? null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    }

    loadPatient();
  }, []);

  return { patient, isLoading, error };
}
