import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome da carta
          <input type="text" data-testid="name-input" name="name" />
        </label>

        <label htmlFor="description">
          Descrção
          <textarea name="description" data-testid="description-input" />
        </label>

        <label htmlFor="attr1">
          Attr1
          <input type="number" data-testid="attr1-input" name="attr1" />
        </label>

        <label htmlFor="attr2">
          Attr2
          <input type="number" data-testid="attr2-input" name="attr2" />
        </label>

        <label htmlFor="attr3">
          Attr3
          <input type="number" data-testid="attr3-input" name="attr3" />
        </label>

        <label htmlFor="img">
          Imagem
          <input type="text" data-testid="image-input" name="img" />
        </label>

        <label htmlFor="rare">
          <select data-testid="rare-input" name="rare">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          <input type="checkbox" name="trunfo" data-testid="trunfo-input" />
        </label>

        <button data-testid="save-button" name="sace" type="submit">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
