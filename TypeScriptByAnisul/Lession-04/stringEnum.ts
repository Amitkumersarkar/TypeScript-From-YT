// hetergenous enum
enum UserType {
    readData = "REDA_DATA",
    deleteData = "REDA_DATA",
    id = 101
}
console.log(UserType.readData)
console.log(UserType['readData']);