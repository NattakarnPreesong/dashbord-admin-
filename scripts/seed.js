const { db } = require('@vercel/postgres');
const {
  invoices,
  customers,
  revenue,
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');
//================================================================
async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // สร้างตาราง "users" หากไม่มีอยู่
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role VARCHAR(255) NOT NULL,
        date DATE NOT NULL
      );
    `;

    console.log(`สร้างตาราง "ผู้ใช้"`);

    // ใส่ข้อมูลลงในตาราง "ผู้ใช้"
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password, role, date)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.role}, ${user.date})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`กำหนดผู้ใช้: ${insertedUsers.length} ราย`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('เกิดข้อผิดพลาดในการระบุผู้ใช้:', error);
    throw error;
  }
}
//================================================================
async function seedInvoices(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // สร้างตาราง "ใบแจ้งหนี้" หากไม่มีอยู่
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS invoices (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    customer_id UUID NOT NULL,
    amount INT NOT NULL,
    status VARCHAR(255) NOT NULL,
    date DATE NOT NULL
  );
`;

    console.log(`สร้างตาราง "ใบแจ้งหนี้" แล้ว`);

    // ใส่ข้อมูลลงในตาราง "ใบแจ้งหนี้"
    const insertedInvoices = await Promise.all(
      invoices.map(
        (invoice) => client.sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`ใบแจ้งหนี้:  ${insertedInvoices.length} เริ่มต้นแล้ว`);

    return {
      createTable,
      invoices: insertedInvoices,
    };
  } catch (error) {
    console.error('เกิดข้อผิดพลาดในการเริ่มใบแจ้งหนี้:', error);
    throw error;
  }
}
//================================================================
async function seedCustomers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // สร้างตาราง "ลูกค้า" หากไม่มีอยู่
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS customers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        date DATE NOT NULL
      );
    `;

    console.log(`สร้างตาราง "ลูกค้า"`);

    // ใส่ข้อมูลลงในตาราง "ลูกค้า"
    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
        INSERT INTO customers (id, name, email, date)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`พบลูกค้า: ${insertedCustomers.length} ราย`);

    return {
      createTable,
      customers: insertedCustomers,
    };
  } catch (error) {
    console.error('เกิดข้อผิดพลาดในการระบุลูกค้า:', error);
    throw error;
  }
}
//================================================================
async function seedRevenue(client) {
  try {
    // สร้างตาราง "รายได้" หากไม่มีอยู่
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS revenue (
        month VARCHAR(4) NOT NULL UNIQUE,
        revenue INT NOT NULL,
        date DATE NOT NULL
      );
    `;

    console.log(`สร้างตาราง "รายได้"`);

    // ใส่ข้อมูลลงในตาราง "รายได้"
    const insertedRevenue = await Promise.all(
      revenue.map(
        (rev) => client.sql`
        INSERT INTO revenue (month, revenue, date)
        VALUES (${rev.month}, ${rev.revenue}, ${rev.date})
        ON CONFLICT (month) DO NOTHING;
      `,
      ),
    );

    console.log(`เพิ่มรายได้: ${insertedRevenue.length}`);

    return {
      createTable,
      revenue: insertedRevenue,
    };
  } catch (error) {
    console.error('เกิดข้อผิดพลาดในการเพาะรายได้:', error);
    throw error;
  }
}
//================================================================
async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedCustomers(client);
  await seedInvoices(client);
  await seedRevenue(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'เกิดข้อผิดพลาดขณะพยายามสร้างฐานข้อมูล:',
    err,
  );
});
//================================================================