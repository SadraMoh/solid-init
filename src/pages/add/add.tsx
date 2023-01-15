import { Component, For } from "solid-js";
import styles from "../add/add.module.scss";

const Add: Component = () => {

  return (
    <form>

      <div class="form-group">
        <label for="title">Recipe name</label>
        <input type="text" name="title" />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea></textarea>
      </div>

      <section  class={styles.ingredients}>
        <h3>Ingredients</h3>

        <ul class={styles.list}>
          <For each={[1, 2]}>
            {() => <li>
              <h6>Butter</h6>
              <strong>
                <span>2</span>
                <span>gramms</span>
              </strong>
              <button>X</button>
            </li>}
          </For>
        </ul>

        <div class={styles.adder}>
          <input type="text" placeholder="name"/>
          <input type="number" name="amount" placeholder="amount"/>
          <select name="unit">
            <option value="grams">grams</option>
          </select>
          <button class="primary" type="button"></button>
        </div>

        <div class={styles.dial}>

        </div>

      </section>

      <button class="primary" type="submit">Add</button>

    </form>
  )

}

export default Add;