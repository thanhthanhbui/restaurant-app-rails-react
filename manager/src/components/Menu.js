import React from 'react';
import MenuForm from './MenuForm';
import { Button, Header, Icon } from 'semantic-ui-react';

class Menu extends React.Component {
  state = { editing: false }

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  render() {
    const { id, title, deleteMenu, } = this.props
    return (
      <div>
        {
          this.state.editing ?
            <MenuForm {...this.props} toggleEdit={this.toggleEdit} />
          :
            <Header as="h2">{ title }</Header>
        }
        <div>
          <Button icon color="blue" onClick={this.toggleEdit}>
            <Icon name="edit" />
          </Button>
          <Button icon color="red" onClick={() => deleteMenu(id)}>
            <Icon name="trash" />
          </Button>
        </div>

      </div>
    )
  }
}

export default Menu;