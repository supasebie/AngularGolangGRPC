export type Task = {
    userId: number;
    id: number;
    title: string;
    description: string;
    done: boolean;
    due: Date;
}