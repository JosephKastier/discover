import { PrismaClient } from '@prisma/client';

export class BeerTestService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllBeerTests() {
    return this.prisma.beerTest.findMany({
      include: {
        beer: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getBeerTestById(id: string) {
    return this.prisma.beerTest.findUnique({
      where: { id },
      include: {
        beer: true,
      },
    });
  }

  async getBeerTestsByBeerId(beerId: string) {
    return this.prisma.beerTest.findMany({
      where: { beerId },
      include: {
        beer: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createBeerTest(data: any) {
    return this.prisma.beerTest.create({
      data,
      include: {
        beer: true,
      },
    });
  }

  async updateBeerTest(id: string, data: any) {
    return this.prisma.beerTest.update({
      where: { id },
      data,
      include: {
        beer: true,
      },
    });
  }

  async deleteBeerTest(id: string) {
    return this.prisma.beerTest.delete({
      where: { id },
    });
  }

  async disconnect() {
    await this.prisma.$disconnect();
  }
}
