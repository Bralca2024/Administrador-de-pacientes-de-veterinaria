import { create } from "zustand";
import { DraftPatientType, PatientType } from "../types/type";
import { v4 as uuidv4 } from "uuid";

export type PatientState = {
  patients: PatientType[];
  activeID: string;
  addPatient: (data: DraftPatientType) => void;
  deletePatient: (id: PatientType["id"]) => void;
  getPatientByID: (id: PatientType["id"]) => void;
  updatePatient: (data: DraftPatientType) => void;
};

const createPatient = (draftPatientType: DraftPatientType): PatientType => {
  return {
    ...draftPatientType,
    id: uuidv4(),
  };
};

const localPatientStorage = () => {
  const patient = localStorage.getItem("patients");
  return patient ? JSON.parse(patient) : [];
};

export const usePatientStore = create<PatientState>((set) => ({
  patients: localPatientStorage(),
  activeID: "",
  addPatient: (data) => {
    const newPatient = createPatient(data);

    set((state) => ({
      patients: [...state.patients, newPatient],
    }));
  },
  deletePatient: (id) => {
    set((state) => ({
      patients: state.patients.filter((patient) => patient.id !== id),
    }));
  },
  getPatientByID: (id) => {
    set(() => ({
      activeID: id,
    }));
  },
  updatePatient: (data) => {
    set((state) => ({
      patients: state.patients.map((patient) =>
        patient.id === state.activeID
          ? { id: state.activeID, ...data }
          : patient
      ),
      activeID: "",
    }));
  },
}));
