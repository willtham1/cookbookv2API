import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {} // PrismaClient is a class that can be injected into services and controllers to interact with the database