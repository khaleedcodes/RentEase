import TeamMembers from "./TeamMembers";
function TeamPage() {
  return (
    <div className="min-h-lvh flex w-full justify-center">
      <div className="p-3 max-w-[1100px] w-full flex flex-col items-center justify-center">
        <TeamMembers />
      </div>
    </div>
  );
}

export default TeamPage;
