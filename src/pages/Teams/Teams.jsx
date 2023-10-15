import { TeamMembersCards } from "../../components/TeamMemberCards/TeamMemberCards";
import { teamsData } from "../../constants";

export function Teams() {
  return (
    <section id="teams" className="h-auto font-sans relative">
     <div className="py-8">
        <h1 className="text-center font-bold md:text-4xl text-secondaryDark uppercase">
          <span className="relative">
            Our Teams
            <hr className="border-b border-secondaryDark border-solid border-tiny mt-2 w-12 mx-auto" />
          </span>
        </h1>
        <div className="container mx-auto mt-4 flex flex-col gap-4">
          <div className="p-4 md:p-0">
            <p className="text-primaryDark text-justify tracking-wider">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          {/* team cards */}
          <div className="p-4 md:p-0 flex flex-col md:flex-row gap-4">
            {teamsData.map((team) => (
              <TeamMembersCards key={team.id} {...team} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
