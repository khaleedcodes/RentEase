function Utilities() {
  return (
    <div className="flex flex-col basis-96 grow gap-2">
      <label className="flex gap-2 font-bold">
        {/* <DescriptionIcon /> */}
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
  );
}

export default Utilities;
