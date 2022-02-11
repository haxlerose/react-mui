import { Controller } from "@hotwired/stimulus"
import ReactDOM from 'react-dom'
import * as React from 'react'
import TextField from '@mui/material/TextField'

export default class extends Controller {
  static targets = ['textFieldElement']
  static values = { attributes: Object }

  connect() {
    ReactDOM.render(this.textField(), this.textFieldElementTarget)
  }

  textField() {
    return <TextField {...this.attributesValue}/>
  }
}
