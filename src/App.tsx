import { useEffect } from "react";
import PatientForm from "../src/components/PatientForm";
import PatientList from "../src/components/PatientList";
import { usePatientStore } from "./store/patientStore";
import { ToastContainer } from "react-toastify";

function App() {
  const patients = usePatientStore((state) => state.patients);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  return (
    <>
      <header className="max-w-3xl mx-auto border-b-2 border-b-sky-600 py-10">
        <h1 className="text-4xl text-center font-black">
          Seguimiento de pacientes{" "}
          <span className="text-sky-600">veterinaria</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto py-16">
        <PatientForm />
        <PatientList />
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
