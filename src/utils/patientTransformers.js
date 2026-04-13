const MONTH_ORDER = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

const MONTH_SHORT = {
  January: 'Jan',
  February: 'Feb',
  March: 'Mar',
  April: 'Apr',
  May: 'May',
  June: 'Jun',
  July: 'Jul',
  August: 'Aug',
  September: 'Sep',
  October: 'Oct',
  November: 'Nov',
  December: 'Dec',
};

export function getPatientProfile(patient) {
  if (!patient) {
    return null;
  }

  const {
    name,
    age,
    gender,
    profile_picture,
    date_of_birth,
    phone_number,
    emergency_contact,
    insurance_type,
  } = patient;

  return {
    name,
    age,
    gender,
    profilePicture: profile_picture,
    dateOfBirth: date_of_birth,
    phoneNumber: phone_number,
    emergencyContact: emergency_contact,
    insuranceType: insurance_type,
  };
}

export function getBloodPressureChartData(diagnosisHistory = []) {
  const sorted = [...diagnosisHistory].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }

    return MONTH_ORDER[a.month] - MONTH_ORDER[b.month];
  });

  return {
    labels: sorted.map((entry) => MONTH_SHORT[entry.month]),
    systolic: sorted.map((entry) => entry.blood_pressure?.systolic?.value ?? 0),
    diastolic: sorted.map((entry) => entry.blood_pressure?.diastolic?.value ?? 0),
  };
}

export function getDiagnosisCards(diagnosisHistory = []) {
  const latest = diagnosisHistory[diagnosisHistory.length - 1];

  if (!latest) {
    return [];
  }

  return [
    {
      key: 'respiratory',
      icon: '/assets/respiratory rate.svg',
      title: 'Respiratory Rate',
      value: `${latest.respiratory_rate?.value ?? '--'} bpm`,
      status: 'Normal',
      bg: 'bg-app-blue',
    },
    {
      key: 'temperature',
      icon: '/assets/temperature.svg',
      title: 'Temperature',
      value: `${latest.temperature?.value ?? '--'}°F`,
      status: 'Normal',
      bg: 'bg-app-peach',
    },
    {
      key: 'heart',
      icon: '/assets/HeartBPM.svg',
      title: 'Heart Rate',
      value: `${latest.heart_rate?.value ?? '--'} bpm`,
      status: 'Lower than Average',
      bg: 'bg-app-pink',
      arrow: '/assets/ArrowDown.svg',
    },
  ];
}

export function getDiagnosticList(diagnosticList = []) {
  return diagnosticList.map(({ name, description, status }) => ({
    name,
    description,
    status,
  }));
}

export function getLabResults(labResults = []) {
  return [...labResults];
}

export function formatDate(value) {
  if (!value) {
    return '--';
  }

  const date = new Date(value);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
