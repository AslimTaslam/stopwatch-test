export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      color: this.status === "running" ? "#FFF" : "#9E9E9E",
    };
  },
  watch: {
    status(newVal) {
      this.color = newVal === "running" ? "#FFF" : "#9E9E9E";
    },
  },
};
