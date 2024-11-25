"use strict";
function studentName(name) {
    console.log(`student name is:`, name);
}
let a;
a: null;
let stadium;
console.log(stadium);
function failedToConnect() {
    throw new Error("Connection failed");
}
const DBConnection = () => {
    try {
        console.log("Db connected");
    }
    catch (error) {
        failedToConnect();
    }
};
//# sourceMappingURL=specialTypes.js.map