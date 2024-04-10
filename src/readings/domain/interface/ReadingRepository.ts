import { Reading } from "../entity/Reading";

export interface ReadingRepository {
    createReading(
        date: string,
        weight: number
    ): Promise<Reading | null>;
}