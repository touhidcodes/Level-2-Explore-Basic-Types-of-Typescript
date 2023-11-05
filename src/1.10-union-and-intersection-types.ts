{
  // Union Type

  type Frontend = "Newbie" | "Junior Developer"; // string literal type
  type Fullstack = "Frontend" | "Advanced Developer";

  type Developer = Frontend | Fullstack;

  type User = {
    name: string;
    gender: "Male" | "Female";
    phone?: string | number; // optional
    address: string;
  };

  const user1: User = {
    name: "Touhid",
    gender: "Male",
    phone: 235435,
    address: "JSR",
  };

  //  Intersection Type

  type FrontendDeveloper = {
    skills: string[];
    frontendRole: "Frontend Developer"; // string literal type
  };

  type BackendDeveloper = {
    skills: string[];
    backendRole: "Backend Developer"; // string literal type
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const developer: FullstackDeveloper = {
    skills: ["HTML", "CSS", "Express", "MongoDB", "React"],
    frontendRole: "Frontend Developer",
    backendRole: "Backend Developer",
  };
}
