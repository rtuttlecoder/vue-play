<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">{{ stock.name }} <small>(Price: {{ stock.price | currency }}) | Qty: {{ stock.qty }}</small></h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" class="form-control" placeholder="qty" v-model="qty" :class="{danger: insufQty}">
                </div>
                <div class="pull-right">
                    <button class="btn btn-info" @click="sellStock" :disabled="insufQty">{{ insufQty ? 'Not enough!' : 'sell' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      qty: 0
    };
  },
  computed: {
    insufQty() {
      return this.qty > this.stock.qty;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        qty: this.qty
      };
      this.placeSellOrder(order);
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
