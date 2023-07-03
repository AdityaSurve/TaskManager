import { Injectable } from '@nestjs/common';
import { User } from './dtos/user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { NewUser } from './dtos/newUser.dto';
import { ExistingUser } from './dtos/existingUser.dto';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}
  async login(user: ExistingUser) {
    if (user.email === '') return { error: 'Missing email' };
    if (user.password === '') return { error: 'Missing password' };
    const existingUser = await this.userModel.findOne({
      email: user.email,
    });
    if (!existingUser) {
      return { error: 'Email was not found' };
    }
    if (existingUser.password !== user.password) {
      return { error: 'Invalid password' };
    }
    const token = this.jwtService.sign({ email: existingUser.email });
    return { token };
  }
  async register(user: NewUser) {
    if (user.username === '') return { error: 'Missing username' };
    if (user.email === '') return { error: 'Missing email' };
    if (user.password === '') return { error: 'Missing password' };
    const existingUser = await this.userModel.findOne({
      email: user.email,
    });
    if (existingUser) {
      return { error: 'User already exists' };
    }
    const createdUser = await this.userModel.create(user);
    const token = this.jwtService.sign({ email: createdUser.email });
    return { token };
  }
}
