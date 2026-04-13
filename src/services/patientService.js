const API_URL = 'https://fedskillstest.ct.digital/api/patients';

export async function fetchPatients() {
  const credentials = btoa('coalition:skills-test');

  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      Authorization: `Basic ${credentials}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch patients. Status: ${response.status}`);
  }

  return response.json();
}
