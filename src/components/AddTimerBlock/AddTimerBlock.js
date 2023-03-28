import SvgIcon from "../SvgIcon/SvgIcon.vue";

export default {
  components: {
    SvgIcon,
  },
  methods: {
    addTimer() {
      const newTimer = {
        id: 1,
        timerStatus: "stopped",
        current: {
          seconds: 0,
          minutes: 0,
          hours: 0,
        },
      };
      this.$emit("add-timer", newTimer);
    },
  },
};
