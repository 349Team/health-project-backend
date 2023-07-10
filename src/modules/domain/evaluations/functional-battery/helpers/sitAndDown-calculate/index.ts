import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculatePercentSitAndDown = ({
    age,
    sex,
    sitAndDownResult,
}:Partial<IFunctionalBattery>) => {
   if (sex === 'Masculino' && age >= 60 && age <=64 ){
        if (sitAndDownResult >= 23){
            return 95;
        }
        if (sitAndDownResult >= 22){
            return 90;
        }
        if (sitAndDownResult >= 21){
            return 85;
        }
        if (sitAndDownResult >= 20){
            return 80;
        }
        if (sitAndDownResult >= 19){
            return 70;
        }
        if (sitAndDownResult >= 18){
            return 65;
        }
        if (sitAndDownResult >= 17){
            return 60;
        }
        if (sitAndDownResult >= 16){
            return 45;
        }
        if (sitAndDownResult >= 15){
            return 35;
        }
        if (sitAndDownResult >= 14){
            return 25;
        }
        if (sitAndDownResult >= 13){
            return 20;
        }
        if (sitAndDownResult >= 12){
            return 15;
        }
        if (sitAndDownResult >= 11){
            return 10;
        }
        if (sitAndDownResult >= 9){
            return 5;
        }
   } 
   if (sex === 'Masculino' && age >= 65 && age <=69 ){
    if (sitAndDownResult >= 23){
        return 95;
    }
    if (sitAndDownResult >= 21){
        return 90;
    }
    if (sitAndDownResult >= 20){
        return 85;
    }
    if (sitAndDownResult >= 19){
        return 80;
    }
    if (sitAndDownResult >= 18){
        return 70;
    }
    if (sitAndDownResult >= 17){
        return 65;
    }
    if (sitAndDownResult >= 16){
        return 55;
    }
    if (sitAndDownResult >= 15){
        return 50;
    }
    if (sitAndDownResult >= 14){
        return 40;
    }
    if (sitAndDownResult >= 13){
        return 30;
    }
    if (sitAndDownResult >= 12){
        return 25;
    }
    if (sitAndDownResult >= 11){
        return 15;
    }
    if (sitAndDownResult >= 9){
        return 10;
    }
    if (sitAndDownResult >= 8){
        return 5;
    }
    } 
    if (sex === 'Masculino' && age >= 70 && age <=74 ){
        if (sitAndDownResult >= 21){
            return 95;
        }
        if (sitAndDownResult >= 20){
            return 90;
        }
        if (sitAndDownResult >= 19){
            return 85;
        }
        if (sitAndDownResult >= 18){
            return 80;
        }
        if (sitAndDownResult >= 17){
            return 70;
        }
        if (sitAndDownResult >= 16){
            return 60;
        }
        if (sitAndDownResult >= 15){
            return 55;
        }
        if (sitAndDownResult >= 14){
            return 45;
        }
        if (sitAndDownResult >= 13){
            return 35;
        }
        if (sitAndDownResult >= 12){
            return 25;
        }
        if (sitAndDownResult >= 11){
            return 20;
        }
        if (sitAndDownResult >= 10){
            return 15;
        }
        if (sitAndDownResult >= 9){
            return 10;
        }
        if (sitAndDownResult >= 8){
            return 5;
        }
    }
    if (sex === 'Masculino' && age >= 75 && age <=79 ){
        if (sitAndDownResult >= 21){
            return 95;
        }
        if (sitAndDownResult >= 20){
            return 90;
        }
        if (sitAndDownResult >= 18){
            return 80;
        }
        if (sitAndDownResult >= 17){
            return 70;
        }
        if (sitAndDownResult >= 16){
            return 70;
        }
        if (sitAndDownResult >= 15){
            return 55;
        }
        if (sitAndDownResult >= 14){
            return 50;
        }
        if (sitAndDownResult >= 13){
            return 40;
        }
        if (sitAndDownResult >= 12){
            return 30;
        }
        if (sitAndDownResult >= 11){
            return 25;
        }
        if (sitAndDownResult >= 10){
            return 15;
        }
        if (sitAndDownResult >= 8){
            return 10;
        }
        if (sitAndDownResult >= 7){
            return 5;
        }
    }
    if (sex === 'Masculino' && age >= 80 && age <=84 ){
        if (sitAndDownResult >= 19){
            return 95;
        }
        if (sitAndDownResult >= 17){
            return 90;
        }
        if (sitAndDownResult >= 16){
            return 80;
        }
        if (sitAndDownResult >= 15){
            return 75;
        }
        if (sitAndDownResult >= 14){
            return 65;
        }
        if (sitAndDownResult >= 13){
            return 55;
        }
        if (sitAndDownResult >= 12){
            return 45;
        }
        if (sitAndDownResult >= 11){
            return 35;
        }
        if (sitAndDownResult >= 10){
            return 25;
        }
        if (sitAndDownResult >= 9){
            return 20;
        }
        if (sitAndDownResult >= 8){
            return 15;
        }
        if (sitAndDownResult >= 7){
            return 10;
        }
        if (sitAndDownResult >= 6){
            return 5;
        }
    }
    if (sex === 'Masculino' && age >= 85 && age <= 89 ){
        if (sitAndDownResult >= 19){
            return 95;
        }
        if (sitAndDownResult >= 17){
            return 90;
        }
        if (sitAndDownResult >= 16){
            return 85;
        }
        if (sitAndDownResult >= 15){
            return 80;
        }
        if (sitAndDownResult >= 14){
            return 75;
        }
        if (sitAndDownResult >= 13){
            return 65;
        }
        if (sitAndDownResult >= 12){
            return 55;
        }
        if (sitAndDownResult >= 11){
            return 45;
        }
        if (sitAndDownResult >= 10){
            return 40;
        }
        if (sitAndDownResult >= 9){
            return 30;
        }
        if (sitAndDownResult >= 8){
            return 25;
        }
        if (sitAndDownResult >= 7){
            return 20;
        }
        if (sitAndDownResult >= 6){
            return 15;
        }
        if (sitAndDownResult >= 5){
            return 10;
        }
        if (sitAndDownResult >= 4){
            return 5;
        }
    }
    if (sex === 'Masculino' && age >= 90){
        if (sitAndDownResult >= 16){
            return 95;
        }
        if (sitAndDownResult >= 15){
            return 90;
        }
        if (sitAndDownResult >= 14){
            return 85;
        }
        if (sitAndDownResult >= 13){
            return 80;
        }
        if (sitAndDownResult >= 12){
            return 70;
        }
        if (sitAndDownResult >= 11){
            return 60;
        }
        if (sitAndDownResult >= 10){
            return 50;
        }
        if (sitAndDownResult >= 9){
            return 40;
        }
        if (sitAndDownResult >= 8){
            return 30;
        }
        if (sitAndDownResult >= 7){
            return 20;
        }
        if (sitAndDownResult >= 6){
            return 15;
        }
        if (sitAndDownResult >= 5){
            return 10;
        }
        if (sitAndDownResult >= 3){
            return 5;
        }
    }
    if (sex === 'Feminino' && age >= 60 && age <=64 ){
        if (sitAndDownResult >= 21){
            return 95;
        }
        if (sitAndDownResult >= 20){
            return 90;
        }
        if (sitAndDownResult >= 19){
            return 85;
        }
        if (sitAndDownResult >= 18){
            return 80;
        }
        if (sitAndDownResult >= 17){
            return 70;
        }
        if (sitAndDownResult >= 16){
            return 60;
        }
        if (sitAndDownResult >= 15){
            return 50;
        }
        if (sitAndDownResult >= 14){
            return 40;
        }
        if (sitAndDownResult >= 13){
            return 35;
        }
        if (sitAndDownResult >= 12){
            return 25;
        }
        if (sitAndDownResult >= 11){
            return 20;
        }
        if (sitAndDownResult >= 10){
            return 15;
        }
        if (sitAndDownResult >= 9){
            return 10;
        }
        if (sitAndDownResult >= 8){
            return 5;
        }
    }
    if (sex === 'Feminino' && age >= 65 && age <=69 ){
        if (sitAndDownResult >= 19){
            return 95;
        }
        if (sitAndDownResult >= 18){
            return 90;
        }
        if (sitAndDownResult >= 17){
            return 85;
        }
        if (sitAndDownResult >= 16){
            return 75;
        }
        if (sitAndDownResult >= 15){
            return 65;
        }
        if (sitAndDownResult >= 14){
            return 50;
        }
        if (sitAndDownResult >= 13){
            return 40;
        }
        if (sitAndDownResult >= 12){
            return 30;
        }
        if (sitAndDownResult >= 11){
            return 20;
        }
        if (sitAndDownResult >= 10){
            return 15;
        }
        if (sitAndDownResult >= 9){
            return 10;
        }
        if (sitAndDownResult >= 8){
            return 5;
        }
    }
    if (sex === 'Feminino' && age >= 70 && age <=74 ){
        if (sitAndDownResult >= 19){
            return 95;
        }
        if (sitAndDownResult >= 18){
            return 90;
        }
        if (sitAndDownResult >= 17){
            return 85;
        }
        if (sitAndDownResult >= 16){
            return 80;
        }
        if (sitAndDownResult >= 15){
            return 70;
        }
        if (sitAndDownResult >= 14){
            return 60;
        }
        if (sitAndDownResult >= 13){
            return 50;
        }
        if (sitAndDownResult >= 12){
            return 40;
        }
        if (sitAndDownResult >= 11){
            return 30;
        }
        if (sitAndDownResult >= 10){
            return 20;
        }
        if (sitAndDownResult >= 9){
            return 15;
        }
        if (sitAndDownResult >= 8){
            return 10;
        }
        if (sitAndDownResult >= 7){
            return 5;
        }
    }
    if (sex === 'Feminino' && age >=75 && age <=79 ){
        if (sitAndDownResult >= 19){
            return 95;
        }
        if (sitAndDownResult >= 17){
            return 90;
        }
        if (sitAndDownResult >= 16){
            return 80;
        }
        if (sitAndDownResult >= 15){
            return 75;
        }
        if (sitAndDownResult >= 14){
            return 65;
        }
        if (sitAndDownResult >= 13){
            return 55;
        }
        if (sitAndDownResult >= 12){
            return 40;
        }
        if (sitAndDownResult >= 11){
            return 30;
        }
        if (sitAndDownResult >= 10){
            return 25;
        }
        if (sitAndDownResult >= 9){
            return 15;
        }
        if (sitAndDownResult >= 8){
            return 10;
        }
        if (sitAndDownResult >= 6){
            return 5;
        }
    }
    if (sex === 'Feminino' && age >=80 && age <=84 ){
        if (sitAndDownResult >= 18){
            return 95;
        }
        if (sitAndDownResult >= 17){
            return 90;
        }
        if (sitAndDownResult >= 16){
            return 85;
        }
        if (sitAndDownResult >= 15){
            return 80;
        }
        if (sitAndDownResult >= 14){
            return 75;
        }
        if (sitAndDownResult >= 13){
            return 65;
        }
        if (sitAndDownResult >= 12){
            return 55;
        }
        if (sitAndDownResult >= 11){
            return 45;
        }
        if (sitAndDownResult >= 10){
            return 35;
        }
        if (sitAndDownResult >= 9){
            return 25;
        }
        if (sitAndDownResult >= 8){
            return 20;
        }
        if (sitAndDownResult >= 7){
            return 15;
        }
        if (sitAndDownResult >= 6){
            return 10;
        } 
        if (sitAndDownResult >= 4){
            return 5;
        }
    }
    if (sex === 'Feminino' && age >=85 && age <=89 ){
        if (sitAndDownResult >= 17){
            return 95;
        }
        if (sitAndDownResult >= 15){
            return 90;
        }
        if (sitAndDownResult >= 14){
            return 80;
        }
        if (sitAndDownResult >= 13){
            return 75;
        }
        if (sitAndDownResult >= 12){
            return 65;
        }
        if (sitAndDownResult >= 11){
            return 55;
        }
        if (sitAndDownResult >= 10){
            return 45;
        }
        if (sitAndDownResult >= 9){
            return 35;
        }
        if (sitAndDownResult >= 8){
            return 25;
        }
        if (sitAndDownResult >= 7){
            return 20;
        }
        if (sitAndDownResult >= 6){
            return 15;
        }
        if (sitAndDownResult >= 5){
            return 10;
        } 
        if (sitAndDownResult >= 4){
            return 5;
        }
    }
    if (sex === 'Feminino' && age >=90){
        if (sitAndDownResult >= 16){
            return 95;
        }
        if (sitAndDownResult >= 15){
            return 90;
        }
        if (sitAndDownResult >= 13){
            return 85;
        }
        if (sitAndDownResult >= 12){
            return 80;
        }
        if (sitAndDownResult >= 11){
            return 70;
        }
        if (sitAndDownResult >= 10){
            return 65;
        }
        if (sitAndDownResult >= 9){
            return 55;
        }
        if (sitAndDownResult >= 8){
            return 50;
        }
        if (sitAndDownResult >= 7){
            return 40;
        }
        if (sitAndDownResult >= 6){
            return 35;
        }
        if (sitAndDownResult >= 5){
            return 30;
        }
        if (sitAndDownResult >= 4){
            return 20;
        } 
        if (sitAndDownResult >= 3){
            return 15;
        }
        if (sitAndDownResult >= 1){
            return 10;
        }
        if (sitAndDownResult >= 0){
            return 5;
        }
    }
}