import { Controller } from "@hotwired/stimulus"
import ReactDOM from 'react-dom'
import * as React from 'react'
import Link from '@mui/material/Link'

export default class extends Controller {
  static targets = ['linkElement']
  static values = { attributes: Object, text: String }

  connect() {
    console.log('link controller')
    ReactDOM.render(this.link(), this.linkElementTarget)
  }

  link() {
    return <Link {...this.attributesValue}>{this.textValue}</Link>
  }

  confirmClick() {
    console.log("Link has been clicked.")
  }
}
