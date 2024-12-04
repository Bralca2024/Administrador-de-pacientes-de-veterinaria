import { usePatientStore } from "../store/patientStore";
import { PatientType } from "../types/type";
import PatientDetailsItem from "./PatientDetailsItem";
import { toast } from "react-toastify";

type PatientDetailsProps = {
  patient: PatientType;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {
  const { id, patientName, ownerName, email, dateValue, sympthoms } = patient;

  const handleDelete = () => {
    deletePatient(id);
    toast("Paciente eliminado", {
      type: "error",
      autoClose: 3000,
      position: "bottom-right",
    });
  };

  const { getPatientByID, deletePatient } = usePatientStore();
  return (
    <>
      <div className="flex flex-col gap-2 bg-white shadow-xl rounded-xl p-4 mx-5">
        <PatientDetailsItem label="Nombre" data={patientName} />
        <PatientDetailsItem label="Propietario" data={ownerName} />
        <PatientDetailsItem label="Email" data={email} />
        <PatientDetailsItem label="Fecha de alta" data={dateValue.toString()} />
        <PatientDetailsItem label="Síntomas" data={sympthoms} />
        <div className="flex items-center justify-between mt-4">
          <button
            type="button"
            className="font-bold uppercase text-white py-1 px-4 bg-sky-600 rounded-md hover:bg-sky-700 transition duration-300"
            onClick={() => getPatientByID(id)}
          >
            Edit
          </button>
          <button
            type="button"
            className="font-bold uppercase text-white py-1 px-4 bg-red-600 rounded-md hover:bg-red-700 transition duration-300"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
