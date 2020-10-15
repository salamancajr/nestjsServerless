import { lambdaWrapper } from './utils/lambdaWrapper';
import { AppModule } from './app.module';

export const handler = lambdaWrapper(AppModule);
