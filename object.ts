let userDetail = {
    name: "vivek",
    age: 20,
    city: "Noida"
}
userDetail.name = "verma"
// userDetail.address = "full"
console.log(userDetail.name)

let userDetailTS: {
//   name: string,
//   age: number | string,
//   city: string,
//   address: undefined | string
[key:string]: undefined | string | number | boolean
} = {
  name: "vivek",
  age: 20,
//   city: "Noida",
  address: undefined
};
userDetailTS.name = "vivek1"
userDetailTS.address = "full address"
console.log(userDetailTS.address)


let userInfo:{
    address:{
        hosueNumber: number,
        city: string
    },
    company:{}
} = {
    address:{
        hosueNumber: 22,
        city: "abc"
    },
    company:{
        name: "xyz",
        address:"xyz"
    }
}
