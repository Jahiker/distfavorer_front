<template>
  <div class="pagination">
    <v-btn 
        outlined 
        class="mr-1"
        color="rgb(35, 47, 62)"
        :disabled="pagination.current_page <= 1 ? true : false "
        href="javascript:void(0)"
        aria-label="Previous"
        v-on:click.prevent="changePage(pagination.current_page - 1)"
    >
        <span aria-hidden="true">«</span>
    </v-btn>
    <v-btn
        outlined 
        class="mr-1"
        v-for="(page, index) in pagesNumber"
        :key="index"
        :color="page == pagination.current_page ? 'red' : 'rgb(35, 47, 62)'"
        href="javascript:void(0)"
        v-on:click.prevent="changePage(page)">
      {{page}}
    </v-btn>
    <v-btn 
        outlined 
        color="rgb(35, 47, 62)"
        class="mr-1"
        :disabled="pagination.current_page >= pagination.last_page ? true : false "
        href="javascript:void(0)"
        aria-label="Next"
        v-on:click.prevent="changePage(pagination.current_page + 1)"
    >
        <span aria-hidden="true">»</span>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pagination: {
      type: Object,
      required: true,
    },
    offset: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    pagesNumber() {
      if (!this.pagination.to) {
        return [];
      }
      let from = this.pagination.current_page - this.offset;
      if (from < 1) {
        from = 1;
      }
      let to = from + this.offset * 2;
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }
      let pagesArray = [];
      for (let page = from; page <= to; page++) {
        pagesArray.push(page);
      }
      return pagesArray;
    },
  },
  methods: {
    changePage(page) {
      this.pagination.current_page = page;
      this.$emit("paginate");
    },
  },
};
</script>
