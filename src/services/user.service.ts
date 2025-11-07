import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { Profile } from "../entities/profile.entites";
import { TestConnection } from "../data-access/test.connection";

type FilterUserDTO = {
  email?: string;
  role?: string;
};

type CreateUserDTO = {
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  profile?: Profile;
};

type UpdateUserDTO = {
  email?: string;
  password?: string;
  role?: string;
};

export class UserService {
  private users: Repository<User>;

  constructor() {
    this.users = TestConnection.getRepository(User);
  }

  async findUsers(filters?: FilterUserDTO): Promise<User[]> {
    return await this.users.find({ where: { ...filters } });
  }

  async findUserById(idUser: number): Promise<User | undefined> {
    return await this.users.findOne({ where: { idUser } });
  }

  async createUser(body: CreateUserDTO): Promise<User> {
    const newUser = this.users.create(body);
    return await this.users.save(newUser);
  }

  async updateUser(idUser: number, body: UpdateUserDTO): Promise<boolean> {
    const result = await this.users.update(idUser, body);
    return result.affected !== 0;
  }

  async deleteUser(idUser: number): Promise<boolean> {
    const result = await this.users.delete(idUser);
    return result.affected !== 0;
  }

  async getAllUsersWithProfiles(): Promise<User[]> {
    return await this.users.find({
      relations: ["profile"],
    });
  }
}
