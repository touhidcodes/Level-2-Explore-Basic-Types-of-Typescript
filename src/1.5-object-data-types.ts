{
  // Reference Type --> Object

  const user: {
    readonly country: string; // access modifier (value is fixed)
    company: "Programming Hero"; // literal type (fixed)
    firstName: string;
    middleName?: string; // optional type (?)
    lastName: string;
    isMarried: boolean;
  } = {
    country: "Bangladesh",
    company: "Programming Hero",
    firstName: "Touhidur",
    lastName: "Zaman",
    isMarried: true,
  };
}
