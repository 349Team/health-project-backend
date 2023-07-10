import { ICardiorespiratoryCapacity } from '../../interface/cardiorespiratory-capacity.interface';

function verifyCardiorespiratoryCapacityOfMan({
  vo2MlKG,
}: Partial<ICardiorespiratoryCapacity>) {
  let result = '';

  if (vo2MlKG >= 42.5) {
    result = 'Muito bom!';
  } else if (vo2MlKG >= 35.3) {
    result = 'Bom!';
  } else if (vo2MlKG >= 31.8) {
    result = 'Suficiente!';
  } else if (vo2MlKG >= 28.7) {
    result = 'Fraco!';
  } else {
    result = 'Muito Fraco!';
  }

  return result;
}

function verifyCardiorespiratoryCapacityOfWoman({
  vo2MlKG,
}: Partial<ICardiorespiratoryCapacity>) {
  let result = '';

  if (vo2MlKG >= 35.2) {
    result = 'Muito bom!';
  } else if (vo2MlKG >= 29.4) {
    result = 'Bom!';
  } else if (vo2MlKG >= 25.8) {
    result = 'Suficiente!';
  } else if (vo2MlKG >= 23.6) {
    result = 'Fraco!';
  } else {
    result = 'Muito Fraco!';
  }

  return result;
}

export function calculateCardiorespiratoryCapacityResult({
  sex,
  vo2MlKG,
}: Partial<ICardiorespiratoryCapacity>) {
  let result: string;

  if (sex === 'Masculino') {
    result = verifyCardiorespiratoryCapacityOfMan({ vo2MlKG });
  } else {
    result = verifyCardiorespiratoryCapacityOfWoman({ vo2MlKG });
  }

  return result;
}
