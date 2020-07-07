function initModel() {
	var sUrl = "/slogin/odata/v2/Udetails/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}