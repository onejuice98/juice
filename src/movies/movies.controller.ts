import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchYear: string) {
    return `We are searching for a movie made after : ${searchYear}`;
  }

  /** @Param 데코레이터는 무엇인가를 원하면 요청을 해야한다. Get내부에 :id 적고 @Param에다가도 동일하게 id를 적어준
   * 다음 뒤에는 아무 상관없이 parameter 이름을 정해주고 타입을 지정해주면 된다. */
  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id : ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id : ${movieId}`;
  }

  /** Put은 전체 리소스를 업데이트 한다. */
  //   @Put
  /** Patch is 일부분만 업데이트한다. */
  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
