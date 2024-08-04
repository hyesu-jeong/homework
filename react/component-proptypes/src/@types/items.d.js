import { string, number, exact } from "prop-types";

export const SlideItemType = exact({
  title: string,
  episode: number,
  photo: string,
});
