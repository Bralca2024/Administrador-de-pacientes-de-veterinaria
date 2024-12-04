import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import { DraftPatientType } from "../types/type";
import { useEffect } from "react";
import { usePatientStore } from "../store/patientStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PatientForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<DraftPatientType>();

  const activeID = usePatientStore((state) => state.activeID);
  const patients = usePatientStore((state) => state.patients);
  const { addPatient, updatePatient } = usePatientStore();

  useEffect(() => {
    if (activeID) {
      const selectPatient = patients.filter(
        (patient) => patient.id === activeID
      )[0];
      setValue("patientName", selectPatient.patientName);
      setValue("ownerName", selectPatient.ownerName);
      setValue("email", selectPatient.email);
      setValue("dateValue", selectPatient.dateValue);
      setValue("sympthoms", selectPatient.sympthoms);
    }
  }, [activeID]);

  const registerPatient = (data: DraftPatientType) => {
    if (activeID) {
      updatePatient(data);
      toast.info("Paciente editado correctamente", {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else {
      addPatient(data);
      toast.success("Paciente agregado correctamente", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
    reset();
  };

  return (
    <div className="mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-sky-600 font-bold">administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="patientName" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input
            id="patientName"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Paciente"
            {...register("patientName", {
              required: "El nombre del paciente es obligatorio",
            })}
          />
          {errors.patientName && (
            <ErrorMessage>{errors.patientName.message}</ErrorMessage>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="ownerName" className="text-sm uppercase font-bold">
            Propietario
          </label>
          <input
            id="ownerName"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Propietario"
            {...register("ownerName", {
              required: "El nombre del propietario es obligatorio",
            })}
          />
          {errors.ownerName && (
            <ErrorMessage>{errors.ownerName.message}</ErrorMessage>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Email de Registro"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Em email no es válido",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>

        <div className="mb-5">
          <label htmlFor="dateValue" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="dateValue"
            className="w-full p-3  border border-gray-100"
            type="date"
            {...register("dateValue", {
              required: "La fecha del alta es obligatoria",
            })}
          />
          {errors.dateValue && (
            <ErrorMessage>{errors.dateValue.message}</ErrorMessage>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="Síntomas del paciente"
            {...register("sympthoms", {
              required: "Los síntomas son obligatorios",
            })}
          ></textarea>
          {errors.sympthoms && (
            <ErrorMessage>{errors.sympthoms.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          className="bg-sky-600 w-full p-3 text-white uppercase font-bold hover:bg-sky-700 cursor-pointer transition-colors"
          value={activeID ? "Editar paciente" : "Guardar paciente"}
        />
      </form>
    </div>
  );
}
