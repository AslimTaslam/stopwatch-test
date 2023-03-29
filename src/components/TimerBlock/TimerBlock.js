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
      startTime: null,
      milliseconds: 0,
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
      this.startTime = Date.now();
      const instance = () => {
        this.milliseconds += 100;
        const diff = Date.now() - this.startTime - this.milliseconds;

        if (this.milliseconds % 1000 === 0) {
          if (this.timer.current.seconds === 59) {
            this.timer.current.seconds = 0;
            this.timer.current.minutes += 1;
          }
          if (this.timer.current.minutes === 60) {
            this.timer.current.minutes = 0;
            this.timer.current.hours += 1;
          }

          this.timer.current.seconds += 1;
          this.updateTime();
        }
        this.interval = setTimeout(instance, 100 - diff);
      };

      this.interval = setTimeout(instance, 100);
    },
    stop() {
      this.timer.timerStatus = "stopped";
      this.startTime = null;
      this.milliseconds = 0;
      clearInterval(this.interval);
      this.timer.current.seconds = 0;
      this.timer.current.minutes = 0;
      this.timer.current.hours = 0;
    },
    pause() {
      this.timer.timerStatus = "paused";
      this.startTime = null;
      this.milliseconds = 0;
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
