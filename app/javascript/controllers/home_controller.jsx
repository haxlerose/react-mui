import { Controller } from "@hotwired/stimulus"
import ReactDOM from 'react-dom'
import * as React from 'react'
// import MUIComponent from '@mui/material/MUIComponentName'

export default class extends Controller {
  static targets = ['renderElement']
  static values = { data: Object }

  connect() {
    console.log('Home Controller Connected')
    console.log(this.dataValue)
    ReactDOM.render(this.elementToRender(), this.renderElementTarget)
  }

  elementToRender() {
    const dataOne = this.dataValue['dataKey']
    const dataTwo = this.dataValue['dataKey2']
    const dataThree = this.dataValue['dataKey3']

    // return <MUIComponent></MUIComponent>
  }
}
