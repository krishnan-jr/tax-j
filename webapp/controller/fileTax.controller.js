sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	'sap/m/MessageToast',
	"sap/m/MessageBox"
], function (Controller, JSONModel, MessageToast, MessageBox) {
	"use strict";

	return Controller.extend("com.app.tax.TaxApp-alpha.controller.fileTax", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.app.tax.TaxApp-alpha.view.fileTax
		 */
		onInit: function () {

			/**	this.data = {
					Products: [

						{
							slno: '001',
							nat: 'type01',
							desc: 'test01',
							amt: '5001'
						}, {
							slno: '001',
							nat: 'type02',
							desc: 'test02',
							amt: '5002'
						}
					]
				};**/

			// this.jModel = new sap.ui.model.json.JSONModel();
			// this.jModel.setData(this.data);

		},

		/**	onBeforeRendering: function () {
				this.byId('ins').setModel(this.jModel);
			},**/
		/**		addRow: function (oArg) {
					this.data.Products.push({
						slno: '',
						nat: '',
						desc: '',
						amt: ''
					});
					this.jModel.refresh(); //which will add the new record
				},
			/**	deleteRow: function (oArg) {
					var deleteRecord = oArg.getSource().getBindingContext().getObject();
					for (var i = 0; i < this.data.Products.length; i++) {
						if (this.data.Products[i] == deleteRecord) {
							//	pop this._data.Products[i] 
							this.data.Products.splice(i, 1); //removing 1 record from i th index.
							this.jModel.refresh();
							break; //quit the loop
						}
					}
				} **/

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.app.tax.TaxApp-alpha.view.fileTax
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.app.tax.TaxApp-alpha.view.fileTax
		 */
		onAfterRendering: function () {
			var flag = true;
			var inc = 0;
			this.getView().byId("inchp").attachBrowserEvent('click', function () {
				inc++;
				if (inc % 3 == 0) {
					flag = true;
				}
				if (flag) {
					MessageBox.information(
						"Note: Maximum Loss from House property that can be set-off is INR 2,00,000. To avail the benefit of carry forward and set off of loss, please use ITR-2 "
					);
					flag = false;
				}
			});
		}

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.app.tax.TaxApp-alpha.view.fileTax
		 */
		//	onExit: function() {
		//
		//	}

	});

});