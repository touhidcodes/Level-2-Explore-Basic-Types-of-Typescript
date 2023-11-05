{
  // Type Alias

  //  type name will be capital letter of first letter for naming convention
  type Student = {
    id: number;
    name: string;
    phone?: string | number; // optional
    address: string;
    isPass: boolean;
  };

  const student1: Student = {
    id: 3,
    name: "Touhid",
    phone: 123453,
    address: "JSR",
    isPass: true,
  };
  const student2: Student = {
    id: 3,
    name: "T2",
    address: "JSR2",
    isPass: false,
  };

  type Boolean = boolean;
  type String = string;

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
