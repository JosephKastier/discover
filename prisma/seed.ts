import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Lösche alle existierenden Daten
  await prisma.beerTest.deleteMany();
  await prisma.beer.deleteMany();

  // Erstelle initiale Biere
  const beers = await Promise.all([
    prisma.beer.create({
      data: {
        name: 'Krombacher Pils',
        brewery: 'Krombacher Brauerei',
        style: 'Pilsner',
        abv: 4.8,
        ibu: 27,
        description: 'Ein klassisches deutsches Pilsner',
        imageUrl: '/assets/beers/1.png',
        position: 1,
      },
    }),
    prisma.beer.create({
      data: {
        name: 'Warsteiner Premium Pilsner',
        brewery: 'Warsteiner Brauerei',
        style: 'Pilsner',
        abv: 4.8,
        ibu: 28,
        description: 'Prämienbier mit erlesenen Hopfensorten',
        imageUrl: '/assets/beers/2.png',
        position: 5,
      },
    }),
    prisma.beer.create({
      data: {
        name: 'Guinness Draught',
        brewery: 'St. James Gate Brewery',
        style: 'Stout',
        abv: 4.2,
        ibu: 45,
        description: 'Das legendäre irische Stout',
        imageUrl: '/assets/beers/3.png',
        position: 12,
      },
    }),
    prisma.beer.create({
      data: {
        name: 'Erdinger Weissbier',
        brewery: 'Erdinger Weissbräu',
        style: 'Hefeweizen',
        abv: 5.3,
        ibu: 14,
        description: 'Das beliebteste Weizenbier Deutschlands',
        imageUrl: '/assets/beers/4.png',
        position: 23,
      },
    }),
  ]);

  // Erstelle Beer Tests
  await prisma.beerTest.createMany({
    data: [
      {
        title: 'Krombacher im großen Pils-Test 2024',
        text: 'Im aktuellen Vergleichstest konnte das Krombacher Pils mit seiner feinen Hopfennote überzeugen. Besonders die Balance zwischen Bitterkeit und Malzaroma wurde von den Testern positiv bewertet.',
        link: 'https://example.com/krombacher-test-2024',
        beerId: beers[0].id,
      },
      {
        title: 'Blind-Verkostung deutscher Pilsner',
        text: 'Bei einer Blind-Verkostung von 20 deutschen Pilsnern landete Krombacher auf Platz 3. Die Tester lobten die hervorragende Schaumkrone und den frischen Geschmack.',
        link: 'https://example.com/blind-test-pilsner',
        beerId: beers[0].id,
      },
      {
        title: 'Warsteiner: Traditionsbrauerei im Test',
        text: 'Das Warsteiner Premium Pilsner überzeugt durch seine konstante Qualität. Im Test wurde besonders die ausgewogene Hopfung und der angenehme Nachtrunk hervorgehoben.',
        link: 'https://example.com/warsteiner-tradition',
        beerId: beers[1].id,
      },
      {
        title: 'Guinness vs. deutsche Stouts',
        text: 'Im direkten Vergleich mit deutschen Craft-Stouts zeigt Guinness Draught seine Stärken. Die cremige Textur und die Röstnoten machen es zum Klassiker unter den Stouts.',
        link: 'https://example.com/guinness-vergleich',
        beerId: beers[2].id,
      },
      {
        title: 'Das perfekte Guinness zapfen',
        text: 'Eine Anleitung zum perfekten Zapfen eines Guinness. Der richtige Winkel, die Wartezeit und die zweite Phase sind entscheidend für den perfekten Genuss.',
        link: 'https://example.com/guinness-zapfen',
        beerId: beers[2].id,
      },
      {
        title: 'Erdinger Weißbier: Alkoholfrei im Test',
        text: 'Nicht nur die klassische Variante überzeugt. Auch das alkoholfreie Erdinger schneidet in Tests regelmäßig sehr gut ab und ist bei Sportlern besonders beliebt.',
        link: 'https://example.com/erdinger-alkoholfrei',
        beerId: beers[3].id,
      },
    ],
  });

  console.log('✅ Database seeded with initial beers and beer tests');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
