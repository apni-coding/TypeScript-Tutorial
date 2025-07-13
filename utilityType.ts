type User = {
  name: string;
  age: number;
  email?: string;
};

type UserPreview = Pick<User, "age" | "email">

const userPreview : UserPreview = {
    age:29,
    email:"vivek@gmail"
}

const currentUser: Partial<User> = {
  name: "vivek",
  // age: 20,
  // email: "vivek@gmail.com",
};

// currentUser.age = 20

const userRead: Readonly<User> = {
  name: "vivek",
  age: 20,
  email: "vivek@gmail.com",
};
console.log(userRead.name)
// userRead.name  = "akash"

const userRequired: Required<User> = {
  name: "vivek",
  age: 20,
  email: "vivek@gmail.com",
};

