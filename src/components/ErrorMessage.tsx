import { PropsWithChildren } from "react";

export default function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <p className="text-white text-center font-bold uppercase bg-red-600 py-2 mt-2">
      {children}
    </p>
  );
}
