export const userService = {
    getLoggedinUser,
}


const user = {
    userName: "Yossef Dahan",
    balance: 1000,
}

function getLoggedinUser() {
    return user
}