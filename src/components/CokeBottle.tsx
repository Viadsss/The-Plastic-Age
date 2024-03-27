import { useLottie, useLottieInteractivity } from "lottie-react";
import cokeBottle from "../assets/cokeAnimation.json";

const options = {
  animationData: cokeBottle,
};

const CokeBottle = () => {
  const lottieObj = useLottie(options);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0.3, 1],
        type: "seek",
        frames: [0, 30],
      },
    ],
  });

  return Animation;
};

export default CokeBottle;
