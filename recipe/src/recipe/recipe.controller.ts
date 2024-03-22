import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post() // Maps the method to POST /recipe
  //DTO is Data Transfer Object
  create(@Body() createRecipeDto: CreateRecipeDto) { 
    return this.recipeService.create(createRecipeDto);
  }

  @Get()
  findAll() {
    return this.recipeService.findAll();
  }

  @Get(':id') // Maps to /recipe/{id}
  findOne(@Param('id') id: string) {
    return this.recipeService.findOne(+id);
  }

  // The update accepts two parameters: id(extracted from the route parameter)
  // and updateRecipeDto(Extracted from the request body)
  @Patch(':id') // Maps to /recipe/{id}
  update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipeService.update(+id, updateRecipeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipeService.remove(+id);
  }
}
