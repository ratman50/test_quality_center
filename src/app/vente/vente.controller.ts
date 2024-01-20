import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Query, ParseFilePipe, FileTypeValidator } from '@nestjs/common';
import { VenteService } from './vente.service';
import { CreateVenteDto } from './dto/create-vente.dto';
import { UpdateVenteDto } from './dto/update-vente.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { query } from 'express';

@Controller('vente')
export class VenteController {
  constructor(private readonly venteService: VenteService) { }

  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: "./files",

    })
  }))
  @Post('upload')
  create(@UploadedFile(new ParseFilePipe({
    validators: [
      new FileTypeValidator({ fileType: '.csv' }),
    ],
  }),) file: Express.Multer.File, @Query('type') type: string) {

    return this.venteService.create(type, file);

  }

  @Get()
  findAll(@Query("agent") agent:string, @Query('campagne') campagne:string) {
    return this.venteService.findAll(agent,campagne);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenteDto: UpdateVenteDto) {
    return this.venteService.update(+id, updateVenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venteService.remove(+id);
  }
}




