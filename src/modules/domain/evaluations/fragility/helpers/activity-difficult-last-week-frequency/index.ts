interface ICalculateActivityDifficultLastWeekFrequency {
  activityDifficultLastWeekFrequency: number;
  KeepGoingDifficultLastWeekFrequency: number;
}

const calculateActivityDifficultLastWeekFrequency = ({
  activityDifficultLastWeekFrequency,
  KeepGoingDifficultLastWeekFrequency,
}: ICalculateActivityDifficultLastWeekFrequency) => {
  return activityDifficultLastWeekFrequency >= 2 ||
    KeepGoingDifficultLastWeekFrequency >= 2
    ? 1
    : 0;
};

export default calculateActivityDifficultLastWeekFrequency;
