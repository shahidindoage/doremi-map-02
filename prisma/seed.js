const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // ✅ Create or update the event
  const event = await prisma.event.upsert({
    where: { slug: 'grand-music-night-2025' },
    update: {},
    create: {
      title: 'Grand Music Night 2025',
      slug: 'grand-music-night-2025',
    },
  })

  // ✅ Define all tables with coordinates, seats, and prices
  const desktopTables = {
  // MAJESTIC PURPLE
301: { seats: 6, top: '57.5%', left: '34.7%', price: 15.800, color: '#d96aa9' },
302: { seats: 8, top: '53.8%', left: '29.4%', price: 15.800, color: '#d96aa9' },
303: { seats: 6, top: '61.8%', left: '31.4%', price: 15.800, color: '#d96aa9' },
304: { seats: 6, top: '57.8%', left: '26.4%', price: 15.800, color: '#d96aa9' },
306: { seats: 8, top: '64.5%', left: '23.7%', price: 15.800, color: '#d96aa9' },
305: { seats: 8, top: '66.8%', left: '28.4%', price: 15.800, color: '#d96aa9' },
601: { seats: 12, top: '69.5%', left: '72.7%', price: 15.800, color: '#d96aa9' },
602: { seats:12, top: '63.8%', left: '72.7%', price: 15.800, color: '#d96aa9' },
801: { seats: 6, top: '44.8%', left: '75.4%', price: 15.800, color: '#d96aa9' },
802: { seats: 6, top: '36.8%', left: '75.4%', price: 15.800, color: '#d96aa9' },
803: { seats: 8, top: '42.9%', left: '79.3%', price: 15.800, color: '#d96aa9' },
804: { seats: 8, top: '36.9%', left: '79.3%', price: 15.800, color: '#d96aa9' },
805: { seats: 6, top: '44.5%', left: '84.7%', price: 15.800, color: '#d96aa9' },
806: { seats: 6, top: '38.8%', left: '84.4%', price: 15.800, color: '#d96aa9' },
807: { seats: 8, top: '33.8%', left: '83.4%', price: 15.800, color: '#d96aa9' },

  // ROYAL BLUE

104: { seats: 10, top: '48.9%', left: '60.9%', price:  19.800, color: '#694d91' },
107: { seats: 10, top: '31.9%', left: '59.9%', price:  19.800, color: '#694d91' },
204: { seats: 10, top: '47.9%', left: '38.9%', price:  19.800, color: '#694d91' },
207: { seats: 10, top: '31.9%', left: '38.9%', price:  19.800, color: '#694d91' },
209: { seats: 10, top: '37.9%', left: '37.9%', price:  19.800, color: '#694d91' },
210: { seats: 12, top: '36.2%', left: '31.9%', price:  19.800, color: '#694d91' },
211: { seats: 12, top: '29.6%', left: '31.9%', price:  19.800, color: '#694d91' },
401: { seats: 12, top: '58.9%', left: '43.9%', price:  19.800, color: '#694d91' },
402: { seats: 8, top: '58.9%', left: '57.9%', price:  19.800, color: '#694d91' },
403: { seats: 8, top: '63.5%', left: '47%', price:  19.800, color: '#694d91' },
404: { seats: 8, top: '63.7%', left: '55%', price:  19.800, color: '#694d91' },
422: { seats: 6, top: '58.9%', left: '51.9%', price:  19.800, color: '#694d91' },
701: { seats: 10, top: '51.6%', left: '66.8%', price:  19.800, color: '#694d91' },
702: { seats: 10, top: '45.9%', left: '66.2%', price:  19.800, color: '#694d91' },
703: { seats: 10, top: '36.2%', left: '66.2%', price:  19.800, color: '#694d91' },
704: { seats: 10, top: '30.9%', left: '66.2%', price:  19.800, color: '#694d91' },
705: { seats: 10, top: '49.6%', left: '71.3%', price:  19.800, color: '#694d91' },
706: { seats: 10, top: '43.9%', left: '70.9%', price:  19.800, color: '#694d91' },

  // IMPERIAL GREEN

  1: { seats: 10, top: '48.9%', left: '50.9%', price: 24.800, color: '#5eba45' },
101: { seats: 10, top: '46.9%', left: '55.9%', price: 24.800, color: '#5eba45' },
102: { seats: 10, top: '33.9%', left: '54.9%', price: 24.800, color: '#5eba45' },
105: { seats: 10, top: '42.9%', left: '59.9%', price: 24.800, color: '#5eba45' },
106: { seats: 10, top: '37.9%', left: '58.9%', price: 24.800, color: '#5eba45' },
201: { seats: 10, top: '47.9%', left: '45.9%', price: 24.800, color: '#5eba45' },
202: { seats: 10, top: '32.9%', left: '44.9%', price: 24.800, color: '#5eba45' },
205: { seats: 10, top: '42.9%', left: '40.9%', price: 24.800, color: '#5eba45' },
206: { seats: 10, top: '37.9%', left: '42.9%', price: 24.800, color: '#5eba45' },

  // FAMILY RED

405: { seats: 10, top: '67.8%', left: '64.4%', price:  9.800, color: '#ed302d' },
501: { seats: 12, top: '71.5%', left: '57.7%', price:  9.800, color: '#ed302d' },
502: { seats: 12, top: '71.5%', left: '51.4%', price:  9.800, color: '#ed302d' },
503: { seats: 12, top: '71.5%', left: '43.7%', price:  9.800, color: '#ed302d' },



  }

  // ✅ Create or update tables and their seats
  for (const [numStr, t] of Object.entries(desktopTables)) {
    const table = await prisma.table.upsert({
      where: { eventId_number: { eventId: event.id, number: parseInt(numStr) } },
      update: {},
      create: {
        eventId: event.id,
        number: parseInt(numStr),
        top: t.top,
        left: t.left,
        price: t.price,
        color: t.color,
      },
    })

    const seats = []
    for (let i = 1; i <= t.seats; i++) {
      seats.push({
        tableId: table.id,
        seatNo: i,
        label: `T${numStr}-${i}`,
        status: 'AVAILABLE',
      })
    }
    await prisma.seat.createMany({ data: seats, skipDuplicates: true })
  }

  // ✅ Create admin user for login
  await prisma.admin.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: 'password123', // change this after first login
    },
  })

  console.log('✅ Seed complete — event, tables, seats, and admin created!')
}

// Run the script
main()
  .catch((e) => {
    console.error('❌ Seed error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
