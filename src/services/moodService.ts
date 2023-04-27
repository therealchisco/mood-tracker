import create from "./http-service";

export interface Mood {
  date: Date;
  mood: number;
}

export default create("/moods");
