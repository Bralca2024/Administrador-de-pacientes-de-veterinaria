type PatientDetailsItemProps = {
  label: string;
  data: string;
};

export default function PatientDetailsItem({
  label,
  data,
}: PatientDetailsItemProps) {
  return (
    <p className="text-sky-600 font-bold uppercase">
      {label}: <span className="text-black font-normal">{data}</span>
    </p>
  );
}
