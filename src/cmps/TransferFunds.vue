<template>
    <div v-if="contact" class="transfer-funds">
        <h3>Transfer Funds</h3>
        <form @submit.prevent="onTransferFunds">

            <input type="number" v-model.number="amount" :max="user.balance" min="0" placeholder="Amount">

            <button type="submit">Transfer</button>
        </form>

    </div>
</template>

<script>

export default {
    props: ['contact'],
    data() {
        return {
            amount: 0,

        }
    },
    computed: {
        user() {
            return this.$store.getters.user
        }
    },
    methods: {
        onTransferFunds() {
            if (this.amount > 0 && this.amount <= this.user.balance) {
                this.$store.dispatch('transferFunds', { contact: this.contact, amount: this.amount })
                this.amount = 0
            } else {
                alert('invalid amount')
            }

        },

    },


}
</script>

<style lang='scss'>
.transfer-funds {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    background-color: #2c2c2e;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.7);
    color: whitesmoke;
    width: 100%;
    max-width: 400px;
    margin: 20px auto;

    h3 {
        margin-bottom: 1em;
        font-size: 1.5em;
        color: #1d50db;
    }

    & form {
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
        min-width: 150px;

        input {
            width: 100%;
            padding: 12px;
            border-radius: 4px;
            border: 1px solid #444;
            font-size: 1.1em;
            background-color: #3a3a3c;
            color: whitesmoke;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
            text-align: center;

            &:focus {
                border-color: #1d50db;
                box-shadow: 0 0 8px rgba(29, 80, 219, 0.5);
                outline: none;
            }

            &::placeholder {
                color: #999;
                font-style: italic;
            }
        }

        button {
            padding: 10px 25px;
            border-radius: 4px;
            border: none;
            background-color: #1d50db;
            color: whitesmoke;
            font-size: 1.1em;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;

            &:hover {
                background-color: #143e8c;
                transform: translateY(-2px);
            }

            &:active {
                transform: translateY(0);
            }
        }
    }
}


.transfer-funds input[type="number"] {
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #444;
    font-size: 1.1em;
    background-color: #3a3a3c;
    color: whitesmoke;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    /* Remove the spinners */
    -moz-appearance: textfield;
    /* Firefox */
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    /* Chrome, Safari, Edge, Opera */
}

/* Input focus styles */
input[type="number"]:focus {
    border-color: #1d50db;
    box-shadow: 0 0 8px rgba(29, 80, 219, 0.5);
    outline: none;
}
</style>