import { Float, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloworldResolver {
    @Query(() => String, { description: 'Hola mundo es lo que retorna', name: 'Hello' })
    helloworld(): string {
      return 'Hello World!';
    }

    @Query(() => Float, { name: 'randomNumber' })
    randomNumber(): number {
      return Math.random() * 100;
    }
}
