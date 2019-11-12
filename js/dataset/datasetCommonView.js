export const getDatasetTemplate = () => {
  return  `
    <div class="dataset-manager">
      <form action="" class="dataset-form">
        <div class="dataset-form__inner">
            <label for="datasetX" class="dataset-form__label">X:</label>
            <input type="number" class="dataset-form__input" id="datasetX">
          </div>
        <div class="dataset-form__inner">
          <label for="datasetY" class="dataset-form__label">Y:</label>
          <input type="number" class="dataset-form__input" id="datasetY">
        </div>
        <button class="dataset-form__add button">Add</button>
      </form>
  
      <div class="dataset-output">
        <table class="dataset-output__table">
          <thead>
            <tr>
              <th>X</th>
              <th>Y</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody id="datasetBody"></tbody>
        </table>
        <button class="dataset-output__clear button button--red">Clear All</button>
      </div>
    </div>
  `;
};
