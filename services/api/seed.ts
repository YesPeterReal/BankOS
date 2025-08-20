import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.plugin.createMany({
    data: [
      { name: 'Budget Tracker', description: 'Track spending habits.', version: '1.0.0' },
      { name: 'Investment Analyzer', description: 'Analyze investments.', version: '1.0.1' },
    ],
  });
  console.log('Treasure planted! Plugins added to the database!');
}

main()
  .catch((e) => {
    console.error('Oops! Treasure planting failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });