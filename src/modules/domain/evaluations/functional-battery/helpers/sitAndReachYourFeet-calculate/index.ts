import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculatePercentSitAndReachYourFeet = ({
    age,
    sex,
    sitAndReachYourFeetResult,
}:Partial<IFunctionalBattery>) => {
    if (sex === 'Masculino' && age >= 60 && age <=64 ){
        if (sitAndReachYourFeetResult >= 8.5){
            return 95;
        }
        if (sitAndReachYourFeetResult >= 6.7){
            return 90;
        }
        if (sitAndReachYourFeetResult >= 5.6){
            return 85;
        }
        if (sitAndReachYourFeetResult >= 4.6){
            return 80;
        }
        if (sitAndReachYourFeetResult >= 3.8){
            return 75;
        }
        if (sitAndReachYourFeetResult >= 3.1){
            return 70;
        }
        if (sitAndReachYourFeetResult >= 2.5){
            return 65;
        }
        if (sitAndReachYourFeetResult >= 1.8){
            return 60;
        }
        if (sitAndReachYourFeetResult >= 1.2){
            return 55;
        }
        if (sitAndReachYourFeetResult >= 0.6){
            return 50;
        }
        if (sitAndReachYourFeetResult >= 0.0){
            return 45;
        }
        if (sitAndReachYourFeetResult >= -0.6){
            return 40;
        }
        if (sitAndReachYourFeetResult >= -1.3){
            return 35;
        }
        if (sitAndReachYourFeetResult >= -1.9){
            return 30;
        }
        if (sitAndReachYourFeetResult >= -2.6){
            return 25;
        }
        if (sitAndReachYourFeetResult >= -3.4){
            return 20;
        }
        if (sitAndReachYourFeetResult >= -4.4){
            return 15;
        }
        if (sitAndReachYourFeetResult >= -5.5){
            return 10;
        }
        if (sitAndReachYourFeetResult >= -7.3){
            return 5;
        }
   } 
   if (sex === 'Masculino' && age >= 65 && age <=69 ){
        if (sitAndReachYourFeetResult >= 7.5){
            return 95;
        }
        if (sitAndReachYourFeetResult >= 5.9){
            return 90;
        }
        if (sitAndReachYourFeetResult >= 4.8){
            return 85;
        }
        if (sitAndReachYourFeetResult >= 3.9){
            return 80;
        }
        if (sitAndReachYourFeetResult >= 3.1){
            return 75;
        }
        if (sitAndReachYourFeetResult >= 2.4){
            return 70;
        }
        if (sitAndReachYourFeetResult >= 1.8){
            return 65;
        }
        if (sitAndReachYourFeetResult >= 1.1){
            return 60;
        }
        if (sitAndReachYourFeetResult >= 0.6){
            return 55;
        }
        if (sitAndReachYourFeetResult >= 0.0){
            return 50;
        }
        if (sitAndReachYourFeetResult >= -0.6){
            return 45;
        }
        if (sitAndReachYourFeetResult >= -1.1){
            return 40;
        }
        if (sitAndReachYourFeetResult >= -1.8){
            return 35;
        }
        if (sitAndReachYourFeetResult >= -2.4){
            return 30;
        }
        if (sitAndReachYourFeetResult >= -3.1){
            return 25;
        }
        if (sitAndReachYourFeetResult >= -3.9){
            return 20;
        }
        if (sitAndReachYourFeetResult >= -4.8){
            return 15;
        }
        if (sitAndReachYourFeetResult >= -5.9){
            return 10;
        }
        if (sitAndReachYourFeetResult >= -7.5){
            return 5;
        }
    }  
    if (sex === 'Masculino' && age >= 70 && age <=74 ){
        if (sitAndReachYourFeetResult >= 7.5){
            return 95;
        }
        if (sitAndReachYourFeetResult >= 5.8){
            return 90;
        }
        if (sitAndReachYourFeetResult >= 4.7){
            return 85;
        }
        if (sitAndReachYourFeetResult >= 3.8){
            return 80;
        }
        if (sitAndReachYourFeetResult >= 3.0){
            return 75;
        }
        if (sitAndReachYourFeetResult >= 2.4){
            return 70;
        }
        if (sitAndReachYourFeetResult >= 1.8){
            return 65;
        }
        if (sitAndReachYourFeetResult >= 1.1){
            return 60;
        }
        if (sitAndReachYourFeetResult >= 0.6){
            return 55;
        }
        if (sitAndReachYourFeetResult >= 0.0){
            return 50;
        }
        if (sitAndReachYourFeetResult >= -0.6){
            return 45;
        }
        if (sitAndReachYourFeetResult >= -1.2){
            return 40;
        }
        if (sitAndReachYourFeetResult >= -1.8){
            return 35;
        }
        if (sitAndReachYourFeetResult >= -2.4){
            return 30;
        }
        if (sitAndReachYourFeetResult >= -3.1){
            return 25;
        }
        if (sitAndReachYourFeetResult >= -3.9){
            return 20;
        }
        if (sitAndReachYourFeetResult >= -4.8){
            return 15;
        }
        if (sitAndReachYourFeetResult >= -5.9){
            return 10;
        }
        if (sitAndReachYourFeetResult >= -7.6){
            return 5;
        }
    }  
    if (sex === 'Masculino' && age >= 75 && age <=79 ){
        if (sitAndReachYourFeetResult >= 6.6){
            return 95;
        }
        if (sitAndReachYourFeetResult >= 4.9){
            return 90;
        }
        if (sitAndReachYourFeetResult >= 3.8){
            return 85;
        }
        if (sitAndReachYourFeetResult >= 2.8){
            return 80;
        }
        if (sitAndReachYourFeetResult >= 2.0){
            return 75;
        }
        if (sitAndReachYourFeetResult >= 1.3){
            return 70;
        }
        if (sitAndReachYourFeetResult >= 0.7){
            return 65;
        }
        if (sitAndReachYourFeetResult >= 0.1){
            return 60;
        }
        if (sitAndReachYourFeetResult >= -0.5){
            return 55;
        }
        if (sitAndReachYourFeetResult >= -1.1){
            return 50;
        }
        if (sitAndReachYourFeetResult >= -1.7){
            return 45;
        }
        if (sitAndReachYourFeetResult >= -2.3){
            return 40;
        }
        if (sitAndReachYourFeetResult >= -2.9){
            return 35;
        }
        if (sitAndReachYourFeetResult >= -3.5){
            return 30;
        }
        if (sitAndReachYourFeetResult >= -4.2){
            return 25;
        }
        if (sitAndReachYourFeetResult >= -5.0){
            return 20;
        }
        if (sitAndReachYourFeetResult >= -6.0){
            return 15;
        }
        if (sitAndReachYourFeetResult >= -7.1){
            return 10;
        }
        if (sitAndReachYourFeetResult >= -8.8){
            return 5;
        }
    }  
    if (sex === 'Masculino' && age >= 80 && age <=84 ){
        if (sitAndReachYourFeetResult >= 6.2){
            return 95;
        }
        if (sitAndReachYourFeetResult >= 4.4){
            return 90;
        }
        if (sitAndReachYourFeetResult >= 3.2){
            return 85;
        }
        if (sitAndReachYourFeetResult >= 2.2){
            return 80;
        }
        if (sitAndReachYourFeetResult >= 1.4){
            return 75;
        }
        if (sitAndReachYourFeetResult >= 0.6){
            return 70;
        }
        if (sitAndReachYourFeetResult >= 0.0){
            return 65;
        }
        if (sitAndReachYourFeetResult >= -0.8){
            return 60;
        }
        if (sitAndReachYourFeetResult >= -1.4){
            return 55;
        }
        if (sitAndReachYourFeetResult >= -2.0){
            return 50;
        }
        if (sitAndReachYourFeetResult >= -2.6){
            return 45;
        }
        if (sitAndReachYourFeetResult >= -3.2){
            return 40;
        }
        if (sitAndReachYourFeetResult >= -4.0){
            return 35;
        }
        if (sitAndReachYourFeetResult >= -4.6){
            return 30;
        }
        if (sitAndReachYourFeetResult >= -5.3){
            return 25;
        }
        if (sitAndReachYourFeetResult >= -6.2){
            return 20;
        }
        if (sitAndReachYourFeetResult >= -7.2){
            return 15;
        }
        if (sitAndReachYourFeetResult >= -8.4){
            return 10;
        }
        if (sitAndReachYourFeetResult >= -10.2){
            return 5;
        }
    }  
    if (sex === 'Masculino' && age >= 85 && age <=89 ){
        if (sitAndReachYourFeetResult >= 4.5){
            return 95;
        }
        if (sitAndReachYourFeetResult >= 3.0){
            return 90;
        }
        if (sitAndReachYourFeetResult >= 2.0){
            return 85;
        }
        if (sitAndReachYourFeetResult >= 1.1){
            return 80;
        }
        if (sitAndReachYourFeetResult >= 0.4){
            return 75;
        }
        if (sitAndReachYourFeetResult >= -0.2){
            return 70;
        }
        if (sitAndReachYourFeetResult >= -0.8){
            return 65;
        }
        if (sitAndReachYourFeetResult >= -1.3){
            return 60;
        }
        if (sitAndReachYourFeetResult >= -1.9){
            return 55;
        }
        if (sitAndReachYourFeetResult >= -2.4){
            return 50;
        }
        if (sitAndReachYourFeetResult >= -2.9){
            return 45;
        }
        if (sitAndReachYourFeetResult >= -3.5){
            return 40;
        }
        if (sitAndReachYourFeetResult >= -4.0){
            return 35;
        }
        if (sitAndReachYourFeetResult >= -4.6){
            return 30;
        }
        if (sitAndReachYourFeetResult >= -5.3){
            return 25;
        }
        if (sitAndReachYourFeetResult >= -5.9){
            return 20;
        }
        if (sitAndReachYourFeetResult >= -6.8){
            return 15;
        }
        if (sitAndReachYourFeetResult >= -7.8){
            return 10;
        }
        if (sitAndReachYourFeetResult >= -9.3){
            return 5;
        }
    }  
    if (sex === 'Masculino' && age >= 90 ){
        if (sitAndReachYourFeetResult >= 3.5){
            return 95;
        }
        if (sitAndReachYourFeetResult >= 1.9){
            return 90;
        }
        if (sitAndReachYourFeetResult >= 0.9){
            return 85;
        }
        if (sitAndReachYourFeetResult >= 0.0){
            return 80;
        }
        if (sitAndReachYourFeetResult >= -0.7){
            return 75;
        }
        if (sitAndReachYourFeetResult >= -1.4){
            return 70;
        }
        if (sitAndReachYourFeetResult >= -1.9){
            return 65;
        }
        if (sitAndReachYourFeetResult >= -2.5){
            return 60;
        }
        if (sitAndReachYourFeetResult >= -3.0){
            return 55;
        }
        if (sitAndReachYourFeetResult >= -3.6){
            return 50;
        }
        if (sitAndReachYourFeetResult >= -4.2){
            return 45;
        }
        if (sitAndReachYourFeetResult >= -4.7){
            return 40;
        }
        if (sitAndReachYourFeetResult >= -5.3){
            return 35;
        }
        if (sitAndReachYourFeetResult >= -5.8){
            return 30;
        }
        if (sitAndReachYourFeetResult >= -6.5){
            return 25;
        }
        if (sitAndReachYourFeetResult >= -7.2){
            return 20;
        }
        if (sitAndReachYourFeetResult >= -8.1){
            return 15;
        }
        if (sitAndReachYourFeetResult >= -9.1){
            return 10;
        }
        if (sitAndReachYourFeetResult >= -10.7){
            return 5;
        }
    }  
    if (sex === 'Feminino' && age >= 60 && age <=64 ){
        if (sitAndReachYourFeetResult >= 8.7){
            return 95;
        }
        if (sitAndReachYourFeetResult >= 7.2){
            return 90;
        }
        if (sitAndReachYourFeetResult >= 6.3){
            return 85;
        }
        if (sitAndReachYourFeetResult >= 5.5){
            return 80;
        }
        if (sitAndReachYourFeetResult >= 4.8){
            return 75;
        }
        if (sitAndReachYourFeetResult >= 4.2){
            return 70;
        }
        if (sitAndReachYourFeetResult >= 3.7){
            return 65;
        }
        if (sitAndReachYourFeetResult >= 3.1){
            return 60;
        }
        if (sitAndReachYourFeetResult >= 2.6){
            return 55;
        }
        if (sitAndReachYourFeetResult >= 2.1){
            return 50;
        }
        if (sitAndReachYourFeetResult >= 1.6){
            return 45;
        }
        if (sitAndReachYourFeetResult >= 1.1){
            return 40;
        }
        if (sitAndReachYourFeetResult >= 0.5){
            return 35;
        }
        if (sitAndReachYourFeetResult >= 0.0){
            return 30;
        }
        if (sitAndReachYourFeetResult >= -0.6){
            return 25;
        }
        if (sitAndReachYourFeetResult >= -1.3){
            return 20;
        }
        if (sitAndReachYourFeetResult >= -2.1){
            return 15;
        }
        if (sitAndReachYourFeetResult >= -3.0){
            return 10;
        }
        if (sitAndReachYourFeetResult >= -4.0){
            return 5;
        }
   } 
   if (sex === 'Feminino' && age >= 65 && age <=69 ){
        if (sitAndReachYourFeetResult >= 7.9){
            return 95;
        }
        if (sitAndReachYourFeetResult >= 6.6){
            return 90;
        }
        if (sitAndReachYourFeetResult >= 5.7){
            return 85;
        }
        if (sitAndReachYourFeetResult >= 5.0){
            return 80;
        }
        if (sitAndReachYourFeetResult >= 4.4){
            return 75;
        }
        if (sitAndReachYourFeetResult >= 3.9){
            return 70;
        }
        if (sitAndReachYourFeetResult >= 3.4){
            return 65;
        }
        if (sitAndReachYourFeetResult >= 2.9){
            return 60;
        }
        if (sitAndReachYourFeetResult >= 2.5){
            return 55;
        }
        if (sitAndReachYourFeetResult >= 2.0){
            return 50;
        }
        if (sitAndReachYourFeetResult >= 1.5){
            return 45;
        }
        if (sitAndReachYourFeetResult >= 1.1){
            return 40;
        }
        if (sitAndReachYourFeetResult >= 0.6){
            return 35;
        }
        if (sitAndReachYourFeetResult >= 0.1){
            return 30;
        }
        if (sitAndReachYourFeetResult >= -0.4){
            return 25;
        }
        if (sitAndReachYourFeetResult >= -1.0){
            return 20;
        }
        if (sitAndReachYourFeetResult >= -1.7){
            return 15;
        }
        if (sitAndReachYourFeetResult >= -2.6){
            return 10;
        }
        if (sitAndReachYourFeetResult >= -3.9){
            return 5;
        }
    } 
    if (sex === 'Feminino' && age >= 70 && age <=74 ){
        if (sitAndReachYourFeetResult >= 7.5){
            return 95;
        }
        if (sitAndReachYourFeetResult >= 6.1){
            return 90;
        }
        if (sitAndReachYourFeetResult >= 5.2){
            return 85;
        }
        if (sitAndReachYourFeetResult >= 4.5){
            return 80;
        }
        if (sitAndReachYourFeetResult >= 3.9){
            return 75;
        }
        if (sitAndReachYourFeetResult >= 3.3){
            return 70;
        }
        if (sitAndReachYourFeetResult >= 2.8){
            return 65;
        }
        if (sitAndReachYourFeetResult >= 2.3){
            return 60;
        }
        if (sitAndReachYourFeetResult >= 1.9){
            return 55;
        }
        if (sitAndReachYourFeetResult >= 1.4){
            return 50;
        }
        if (sitAndReachYourFeetResult >= 0.9){
            return 45;
        }
        if (sitAndReachYourFeetResult >= 0.5){
            return 40;
        }
        if (sitAndReachYourFeetResult >= 0.0){
            return 35;
        }
        if (sitAndReachYourFeetResult >= -0.5){
            return 30;
        }
        if (sitAndReachYourFeetResult >= -1.1){
            return 25;
        }
        if (sitAndReachYourFeetResult >= -1.7){
            return 20;
        }
        if (sitAndReachYourFeetResult >= -2.4){
            return 15;
        }
        if (sitAndReachYourFeetResult >= -3.3){
            return 10;
        }
        if (sitAndReachYourFeetResult >= -4.7){
            return 5;
        }
    } 
    if (sex === 'Feminino' && age >= 75 && age <=79 ){
        if (sitAndReachYourFeetResult >= 7.4){
            return 95;
        }
        if (sitAndReachYourFeetResult >= 6.1){
            return 90;
        }
        if (sitAndReachYourFeetResult >= 5.2){
            return 85;
        }
        if (sitAndReachYourFeetResult >= 4.4){
            return 80;
        }
        if (sitAndReachYourFeetResult >= 3.7){
            return 75;
        }
        if (sitAndReachYourFeetResult >= 3.2){
            return 70;
        }
        if (sitAndReachYourFeetResult >= 2.7){
            return 65;
        }
        if (sitAndReachYourFeetResult >= 2.1){
            return 60;
        }
        if (sitAndReachYourFeetResult >= 1.7){
            return 55;
        }
        if (sitAndReachYourFeetResult >= 1.2){
            return 50;
        }
        if (sitAndReachYourFeetResult >= 0.7){
            return 45;
        }
        if (sitAndReachYourFeetResult >= 0.2){
            return 40;
        }
        if (sitAndReachYourFeetResult >= -0.3){
            return 35;
        }
        if (sitAndReachYourFeetResult >= -0.8){
            return 30;
        }
        if (sitAndReachYourFeetResult >= -1.3){
            return 25;
        }
        if (sitAndReachYourFeetResult >= -2.0){
            return 20;
        }
        if (sitAndReachYourFeetResult >= -2.8){
            return 15;
        }
        if (sitAndReachYourFeetResult >= -3.7){
            return 10;
        }
        if (sitAndReachYourFeetResult >= -5.0){
            return 5;
        }
    } 
    if (sex === 'Feminino' && age >= 80 && age <=84 ){
        if (sitAndReachYourFeetResult >= 6.6){
            return 95;
        }
        if (sitAndReachYourFeetResult >= 5.2){
            return 90;
        }
        if (sitAndReachYourFeetResult >= 4.3){
            return 85;
        }
        if (sitAndReachYourFeetResult >= 3.6){
            return 80;
        }
        if (sitAndReachYourFeetResult >= 3.0){
            return 75;
        }
        if (sitAndReachYourFeetResult >= 2.4){
            return 70;
        }
        if (sitAndReachYourFeetResult >= 1.9){
            return 65;
        }
        if (sitAndReachYourFeetResult >= 1.4){
            return 60;
        }
        if (sitAndReachYourFeetResult >= 1.0){
            return 55;
        }
        if (sitAndReachYourFeetResult >= 0.5){
            return 50;
        }
        if (sitAndReachYourFeetResult >= 0.0){
            return 45;
        }
        if (sitAndReachYourFeetResult >= -0.4){
            return 40;
        }
        if (sitAndReachYourFeetResult >= -0.9){
            return 35;
        }
        if (sitAndReachYourFeetResult >= -1.4){
            return 30;
        }
        if (sitAndReachYourFeetResult >= -2.0){
            return 25;
        }
        if (sitAndReachYourFeetResult >= -2.6){
            return 20;
        }
        if (sitAndReachYourFeetResult >= -3.3){
            return 15;
        }
        if (sitAndReachYourFeetResult >= -4.2){
            return 10;
        }
        if (sitAndReachYourFeetResult >= -5.0){
            return 5;
        }
    } 
    if (sex === 'Feminino' && age >= 85 && age <=89 ){
        if (sitAndReachYourFeetResult >= 6.0){
            return 95;
        }
        if (sitAndReachYourFeetResult >= 4.6){
            return 90;
        }
        if (sitAndReachYourFeetResult >= 3.7){
            return 85;
        }
        if (sitAndReachYourFeetResult >= 3.0){
            return 80;
        }
        if (sitAndReachYourFeetResult >= 2.4){
            return 75;
        }
        if (sitAndReachYourFeetResult >= 1.8){
            return 70;
        }
        if (sitAndReachYourFeetResult >= 1.3){
            return 65;
        }
        if (sitAndReachYourFeetResult >= 0.8){
            return 60;
        }
        if (sitAndReachYourFeetResult >= 0.4){
            return 55;
        }
        if (sitAndReachYourFeetResult >= -0.1){
            return 50;
        }
        if (sitAndReachYourFeetResult >= -0.6){
            return 45;
        }
        if (sitAndReachYourFeetResult >= -1.0){
            return 40;
        }
        if (sitAndReachYourFeetResult >= -1.5){
            return 35;
        }
        if (sitAndReachYourFeetResult >= -2.0){
            return 30;
        }
        if (sitAndReachYourFeetResult >= -2.6){
            return 25;
        }
        if (sitAndReachYourFeetResult >= -3.2){
            return 20;
        }
        if (sitAndReachYourFeetResult >= -3.9){
            return 15;
        }
        if (sitAndReachYourFeetResult >= -4.8){
            return 10;
        }
        if (sitAndReachYourFeetResult >= -6.3){
            return 5;
        }
    } 
    if (sex === 'Feminino' && age >= 90 ){
        if (sitAndReachYourFeetResult >= 4.9){
            return 95;
        }
        if (sitAndReachYourFeetResult >= 3.4){
            return 90;
        }
        if (sitAndReachYourFeetResult >= 2.5){
            return 85;
        }
        if (sitAndReachYourFeetResult >= 1.7){
            return 80;
        }
        if (sitAndReachYourFeetResult >= 1.0){
            return 75;
        }
        if (sitAndReachYourFeetResult >= 0.4){
            return 70;
        }
        if (sitAndReachYourFeetResult >= -0.1){
            return 65;
        }
        if (sitAndReachYourFeetResult >= -0.7){
            return 60;
        }
        if (sitAndReachYourFeetResult >= -1.2){
            return 55;
        }
        if (sitAndReachYourFeetResult >= -1.7){
            return 50;
        }
        if (sitAndReachYourFeetResult >= -2.2){
            return 45;
        }
        if (sitAndReachYourFeetResult >= -2.7){
            return 40;
        }
        if (sitAndReachYourFeetResult >= -3.3){
            return 35;
        }
        if (sitAndReachYourFeetResult >= -3.8){
            return 30;
        }
        if (sitAndReachYourFeetResult >= -4.4){
            return 25;
        }
        if (sitAndReachYourFeetResult >= -5.1){
            return 20;
        }
        if (sitAndReachYourFeetResult >= -5.9){
            return 15;
        }
        if (sitAndReachYourFeetResult >= -6.8){
            return 10;
        }
        if (sitAndReachYourFeetResult >= -7.9){
            return 5;
        }
    } 
}