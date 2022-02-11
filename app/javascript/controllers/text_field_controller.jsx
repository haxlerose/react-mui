import { Controller } from "@hotwired/stimulus"
import ReactDOM from 'react-dom'
import * as React from 'react'
import TextField from '@mui/material/TextField'

export default class extends Controller {
  static targets = ['field']
  static values = { name: String, id: String }

  connect() {
    console.log('TextField controller connected')
    ReactDOM.render(this.textField(), this.fieldTarget)
  }

  textField() {
    return <TextField name={this.nameValue} id={this.idValue}/>
  }
}
