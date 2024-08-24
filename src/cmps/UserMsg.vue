<template>
    <Transition>
        <section :class="msg.type" v-if="msg.txt" class="user-msg">
            <p>{{ msg.txt }}</p>
        </section>
    </Transition>
</template>

<script>
import { eventBus } from '@/services/eventBus.service'

export default {
    data() {
        return {
            msg: { txt: '', type: 'success' }
        }
    },
    methods: {
        showMsg(msg) {
            this.msg = msg
            setTimeout(() => this.msg.txt = '', 2000)
        }
    },
    created() {
        this.unsubscribe = eventBus.on('user-msg', this.showMsg)
    },
    unmounted() { this.unsubscribe() },
}
</script>

<style lang="scss">
.user-msg {
    position: absolute;
    top: 43px;
    right: 37%;
left: 45%;
    min-width: 200px;

    padding: 6px;
    background-color: rgb(47, 79, 60);
    border-radius: 5px;

    color: white;

    &.success {
        background-color: darkseagreen;
    }

    &.error {
        background-color: orangered;
    }
}
.v-enter-active,
.v-leave-active {
    transition: 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    translate: 0px -100px;
}
</style>