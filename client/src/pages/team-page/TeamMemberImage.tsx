import { TeamMemberImageProps } from "../../types/types";
function TeamMemberImage({ memberImage, memberGithub }: TeamMemberImageProps) {
  return (
    <div className="w-[540px] h-[540px]">
      <a href={memberGithub} className="">
        <img
          className="rounded-full h-full w-full object-cover"
          src={memberImage}
          alt="Khaleed Opeloyeru"
        />
      </a>
    </div>
  );
}

export default TeamMemberImage;
