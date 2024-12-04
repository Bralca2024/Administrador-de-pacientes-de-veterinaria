export type PatientType = {
  id: string;
  patientName: string;
  ownerName: string;
  email: string;
  dateValue: Date;
  sympthoms: string;
};

export type DraftPatientType = Omit<PatientType, "id">;
