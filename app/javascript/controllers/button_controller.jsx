import { Controller } from "@hotwired/stimulus"
import ReactDOM from 'react-dom'
import * as React from 'react'
import Button from '@mui/material/Button'

export default class extends Controller {
  static targets = ['element']
  static values = { attributes: Object, text: String }

  connect() {
    ReactDOM.render(this.button(), this.submitTarget)
  }

  button() {
    return <Button {...this.attributesValue}>{this.textValue}</Button>
  }
}
