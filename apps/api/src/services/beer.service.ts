import { PrismaClient } from '@prisma/client';

export class BeerService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllBeers() {
    return this.prisma.beer.findMany({
      orderBy: { position: 'asc' },
    });
  }

  async getBeerById(id: string) {
    return this.prisma.beer.findUnique({
      where: { id },
    });
  }

  async createBeer(data: any) {
    return this.prisma.beer.create({
      data,
    });
  }

  async updateBeer(id: string, data: any) {
    return this.prisma.beer.update({
      where: { id },
      data,
    });
  }

  async deleteBeer(id: string) {
    return this.prisma.beer.delete({
      where: { id },
    });
  }

  async disconnect() {
    await this.prisma.$disconnect();
  }
}
