import { dbService } from "./db.service";
const KEY = 'users'

export const userService = {
    signup,
    getUser,
    saveUser,
    transferFunds,
    getTransactions,
    getLoggedInUser,
    setLoggedInUser,
}

async function signup(name) {
    let user = await _findUserByName(name)
    if (!user) {
        user = {
            name,
            balance: 100,
            transactions: []
        }
        user = await saveUser(user)
        setLoggedInUser(user)
    } else {
        setLoggedInUser(user)
    }
    return user
}

async function getUser(id) {
    const user = await dbService.get(KEY, id)
    return user;
}

async function saveUser(user) {
    if (user._id) return await dbService.put(KEY, user)
    else return await dbService.post(KEY, user)
}

async function transferFunds(contact, amount) {
    let user = getLoggedInUser()

    if (user.balance < amount) {
        throw new Error('Insufficient funds')
    }

    const transaction = {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount,
    }

    user.balance -= amount
    user.transactions.push(transaction)

    await saveUser(user)
    setLoggedInUser(user)
    return transaction
}

async function getTransactions() {
    const user = getLoggedInUser()

    return user.transactions
}

async function _findUserByName(name) {
    let users = await dbService.query(KEY)
    if (!users || !Array.isArray(users)) users = []
    const user = users.find(user => user.name === name);


    return user;
}

function getLoggedInUser() {
    // const user = JSON.parse(localStorage.getItem('loggedInUser')) || null;
    const user = JSON.parse(sessionStorage.getItem('loggedInUser')) || null;
    return user;
}

function setLoggedInUser(user) {
    sessionStorage.setItem('loggedInUser', JSON.stringify(user))
    // localStorage.setItem('loggedInUser', JSON.stringify(user))
}
