import Mail from "../lib/Mail";

export default {
  key: "RegistrationMail",
  options: {},
  async handle({ data }) {
    const { user } = data;
    await Mail.sendMail({
      from: "Queue Test <queueTest@gmail.com>",
      to: `${user.name} <${user.email}>`,
      subject: "Cadastro de usuários",
      html: `Olá, ${user.name}, AAAAAAAAAAAAAAaa`,
    });
  },
};
