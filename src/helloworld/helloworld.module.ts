import { Module } from '@nestjs/common';
import { HelloworldResolver } from './helloworld.resolver';
import { Query } from '@nestjs/graphql';

@Module({
  providers: [HelloworldResolver]
})
export class HelloworldModule {
  @Query(() => String)
  helloworld(): string {
    return 'Hello World!';
  }
}
