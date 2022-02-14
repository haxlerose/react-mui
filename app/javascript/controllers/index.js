// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import ButtonController from "./button_controller.jsx"
import DataGridController from "./data_grid_controller.jsx"
import LinkController from "./link_controller.jsx"
import TextFieldController from "./text_field_controller.jsx"
application.register("button", ButtonController)
application.register("data-grid", DataGridController)
application.register("link", LinkController)
application.register("text-field", TextFieldController)
