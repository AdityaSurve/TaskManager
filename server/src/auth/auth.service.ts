import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login() {
    return 'This is a login response!';
  }
  async register() {
    return 'This is a register response!';
  }
}
