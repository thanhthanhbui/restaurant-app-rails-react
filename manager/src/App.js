import React, { Component } from 'react';
import axios from 'axios';
import { Header, Container } from 'semantic-ui-react';
import MenuForm from './components/MenuForm';
import Menu from './components/Menu';

class App extends Component {
  state = { menus: [], }
  
  componentDidMount() {
    axios.get("/api/menus")
      .then( res => {
        this.setState({ menus: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  addMenu = (title) => {
    axios.post("/api/menus", {title} )
      .then( res => {
        const { menus } = this.state
        this.setState({ menus: [...menus, res.data], })
      })
  }

  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
      .then( res => {
        const { menus } = this.state
        this.setState({ menus: menus.filter( menu => menu.id !== id ), })
      })
  }

  updateMenu = (id) => {
    axios.put(`/api/menus/${id}`)
      .then( res => {
        const menus = this.state.menus.map( menu => {
          if (menu.id === id)
            return res.data
          return menu
        })
        this.setState({ menus })
      })
  }

  renderMenus = () => {
    return this.state.menus.map( menu => (
      <Menu
        key={menu.id}
        {...menu}
        deleteMenu={this.deleteMenu}
        updateMenu={this.updateMenu}
      />
    ))
  }

  render() {
    return (
      <Container style={{ marginTop: "25px" }}>
        <Header as="h1">Faifo Kitchen</Header>
        <MenuForm addMenu={this.addMenu} />
        { this.renderMenus() }
      </Container>
    );
  }
}

export default App;
