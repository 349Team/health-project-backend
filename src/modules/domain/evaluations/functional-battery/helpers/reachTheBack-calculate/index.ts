import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculatePercentReachTheBack = ({
    age,
    sex,
    reachTheBackResult,
}:Partial<IFunctionalBattery>) => {
    if (sex === 'Masculino' && age >= 60 && age <=64 ){
        if (reachTheBackResult >= 4.5){
            return 95;
        }
        if (reachTheBackResult >= 2.7){
            return 90;
        }
        if (reachTheBackResult >= 1.6){
            return 85;
        }
        if (reachTheBackResult >= 0.6){
            return 80;
        }
        if (reachTheBackResult >= -0.2){
            return 75;
        }
        if (reachTheBackResult >= -0.9){
            return 70;
        }
        if (reachTheBackResult >= -1.5){
            return 65;
        }
        if (reachTheBackResult >= -2.2){
            return 60;
        }
        if (reachTheBackResult >= -2.8){
            return 55;
        }
        if (reachTheBackResult >= -3.4){
            return 50;
        }
        if (reachTheBackResult >= -4.0){
            return 45;
        }
        if (reachTheBackResult >= -4.6){
            return 40;
        }
        if (reachTheBackResult >= -5.3){
            return 35;
        }
        if (reachTheBackResult >= -5.9){
            return 30;
        }
        if (reachTheBackResult >= -6.6){
            return 25;
        }
        if (reachTheBackResult >= -7.4){
            return 20;
        }
        if (reachTheBackResult >= -8.4){
            return 15;
        }
        if (reachTheBackResult >= -9.5){
            return 10;
        }
        if (reachTheBackResult >= -11.3){
            return 5;
        }
   } 
   if (sex === 'Masculino' && age >= 65 && age <=69 ){
        if (reachTheBackResult >= 3.9){
            return 95;
        }
        if (reachTheBackResult >= 2.2){
            return 90;
        }
        if (reachTheBackResult >= 1.0){
            return 85;
        }
        if (reachTheBackResult >= 0.0){
            return 80;
        }
        if (reachTheBackResult >= -0.8){
            return 75;
        }
        if (reachTheBackResult >= -1.6){
            return 70;
        }
        if (reachTheBackResult >= -2.2){
            return 65;
        }
        if (reachTheBackResult >= -2.9){
            return 60;
        }
        if (reachTheBackResult >= -3.5){
            return 55;
        }
        if (reachTheBackResult >= -4.1){
            return 50;
        }
        if (reachTheBackResult >= -4.7){
            return 45;
        }
        if (reachTheBackResult >= -5.3){
            return 40;
        }
        if (reachTheBackResult >= -6.0){
            return 35;
        }
        if (reachTheBackResult >= -6.6){
            return 30;
        }
        if (reachTheBackResult >= -7.4){
            return 25;
        }
        if (reachTheBackResult >= -8.2){
            return 20;
        }
        if (reachTheBackResult >= -9.2){
            return 15;
        }
        if (reachTheBackResult >= -10.4){
            return 10;
        }
        if (reachTheBackResult >= -12.1){
            return 5;
        }
    } 
    if (sex === 'Masculino' && age >= 70 && age <=74 ){
        if (reachTheBackResult >= 3.5){
            return 95;
        }
        if (reachTheBackResult >= 1.8){
            return 90;
        }
        if (reachTheBackResult >= 0.6){
            return 85;
        }
        if (reachTheBackResult >= -0.4){
            return 80;
        }
        if (reachTheBackResult >= -1.2){
            return 75;
        }
        if (reachTheBackResult >= -2.0){
            return 70;
        }
        if (reachTheBackResult >= -2.6){
            return 65;
        }
        if (reachTheBackResult >= -3.3){
            return 60;
        }
        if (reachTheBackResult >= -3.9){
            return 55;
        }
        if (reachTheBackResult >= -4.5){
            return 50;
        }
        if (reachTheBackResult >= -5.1){
            return 45;
        }
        if (reachTheBackResult >= -5.7){
            return 40;
        }
        if (reachTheBackResult >= -6.4){
            return 35;
        }
        if (reachTheBackResult >= -7.0){
            return 30;
        }
        if (reachTheBackResult >= -7.8){
            return 25;
        }
        if (reachTheBackResult >= -8.6){
            return 20;
        }
        if (reachTheBackResult >= -9.6){
            return 15;
        }
        if (reachTheBackResult >= -10.8){
            return 10;
        }
        if (reachTheBackResult >= -12.5){
            return 5;
        }
    } 
    if (sex === 'Masculino' && age >= 75 && age <=79 ){
        if (reachTheBackResult >= 2.8){
            return 95;
        }
        if (reachTheBackResult >= 0.9){
            return 90;
        }
        if (reachTheBackResult >= -0.3){
            return 85;
        }
        if (reachTheBackResult >= -1.3){
            return 80;
        }
        if (reachTheBackResult >= -2.2){
            return 75;
        }
        if (reachTheBackResult >= -2.9){
            return 70;
        }
        if (reachTheBackResult >= -3.6){
            return 65;
        }
        if (reachTheBackResult >= -4.3){
            return 60;
        }
        if (reachTheBackResult >= -4.9){
            return 55;
        }
        if (reachTheBackResult >= -5.6){
            return 50;
        }
        if (reachTheBackResult >= -6.3){
            return 45;
        }
        if (reachTheBackResult >= -6.9){
            return 40;
        }
        if (reachTheBackResult >= -7.6){
            return 35;
        }
        if (reachTheBackResult >= -8.3){
            return 30;
        }
        if (reachTheBackResult >= -9.0){
            return 25;
        }
        if (reachTheBackResult >= -9.9){
            return 20;
        }
        if (reachTheBackResult >= -10.9){
            return 15;
        }
        if (reachTheBackResult >= -12.1){
            return 10;
        }
        if (reachTheBackResult >= -14.0){
            return 5;
        }
    } 
    if (sex === 'Masculino' && age >= 80 && age <=84 ){
        if (reachTheBackResult >= 2.2){
            return 95;
        }
        if (reachTheBackResult >= 1.2){
            return 90;
        }
        if (reachTheBackResult >= -0.1){
            return 85;
        }
        if (reachTheBackResult >= -1.2){
            return 80;
        }
        if (reachTheBackResult >= -2.1){
            return 75;
        }
        if (reachTheBackResult >= -2.9){
            return 70;
        }
        if (reachTheBackResult >= -3.6){
            return 65;
        }
        if (reachTheBackResult >= -4.3){
            return 60;
        }
        if (reachTheBackResult >= -5.0){
            return 55;
        }
        if (reachTheBackResult >= -5.7){
            return 50;
        }
        if (reachTheBackResult >= -6.4){
            return 45;
        }
        if (reachTheBackResult >= -7.1){
            return 40;
        }
        if (reachTheBackResult >= -7.8){
            return 35;
        }
        if (reachTheBackResult >= -8.5){
            return 30;
        }
        if (reachTheBackResult >= -9.3){
            return 25;
        }
        if (reachTheBackResult >= -10.2){
            return 20;
        }
        if (reachTheBackResult >= -11.3){
            return 15;
        }
        if (reachTheBackResult >= -12.6){
            return 10;
        }
        if (reachTheBackResult >= -14.6){
            return 5;
        }
    } 
    if (sex === 'Masculino' && age >= 85 && age <=89 ){
        if (reachTheBackResult >= 1.7){
            return 95;
        }
        if (reachTheBackResult >= -0.1){
            return 90;
        }
        if (reachTheBackResult >= -1.2){
            return 85;
        }
        if (reachTheBackResult >= -2.2){
            return 80;
        }
        if (reachTheBackResult >= -3.0){
            return 75;
        }
        if (reachTheBackResult >= -3.7){
            return 70;
        }
        if (reachTheBackResult >= -4.3){
            return 65;
        }
        if (reachTheBackResult >= -5.0){
            return 60;
        }
        if (reachTheBackResult >= -5.6){
            return 55;
        }
        if (reachTheBackResult >= -6.2){
            return 50;
        }
        if (reachTheBackResult >= -6.8){
            return 45;
        }
        if (reachTheBackResult >= -7.4){
            return 40;
        }
        if (reachTheBackResult >= -8.1){
            return 35;
        }
        if (reachTheBackResult >= -8.7){
            return 30;
        }
        if (reachTheBackResult >= -9.4){
            return 25;
        }
        if (reachTheBackResult >= -10.2){
            return 20;
        }
        if (reachTheBackResult >= -11.2){
            return 15;
        }
        if (reachTheBackResult >= -12.3){
            return 10;
        }
        if (reachTheBackResult >= -14.1){
            return 5;
        }
    } 
    if (sex === 'Masculino' && age >= 90 ){
        if (reachTheBackResult >= 0.7){
            return 95;
        }
        if (reachTheBackResult >= -1.1){
            return 90;
        }
        if (reachTheBackResult >= -2.2){
            return 85;
        }
        if (reachTheBackResult >= -3.2){
            return 80;
        }
        if (reachTheBackResult >= -4.0){
            return 75;
        }
        if (reachTheBackResult >= -4.7){
            return 70;
        }
        if (reachTheBackResult >= -5.3){
            return 65;
        }
        if (reachTheBackResult >= -6.0){
            return 60;
        }
        if (reachTheBackResult >= -6.6){
            return 55;
        }
        if (reachTheBackResult >= -7.2){
            return 50;
        }
        if (reachTheBackResult >= -7.8){
            return 45;
        }
        if (reachTheBackResult >= -8.4){
            return 40;
        }
        if (reachTheBackResult >= -9.1){
            return 35;
        }
        if (reachTheBackResult >= -9.7){
            return 30;
        }
        if (reachTheBackResult >= -10.4){
            return 25;
        }
        if (reachTheBackResult >= -11.2){
            return 20;
        }
        if (reachTheBackResult >= -12.2){
            return 15;
        }
        if (reachTheBackResult >= -13.3){
            return 10;
        }
        if (reachTheBackResult >= -15.1){
            return 5;
        }
    } 
    if (sex === 'Feminino' && age >= 60 && age <=64 ){
        if (reachTheBackResult >= 5.0){
            return 95;
        }
        if (reachTheBackResult >= 3.8){
            return 90;
        }
        if (reachTheBackResult >= 2.9){
            return 85;
        }
        if (reachTheBackResult >= 2.2){
            return 80;
        }
        if (reachTheBackResult >= 1.6){
            return 75;
        }
        if (reachTheBackResult >= 1.1){
            return 70;
        }
        if (reachTheBackResult >= 0.7){
            return 65;
        }
        if (reachTheBackResult >= 0.2){
            return 60;
        }
        if (reachTheBackResult >= -0.2){
            return 55;
        }
        if (reachTheBackResult >= -0.7){
            return 50;
        }
        if (reachTheBackResult >= -1.2){
            return 45;
        }
        if (reachTheBackResult >= -1.6){
            return 40;
        }
        if (reachTheBackResult >= -2.1){
            return 35;
        }
        if (reachTheBackResult >= -2.5){
            return 30;
        }
        if (reachTheBackResult >= -3.0){
            return 25;
        }
        if (reachTheBackResult >= -3.6){
            return 20;
        }
        if (reachTheBackResult >= -4.3){
            return 15;
        }
        if (reachTheBackResult >= -5.2){
            return 10;
        }
        if (reachTheBackResult >= -6.4){
            return 5;
        }
   } 
   if (sex === 'Feminino' && age >= 65 && age <=69 ){
        if (reachTheBackResult >= 4.9){
            return 95;
        }
        if (reachTheBackResult >= 3.5){
            return 90;
        }
        if (reachTheBackResult >= 2.6){
            return 85;
        }
        if (reachTheBackResult >= 1.9){
            return 80;
        }
        if (reachTheBackResult >= 1.3){
            return 75;
        }
        if (reachTheBackResult >= 0.7){
            return 70;
        }
        if (reachTheBackResult >= 0.2){
            return 65;
        }
        if (reachTheBackResult >= -0.3){
            return 60;
        }
        if (reachTheBackResult >= -0.7){
            return 55;
        }
        if (reachTheBackResult >= -1.2){
            return 50;
        }
        if (reachTheBackResult >= -1.7){
            return 45;
        }
        if (reachTheBackResult >= -2.1){
            return 40;
        }
        if (reachTheBackResult >= -2.6){
            return 35;
        }
        if (reachTheBackResult >= -3.1){
            return 30;
        }
        if (reachTheBackResult >= -3.7){
            return 25;
        }
        if (reachTheBackResult >= -4.3){
            return 20;
        }
        if (reachTheBackResult >= -5.0){
            return 15;
        }
        if (reachTheBackResult >= -5.9){
            return 10;
        }
        if (reachTheBackResult >= -7.3){
            return 5;
        }
    } 
    if (sex === 'Feminino' && age >= 70 && age <=74 ){
        if (reachTheBackResult >= 4.5){
            return 95;
        }
        if (reachTheBackResult >= 3.2){
            return 90;
        }
        if (reachTheBackResult >= 2.3){
            return 85;
        }
        if (reachTheBackResult >= 1.5){
            return 80;
        }
        if (reachTheBackResult >= 0.8){
            return 75;
        }
        if (reachTheBackResult >= 0.3){
            return 70;
        }
        if (reachTheBackResult >= -0.2){
            return 65;
        }
        if (reachTheBackResult >= -0.8){
            return 60;
        }
        if (reachTheBackResult >= -1.2){
            return 55;
        }
        if (reachTheBackResult >= -1.7){
            return 50;
        }
        if (reachTheBackResult >= -2.2){
            return 45;
        }
        if (reachTheBackResult >= -2.6){
            return 40;
        }
        if (reachTheBackResult >= -3.2){
            return 35;
        }
        if (reachTheBackResult >= -3.7){
            return 30;
        }
        if (reachTheBackResult >= -4.2){
            return 25;
        }
        if (reachTheBackResult >= -4.9){
            return 20;
        }
        if (reachTheBackResult >= -5.7){
            return 15;
        }
        if (reachTheBackResult >= -6.6){
            return 10;
        }
        if (reachTheBackResult >= -7.9){
            return 5;
        }
    } 
    if (sex === 'Feminino' && age >= 75 && age <=79 ){
        if (reachTheBackResult >= 4.5){
            return 95;
        }
        if (reachTheBackResult >= 3.1){
            return 90;
        }
        if (reachTheBackResult >= 2.2){
            return 85;
        }
        if (reachTheBackResult >= 1.3){
            return 80;
        }
        if (reachTheBackResult >= 0.6){
            return 75;
        }
        if (reachTheBackResult >= 0.0){
            return 70;
        }
        if (reachTheBackResult >= -0.5){
            return 65;
        }
        if (reachTheBackResult >= -1.1){
            return 60;
        }
        if (reachTheBackResult >= -1.6){
            return 55;
        }
        if (reachTheBackResult >= -2.1){
            return 50;
        }
        if (reachTheBackResult >= -2.6){
            return 45;
        }
        if (reachTheBackResult >= -3.1){
            return 40;
        }
        if (reachTheBackResult >= -3.7){
            return 35;
        }
        if (reachTheBackResult >= -4.2){
            return 30;
        }
        if (reachTheBackResult >= -4.8){
            return 25;
        }
        if (reachTheBackResult >= -5.5){
            return 20;
        }
        if (reachTheBackResult >= -6.4){
            return 15;
        }
        if (reachTheBackResult >= -7.3){
            return 10;
        }
        if (reachTheBackResult >= -8.8){
            return 5;
        }
    } 
    if (sex === 'Feminino' && age >= 80 && age <=84 ){
        if (reachTheBackResult >= 4.3){
            return 95;
        }
        if (reachTheBackResult >= 2.8){
            return 90;
        }
        if (reachTheBackResult >= 1.8){
            return 85;
        }
        if (reachTheBackResult >= 0.9){
            return 80;
        }
        if (reachTheBackResult >= 0.2){
            return 75;
        }
        if (reachTheBackResult >= -0.4){
            return 70;
        }
        if (reachTheBackResult >= -1.0){
            return 65;
        }
        if (reachTheBackResult >= -1.6){
            return 60;
        }
        if (reachTheBackResult >= -2.1){
            return 55;
        }
        if (reachTheBackResult >= -2.6){
            return 50;
        }
        if (reachTheBackResult >= -3.1){
            return 45;
        }
        if (reachTheBackResult >= -3.7){
            return 40;
        }
        if (reachTheBackResult >= -4.2){
            return 35;
        }
        if (reachTheBackResult >= -4.8){
            return 30;
        }
        if (reachTheBackResult >= -5.4){
            return 25;
        }
        if (reachTheBackResult >= -6.1){
            return 20;
        }
        if (reachTheBackResult >= -7.0){
            return 15;
        }
        if (reachTheBackResult >= -8.0){
            return 10;
        }
        if (reachTheBackResult >= -9.5){
            return 5;
        }
    } 
    if (sex === 'Feminino' && age >= 85 && age <=89 ){
        if (reachTheBackResult >= 3.5){
            return 95;
        }
        if (reachTheBackResult >= 1.9){
            return 90;
        }
        if (reachTheBackResult >= 0.8){
            return 85;
        }
        if (reachTheBackResult >= -0.1){
            return 80;
        }
        if (reachTheBackResult >= -0.9){
            return 75;
        }
        if (reachTheBackResult >= -1.6){
            return 70;
        }
        if (reachTheBackResult >= -2.1){
            return 65;
        }
        if (reachTheBackResult >= -2.8){
            return 60;
        }
        if (reachTheBackResult >= -3.3){
            return 55;
        }
        if (reachTheBackResult >= -3.9){
            return 50;
        }
        if (reachTheBackResult >= -4.5){
            return 45;
        }
        if (reachTheBackResult >= -5.0){
            return 40;
        }
        if (reachTheBackResult >= -5.7){
            return 35;
        }
        if (reachTheBackResult >= -6.2){
            return 30;
        }
        if (reachTheBackResult >= -6.9){
            return 25;
        }
        if (reachTheBackResult >= -7.7){
            return 20;
        }
        if (reachTheBackResult >= -8.6){
            return 15;
        }
        if (reachTheBackResult >= -9.7){
            return 10;
        }
        if (reachTheBackResult >= -11.3){
            return 5;
        }
    } 
    if (sex === 'Feminino' && age >= 90 ){
        if (reachTheBackResult >= 3.9){
            return 95;
        }
        if (reachTheBackResult >= 2.2){
            return 90;
        }
        if (reachTheBackResult >= 0.9){
            return 85;
        }
        if (reachTheBackResult >= -0.1){
            return 80;
        }
        if (reachTheBackResult >= -1.0){
            return 75;
        }
        if (reachTheBackResult >= -1.8){
            return 70;
        }
        if (reachTheBackResult >= -2.5){
            return 65;
        }
        if (reachTheBackResult >= -3.2){
            return 60;
        }
        if (reachTheBackResult >= -3.8){
            return 55;
        }
        if (reachTheBackResult >= -4.5){
            return 50;
        }
        if (reachTheBackResult >= -5.2){
            return 45;
        }
        if (reachTheBackResult >= -5.8){
            return 40;
        }
        if (reachTheBackResult >= -6.5){
            return 35;
        }
        if (reachTheBackResult >= -7.2){
            return 30;
        }
        if (reachTheBackResult >= -8.0){
            return 25;
        }
        if (reachTheBackResult >= -8.9){
            return 20;
        }
        if (reachTheBackResult >= -9.9){
            return 15;
        }
        if (reachTheBackResult >= -11.2){
            return 10;
        }
        if (reachTheBackResult >= -13.0){
            return 5;
        }
    } 
}