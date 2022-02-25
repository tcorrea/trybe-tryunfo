import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.validationField = this.validationField.bind(this);
    this.state = this.initialFormState();
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.setState({ isSaveButtonDisabled: this.validationField() });
    });
    // this.setState({}, callback)
  }

  initialFormState() {
    return {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: '',
      // hasTrunfo,
      isSaveButtonDisabled: true,
      onInputChange: this.onInputChange,
      // onSaveButtonClick: this.onSaveButtonClick,
    };
  }

  validationField() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;

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
    return (
      <div>
        <Form { ...this.state } />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
