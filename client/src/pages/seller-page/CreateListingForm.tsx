import FormField from "./FormField";
import LocationIcon from "../../assets/icons/LocationIcon";
import PriceIcon from "../../assets/icons/PriceIcon";
import BedIcon from "../../assets/icons/BedIcon";
import BathIcon from "../../assets/icons/BathIcon";
import DescriptionIcon from "../../assets/icons/DescriptionIcon";
import CameraIcon from "../../assets/icons/CameraIcon";
function CreateListingForm() {
  return (
    <div className="flex">
      <form className="flex flex-wrap w-full gap-6 justify-center">
        <FormField type="text" icon={LocationIcon} label="Address" />
        <FormField type="number" icon={PriceIcon} label="Asking Price" />
        <FormField type="number" icon={BedIcon} label="Bed" />
        <FormField type="number" icon={BathIcon} label="Bath" />
        <div className="flex flex-col w-full gap-2">
          <label className="flex gap-2 font-bold">
            <DescriptionIcon />
            Description
          </label>
          <textarea
            className="bg-[#E8F0FE] rounded-md outline-none p-4"
            name="description"
            id="description"
            cols={30}
            rows={10}
          ></textarea>
        </div>
        <div className="flex flex-col w-full gap-2">
          <label className="flex gap-2 font-bold">
            <CameraIcon />
            Upload Image
          </label>
          <input
            className="bg-[#E8F0FE] rounded-md outline-none p-4"
            type="file"
            accept="image/*,video/*"
          />
        </div>
        <button
          className="bg-first-primary p-3 text-white rounded-md"
          type="submit"
        >
          Create listing
        </button>
      </form>
    </div>
  );
}

export default CreateListingForm;
