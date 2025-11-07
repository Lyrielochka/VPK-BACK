import { Profile } from "../entities/profile.entites";
import { Repository } from "typeorm";
import { TestConnection } from "../data-access/test.connection";

type FilterProfileDTO = {
  idUser?: number;
  fullName?: string;
};

type CreateProfileDTO = {
  fullName: string;
  gender: string;
  parents: string;
  grade: string;
  phone: string;
  photo?: string;
  tokens?: string[];
  user: any;
};

type UpdateProfileDTO = {
  fullName?: string;
  gender?: string;
  parents?: string;
  grade?: string;
  phone?: string;
  photo?: string;
  tokens?: string[];
  rank?: string;
};

export class ProfileService {
  private profileRepo: Repository<Profile>;

  constructor() {
    this.profileRepo = TestConnection.getRepository(Profile);
  }

  async findProfiles(filters?: FilterProfileDTO): Promise<Profile[]> {
    return await this.profileRepo.find({ where: { ...filters } });
  }

  async findProfileById(idProfile: number): Promise<Profile | undefined> {
    return await this.profileRepo.findOne({ where: { idProfile } });
  }

  async findProfileByUser(idUser: number): Promise<Profile | undefined> {
    return await this.profileRepo.findOne({
      where: { user: { idUser } },
      relations: ["user"],
    });
  }

  async createProfile(body: CreateProfileDTO): Promise<Profile> {
    const newProfile = this.profileRepo.create(body);
    return await this.profileRepo.save(newProfile);
  }

  async updateProfile(idProfile: number, body: UpdateProfileDTO): Promise<boolean> {
    const result = await this.profileRepo.update(idProfile, body);
    return result.affected !== 0;
  }

  async deleteProfile(idProfile: number): Promise<boolean> {
    const result = await this.profileRepo.delete(idProfile);
    return result.affected !== 0;
  }
}
