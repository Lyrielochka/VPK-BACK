import { User } from "../entities/user.entity";
import { Repository, getRepository } from "typeorm";
import { Profile } from "../entities/profile.entites";
import { TestConnection } from "../data-access/test.connection";

type LoginDTO = {
  email: string;
  password: string;
};


export class AuthService {
  private users = TestConnection.getRepository(User);

  async login(user: LoginDTO): Promise<User | null> {
    const result = await this.users.findOne({
      where: {
        email: user.email,
        password: user.password,
      },
    });
    return result;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.users.findOne({ where: { email } });
  }

  async register(data: { email: string; password: string; role: string }): Promise<User> {
    const profile = new Profile();
    const newUser = this.users.create({
      ...data,
      createdAt: new Date(),
      profile,
    });
    return await this.users.save(newUser);
  }
}

