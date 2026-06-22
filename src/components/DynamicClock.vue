<template>
  <div class="container">
    <img
      src="@/assets/dynamic-clock/sky.png"
      class="sky"
      :style="{ transform: skyRotation }"
    />
    <img src="@/assets/dynamic-clock/ground.png" class="ground" />
    <img src="@/assets/dynamic-clock/sun-container.png" class="sun" />
    <img src="@/assets/dynamic-clock/moon-container.png" class="sun" />
    <h1 class="hour">
      {{ time }}
    </h1>
  </div>
</template>

<script lang="ts">
import { ParisArea, SunsetSunriseScale } from "@/scripts/sunset-sunrise";
import { SunsetSunrise } from "@/scripts/sunset-sunrise/request-builder";

type SunsetSunriseData = {
  sunrise: Date;
  sunset: Date;
};

export default {
  name: "DynamicClock",
  data() {
    return {
      time: new Date().toLocaleTimeString(),
      date: new Date(),
      pSkyRotation: 0,
      sunsetSunriseAPI: new SunsetSunrise.RequestBuilder(),
      sunsetSunriseScaleFactory: new SunsetSunriseScale.ScaleFactory(),
    };
  },
  created() {
    setInterval(this.getTime, 1000);
    setInterval(this.applyRotation, 100);
  },
  computed: {
    skyRotation() {
      return `translateX(-50%) rotate(${this.pSkyRotation}deg)`;
    },
  },
  methods: {
    initSunsetSunriseParams: function (date: Date): SunsetSunrise.GetParameter {
      return {
        lat: ParisArea.coordinates.lat,
        lng: ParisArea.coordinates.lng,
        date,
      };
    },
    getSunsetSunriseInfos:
      async function (): Promise<SunsetSunriseScale.Scale> {
        const cur_date = new Date();
        let todaySunsetSunrise = await this.getSunsetSunriseForDate(cur_date);
        if (cur_date > todaySunsetSunrise.sunset) {
          // At current time, sun has already set
          const tomorrowDate = new Date(
            cur_date.getTime() + 24 * 60 * 60 * 1000,
          );
          const tomorrowSunsetSunrise =
            await this.getSunsetSunriseForDate(tomorrowDate);
          return this.sunsetSunriseScaleFactory.buildScale({
            start: todaySunsetSunrise.sunset,
            end: tomorrowSunsetSunrise.sunrise,
            period: "night",
          });
        } else if (cur_date < todaySunsetSunrise.sunrise) {
          // At current time, sun has not rise yet
          const yesterdayDate = new Date(
            cur_date.getTime() - 24 * 60 * 60 * 1000,
          );
          const yesterdaySunsetSunrise =
            await this.getSunsetSunriseForDate(yesterdayDate);
          return this.sunsetSunriseScaleFactory.buildScale({
            start: yesterdaySunsetSunrise.sunset,
            end: todaySunsetSunrise.sunrise,
            period: "night",
          });
        }
        // Nominal case
        return this.sunsetSunriseScaleFactory.buildScale({
          start: todaySunsetSunrise.sunrise,
          end: todaySunsetSunrise.sunset,
          period: "day",
        });
      },
    getSunsetSunriseForDate: async function (
      date: Date,
    ): Promise<SunsetSunriseData> {
      const setDateHour = (date: Date, hour: number): Date => {
        const clonedDate = new Date(date.getTime());
        clonedDate.setHours(hour, 0, 0, 0);
        return clonedDate;
      };
      const dateSunriseSunsetData = await this.sunsetSunriseAPI.getResult(
        this.initSunsetSunriseParams(date),
      );
      if (dateSunriseSunsetData.status !== "OK")
        return {
          sunrise: setDateHour(date, 6),
          sunset: setDateHour(date, 18),
        };
      return this.getSunsetSunriseFromOKResponse(dateSunriseSunsetData);
    },
    getSunsetSunriseFromOKResponse: function (
      response: SunsetSunrise.OKGetResponse,
    ): SunsetSunriseData {
      return {
        sunrise: new Date(response.results.sunrise),
        sunset: new Date(response.results.sunset),
      };
    },
    getTime: function () {
      let cur_date = new Date();
      this.time = cur_date.toLocaleTimeString();
      this.date = cur_date;
    },
    applyRotation: function (): void {
      this.pSkyRotation -= 1 % 360;
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "DSEG7Classic-Regular";
  src:
    local("DSEG7Classic-Regular"),
    url(@/fonts/DSEG7-Classic/DSEG7Classic-Regular.woff2) format("woff2");
}

.container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  overflow: hidden;
}

.container img {
  margin-left: 50%;
  top: 0;
  left: 0;
  transform: translateX(-50%);
  transition: transform 0.1s;
  width: 1080px;
  position: absolute;
}

.container img.sky {
  width: 1170px;
  top: -45px;
}

h1.hour {
  font-family: "DSEG7Classic-Regular";
  font-weight: 100;
  font-size: 1rem;
  text-justify: center;

  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  align-self: flex-start;

  margin-right: 0.5rem;
  margin-top: 0.4rem;
  padding: 0.2rem;

  z-index: 10;
}
</style>
