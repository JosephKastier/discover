import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Lösche alle existierenden Biere
  await prisma.beer.deleteMany();

  // Erstelle initiale Biere
  await prisma.beer.createMany({
    data: [
      {
        name: 'Krombacher Pils',
        brewery: 'Krombacher Brauerei',
        style: 'Pilsner',
        abv: 4.8,
        ibu: 27,
        description: 'Ein klassisches deutsches Pilsner',
        imageUrl: '/beers/1.png',
        position: 1,
      },
      {
        name: 'Warsteiner Premium Pilsner',
        brewery: 'Warsteiner Brauerei',
        style: 'Pilsner',
        abv: 4.8,
        ibu: 28,
        description: 'Prämienbier mit erlesenen Hopfensorten',
        imageUrl: '/beers/2.png',
        position: 5,
      },
      {
        name: 'Guinness Draught',
        brewery: 'St. James Gate Brewery',
        style: 'Stout',
        abv: 4.2,
        ibu: 45,
        description: 'Das legendäre irische Stout',
        imageUrl: '/beers/3.png',
        position: 12,
      },
      {
        name: 'Erdinger Weissbier',
        brewery: 'Erdinger Weissbräu',
        style: 'Hefeweizen',
        abv: 5.3,
        ibu: 14,
        description: 'Das beliebteste Weizenbier Deutschlands',
        imageUrl: '/beers/4.png',
        position: 23,
      },
    ],
  });

  console.log('✅ Database seeded with initial beers');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
