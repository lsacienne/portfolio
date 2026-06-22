export namespace SunsetSunriseScale {
  export type Period = "day" | "night";

  export interface Scale {
    start: Date;
    end: Date;
    period: Period;
    /**
     * Scale unit in milliseconds
     */
    unit: number;
    length: number;
  }

  const HALF_CIRCLE_DEGRESS = 180;

  export abstract class AbstractScaleFactory {
    constructor() {}

    abstract buildScale(data: Omit<Scale, "unit" | "length">): Scale;
  }

  export class ScaleFactory extends AbstractScaleFactory {
    buildScale(data: Omit<Scale, "unit" | "length">): Scale {
      return new ScaleImpl(data.start, data.end, data.period);
    }
  }

  class ScaleImpl implements Scale {
    constructor(
      public start: Date,
      public end: Date,
      public period: Period,
    ) {}

    get unit(): number {
      return this.length / HALF_CIRCLE_DEGRESS;
    }

    get length(): number {
      return this.end.getTime() - this.start.getTime();
    }
  }
}
