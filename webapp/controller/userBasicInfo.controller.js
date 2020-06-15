sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/base/Event",
	"sap/ui/core/Core",
	"sap/ui/core/Element",
	"sap/m/RadioButton",
	"sap/ui/core/Control",
	"sap/ui/base/EventProvider",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
], function (Controller, Event, Core, Element, RadioButton, Control, EventProvider, MessageToast, MessageBox) {
	"use strict";

	return Controller.extend("com.app.tax.TaxApp-alpha.controller.userBasicInfo", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.app.tax.TaxApp-alpha.view.userBasicInfo
		 */
		onInit: function () {
			this.byId("aadharNo").setEnabled(true);
			this.byId("aadharEnrol").setEnabled(false);

		},
		ay: function (oEvent) {
			this.byId("aadharNo").setEnabled(true);
			this.byId("aadharEnrol").setEnabled(false);
		},
		an: function (oEvent) {
			this.byId("aadharNo").setEnabled(false);
			this.byId("aadharEnrol").setEnabled(true);
		},

		onSave: function (oevt) {
		

			if (this.byId("aadharNo").getValue().length === 12) {
				this.byId("aadharNo").setValueState(sap.ui.core.ValueState.None);
				// this.model.setValueState(sap.ui.core.ValueState.Error);
			} else {
				this.byId("aadharNo").setValueState(sap.ui.core.ValueState.Error);
				this.byId("aadharNo").setValueStateText("Aadhar number must be 12 Digits");
				
			}
		}


	});

});