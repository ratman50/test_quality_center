import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(new User({...createUserDto,password:await bcrypt.hash(createUserDto.password, 10)}));
  }
  
  async user(user:Partial<User>){
    return await this.userRepository.findOneBy({...user});
  }
  findAll() : Promise<User[]>{
    return this.userRepository.find();
  }

  findOne(id: number) 
    : Promise<User> {
      return this.userRepository.findOneBy({ id });
    }  

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
