import { Controller } from "@hotwired/stimulus"
import ReactDOM from 'react-dom'
import * as React from 'react'
import Button from '@mui/material/Button'

export default class extends Controller {
  static targets = ['submit']

  connect() {
    ReactDOM.render(this.button(), this.submitTarget)
  }

  button() {
    return <Button variant="contained" type="submit" name="commit" data-disable-with="Submit">Submit</Button>
  }
}
