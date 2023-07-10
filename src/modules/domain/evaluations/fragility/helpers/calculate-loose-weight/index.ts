interface ICalculateLooseWeight {
  looseWeight: number;
}

const calculateLooseWeight = ({ looseWeight }: ICalculateLooseWeight) => {
  return looseWeight >= 4.5 ? 1 : 0;
};

export default calculateLooseWeight;
