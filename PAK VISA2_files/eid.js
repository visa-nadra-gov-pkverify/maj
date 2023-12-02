function searchKeyPress(e, form)
{
    // look for window.event in case event isn't passed in
    if (typeof e == 'undefined' && window.event) { e = window.event; }
    if (e.keyCode == 13)
    {
		document.getElementById('login:submit-login').click();
    }
}

// called from newNiCOPApplication.xhtml, newModification , new Renewal and reprint Payment TAB
/*function openPaymentWindow()
{
	if (bowser.msie || bowser.firefox) 
	{
		 window.open("HBLPaymentInitiationServlet",'Pak Identity','height=820,width=830,location=no,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,left=500,top=80').focus();
	}
	else 
	{
		var ret = window.showModalDialog("HBLPaymentInitiationServlet", "PAK IDENTITY Payment", "dialogWidth:830px;dialogHeight:820px");
		//alert("Returned from modal: " + ret);
	}
}*/

//called from newNiCOPApplication.xhtml, newModification , new Renewal and reprint Payment TAB
function openPaymentWindow()
{
	if (bowser.msie) 
	{
		 window.open("paymenttermsandconditions.xhtml",'PAK IDENTITY Payment Terms and Conditions','height=820,width=830,location=no,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,left=500,top=80').focus();
	}
	else 
	{
	  var ret = window.showModalDialog("paymenttermsandconditions.xhtml", "PAK IDENTITY Payment Terms and Conditions", "dialogWidth:830px;dialogHeight:820px");
	}
	
	if(document.getElementById("dialog-close")) 
	{
		/*document.getElementById("dialog-close").addEventListener("click", function(e){window.parent.location.reload();});*/
		
		document.getElementById("dialog-close").addEventListener("click", 
			function(e)
			{
				if(window.parent.PF('myWizard').currentStep == 'payment')
				{
					var appType="";
					
					if(document.getElementById("renewalForm:appType")!=null && document.getElementById("renewalForm:appType").value!=null)
					{
						appType=document.getElementById("renewalForm:appType").value;
					}
					else if(document.getElementById("modificationForm:appType")!=null && document.getElementById("modificationForm:appType").value!=null)
					{
						appType=document.getElementById("modificationForm:appType").value;
					} 
					
					if(appType=="renewal"|| appType=="modify")
					{
						window.parent.PF('myWizard').next();
					}
				}
			});
	}
}



//Before Payment Window
function openTermsAndConditionsWindow(){
	var termsChkVal = document.getElementById("sss:termsCheckboxId").checked;
	if(termsChkVal){
		document.location.href="PaymentInitiationServlet";
	}else{
		document.getElementById("termsChkErrorId").innerHTML = '*';
	}
}

function scrollToTop(){
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}

// prints receipt for payment of HBL or E-Sahulat
function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;	
     document.body.innerHTML = printContents;	
     window.print();	
     document.body.innerHTML = originalContents;
}

function printDivInNewWindow(divName) {
	var divToPrint=document.getElementById(divName).innerHTML;
	var newWin=window.open('','Print-Window');
	var headContents = $(document).find("head").clone().html();
	var receiptHeader = "<table class='table'><tr>" +
			"<td colspan='2' style='width: 100%;text-align: center;border-top: none;' >" +
			"<div ><img src='./images/pak_visa_logo.png' width='250'/></div></td></tr>" +
			"<tr><td colspan='2' style='border-top: none;width: 100%;text-align: center;font-size: 18px;font-family:calibri;padding-top: 15px;'>" +
			"<b>NATIONAL DATABASE AND REGISTRATION AUTHORITY</b></td></tr></table>";
	var reciptFooter = "<table class='table'><tr><td colspan='2' style='width: 100%;text-align: center;'>" +
			"<p style='text-align: center; font-family: calibri;font-size: 16px;line-height:1.5em;'>For information of Pak-Identity Application fee, please refer to the information available on http://id.nadra.gov.pk/fee/</p>" +
					"</td></tr></table>";
	newWin.document.open();
	newWin.document.write("<html><head>"+headContents+"</head><body onload='window.print();window.close();'>"+receiptHeader+""+divToPrint+""+reciptFooter+"</body></html>");
	newWin.document.close();
}

