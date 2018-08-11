<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">{{ stock.name }} <small>(Price: {{ stock.price | currency }})</small></h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" class="form-control" v-model="qty" :class="{danger: insufFunds}">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" @click="buyStock" :disabled="insufFunds">{{ insufFunds ? 'Insufficient Funds' : 'buy' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      qty: 0
    };
  },
  computed: {
    funds() {
      this.$store.getters.funds;
    },
    insufFunds() {
      return this.qty * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        qty: this.qty
      };
      // console.log(order);
      this.$store.dispatch("buyStock", order);
      this.qty = 0;
    }
  }
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>
