import { useForm } from "react-hook-form";
import PatientDetails from "./PatientDetails";
import { usePatientStore } from "../store/patientStore";

export default function PatientList() {
  const patients = usePatientStore((state) => state.patients);
  return (
    <>
      <div>
        {patients.length ? (
          <>
            <h2 className="font-black text-3xl text-center">
              Listado de pacientes
            </h2>

            <p className="text-lg mt-5 text-center mb-10">
              Administra tus {""}
              <span className="text-sky-600 font-bold">pacientes y listas</span>
            </p>

            <div className="flex flex-col gap-4 md:h-screen overflow-y-scroll">
              {patients.map((patient) => (
                <PatientDetails key={patient.id} patient={patient} />
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">
              No hay pacientes
            </h2>

            <p className="text-lg mt-5 text-center mb-10">
              Agrega pacientes y {""}
              <span className="text-sky-600 font-bold">
                administralos en este lugar
              </span>
            </p>
          </>
        )}
      </div>
    </>
  );
}
