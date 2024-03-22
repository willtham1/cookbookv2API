import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class RecipeService {
  constructor(private readonly prisma: PrismaService) {}

  // Uses Prisma create method to create a new recipe in the database
  // The data is provided by the createRecipeDto argument
  create(createRecipeDto: CreateRecipeDto) {
    return this.prisma.recipe.create({
      data: createRecipeDto
    });
  }

  // findAll method utilizes Prismas findMany method to retrieve all recipes from the database
  // await is not needed here because async function implicitly returns a promise
  async findAll() {
    return this.prisma.recipe.findMany();
  }

  // Takes an id as an argument and uses Prisma findUnique method to retrieve a single recipe from the database
  findOne(id: number) {
    return this.prisma.recipe.findUnique({
      where: { id }
    });
  }

  // The update method accepts two parameters: id and updateRecipeDto
  // The id is used to identify the recipe to be updated
  // The data to be updated is provided by the updateRecipeDto argument
  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return this.prisma.recipe.update({
      where: { id },
      data: updateRecipeDto
    });
  }

  // The remove method accepts an id as an argument
  // The id is used to identify the recipe to be removed
  remove(id: number) {
    return this.prisma.recipe.delete({
      where: { id }
    });
  }
}
