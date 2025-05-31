
const nameInfo: {
//   userName: string;
//   age: number;
//   address: undefined | string
    [key: string] : string | number | boolean
} = {
  userName: "viek",
  age: 20,
};

nameInfo.address = "abc"

interface MyObject {
    [key: string]: string;
}