import { Context } from 'aws-lambda';
export declare const lambdaWrapper: (AppModule: any) => (event: any, context: Context) => Promise<any>;
