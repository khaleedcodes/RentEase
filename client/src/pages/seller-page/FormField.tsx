import { FormFieldProps } from "../../types/types";

function FormField({ type, icon: Icon, label }: FormFieldProps) {
  return (
    <div className="flex flex-col basis-96 grow gap-2">
      <label className="flex gap-2 font-bold">
        <Icon />
        {label}
      </label>
      <input
        className="bg-[#E8F0FE] h-12 rounded-md outline-none p-4"
        type={type}
      />
    </div>
  );
}

export default FormField;
