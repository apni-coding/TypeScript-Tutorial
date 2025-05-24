var userDetail = {
    name: "vivek",
    age: 20,
    city: "Noida"
};
userDetail.name = "verma";
// userDetail.address = "full"
console.log(userDetail.name);
var userDetailTS = {
    name: "vivek",
    age: 20,
    //   city: "Noida",
    address: undefined
};
userDetailTS.name = "vivek1";
userDetailTS.address = "full address";
console.log(userDetailTS.address);
var userInfo = {
    address: {
        hosueNumber: 22,
        city: "abc"
    },
    company: {
        name: "xyz",
        address: "xyz"
    }
};
