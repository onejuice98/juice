import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   *
   * @returns 여기서 service는 왜 사용하는 것인가?
   * 그냥 아래 hello처럼 하면 되는데? nestJs는 컨트롤러를 비즈니스 로직이랑 구분 하기 위해서이다.
   * 컨트롤러는 url을 가져오는 역할이다.
   * 서비스는 일반적으로 실제로 function을 가지는 부분이다.
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   *
   * @returns 데코레이터는 꾸며주는 함수로서 함수 사이에 빈칸이 생기면 안된다.
   */
  @Get('/hello')
  sayHello(): string {
    return this.appService.getHi();
  }
}
