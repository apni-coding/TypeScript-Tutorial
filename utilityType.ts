type User = {
  name: string;
  age: number;
  email?: string;
};

//Omit<T, K> -> removes one or more keys from a type

type UserWithoutEmail = Omit<User, "email">

//Exclude<T, U>   -> Removes types from a union that are assignable to another type.
type Status = "success" | "error" | "loading"

const withoutError : Exclude<Status, "error"> = "loading"


//Extract<T, U> ---> Keeps only the types from a union that are assignable to another type

const onlyError : Extract<Status, "error"> = "error"

//NonNullable<T> --> Remove null & undefined from a type
type MayBeString = string | null | undefined;

type StrictString = NonNullable<MayBeString>

//Record<K, T>  --> Constructs an object type with specified keys and value types
type Roles  = "admin" | "user" | "guest"

type RolePermissions = Record<Roles, boolean>

// {
//   admin:boolean,
//   user: boolean,
//   guest: boolean
// }






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

