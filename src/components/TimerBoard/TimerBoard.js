import TimerBlock from "../TimerBlock/TimerBlock.vue";
import SvgIcon from "../SvgIcon/SvgIcon.vue";
import AddTimerBlock from "../AddTimerBlock/AddTimerBlock.vue";

export default {
  components: {
    TimerBlock,
    AddTimerBlock,
    SvgIcon,
  },
  data() {
    return {
      interval: null,
      timers: [
        {
          id: 1,
          timerStatus: "stopped",
          current: {
            seconds: 0,
            minutes: 0,
            hours: 0,
          },
        },
      ],
    };
  },
  methods: {
    addTimer(newTimer) {
      this.timers.push(newTimer);
    },
  },
};
