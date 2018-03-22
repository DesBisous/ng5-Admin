export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {}
}

export class User {
  constructor(
    public id: number,
    public name: string,
    public password: string,
    public rePassword: string,
    public addresses: Address[]
  ) {}
}

export class Address {
  constructor(
    public street: string,
    public city: string,
    public state: string,
    public email: number
  ) {}
}

export const Users: User[] = [
  new User(0, 'Benson', '123', '123', [
    new Address('123 Main', 'Anywhere', 'CA', 512114),
    new Address('456 Maple', 'Somewhere', 'VA', 512114)
  ]),
  new User(1, 'Bombastic', '1234', '1234', [
    new Address('789 Elm', 'Smallville', 'OH', 512114)
  ]),
  new User(2, 'Magneta', '12345', '12345', []),
];

export const states = ['CA', 'MD', 'OH', 'VA'];
