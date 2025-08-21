"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const existingPlugins = await prisma.plugin.findMany({
        where: {
            OR: [
                { name: 'Budget Tracker' },
                { name: 'Investment Analyzer' },
            ],
        },
    });
    if (existingPlugins.length === 0) {
        await prisma.plugin.createMany({
            data: [
                { name: 'Budget Tracker', description: 'Track spending habits.', version: '1.0.0' },
                { name: 'Investment Analyzer', description: 'Analyze investments.', version: '1.0.1' },
            ],
        });
        console.log('Treasure planted! New plugins added to the database!');
    }
    else {
        console.log('Treasure already planted! No new plugins added.');
    }
}
main()
    .catch((e) => {
    console.error('Oops! Treasure planting failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map