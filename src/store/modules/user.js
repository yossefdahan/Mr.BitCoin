import { userService } from "@/services/user.service";

export const user = {
    state: {
        user: null,
        transactions: []
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setTransactions(state, transactions) {
            state.transactions = transactions;
        },
        addTransaction(state, transaction) {
            state.transactions.push(transaction);
            state.user.transactions = state.transactions;
        },
        updateBalance(state, amount) {
            state.user.balance -= amount;
        }
    },
    actions: {
        async signup({ commit }, name) {
            const user = await userService.signup(name);
            commit('setUser', user);
            commit('setTransactions', user.transactions);
        },
        async loadUser({ commit }) {
            const user = await userService.getLoggedInUser();
            if (user) {
                commit('setUser', user);
                commit('setTransactions', user.transactions);
            }
        },
        async transferFunds({ commit, state }, { contact, amount }) {
            try {
                if (state.user.balance >= amount) {
                    const transaction = await userService.transferFunds(contact, amount);
                    commit('addTransaction', transaction);
                    commit('updateBalance', amount);
                    await userService.saveUser(state.user);
                } else {
                    throw new Error('Insufficient funds');
                }
            } catch (error) {
                console.error('Error transferring funds:', error);
                throw error;
            }
        },
        async saveUser({ state }) {
            try {
                await userService.saveUser(state.user);
            } catch (error) {
                console.error('Error saving user:', error);
                throw error;
            }
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        transactions(state) {
            return state.transactions;
        },
        lastTransactions(state) {
            return state.transactions.slice(-3).reverse();
        },
        balance(state) {
            return state.user?.balance || 0;
        }
    }
};
