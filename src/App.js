import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  card = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
  }

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.validationField = this.validationField.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.checkTrunfo = this.checkTrunfo.bind(this);
    this.state = this.initialFormState();
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    // setState
    this.setState((prev) => ({
      // objeto.card recebe ele mesmo mais outro valor
      card: { ...prev.card, [name]: value },
    }), () => {
      // Callback para resolver o problema async
      this.setState({ isSaveButtonDisabled: this.validationField() });
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();

    const { state } = this;

    this.setState((prev) => ({
      cards: [...prev.cards, state.card],
    }), () => {
      this.setState({
        hasTrunfo: this.checkTrunfo() });
    });

    // Limpa os campos
    this.setState({ card: this.card });
  }

  initialFormState() {
    return {
      card: this.card,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      onInputChange: this.onInputChange,
      onSaveButtonClick: this.onSaveButtonClick,
      cards: [],
    };
  }

  checkTrunfo() {
    const { cards } = this.state;
    return cards.some((item) => item.cardTrunfo === true);
  }

  validationField() {
    const { state } = this;
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = state.card;
    const fields = [cardName, cardDescription, cardImage, cardRare];
    const MAX_ATTR_LEN = 90;
    const MAX_ATTR_SUM = 210;

    if (fields.includes('')) return true;

    const cardAttr = [cardAttr1, cardAttr2, cardAttr3].map((item) => parseInt(item, 10));

    if (cardAttr.some((item) => (item > MAX_ATTR_LEN || item < 0))) return true;

    if (cardAttr.reduce((prev, curr) => prev + curr) > MAX_ATTR_SUM) return true;

    return false;
  }

  render() {
    const { state } = this;
    return (
      <div>
        <Form { ...state } />
        <Card { ...state.card } />
        {state.cards.map((item, index) => <Card key={ index } { ...item } />)}
      </div>
    );
  }
}

export default App;
