import { Controller } from "@hotwired/stimulus"
import ReactDOM from 'react-dom'
import * as React from 'react'
import Button from '@mui/material/Button'

export default class extends Controller {
  static targets = ['container']

  connect() {
    ReactDOM.render(this.button(), this.containerTarget)
  }

  button() {
    return <Button variant="contained">Hello World</Button>
  }
}
