import { Controller } from "@hotwired/stimulus"
import ReactDOM from 'react-dom'
import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'

export default class extends Controller {
  static targets = ['dataGridElement']
  static values = { columnNames: Array, options: Object, rowData: Array, style: Object }

  connect() {
    ReactDOM.render(this.grid(), this.dataGridElementTarget)
  }

  grid() {
    const rows = this.rowDataValue.map(function(row) {
      return row
    })

    const columns = this.columnNamesValue.map(function(column) {
      return column
    })

    return <DataGrid style={this.styleValue} rows={rows} columns={columns} {...this.optionsValue}></DataGrid>
  }
}