function printReceipt(divName) {
	var divToPrint=document.getElementById(divName).innerHTML;
	var newWin=window.open('','Print-Window');
	var headContents = $(document).find("head").clone().html();
	var receiptHeader = "<table class='table'><tr>" +
			"<td colspan='2' style='width: 100%;text-align: center;border-top: none;' >" +
			"<div ><img src='./images/pak_visa_logo.png' width='250'/></div></td></tr>" +
			"<tr><td colspan='2' style='border-top: none;width: 100%;text-align: center;font-size: 18px;font-family:calibri;padding-top: 15px;'>" +
			"<b>NATIONAL DATABASE AND REGISTRATION AUTHORITY</b></td></tr></table>";
	var reciptFooter = "<table class='table'><tr><td colspan='2' style='width: 100%;text-align: center;'>" +
			"<p style='text-align: center; font-family: calibri;font-size: 16px;line-height:1.5em;'>For information of Pak-Identity Application fee, please refer to the information available on http://id.nadra.gov.pk/fee/</p>" +
					"</td></tr></table>";
	newWin.document.open();
	newWin.document.write("<html><head>"+headContents+"</head><body class='payment-receipt' onload='window.print();window.close();'>"+receiptHeader+""+divToPrint+""+reciptFooter+"</body></html>");
	newWin.document.close();
}


function printInNewWindow() 
{
	window.showModalDialog("wizard-tabs/common/payments/paymentReceipt/paymentReceipt.xhtml", "PAK IDENTITY Payment", "dialogWidth:580px;dialogHeight:680px");
	
	if(document.getElementById("dialog-close")) 
	{
		document.getElementById("dialog-close").addEventListener("click", 
				function(e)
				{
					/*window.parent.myWizard.next();*/
					
					if(window.parent.PF('myWizard').currentStep == 'payment')
					{
						var appType="";
						
						if(document.getElementById("renewalForm:appType")!=null && document.getElementById("renewalForm:appType").value!=null)
						{
							appType=document.getElementById("renewalForm:appType").value;
						}
						else if(document.getElementById("modificationForm:appType")!=null && document.getElementById("modificationForm:appType").value!=null)
						{
							appType=document.getElementById("modificationForm:appType").value;
						} 
						
						if(appType=="renewal"|| appType=="modify")
						{
							window.parent.PF('myWizard').next();
						}
					}


				});
	}
}

function closeDialog() 
{
	if (bowser.msie) 
	{
	  window.close();
	}
	else if (bowser.chrome || bowser.opera || bowser.firefox || bowser.msedge)
	{
	  	var pResponse = 'close';
		parent.postMessage(pResponse,"*");
	}
	
	/*window.parent.location.reload();*/
	
	/*window.parent.myWizard.next();*/
	
	if(window.parent.PF('myWizard').currentStep == 'payment')
	{
		var appType="";
		
		if(window.parent.document.getElementById("renewalForm:appType")!=null && window.parent.document.getElementById("renewalForm:appType").value!=null)
		{
			appType=window.parent.document.getElementById("renewalForm:appType").value;
		}
		else if(window.parent.document.getElementById("modificationForm:appType")!=null && window.parent.document.getElementById("modificationForm:appType").value!=null)
		{
			appType=window.parent.document.getElementById("modificationForm:appType").value;
		} 
		
		if(appType=="renewal"|| appType=="modify")
		{
			window.parent.PF('myWizard').next();
		}
	}
}



/**
 * 
 * @author M. Ifzaal Majeed
 * Dated 05/08/2015
 */
function stopPollingOtherThanIE() {
	if (!bowser.msie) {
		PF('polling').stop();
		}
	}

function checkBrowserForPooling(){
	if (!bowser.msie) {
		PF('polling').stop();
		return true;
	}
	return false;
}	

function openFingerprintsWindow()
{
	if (bowser.msie || bowser.firefox) 
	{
		openedFingerprintWindow = window.open("FingerprintsPopupServlet",'Fingerprints Acquisition','height=845,width=1565,location=no,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,left=150,top=80').focus();
	}
	else if (bowser.chrome || bowser.opera)
	{
		openedFingerprintWindow = window.showModalDialog("FingerprintsPopupServlet", "Fingerprints Acquisition", "dialogWidth:1565px;dialogHeight:845px");
	}
}


//function preventBack(){window.history.forward();}
//setTimeout("preventBack()", 0);
//window.onunload=function(){null};
