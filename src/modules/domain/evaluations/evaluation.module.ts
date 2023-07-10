import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/modules/infrastructure/user/entities/user.entity';
import { Student } from '../student/entities/student.entity';
import { CardiorespiratoryCapacityFactory } from './cardiorespiratory-capacity/cardiorespiratory-capacity.factory';
import { CardiorespiratoryCapacityStrategy } from './cardiorespiratory-capacity/cardiorespiratory-capacity.strategy';
import { Evaluation } from './entities/evaluation.entity';
import { Field } from './entities/field.entity';
import { TestBatteries } from './entities/test-batteries.entity';
import { MiniCognitionStrategy } from './mini-cognition/mini-cognition.strategy';
import { MiniCognitionFactory } from './mini-cognition/mini-cognition.factory';
import { EvaluationController } from './evaluation.controller';
import { EvaluationService } from './evaluation.service';
import { SarcopeniaFactory } from './sarcopenia/sarcopenia.factory';
import { SarcopeniaStrategy } from './sarcopenia/sarcopenia.strategy';
import { avdStrategy } from './avd/avd.strategy';
import { avdFactory } from './avd/avd.factory';
import { BalanceStrategy } from './balance/balance.strategy';
import { BalanceFactory } from './balance/balance.factory';
import { BodyCompositionStrategy } from './body-composition/body-composition.strategy';
import { BodyCompositionFactory } from './body-composition/body-composition.factory';
import { FunctionalBatteryFactory } from './functional-battery/functional-battery-factory';
import { FunctionalBatteryStrategy } from './functional-battery/functional-battery.strategy'
import { FragilityStrategy } from './fragility/fragility.strategy';
import { FragilityFactory } from './fragility/fragility.factory';

import { DepressionFactory } from './depression/depression.factory';
import { DepressionStrategy } from './depression/depression.strategy';
@Module({
  imports: [
    TypeOrmModule.forFeature([Evaluation, Field, TestBatteries, User, Student]),
  ],
  controllers: [EvaluationController],
  providers: [
    EvaluationService,
    SarcopeniaFactory,
    SarcopeniaStrategy,
    avdStrategy,
    avdFactory,
    BalanceStrategy,
    BalanceFactory,
    CardiorespiratoryCapacityFactory,
    MiniCognitionStrategy,
    MiniCognitionFactory,
    CardiorespiratoryCapacityStrategy,
    CardiorespiratoryCapacityFactory,
    BodyCompositionStrategy,
    BodyCompositionFactory,
    FunctionalBatteryStrategy,
    FunctionalBatteryFactory,
    FragilityStrategy,
    FragilityFactory,
    DepressionStrategy,
    DepressionFactory,
  ],
  exports: [TypeOrmModule],
})
export class EvaluationModule {}
