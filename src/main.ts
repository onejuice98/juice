/* src/main.ts */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

/**
 * main.ts 는 꼭 필요하다.
 * bootstrap은 이름이 바뀌어도 될것이다.
 * 3000번의 포트 사용
 * Hello world는 AppModule이 클래스
 * 모든 것의 시작, AppModule은 하나의 앱이다. // 인증을 담당하는 어플리케이션이 있다면 user Module이 될 것이다.
 * 인스타그램을 만들면 photos 모듈, feed모듈 등등 만들 수 있을 것이다.
 * 컨트롤러가 하는 일은 기본적으로 url을 가져오고 함수를 실행하는 것.(라우터 같은 존재)
 */
