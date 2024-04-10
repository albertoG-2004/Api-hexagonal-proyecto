import { Reading } from "../../domain/entity/Reading";
import { ReadingRepository } from "../../domain/interface/ReadingRepository";

export class CreateReadingUseCase {
    constructor(readonly readingRepository: ReadingRepository){}

    async run(
        date: string,
        weight: number
    ): Promise <Reading | null> {
        try {
            const reading: any = await this.readingRepository.createReading(
                date,
                weight
            );
            return reading;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}