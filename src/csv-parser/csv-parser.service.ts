import { Injectable } from '@nestjs/common'
import * as fs from 'fs'
import * as path from 'path'
import * as Papa from 'papaparse'

@Injectable()
export class CsvParserService {
    constructor() { }

    async parse(filename = '', delimiter = ';') {
        const filePath = path.resolve(__dirname, `../../fixtures/${filename}.csv`)
        const fileContent = fs.readFileSync(filePath, 'utf8')

        const parsedData = Papa.parse(fileContent, {
            header: true,
            dynamicTyping: true, // Automatically convert types
            delimiter
        })

        return parsedData.data
    }
}
