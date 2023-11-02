{
  // ternary operator

  const age: number = 18;

  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  // optional chaining
  type User = {
    id: number;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    contact: {
      phone: string;
      address: string;
    };
  };

  const person: User = {
    id: 232,
    name: {
      firstName: "Touhidur",
      lastName: "Zaman",
    },
    contact: {
      phone: "0144444444",
      address: "sarsha",
    },
  };

  const middleName = person?.name?.middleName ?? "Not Found";
  //  nullish coalescing operator
  //  null / undefined --> decision making

  const isAuthenticated = null; // null / undefined

  const result1 = isAuthenticated ?? "guest";
  const result2 = isAuthenticated ? isAuthenticated : "guest";
  console.log({ result1 }, { result2 });
}
