import { Injectable } from '@nestjs/common';

export type User = {
    userId: number;
    username: string;
    password: string;
};

@Injectable()
export class UsersService {
    // This is a mock data, you can replace it with your own data
    private readonly users: User[] = [
        {
            userId: 2,
            username: 'user',
            password: '123',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find((user) => user.username === username);
    }
}
