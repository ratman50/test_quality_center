import { Injectable } from '@nestjs/common';
import { CreateVenteDto } from './dto/create-vente.dto';
import { UpdateVenteDto } from './dto/update-vente.dto';
import { readFile, readFileSync } from 'fs';
import { MobileSales } from './entities/mobile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FixeSales } from './entities/fixe.entity';
import { isNotEmpty } from 'class-validator';

@Injectable()
export class VenteService {
  constructor(
    @InjectRepository(MobileSales) private readonly mobileRepository: Repository<MobileSales>,
    @InjectRepository(FixeSales) private readonly fixeRepository: Repository<FixeSales>,

  ) { }
  reduceMobile(item: string[]) {
    return {

      date_commande: item[0],
      site_vendeur: item[1],
      numero_de_telephone: item[2],
      logqc: item[3],
      nomvendeurs: item[4],
      campagnecarte: item[5],
      fichierorigine: item[6],
      ishorsfichier: item[7],
      typeoffres: item[8],
      secondarycampain: item[9],
      finalcampain: item[10],
      idcontrat: item[11],
      paid_as: item[12],
      classification:""

    }
  }
  reduceFixe(item: string[]) {
    return {
      classification:"",
      site_centre_d_appel: item[0],
      civilite: item[1],
      nom_client: item[2],
      prenom_client: item[3],
      numero_client: item[4],
      jour_acquisition: item[5],
      logqc: item[6],
      nomvendeurs: item[7],
      campagnecarte: item[8],
      fichierorigine: item[9],
      ishorsfichier: item[10],
      typeoffres: item[11],
      secondarycampain: item[12],
      finalcampain: item[13],
      idcontrat: item[14],
      paid_as: item[15]

    }
  }
  create(type: string, file: Express.Multer.File) {

    const csvFile = readFileSync(file.path);

    const items = [];
    csvFile.toString().split(/\r?\n/).forEach(line => {
      const record = line.split(";");
      if (record.length > 1) {

        if (type == "mobile")
          items.push(new MobileSales(this.reduceMobile(record)));
        else
          items.push(new FixeSales(this.reduceFixe(record)));

      }

    });
    console.log(items);
    if (type == "mobile")
      this.mobileRepository.save(items);
    else
      this.fixeRepository.save(items);
    
    return {
      status: isNotEmpty(items)
    };
  }

  findAll(agent:string, campagne:string) {
    return {"mobile": this.mobileRepository.findBy({logqc:agent,finalcampain:campagne}),"fixe": this.fixeRepository.findBy({logqc:agent,finalcampain:campagne})};
    return `This action returns all vente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vente`;
  }

  update(id: number, updateVenteDto: UpdateVenteDto) {
    return `This action updates a #${id} vente`;
  }

  remove(id: number) {
    return `This action removes a #${id} vente`;
  }
}
