import React from 'react';
import { Form } from 'semantic-ui-react';

class MenuForm extends React.Component {
  state = { title: "", }

  componentDidMount() {
    if (this.props.id) {
      const { title } = this.props
      this.setState({ title })
    }
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value, })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.updateMenu({ id: this.props.id, ...this.state, })
      this.props.toggleEdit()
    } else {
      this.props.addMenu(this.state.title)
    }
    this.setState({ title: "", })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Menu"
          placeholder="Title"
          required
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default MenuForm;