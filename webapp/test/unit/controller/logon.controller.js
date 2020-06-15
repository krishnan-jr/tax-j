/*global QUnit*/

sap.ui.define([
	"com/app/tax/TaxApp-alpha/controller/logon.controller"
], function (Controller) {
	"use strict";

	QUnit.module("logon Controller");

	QUnit.test("I should test the logon controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});