// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  uploads: [
    { id: 42, name: 'Agency1_CPF_Project1.xlsx', validatedAt: null },
    {
      id: 43,
      name: 'Agency2_CPF_Project1.xlsx',
      validatedAt: new Date().toISOString(),
    },
    { id: 44, name: 'Agency1_CPF_Project2.xlsx', validatedAt: null },
  ],
})
