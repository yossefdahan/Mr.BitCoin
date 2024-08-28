<template>
    <ul class="transaction-list">
        <li v-for="transaction in transactions" :key="transaction.at">
            <p>To: {{ transaction.to }}</p>
            <p>Amount: {{ transaction.amount }}</p>
            <p>Date: {{ new Date(transaction.at).toLocaleString() }}</p>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['transactions'],
}
</script>

<style lang="scss">
.transaction-list {
    list-style: none;
    padding: 0;

    li {
        padding: 10px;
        border-bottom: 1px solid #ccc;
        color: whitesmoke;
    }
}
</style>