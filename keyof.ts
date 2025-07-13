type Person = {
  name: string;
  age: number;
};

const user1: Person = {
  name: "vivek",
  age: 20,
};

type PersonKey = keyof Person; // "name" | "age"

type User = {
  id: number;
  name: string;
  email: string;
};

function getUserProperty(user: User, key: keyof User) {
  //key id | name | email
  return user[key];
}

const user: User = {
  id: 1,
  name: "vivek",
  email: "vivek@gmail.com",
};

console.log(getUserProperty(user, "email"));
