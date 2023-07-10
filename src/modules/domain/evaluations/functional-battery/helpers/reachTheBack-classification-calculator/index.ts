import {IFunctionalBattery} from '../../interface/functional-battery.interface';

export const calculateReachTheBackClassification = ({
    reachTheBackPercent,
}:Partial<IFunctionalBattery>) => {
    if(reachTheBackPercent > 70){
        return 'ÓTIMO'
    } else if (reachTheBackPercent > 54 ){
        return 'BOM'
    } else if (reachTheBackPercent > 29){
        return 'REGULAR';
    } else {
            return 'RUIM';
        }; 
}