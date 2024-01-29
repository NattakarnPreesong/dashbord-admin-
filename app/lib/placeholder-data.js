const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Admin_Tae',
    email: 'nattakarnpreesong@gmail.com',
    password: 'tae12345',
    role: 'Admin',
    date: '2024-01-29',
  },
  {
    id: '410544b2-4002-4271-9855-fec4b6a6442a',
    name: 'Admin_Teng',
    email: 'jirapongkongpet2508@gmail.com',
    password: '123456',
    role: 'Admin',
    date: '2024-01-29',
  },
  {
    id: '410544b2-4003-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
    role: 'User',
    date: '2024-01-29',
  },
];

const customers = [
  {
    id: '3958dc9e-701f-4377-85e9-fec4b6a6442a',
    name: 'Kornwee Ratchawong',
    email: 'kornweeratchawong@gmail.com',
    date: '2024-01-09',
  },
  {
    id: '3958dc9e-702f-4377-85e9-fec4b6a6442a',
    name: 'Krittapas Kaewsinchai',
    email: 'krittapaskaewsinchai@gmail.com',
    date: '2024-01-09',
  },
  {
    id: '3958dc9e-703f-4377-85e9-fec4b6a6442a',
    name: 'Kritsadin Pinthong',
    email: 'kritsadinpinthong@gmail.com',
    date: '2024-01-09',
  },
  {
    id: '3958dc9e-704f-4377-85e9-fec4b6a6442a',
    name: 'Jirapong Kongpetch',
    email: 'jirapongkongpetch@gmail.com',
    date: '2024-01-09',
  },
  {
    id: '3958dc9e-705f-4377-85e9-fec4b6a6442a',
    name: 'Jirat Krutto',
    email: 'jiratkrutto@gmail.com',
    date: '2024-01-09',
  },
  {
    id: '3958dc9e-706f-4377-85e9-fec4b6a6442a',
    name: 'Jirayu Ytsuwan',
    email: 'jirayuyotsuwan@gmail.com',
    date: '2024-01-09',
  },
  {
    id: '3958dc9e-707f-4377-85e9-fec4b6a6442a',
    name: 'Chotinan Kalapakdee',
    email: 'chotinankalapakdee@gmail.com',
    date: '2024-01-09',
  },
  {
    id: '3958dc9e-708f-4377-85e9-fec4b6a6442a',
    name: 'Nattakarn Preesong',
    email: 'nattakarnpreesong@gmail.com',
    date: '2024-01-09',
  },
  {
    id: '3958dc9e-709f-4377-85e9-fec4b6a6442a',
    name: 'Phuchit Phukyong',
    email: 'phuchitphukyong@gmail.com',
    date: '2024-01-09',
  },
  {
    id: '3958dc9e-710f-4377-85e9-fec4b6a6442a',
    name: 'Sarawut Sangsuwan',
    email: 'sarawutsangsuwan@gmail.com',
    date: '2024-01-09',
  },
  {
    id: '3958dc9e-711f-4377-85e9-fec4b6a6442a',
    name: 'Anchalee Klinchom',
    email: 'anchaleeklinchom@gmail.com',
    date: '2024-01-09',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Apinya Limmang',
    email: 'apinyalimmang@gmail.com',
    date: '2024-01-09',
  },
  {
    id: '3958dc9e-713f-4377-85e9-fec4b6a6442a',
    name: 'Jiratchaya Namthip',
    email: 'jiratchayanamthip@gmail.com',
    date: '2024-01-09',
  },
  {
    id: '3958dc9e-714f-4377-85e9-fec4b6a6442a',
    name: 'Sittichai Saeiao',
    email: 'sittichaisaeiao@gmail.com',
    date: '2024-01-09',
  },
  {
    id: '3958dc9e-715f-4377-85e9-fec4b6a6442a',
    name: 'Phatchalaporn Chan',
    email: 'phatchalapornchan@gmail.com',
    date: '2024-01-09',
  },
  {
    id: '3958dc9e-716f-4377-85e9-fec4b6a6442a',
    name: 'Ganlayanee Khanthawichai',
    email: 'ganlayaneekhanthawichai@gmail.com',
    date: '2024-01-09',
  },
  {
    id: '3958dc9e-717f-4377-85e9-fec4b6a6442a',
    name: 'Rachata Ubon',
    email: 'Rachataubon@gmail.com',
    date: '2024-01-09',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000, date: '2023-01-31' },
  { month: 'Feb', revenue: 1800, date: '2023-02-28' },
  { month: 'Mar', revenue: 2200, date: '2023-03-31' },
  { month: 'Apr', revenue: 2500, date: '2023-04-30' },
  { month: 'May', revenue: 2300, date: '2023-05-31' },
  { month: 'Jun', revenue: 3200, date: '2023-06-30' },
  { month: 'Jul', revenue: 3500, date: '2023-07-31' },
  { month: 'Aug', revenue: 3700, date: '2023-08-31' },
  { month: 'Sep', revenue: 2500, date: '2023-09-30' },
  { month: 'Oct', revenue: 2800, date: '2023-10-31' },
  { month: 'Nov', revenue: 3000, date: '2023-11-30' },
  { month: 'Dec', revenue: 4800, date: '2023-12-31' },
];

module.exports = {
  users,
  customers,
  invoices,
  revenue,
};
