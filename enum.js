var userRole;
(function (userRole) {
    userRole["admin"] = "admin";
    userRole["user"] = "user";
    userRole["superAdmin"] = "super admin";
})(userRole || (userRole = {}));
var loginUserRole = userRole.superAdmin;
console.log(loginUserRole);
var fruits;
(function (fruits) {
    fruits[fruits["apple"] = 5] = "apple";
    fruits[fruits["graphs"] = 6] = "graphs"; //1
})(fruits || (fruits = {}));
var dummy = fruits.graphs;
console.log(dummy);
