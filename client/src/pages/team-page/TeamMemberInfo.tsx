import { TeamMemberInfoProps } from "../../types/types";
function TeamMemberInfo({ memberName, memberRole }: TeamMemberInfoProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-4xl font-bold">{memberName}</h2>
      <p>{memberRole}</p>
    </div>
  );
}

export default TeamMemberInfo;
