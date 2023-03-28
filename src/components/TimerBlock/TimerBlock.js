import TimerBlockTop from "../TimerBlockTop/TimerBlockTop.vue";
import TimerBlockBottom from "../TimerBlockBottom/TimerBlockBottom.vue";

export default {
  name: "Timer",
  components: {
    TimerBlockTop,
    TimerBlockBottom,
  },
  data() {
    return {
      time: "0",
      interval: null,
    };
  },
  props: {
    timer: {
      type: Object,
    },
    status: {
      type: String,
      default: "stopped",
    },
  },
  methods: {
    changeStatus(status) {
      this.timer.timerStatus = status;
    },
    updateTime() {
      const { seconds, minutes, hours } = this.timer.current;
      if (hours) {
        this.time = `${hours}:${minutes}:${seconds}`;
      } else if (!hours && minutes) {
        this.time = `${minutes}:${seconds}`;
      } else {
        this.time = `${seconds}`;
      }
    },
    start() {
      this.interval = setInterval(() => {
        if (this.timer.current.seconds === 60) {
          this.timer.current.minutes += 1;
          this.timer.current.seconds = 0;
        }
        if (this.timer.current.minutes === 60) {
          this.timer.current.hours += 1;
          this.timer.current.minutes = 0;
        }

        this.timer.current.seconds += 1;
        this.updateTime();
      }, 1000);
    },
    stop() {
      this.timer.timerStatus = "stopped";
      clearInterval(this.interval);
      this.timer.current.seconds = 0;
      this.timer.current.minutes = 0;
      this.timer.current.hours = 0;
    },
    pause() {
      this.timer.timerStatus = "paused";
      clearInterval(this.interval);
    },
  },
  watch: {
    status(newVal) {
      if (newVal === "running") this.start();
      if (newVal === "paused") this.pause();
      if (newVal === "stopped") this.stop();
    },
  },
};
