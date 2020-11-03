import { lambdaHandler } from './scheduleMain';
import { AppModule } from './app.module';

export const handler = lambdaHandler(AppModule);
