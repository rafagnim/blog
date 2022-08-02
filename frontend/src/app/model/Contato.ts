export class Contato  {
    name: string;
    email: string;
    messagem: string;
    constructor (name: string, email: string, message: string) {
        this.name = name;
        this.email = email;
        this.messagem = message;
    }
}
