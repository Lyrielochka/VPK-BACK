import { Diploma } from "../entities/diploma.entity";
import { Repository } from "typeorm";
import { TestConnection } from "../data-access/test.connection";

type FilterDiplomaDTO = {
  name?: string;
};

type CreateDiplomaDTO = {
  name: string;
  img?: string;
};

type UpdateDiplomaDTO = {
  name?: string;
  img?: string;
};

export class DiplomaService {
  private diplomaRepo: Repository<Diploma>;

  constructor() {
    this.diplomaRepo = TestConnection.getRepository(Diploma);
  }

  async findDiplomas(filters?: FilterDiplomaDTO): Promise<Diploma[]> {
    return await this.diplomaRepo.find({ where: { ...filters } });
  }

  async findDiplomaById(idDiploma: number): Promise<Diploma | undefined> {
    return await this.diplomaRepo.findOne({ where: { idDiploma } });
  }

  async createDiploma(body: CreateDiplomaDTO): Promise<Diploma> {
    const newItem = this.diplomaRepo.create(body);
    return await this.diplomaRepo.save(newItem);
  }

  async updateDiploma(idDiploma: number, body: UpdateDiplomaDTO): Promise<boolean> {
    const result = await this.diplomaRepo.update(idDiploma, body);
    return result.affected !== 0;
  }

  async deleteDiploma(idDiploma: number): Promise<boolean> {
    const result = await this.diplomaRepo.delete(idDiploma);
    return result.affected !== 0;
  }
}
