import CreateListingForm from "./CreateListingForm";

function CreateListingPage() {
  return (
    <div className="min-h-lvh flex w-full justify-center">
      <div className=" p-3 max-w-screen-xl w-full gap-8 flex flex-col justify-center items-center">
        <div className="flex-col flex gap-1">
          <p className="font-bold text-3xl">Create a new listing</p>
        </div>
        <CreateListingForm />
      </div>
    </div>
  );
}

export default CreateListingPage;
