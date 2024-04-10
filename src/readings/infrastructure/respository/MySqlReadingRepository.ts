import { query } from "../../../database/database";
import { Reading } from "../../domain/entity/Reading";
import { ReadingRepository } from "../../domain/interface/ReadingRepository";

export class MySqlReadingRepository implements ReadingRepository{
    async createReading(
        date: string,
        weight: number
    ): Promise<Reading | null>{
        const sql = "INSERT INTO readings (date, weight) VALUES (?,?)";
        const params: any[] = [date, weight];

        try {
            const [result]: any = await query(sql, params);
            return new Reading(result.insertId, date, weight);  
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}