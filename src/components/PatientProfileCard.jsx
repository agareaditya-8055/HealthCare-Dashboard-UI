import { formatDate } from '../utils/patientTransformers';

function PatientProfileCard({ profile }) {
  const rows = [
    { icon: '/assets/BirthIcon.svg', label: 'Date Of Birth', value: formatDate(profile.dateOfBirth) },
    { icon: profile.gender === 'Female' ? '/assets/FemaleIcon.svg' : '/assets/MaleIcon.svg', label: 'Gender', value: profile.gender },
    { icon: '/assets/PhoneIcon.svg', label: 'Contact Info.', value: profile.phoneNumber },
    { icon: '/assets/PhoneIcon.svg', label: 'Emergency Contacts', value: profile.emergencyContact },
    { icon: '/assets/InsuranceIcon.svg', label: 'Insurance Provider', value: profile.insuranceType },
  ];

  return (
    <section className="rounded-2xl bg-app-white p-6 text-center shadow-card">
      <img src={profile.profilePicture} alt={profile.name} className="mx-auto mb-4 h-[200px] w-[200px] rounded-full object-cover" />
      <h2 className="mb-6 text-[32px] font-bold">{profile.name}</h2>

      <div className="space-y-6 text-left">
        {rows.map((item) => (
          <div key={item.label} className="flex items-center gap-4">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-app-bg">
              <img src={item.icon} alt="" aria-hidden className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-app-textMuted">{item.label}</p>
              <p className="font-bold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <button type="button" className="mt-8 w-full rounded-[41px] bg-app-mint py-3 font-bold">
        Show All Information
      </button>
    </section>
  );
}

export default PatientProfileCard;
