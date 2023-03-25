import { Component, createEffect, For } from "solid-js";
import styles from "../add/add.module.scss";
import "boxicons";
import { createStore, produce } from "solid-js/store";
import { Recipe } from "../../model/recipe.model";
import { recipes, setRecipes } from "../../App";
import { setRoute } from "../../shared/layout/Layout";

import Units from "../../assets/cooking-units.json";
import { RecipeIngredientRel } from "../../model/recipe-ingredient.rel.modal";

const [recipe, setRecipe] = createStore<Recipe>({
  title: "",
  description: "",
  ingredients: [],
  isLiked: false,
  minutes: 0,
});

const [ingredient, setIngredient] = createStore<RecipeIngredientRel>({
  amount: 0,
  ingredient: {
    name: "",
    unit: "",
  },
});

const Add: Component = () => {
  createEffect(() => {
    console.log("[recipes]", recipes);
  });

  const handleAdd = () => {
    setRecipes((recipes) => [...recipes, { ...recipe }]);
    setRoute("list");
  };

  const handleAddIngredient = () => {
    setRecipe(
      produce((state) => {
        state.ingredients.push({
          ...ingredient,
          ingredient: { ...ingredient.ingredient },
        });
      })
    );
  };

  const handleDeleteIngredient = (index: number) => {
    setRecipe(
      "ingredients",
      produce((ingredients) => {
        ingredients.splice(index, 1);
      })
    );
  };

  return (
    <form>
      {JSON.stringify(recipe, null, 2)}
      <div class="form-group">
        <label for="title">Recipe title</label>
        <input
          value={recipe.title}
          onInput={(i) => setRecipe("title", i.currentTarget.value)}
          type="text"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          value={recipe.description}
          onInput={(i) => setRecipe("description", i.currentTarget.value)}
        />
      </div>

      <section class={styles.ingredients}>
        <h3>Ingredients</h3>

        <ul class={styles.list}>
          <For each={recipe.ingredients}>
            {(ingredient, index) => (
              <li>
                <h6>{ingredient.ingredient.name}</h6>
                <strong>
                  <span>{ingredient.amount}</span>
                  <span>{ingredient.ingredient.unit}</span>
                </strong>
                <button type="button" onClick={[handleDeleteIngredient, index]}>
                  <box-icon name="cross"></box-icon>
                </button>
              </li>
            )}
          </For>
        </ul>

        <div class={styles.adder}>
          <input
            onInput={(e) =>
              setIngredient("ingredient", "name", e.currentTarget.value)
            }
            type="text"
            placeholder="name"
          />
          <input
            onInput={(e) => setIngredient("amount", +e.currentTarget.value)}
            type="number"
            name="amount"
            placeholder="amount"
          />
          <select
            onChange={(e) =>
              setIngredient("ingredient", "unit", e.currentTarget.value)
            }
            name="unit"
          >
            <For each={Units}>
              {({ name, unit }) => <option value={name}>{unit}</option>}
            </For>
          </select>
          <button class="primary" type="button">
            <box-icon
              onClick={handleAddIngredient}
              size="sm"
              name="plus"
            ></box-icon>
          </button>
        </div>

        <div class={styles.dial}></div>
      </section>

      <button class="primary" type="button" onClick={handleAdd}>
        <box-icon name="plus"></box-icon>
        Add
      </button>
    </form>
  );
};

export default Add;
