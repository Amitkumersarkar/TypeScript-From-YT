// enum-store constants; duplicate value is not allow
// enum type : numeric,string,hetergenous
// numeric enum declaration process
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 0] = "readData";
    RequestType[RequestType["saveData"] = 1] = "saveData";
    RequestType[RequestType["deleteData"] = 2] = "deleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
