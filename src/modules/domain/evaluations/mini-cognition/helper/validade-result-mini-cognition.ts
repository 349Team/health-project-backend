import { CreateMiniCognitionDto } from '../dto/create-mini-cognition.dto';

export function validateResult(input: CreateMiniCognitionDto) {
  let total = 0;
  if (input.checked1_1.toString() === 'true') total += 1;
  if (input.checked1_2.toString() === 'true') total += 1;
  if (input.checked1_3.toString() === 'true') total += 1;
  if (input.checked1_4.toString() === 'true') total += 1;
  if (input.checked1_5.toString() === 'true') total += 1;
  if (input.checked2_1.toString() === 'true') total += 1;
  if (input.checked2_2.toString() === 'true') total += 1;
  if (input.checked2_3.toString() === 'true') total += 1;
  if (input.checked2_4.toString() === 'true') total += 1;
  if (input.checked2_5.toString() === 'true') total += 1;
  if (input.checked3_1.toString() === 'true') total += 1;
  if (input.checked3_2.toString() === 'true') total += 1;
  if (input.checked3_3.toString() === 'true') total += 1;
  if (input.checked4_1.toString() === 'true') total += 1;
  if (input.checked4_2.toString() === 'true') total += 1;
  if (input.checked4_3.toString() === 'true') total += 1;
  if (input.checked4_4.toString() === 'true') total += 1;
  if (input.checked4_5.toString() === 'true') total += 1;
  if (input.checked5_1.toString() === 'true') total += 1;
  if (input.checked5_2.toString() === 'true') total += 1;
  if (input.checked5_3.toString() === 'true') total += 1;
  if (input.checked5_4.toString() === 'true') total += 1;
  if (input.checked5_5.toString() === 'true') total += 1;
  if (input.checked6_1.toString() === 'true') total += 1;
  if (input.checked6_2.toString() === 'true') total += 1;
  if (input.checked6_3.toString() === 'true') total += 1;
  if (input.checked7_1.toString() === 'true') total += 1;
  if (input.checked7_2.toString() === 'true') total += 1;
  if (input.checked8_1.toString() === 'true') total += 1;
  if (input.checked9_1.toString() === 'true') total += 1;
  if (input.checked9_2.toString() === 'true') total += 1;
  if (input.checked9_3.toString() === 'true') total += 1;
  if (input.checked10_1.toString() === 'true') total += 1;
  if (input.checked11_1.toString() === 'true') total += 1;
  if (input.checked12_1.toString() === 'true') total += 1;

  if (
    (input.scholarity === 0 && total < 20) ||
    (input.scholarity > 0 && input.scholarity <= 4 && total < 25) ||
    (input.scholarity > 4 && input.scholarity <= 8 && total < 27) ||
    (input.scholarity > 8 && input.scholarity <= 11 && total < 28) ||
    (input.scholarity > 11 && total < 29)
  )
    if (input.result === 'Possui um declínio cognitivo.') return true;
    else if (input.result === 'Não possui declínio cognitivo.') return true;
  return false;
}
