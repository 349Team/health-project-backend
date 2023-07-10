import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculatePercentMarchWouldPark= ({
    age,
    sex,
    marchWouldParkResult,
}:Partial<IFunctionalBattery>) => {
    if (sex === 'Masculino' && age >= 60 && age <=64 ){
        if (marchWouldParkResult >= 135){
            return 95;
        }
        if (marchWouldParkResult >= 128){
            return 90;
        }
        if (marchWouldParkResult >= 123){
            return 85;
        }
        if (marchWouldParkResult >= 119){
            return 80;
        }
        if (marchWouldParkResult >= 115){
            return 75;
        }
        if (marchWouldParkResult >= 112){
            return 70;
        }
        if (marchWouldParkResult >= 109){
            return 65;
        }
        if (marchWouldParkResult >= 106){
            return 60;
        }
        if (marchWouldParkResult >= 104){
            return 55;
        }
        if (marchWouldParkResult >= 101){
            return 50;
        }
        if (marchWouldParkResult >= 98){
            return 45;
        }
        if (marchWouldParkResult >= 96){
            return 40;
        }
        if (marchWouldParkResult >= 93){
            return 35;
        }
        if (marchWouldParkResult >= 90){
            return 30;
        }
        if (marchWouldParkResult >= 87){
            return 25;
        }
        if (marchWouldParkResult >= 83){
            return 20;
        }
        if (marchWouldParkResult >= 79){
            return 15;
        }
        if (marchWouldParkResult >= 74){
            return 10;
        }
        if (marchWouldParkResult >= 67){
            return 5;
        }
   } 
   if (sex === 'Masculino' && age >= 65 && age <=69 ){
        if (marchWouldParkResult >= 139){
            return 95;
        }
        if (marchWouldParkResult >= 130){
            return 90;
        }
        if (marchWouldParkResult >= 125){
            return 85;
        }
        if (marchWouldParkResult >= 120){
            return 80;
        }
        if (marchWouldParkResult >= 116){
            return 75;
        }
        if (marchWouldParkResult >= 113){
            return 70;
        }
        if (marchWouldParkResult >= 110){
            return 65;
        }
        if (marchWouldParkResult >= 107){
            return 60;
        }
        if (marchWouldParkResult >= 104){
            return 55;
        }
        if (marchWouldParkResult >= 101){
            return 50;
        }
        if (marchWouldParkResult >= 98){
            return 45;
        }
        if (marchWouldParkResult >= 95){
            return 40;
        }
        if (marchWouldParkResult >= 92){
            return 35;
        }
        if (marchWouldParkResult >= 89){
            return 30;
        }
        if (marchWouldParkResult >= 86){
            return 25;
        }
        if (marchWouldParkResult >= 82){
            return 20;
        }
        if (marchWouldParkResult >= 77){
            return 15;
        }
        if (marchWouldParkResult >= 72){
            return 10;
        }
        if (marchWouldParkResult >= 67){
            return 5;
        }
    } 
    if (sex === 'Masculino' && age >= 70 && age <=74 ){
        if (marchWouldParkResult >= 133){
            return 95;
        }
        if (marchWouldParkResult >= 124){
            return 90;
        }
        if (marchWouldParkResult >= 119){
            return 85;
        }
        if (marchWouldParkResult >= 114){
            return 80;
        }
        if (marchWouldParkResult >= 110){
            return 75;
        }
        if (marchWouldParkResult >= 107){
            return 70;
        }
        if (marchWouldParkResult >= 104){
            return 65;
        }
        if (marchWouldParkResult >= 101){
            return 60;
        }
        if (marchWouldParkResult >= 98){
            return 55;
        }
        if (marchWouldParkResult >= 95){
            return 50;
        }
        if (marchWouldParkResult >= 92){
            return 45;
        }
        if (marchWouldParkResult >= 89){
            return 40;
        }
        if (marchWouldParkResult >= 86){
            return 35;
        }
        if (marchWouldParkResult >= 83){
            return 30;
        }
        if (marchWouldParkResult >= 80){
            return 25;
        }
        if (marchWouldParkResult >= 76){
            return 20;
        }
        if (marchWouldParkResult >= 71){
            return 15;
        }
        if (marchWouldParkResult >= 66){
            return 10;
        }
        if (marchWouldParkResult >= 57){
            return 5;
        }
    } 
    if (sex === 'Masculino' && age >= 75 && age <=79 ){
        if (marchWouldParkResult >= 135){
            return 95;
        }
        if (marchWouldParkResult >= 126){
            return 90;
        }
        if (marchWouldParkResult >= 119){
            return 85;
        }
        if (marchWouldParkResult >= 114){
            return 80;
        }
        if (marchWouldParkResult >= 109){
            return 75;
        }
        if (marchWouldParkResult >= 105){
            return 70;
        }
        if (marchWouldParkResult >= 102){
            return 65;
        }
        if (marchWouldParkResult >= 98){
            return 60;
        }
        if (marchWouldParkResult >= 95){
            return 55;
        }
        if (marchWouldParkResult >= 91){
            return 50;
        }
        if (marchWouldParkResult >= 87){
            return 45;
        }
        if (marchWouldParkResult >= 84){
            return 40;
        }
        if (marchWouldParkResult >= 80){
            return 35;
        }
        if (marchWouldParkResult >= 77){
            return 30;
        }
        if (marchWouldParkResult >= 73){
            return 25;
        }
        if (marchWouldParkResult >= 68){
            return 20;
        }
        if (marchWouldParkResult >= 63){
            return 15;
        }
        if (marchWouldParkResult >= 56){
            return 10;
        }
        if (marchWouldParkResult >= 47){
            return 5;
        }
    } 
    if (sex === 'Masculino' && age >= 80 && age <=84 ){
        if (marchWouldParkResult >= 126){
            return 95;
        }
        if (marchWouldParkResult >= 118){
            return 90;
        }
        if (marchWouldParkResult >= 112){
            return 85;
        }
        if (marchWouldParkResult >= 107){
            return 80;
        }
        if (marchWouldParkResult >= 103){
            return 75;
        }
        if (marchWouldParkResult >= 99){
            return 70;
        }
        if (marchWouldParkResult >= 96){
            return 65;
        }
        if (marchWouldParkResult >= 93){
            return 60;
        }
        if (marchWouldParkResult >= 90){
            return 55;
        }
        if (marchWouldParkResult >= 87){
            return 50;
        }
        if (marchWouldParkResult >= 84){
            return 45;
        }
        if (marchWouldParkResult >= 81){
            return 40;
        }
        if (marchWouldParkResult >= 78){
            return 35;
        }
        if (marchWouldParkResult >= 75){
            return 30;
        }
        if (marchWouldParkResult >= 71){
            return 25;
        }
        if (marchWouldParkResult >= 67){
            return 20;
        }
        if (marchWouldParkResult >= 62){
            return 15;
        }
        if (marchWouldParkResult >= 56){
            return 10;
        }
        if (marchWouldParkResult >= 48){
            return 5;
        }
    } 
    if (sex === 'Masculino' && age >= 85 && age <=89 ){
        if (marchWouldParkResult >= 114){
            return 95;
        }
        if (marchWouldParkResult >= 106){
            return 90;
        }
        if (marchWouldParkResult >= 100){
            return 85;
        }
        if (marchWouldParkResult >= 95){
            return 80;
        }
        if (marchWouldParkResult >= 91){
            return 75;
        }
        if (marchWouldParkResult >= 87){
            return 70;
        }
        if (marchWouldParkResult >= 84){
            return 65;
        }
        if (marchWouldParkResult >= 81){
            return 60;
        }
        if (marchWouldParkResult >= 78){
            return 55;
        }
        if (marchWouldParkResult >= 75){
            return 50;
        }
        if (marchWouldParkResult >= 72){
            return 45;
        }
        if (marchWouldParkResult >= 69){
            return 40;
        }
        if (marchWouldParkResult >= 66){
            return 35;
        }
        if (marchWouldParkResult >= 63){
            return 30;
        }
        if (marchWouldParkResult >= 59){
            return 25;
        }
        if (marchWouldParkResult >= 55){
            return 20;
        }
        if (marchWouldParkResult >= 50){
            return 15;
        }
        if (marchWouldParkResult >= 44){
            return 10;
        }
        if (marchWouldParkResult >= 36){
            return 5;
        }
    } 
    if (sex === 'Masculino' && age >= 90){
        if (marchWouldParkResult >= 112){
            return 95;
        }
        if (marchWouldParkResult >= 102){
            return 90;
        }
        if (marchWouldParkResult >= 96){
            return 85;
        }
        if (marchWouldParkResult >= 91){
            return 80;
        }
        if (marchWouldParkResult >= 86){
            return 75;
        }
        if (marchWouldParkResult >= 83){
            return 70;
        }
        if (marchWouldParkResult >= 79){
            return 65;
        }
        if (marchWouldParkResult >= 76){
            return 60;
        }
        if (marchWouldParkResult >= 72){
            return 55;
        }
        if (marchWouldParkResult >= 69){
            return 50;
        }
        if (marchWouldParkResult >= 66){
            return 45;
        }
        if (marchWouldParkResult >= 62){
            return 40;
        }
        if (marchWouldParkResult >= 59){
            return 35;
        }
        if (marchWouldParkResult >= 55){
            return 30;
        }
        if (marchWouldParkResult >= 52){
            return 25;
        }
        if (marchWouldParkResult >= 47){
            return 20;
        }
        if (marchWouldParkResult >= 42){
            return 15;
        }
        if (marchWouldParkResult >= 36){
            return 10;
        }
        if (marchWouldParkResult >= 26){
            return 5;
        }
    } 
    if (sex === 'Feminino' && age >= 60 && age <=64 ){
        if (marchWouldParkResult >= 130){
            return 95;
        }
        if (marchWouldParkResult >= 122){
            return 90;
        }
        if (marchWouldParkResult >= 116){
            return 85;
        }
        if (marchWouldParkResult >= 110){
            return 80;
        }
        if (marchWouldParkResult >= 107){
            return 75;
        }
        if (marchWouldParkResult >= 103){
            return 70;
        }
        if (marchWouldParkResult >= 100){
            return 65;
        }
        if (marchWouldParkResult >= 97){
            return 60;
        }
        if (marchWouldParkResult >= 94){
            return 55;
        }
        if (marchWouldParkResult >= 91){
            return 50;
        }
        if (marchWouldParkResult >= 88){
            return 45;
        }
        if (marchWouldParkResult >= 85){
            return 40;
        }
        if (marchWouldParkResult >= 82){
            return 35;
        }
        if (marchWouldParkResult >= 79){
            return 30;
        }
        if (marchWouldParkResult >= 75){
            return 25;
        }
        if (marchWouldParkResult >= 71){
            return 20;
        }
        if (marchWouldParkResult >= 66){
            return 15;
        }
        if (marchWouldParkResult >= 60){
            return 10;
        }
        if (marchWouldParkResult >= 52){
            return 5;
        }
   } 
   if (sex === 'Feminino' && age >= 65 && age <=69 ){
        if (marchWouldParkResult >= 133){
            return 95;
        }
        if (marchWouldParkResult >= 123){
            return 90;
        }
        if (marchWouldParkResult >= 117){
            return 85;
        }
        if (marchWouldParkResult >= 112){
            return 80;
        }
        if (marchWouldParkResult >= 107){
            return 75;
        }
        if (marchWouldParkResult >= 104){
            return 70;
        }
        if (marchWouldParkResult >= 100){
            return 65;
        }
        if (marchWouldParkResult >= 96){
            return 60;
        }
        if (marchWouldParkResult >= 93){
            return 55;
        }
        if (marchWouldParkResult >= 90){
            return 50;
        }
        if (marchWouldParkResult >= 87){
            return 45;
        }
        if (marchWouldParkResult >= 84){
            return 40;
        }
        if (marchWouldParkResult >= 80){
            return 35;
        }
        if (marchWouldParkResult >= 76){
            return 30;
        }
        if (marchWouldParkResult >= 73){
            return 25;
        }
        if (marchWouldParkResult >= 68){
            return 20;
        }
        if (marchWouldParkResult >= 63){
            return 15;
        }
        if (marchWouldParkResult >= 57){
            return 10;
        }
        if (marchWouldParkResult >= 47){
            return 5;
        }
    } 
    if (sex === 'Feminino' && age >= 70 && age <=74 ){
        if (marchWouldParkResult >= 125){
            return 95;
        }
        if (marchWouldParkResult >= 116){
            return 90;
        }
        if (marchWouldParkResult >= 110){
            return 85;
        }
        if (marchWouldParkResult >= 105){
            return 80;
        }
        if (marchWouldParkResult >= 101){
            return 75;
        }
        if (marchWouldParkResult >= 97){
            return 70;
        }
        if (marchWouldParkResult >= 94){
            return 65;
        }
        if (marchWouldParkResult >= 90){
            return 60;
        }
        if (marchWouldParkResult >= 87){
            return 55;
        }
        if (marchWouldParkResult >= 84){
            return 50;
        }
        if (marchWouldParkResult >= 81){
            return 45;
        }
        if (marchWouldParkResult >= 78){
            return 40;
        }
        if (marchWouldParkResult >= 74){
            return 35;
        }
        if (marchWouldParkResult >= 71){
            return 30;
        }
        if (marchWouldParkResult >= 68){
            return 25;
        }
        if (marchWouldParkResult >= 63){
            return 20;
        }
        if (marchWouldParkResult >= 58){
            return 15;
        }
        if (marchWouldParkResult >= 52){
            return 10;
        }
        if (marchWouldParkResult >= 43){
            return 5;
        }
    } 
    if (sex === 'Feminino' && age >= 75 && age <=79 ){
        if (marchWouldParkResult >= 123){
            return 95;
        }
        if (marchWouldParkResult >= 115){
            return 90;
        }
        if (marchWouldParkResult >= 109){
            return 85;
        }
        if (marchWouldParkResult >= 104){
            return 80;
        }
        if (marchWouldParkResult >= 100){
            return 75;
        }
        if (marchWouldParkResult >= 96){
            return 70;
        }
        if (marchWouldParkResult >= 93){
            return 65;
        }
        if (marchWouldParkResult >= 90){
            return 60;
        }
        if (marchWouldParkResult >= 87){
            return 55;
        }
        if (marchWouldParkResult >= 84){
            return 50;
        }
        if (marchWouldParkResult >= 81){
            return 45;
        }
        if (marchWouldParkResult >= 78){
            return 40;
        }
        if (marchWouldParkResult >= 75){
            return 35;
        }
        if (marchWouldParkResult >= 72){
            return 30;
        }
        if (marchWouldParkResult >= 68){
            return 25;
        }
        if (marchWouldParkResult >= 64){
            return 20;
        }
        if (marchWouldParkResult >= 59){
            return 15;
        }
        if (marchWouldParkResult >= 53){
            return 10;
        }
        if (marchWouldParkResult >= 45){
            return 5;
        }
    } 
    if (sex === 'Feminino' && age >= 80 && age <=84 ){
        if (marchWouldParkResult >= 113){
            return 95;
        }
        if (marchWouldParkResult >= 104){
            return 90;
        }
        if (marchWouldParkResult >= 99){
            return 85;
        }
        if (marchWouldParkResult >= 94){
            return 80;
        }
        if (marchWouldParkResult >= 90){
            return 75;
        }
        if (marchWouldParkResult >= 87){
            return 70;
        }
        if (marchWouldParkResult >= 84){
            return 65;
        }
        if (marchWouldParkResult >= 81){
            return 60;
        }
        if (marchWouldParkResult >= 78){
            return 55;
        }
        if (marchWouldParkResult >= 75){
            return 50;
        }
        if (marchWouldParkResult >= 72){
            return 45;
        }
        if (marchWouldParkResult >= 69){
            return 40;
        }
        if (marchWouldParkResult >= 66){
            return 35;
        }
        if (marchWouldParkResult >= 63){
            return 30;
        }
        if (marchWouldParkResult >= 60){
            return 25;
        }
        if (marchWouldParkResult >= 56){
            return 20;
        }
        if (marchWouldParkResult >= 51){
            return 15;
        }
        if (marchWouldParkResult >= 46){
            return 10;
        }
        if (marchWouldParkResult >= 37){
            return 5;
        }
    } 
    if (sex === 'Feminino' && age >= 84 && age <=89 ){
        if (marchWouldParkResult >= 106){
            return 95;
        }
        if (marchWouldParkResult >= 98){
            return 90;
        }
        if (marchWouldParkResult >= 93){
            return 85;
        }
        if (marchWouldParkResult >= 88){
            return 80;
        }
        if (marchWouldParkResult >= 85){
            return 75;
        }
        if (marchWouldParkResult >= 81){
            return 70;
        }
        if (marchWouldParkResult >= 79){
            return 65;
        }
        if (marchWouldParkResult >= 76){
            return 60;
        }
        if (marchWouldParkResult >= 73){
            return 55;
        }
        if (marchWouldParkResult >= 70){
            return 50;
        }
        if (marchWouldParkResult >= 67){
            return 45;
        }
        if (marchWouldParkResult >= 64){
            return 40;
        }
        if (marchWouldParkResult >= 61){
            return 35;
        }
        if (marchWouldParkResult >= 59){
            return 30;
        }
        if (marchWouldParkResult >= 55){
            return 25;
        }
        if (marchWouldParkResult >= 52){
            return 20;
        }
        if (marchWouldParkResult >= 47){
            return 15;
        }
        if (marchWouldParkResult >= 42){
            return 10;
        }
        if (marchWouldParkResult >= 29){
            return 5;
        }
    }
    if (sex === 'Feminino' && age >= 90){
        if (marchWouldParkResult >= 92){
            return 95;
        }
        if (marchWouldParkResult >= 85){
            return 90;
        }
        if (marchWouldParkResult >= 80){
            return 85;
        }
        if (marchWouldParkResult >= 76){
            return 80;
        }
        if (marchWouldParkResult >= 72){
            return 75;
        }
        if (marchWouldParkResult >= 69){
            return 70;
        }
        if (marchWouldParkResult >= 66){
            return 65;
        }
        if (marchWouldParkResult >= 63){
            return 60;
        }
        if (marchWouldParkResult >= 61){
            return 55;
        }
        if (marchWouldParkResult >= 58){
            return 50;
        }
        if (marchWouldParkResult >= 55){
            return 45;
        }
        if (marchWouldParkResult >= 53){
            return 40;
        }
        if (marchWouldParkResult >= 50){
            return 35;
        }
        if (marchWouldParkResult >= 47){
            return 30;
        }
        if (marchWouldParkResult >= 44){
            return 25;
        }
        if (marchWouldParkResult >= 40){
            return 20;
        }
        if (marchWouldParkResult >= 36){
            return 15;
        }
        if (marchWouldParkResult >= 31){
            return 10;
        }
        if (marchWouldParkResult >= 24){
            return 5;
        }
    }
}