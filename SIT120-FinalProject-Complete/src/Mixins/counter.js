//This mixin is used for counting
export const CounterMixin = {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        incrementCount() {
            this.count += 1;
        }
    }
}