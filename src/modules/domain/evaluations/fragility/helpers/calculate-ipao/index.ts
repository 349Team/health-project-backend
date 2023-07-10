interface ICalculateIPAO {
  walkingDays: number;
  walkingMinutesPerDay: number;
  moderateActivityDays: number;
  moderateActivityMinutesPerDay: number;
  vigorousActivityDays: number;
  vigorousActivityMinutesPerDay: number;
  weight: number;
}

const calculateIPAO = ({
  walkingDays,
  walkingMinutesPerDay,
  moderateActivityDays,
  moderateActivityMinutesPerDay,
  vigorousActivityDays,
  vigorousActivityMinutesPerDay,
  weight,
}: ICalculateIPAO) => {
  const mets1 = walkingDays * walkingMinutesPerDay * 3.3;
  const mets2 = moderateActivityDays * moderateActivityMinutesPerDay * 4;
  const mets3 = vigorousActivityDays * vigorousActivityMinutesPerDay * 8;
  const metsTotal = mets1 + mets2 + mets3;
  const kcal = (metsTotal * weight) / 60;

  return { mets1, mets2, mets3, metsTotal, kcal };
};

export default calculateIPAO;
