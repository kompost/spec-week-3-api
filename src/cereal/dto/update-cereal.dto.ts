import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { Manufacturer, Type } from '@prisma/client';

const UpdateCerealSchema = z.object({
    type: z.nativeEnum(Type).optional(),
    mfr: z.nativeEnum(Manufacturer).optional(),
    calories: z.number().min(0).optional(),
    protein: z.number().min(0).optional(),
    fat: z.number().min(0).optional(),
    sodium: z.number().min(0).optional(),
    fiber: z.number().min(0).optional(),
    carbo: z.number().min(0).optional(),
    sugars: z.number().min(0).optional(),
    potass: z.number().min(0).optional(),
    vitamins: z.number().min(0).optional(),
    shelf: z.number().min(0).optional(),
    weight: z.number().min(0).optional(),
    cups: z.number().min(0).optional(),
    rating: z.string().optional(),
});

// class is required for using DTO as a type
export class UpdateCerealDto extends createZodDto(UpdateCerealSchema) {}
