import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { NewUser } from './dtos/newUser.dto';
import { ExistingUser } from './dtos/existingUser.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() user: ExistingUser) {
    return this.authService.login(user);
  }
  @Post('register')
  async register(@Body() user: NewUser) {
    return this.authService.register(user);
  }
}
