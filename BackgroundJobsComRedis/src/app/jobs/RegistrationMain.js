import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    async handle({ data }) {

        const { user } = data;

        await Mail.sendMail({
            from: 'Queue Test <kleber@gmail.com>',
            to: `${user.name} <${user.email}> `,
            subject: 'Cadastro de usuario',
            html: `Ola, ${user.name}, bem vindo ao sistema de filas :D `
        });
    },
};