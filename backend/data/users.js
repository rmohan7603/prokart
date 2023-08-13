import bcrypt from 'bcryptjs';

const users=[
    {
        name:'Admin User',
        email:'adminkart@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin:'true',
    },
    {
        name:'Mark',
        email:'mark@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin:'false',
    },
    {
        name:'Sundar',
        email:'sundar@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin:'false',
    }
];
export default users;