import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * @ 는 데코레이터다. 클래스 위의 함수이고, 클래스에 함수 기능을 추가할 수 있다. 클래스를 위해 움직인다.
 * 다른 모듈을 만들 것이면, appModule에 import하여 사용하는것이다. 그게 메인에 있으니깐, 인증이나 다른 것들이 만들면,
 * 컨트롤러는 url을 가져오고 function을 리턴
 * 서비스는 비즈니스 로직(function)을 만드는 곳.
 */
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
