var ToolTip = function () {
	var initToolTip = function() {
		
		$(document).on('mouseenter', '#payment_fornameTP,#payment_surnameTP,#payment_emailTP,#payment_postalCodeTP,#payment_stateTP,#citizenNumber, #priority,#renewal_priority, #firstName,#firstNameCancel, #lastName,#lastNameCancel, #gender, #maritalStatus,'+ 
				'#motherLanguage,#birth_date,#birth_place,#tip_religion,#id_mark,#bloodGroup_TP,#oldNIC_TP, #disability_TP, #lastNameNewNicop,'+
				'#certificate_TP, #certifDte_TP,#mobileNum_TP,#faxNum_TP,#email_TP,#landline_TP,#professional_TP,#quali_TP,#presentAddress_TP,'+
				'#permAddress_TP,#overseas_PresentAddress_TP,#overseas_PermAddress_TP,#father_TP,#mother_TP,#spouse_TP,#marriageDte_TP,#headRelation_TP,'+
				'#nextKin_TP,#relatives_TP,#otherWives_TP,#emergencyContact_TP,#accomodation,#cardDelCountry_TP,#cardDelOptionMain_TP,#cardDelOption_TP,#photoUpload_TP,'+
				'#docUpload_TP,#fingerUpload_TP,#atteserInfo_TP,#witnessOne_TP,#witnessTwo_TP,#reprint_applyingFrom_TP,#smartCardPin_TP,#renewal_CountryStay,'+
				'#renewal_SelectCard_TP,#mobile_operator,#password_policy,#city_village,#city_village1,#cvc,#pocNumber,#dobTooltip,#citizenTP,#cnicNicopPro,#pocPro,#frcPro,#verificationPro,#appliedTrackingId', function(e) { 
			
		//$(document).ready(function() {
				$('#citizenNumber').tooltipster({
					content: $('<p style="text-align:left;">Please enter your National Identification Number i.e. 13 digit number, as stated on your Identity Card.</p>'),
					// setting a same value to minWidth and maxWidth will result in a fixed width
					/*minWidth: 300,*/
					maxWidth: '250',
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#pocNumber').tooltipster({
					content: $('<p style="text-align:left;">Please enter your Pakistan Origin Card Number i.e. 13 digit number, as stated on your Identity Card.</p>'),
					// setting a same value to minWidth and maxWidth will result in a fixed width
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#priority').tooltipster({
					content: $('<p style="text-align:left;">Please select the priority for acquiring your National Identity Card.</p>'+
								'<p><ul><li><b>NORMAL:</b>The Card shall be delivered within 4 Weeks Approx, after the application has been launched.</li></ul></p>'+
								'<p><ul><li><b>URGENT:</b>The Card shall be delivered within 3 Weeks Approx, after the application has been launched.</li></ul></p>'+
								'<p><ul><li><b>EXECUTIVE:</b>The Card shall be delivered within 1 Week Approx, after the application has been launched.</li></ul></p>'+
								'<p>The applied fee structure is different for each of the priority selected by the applicant.For more information and instructions on the Fee Structure, see PAK ID Fee Structure.</p>'),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#renewal_priority').tooltipster({
					content: $('<p style="text-align:left;">Please select the priority for acquiring your National Identity Card.</p>'+
								'<p><ul><li><b>NORMAL:</b>The Card shall be delivered within 4 Weeks Approx, after the application has been launched.</li></ul></p>'+
								'<p><ul><li><b>URGENT:</b>The Card shall be delivered within 3 Weeks Approx, after the application has been launched.</li></ul></p>'+
								'<p><ul><li><b>EXECUTIVE:</b>The Card shall be delivered within 1 Week Approx, after the application has been launched.</li></ul></p>'+
								'<p>The applied fee structure is different for each of the priority selected by the applicant.For more information and instructions on the Fee Structure, see PAK ID Fee Structure.</p>'),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				
				$('#firstName').tooltipster({
					content : $('<p style="text-align:left;">Please enter GIVEN NAME(S) of the Applicant.</p>'+
								'<p><ul><li><b>EXAMPLE:</b></br>'+ 
								'1) NAME: Hassan Ahmed</li>GIVEN NAME(S): Hassan </br>Surname: Ahmed</br></br>'+
								'2) NAME: Hassan Ahmed Qureshi</br>GIVEN NAME(S): Hassan Ahmed </br>Surname: Qureshi</br></br>'+
								'3)	NAME: Hassan (Single Name)</br>GIVEN NAME(S): </br>Surname: Ahmed</li></ul></p>'+
								'<p><b><u>NOTE:</u></b></br>In case of modification of FORENAME(S) or Surname (of Applicant) supporting documents are required and must be uploaded in the DOCUMENT section of the PAK ID. For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
								/*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#firstNameCancel').tooltipster({
					content: $('<p style="text-align:left;">Please enter FORENAME(S) of the Applicant.</p>'+
								'<p><ul><li><b>EXAMPLE:</b></br>'+ 
								'1) NAME: Hassan Ahmed</li>FORENAME(S): Hassan </br>Surname: Ahmed</br></br>'+
								'2) NAME: Hassan Ahmed Qureshi</br>FORENAME(S): Hassan Ahmed </br>Surname: Qureshi</br></br>'+
								'3)	NAME: Hassan (Single Name)</br>FORENAME(S): </br>Surname: Ahmed</li></ul></p>'),
								/*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#lastName').tooltipster({
					content: $('<p style="text-align:left;">Please enter Surname of the Applicant.</p>'+
								'<p><ul><li><b>EXAMPLE:</b></br>'+ 
								'1) NAME: Hassan Ahmed</li>FORENAME(S): Hassan </br>Surname: Ahmed</br></br>'+
								'2) NAME: Hassan Ahmed Qureshi</br>FORENAME(S): Hassan Ahmed </br>Surname: Qureshi</br></br>'+
								'3)	NAME: Hassan (Single Name)</br>FORENAME(S): </br>Surname: Ahmed</li></ul></p>'+
								'<p><b><u>NOTE:</u></b></br>In case of modification of FORENAME(S) or Surname (of Applicant) supporting documents are required and must be uploaded in the DOCUMENT section of the PAK ID. For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
								/*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#lastNameNewNicop').tooltipster({
					content: $('<p style="text-align:left;">Please enter Surname of the Applicant.</p>'+
								'<p><ul><li><b>EXAMPLE:</b></br>'+ 
								'1) NAME: Hassan Ahmed</li>Given name(s): Hassan </br>Surname: Ahmed</br></br>'+
								'2) NAME: Hassan Ahmed Qureshi</br>Given name(s): Hassan Ahmed </br>Surname: Qureshi</br></br>'+
								'3)	NAME: Hassan (Single Name)</br>Given name(s): </br>Surname: Ahmed</li></ul></p>'),
								/*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#lastNameCancel').tooltipster({
					content: $('<p style="text-align:left;">Please enter Surname of the Applicant.</p>'+
								'<p><ul><li><b>EXAMPLE:</b></br>'+ 
								'1) NAME: Hassan Ahmed</li>FORENAME(S): Hassan </br>Surname: Ahmed</br></br>'+
								'2) NAME: Hassan Ahmed Qureshi</br>FORENAME(S): Hassan Ahmed </br>Surname: Qureshi</br></br>'+
								'3)	NAME: Hassan (Single Name)</br>FORENAME(S): </br>Surname: Ahmed</li></ul></p>'),
								/*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#gender').tooltipster({
					content: $('<p style="text-align:left;">Please select the Gender of the Applicant.</p>'+
					 		   '<p><b><u>DOCUMENTS REQUIRED:</u></b></br>In case of modification of Gender supporting documents are required and must be uploaded in the DOCUMENT section of the PAK ID Application.</p>'),
					 		  /*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#motherLanguage').tooltipster({
					content: $('<p style="text-align:left;">Please select the check box in order to update the Applicant Mother Language.</p>'),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#birth_date').tooltipster({
					content: $('<p style="text-align:left;">Please select the check box in order to update the Applicant Date of Birth. Change your date of birth only if you wish it to be updated on your card.</p>'+
							   '<p><b><u>NOTE:</u></b></br>In case the Date of Birth is modified,</p>'+
							   '<ul><li>Supporting documents are required and must be uploaded in the DOCUMENT section of the PAK ID. For more information and instructions on the documents required, see PAK ID Supporting Documents section</li>'+
							   '<li>Additional fee applies. For more information and instructions on the Fee Structure, see PAK ID Fee Structure.</li></ul>'),
							   /*minWidth: 300,*/
					maxWidth: 300,
					position: 'bottom',
				    trigger: 'click'
				});
				
				
				$('#birth_place').tooltipster({
					content: $('<p style="text-align:left;">Please select the place where the applicant was born. </p>'+
							   '<p><b><u>NOTE:</u></b></br>The Applicant has to provide the supporting document for modification in any of the following:</p>'+
							   '<ul><li>Country</li><li>Province</li><li>Tehsil</li><li>District</li>'+
							   '<p>For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
							   /*minWidth: 300,*/
					maxWidth: 300,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#tip_religion').tooltipster({
					content: $('<p style="text-align:left;">Please select the religion of the Applicant from the provided list.</p>'+
							   '<p><b><u>NOTE:</u></b></br>Please note that if the existing religion of the Applicant is ISLAM, then the modification in religion is not permitted.</p>'),
							   /*minWidth: 300,*/
					maxWidth: 300,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#id_mark').tooltipster({
					content: $('<p style="text-align:left;">If you do not have identification mark, write None.</p>'),
							   /*minWidth: 300,*/
					maxWidth: 300,
					position: 'bottom',
				    trigger: 'click'
				});
				
				
				$('#bloodGroup_TP').tooltipster({
					content: $('<p style="text-align:left;">Please select the Blood group of the Applicant from the provided list.</p>'),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'bottom',
				    trigger: 'click'
				});
				
				
				$('#oldNIC_TP').tooltipster({
					content: $('<p style="text-align:left;">Please enter the old Citizen Number (11 digit Number) of the Applicant (if Applicable).</p>'),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#disability_TP').tooltipster({
					content: $('<p style="text-align:left;">Please select the disability type (If Applicable) from the given list.</p>'+
							   '<p style="text-align:left;">If you select any of the following mentioned disabilities, disability logo will be printed on your card.</p>'+
							   '<ul><li>Blind</li><li>Physical Disability</li><li>Mentally Retarded</li><li>Hearing Impaired</li> </ul><br/>'+
							   '<p><b><u>NOTE:</u></b></br>The Applicant has to provide the relevant supporting document for the disability selected in DISABILITY TYPE. For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
							   /*minWidth: 300,*/
					maxWidth: 300,
					position: 'right',
				    trigger: 'click'
				});
				
				$('#certificate_TP').tooltipster({
					content: $('<p style="text-align:left;">Please enter the certificate number of the Disability Certificate issued by National/Provincial Council For Rehabilitation Of Disabled Persons.</p>'),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'right',
				    trigger: 'click'
				});
				
				
				$('#certifDte_TP').tooltipster({
					content: $('<p style="text-align:left;">Please enter the date of Issuance of the Disability certificate. This is the Date of Issuance of certificate mentioned on the disability certificate issued by the National/Provincial Council For Rehabilitation Of Disabled Persons.</p>'),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'right',
				    trigger: 'click'
				});
				
				
				$('#mobileNum_TP').tooltipster({
					content: $('<p style="text-align:left;">Please enter Applicant Mobile Number for contact.</p>'+
							   '<p><b><u>NOTE:</u></b></br>All the correspondence regarding PAK ID shall be done on the provided number.</p>'),
							   /*minWidth: 300,*/
					maxWidth: 300,
					position: 'right',
				    trigger: 'click'
				});
				
				
				$('#faxNum_TP').tooltipster({
					content: $('<p style="text-align:left;">Please enter applicant Fax Number.</p>'),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'right',
				    trigger: 'click'
				});
				
				
				$('#email_TP').tooltipster({
					content: $('<p style="text-align:left;">Please enter an Applicant Email Address.</p>'+
							   '<p><b><u>NOTE:</u></b></br>All the correspondence regarding this Application status shall be done on the provided email Address.</p>'),
							   /*minWidth: 300,*/
					maxWidth: 300,
					position: 'right',
				    trigger: 'click'
				});
				
				
				$('#landline_TP').tooltipster({
					content: $('<p style="text-align:left;">Please provide a landline number</p>'),
					minWidth: 100,
					maxWidth: 300,
					position: 'right',
				    trigger: 'click'
				});
				
				
				$('#professional_TP').tooltipster({
					content: $('<p style="text-align:left;">Please provide Applicant Professional information details from the given list</p>'),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#quali_TP').tooltipster({
					content: $('<p style="text-align:left;">Please provide Applicant Qualification information details from the given list</p>'),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#maritalStatus').tooltipster({
					content: $('<p style="text-align:left;">Please select the check box in order to update the Applicant Marital Status.</p>'+
							   '<table border="1" style="color:#fff;width:50%;border-color:#fff;"><tr><td>From</td><td>To</td></tr>'+
							   '<tr><td>Unmarried</td><td>Married</td></tr>'+
							   '<tr><td>Married</td><td>Divorcee</td></tr>'+
							   '<tr><td>Divorcee</td><td>Married</td></tr>'+
							   '<tr><td>Married</td><td>Widowed</td></tr>'+
							   '<tr><td>Widowed</td><td>Married</td></tr>'+
							   '</table>'+
							   '<p><b><u>NOTE:</u></b></br>Please note that In case the marital status is modified, supporting documents are required and must be uploaded in the DOCUMENT section of the PAK ID. For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
							   /*minWidth: 300,*/
					maxWidth: 300,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#applySMNicop').tooltipster({
					content: $('<p style="text-align:left;">Please select YES option if you wish to apply for acquiring chip based Smart NICOP.</p>'+
								'<p><ul><li>By selecting the Smart NICOP option the priority is set to be executive i.e. The applied Card shall be delivered within 4 days.</ul></p>'),
								/*minWidth: 300,*/
					maxWidth: 300,
					position: 'bottom',
					animation: 'fade',
				    trigger: 'click'
					//	,trigger: 'click'
				});
				
				$('#presentAddress_TP').tooltipster({
					content: $('<p style="text-align:left;">Please provide Applicant address details</p>'+
							   '<p><b><u>NOTE:</u></b></br>The Applicant has to provide the supporting document for modification of Present Address in any of the following:</p>'+
								'<ul><li>Province</li><li>District</li><li>Tehsil</li><li>City/Village</li></ul>'+
								'<p>For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
								/*minWidth: 300,*/
					maxWidth: 400,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#permAddress_TP').tooltipster({
					content: $('<p style="text-align:left;">Please provide Applicant address details</p>'+
							   '<p><b><u>NOTE:</u></b></br>The Applicant has to provide the supporting document for modification of Permanent Address in any of the following:</p>'+
								'<ul><li>Province</li><li>District</li><li>Tehsil</li><li>City/Village</li></ul>'+
								'<p>For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
								/*minWidth: 300,*/
					maxWidth: 400,
					position: 'top',
				    trigger: 'click'
				});
				
				
				$('#overseas_PresentAddress_TP').tooltipster({
					content: $('<p style="text-align:left;">Please provide Applicant address details</p>'+
							   '<p><b><u>NOTE:</u></b></br>The Applicant has to provide the supporting document for modification of Present Address in any of the following:</p>'+
								'<ul><li>Country</li><li>State</li><li>City</li></ul>'+
								'<p>For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'+
								'<p>One address should be from Pakistan either Present Address or Permanent Address.</p>'),
								/*minWidth: 300,*/
					maxWidth: 400,
					position: 'bottom',
				    trigger: 'click'
				});
			
				$('#overseas_PermAddress_TP').tooltipster({
					content: $('<p style="text-align:left;">Please provide Applicant address details</p>'+
							   '<p><b><u>NOTE:</u></b></br>The Applicant has to provide the supporting document for modification of Permanent Address in any of the following:</p>'+
								'<ul><li>Country</li><li>State</li><li>City</li></ul>'+
								'<p>For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'+
								'<p>One address should be from Pakistan either Present Address or Permanent Address.</p>'),
								/*minWidth: 300,*/
					maxWidth: 400,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#father_TP').tooltipster({
					content: $('<p style="text-align:left;">Please tick the check box in order to update the Applicant Father information.</p>'+
							   '<p><b><u>NOTE:</u></b></br>In case of modification of FATHER NAME/CNIC supporting documents are required and must be uploaded in the DOCUMENT section of the PAK ID. For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
							   /*minWidth: 300,*/
					maxWidth: 400,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#mother_TP').tooltipster({
					content: $('<p style="text-align:left;">Please tick the check box in order to update the Applicant Mother information.</p>'+
							   '<p><b><u>NOTE:</u></b></br>In case of modification of Mother NAME/CNIC supporting documents are required and must be uploaded in the DOCUMENT section of the PAK ID. For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
							   /*minWidth: 300,*/
					maxWidth: 400,
					position: 'bottom',
				    trigger: 'click'
				});
				
		
				$('#spouse_TP').tooltipster({
					content: $('<p style="text-align:left;">Please tick the check box in order to update the Applicant Spouse information.</p>'+
							   '<p><b><u>NOTE:</u></b></br>In case of modification of Spouse NAME/CNIC supporting documents are required and must be uploaded in the DOCUMENT section of the PAK ID. For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
							   /*minWidth: 300,*/
					maxWidth: 400,
					position: 'right',
				    trigger: 'click'
				});
				
				
				$('#marriageDte_TP').tooltipster({
					content: $('<p style="text-align:left;">Please enter the marriage date (As mentioned on the Marriage Registration certificate). The Marriage registration certificate can be acquired from the respective Local Government body.</p>'),
					/*minWidth: 300,*/
					maxWidth: 400,
					position: 'right',
				    trigger: 'click'
				});
				
				
				$('#headRelation_TP').tooltipster({
					content: $('<p style="text-align:left;"><b><u>EXAMPLE 1:</u> </b><br />'+
							   '<b>HEAD OF THE FAMILY:</b> Father <br />'+
							   '<b>RELATIONSHIP WITH HEAD:</b> Child</br>'+
							   '<br /><b><u>EXAMPLE 2:</u> </b><br />'+
							   '<b>HEAD OF THE FAMILY:</b> Husband <br />'+
							   '<b>RELATIONSHIP WITH HEAD:</b> Wife</br></p>'),
							   /*minWidth: 300,*/
					maxWidth: 400,
					position: 'top',
				    trigger: 'click'
				});
				
				
				$('#nextKin_TP').tooltipster({
					content: $('<p style="text-align:left;">Please provide information of the declared next of Kin. </p>'+
							   '<p><b><u>DOCUMENTS REQUIRED: </u></b></br>The supporting documents for next of Kin are required and must be uploaded in the DOCUMENT section of the PAK ID. For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
							   /*minWidth: 300,*/
					maxWidth: 400,
					position: 'top',
				    trigger: 'click'
				});
				
				
				$('#relatives_TP').tooltipster({
					content: $('<p style="text-align:left;">Please provide Applicant Relative Information. </p>'+
							   '<p><b><u>DOCUMENTS REQUIRED: </u></b></br>In case of entering Applicant Relative Name/CNIC supporting documents are required and must be uploaded in the DOCUMENT section of the PAK ID. For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
							   /*minWidth: 300,*/
					maxWidth: 400,
					position: 'bottom',
				    trigger: 'click'
				});
				
				
				$('#otherWives_TP').tooltipster({
					content: $('<p style="text-align:left;">Please enter wives details in case of Applicant having more than one wife. </p>'+
							   '<p><b><u>DOCUMENTS REQUIRED: </u></b></br>In case of modification of Wife Name, CNIC or Marriage Date (of Applicant) supporting documents are required and must be uploaded in the DOCUMENT section of the PAK ID. For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
							   /*minWidth: 300,*/
					maxWidth: 400,
					position: 'bottom',
				    trigger: 'click'
				});
				
				
				
				$('#emergencyContact_TP').tooltipster({
					content: $('<p style="text-align:left;">Please enter information of the Person to be contacted in case of an emergency.</p>'),
					/*minWidth: 300,*/
					maxWidth: 400,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#accomodation').tooltipster({
					content: $('<p style="text-align:left;">Please tick the check box in order to update the Applicant Accomodation.</p>'),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#cardDelCountry_TP').tooltipster({
					content: $('<p style="text-align:left;">Please select the country from the list where the card is to be delivered.</p>'),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#cardDelOptionMain_TP').tooltipster({
					content: $('<p style="text-align:left;">Please select the option where you want your card to be delivered.</p>'+
							'<ul><li><p>By selecting PERMANENT ADDRESS option, card will be delivered to permanent address of your card.</p></li></ul>'+
							'<ul><li><p>By selecting PRESENT ADDRESS option, card will be delivered to temporary address of your card.</p></li></ul>'
					),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#cardDelOption_TP').tooltipster({
					content: $('<p style="text-align:left;">Please select one of the options for the card delivery.</p>'+
								'<ul><li><p>By selecting TO YOUR ADDRESS option, applicants card shall be delivered to the entered delivery Address.</p></li>'+
								'<li><p>By selecting NEAREST NADRA CENTER option, applicants card shall be delivered to the NADRA center that is nearest to the address provided.</p></li></ul>'),
								/*minWidth: 300,*/
					maxWidth: 300,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#photoUpload_TP').tooltipster({
					content: $('<p style="text-align:left;">Please see the  PHOTO GUIDELINES for further helpful information regarding the photo attaching and uploading in PAK ID.</p>'),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#docUpload_TP').tooltipster({
					content: $('<p style="text-align:left;">Please see the  DOCUMENT UPLOAD GUIDELINES for further helpful information regarding the Document attaching and uploading in PAK ID.</p>'),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#fingerUpload_TP').tooltipster({
					content: $('<p style="text-align:left;">Please see the  FINGERPRINT UPLOAD GUIDELINES for further helpful information regarding the Fingerprint attaching and uploading in PAK ID.</p>'),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#atteserInfo_TP').tooltipster({
					content: $('<p style="text-align:left;">Please provide Attester  details</p>'+
							   '<p><b><u>NOTE:</u></b></br>The Applicant has to upload DATA ACQUISITION FORM</p>'),
							   /*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#witnessOne_TP').tooltipster({
					content: $('<p style="text-align:left;">Please enter verifier one information.</p>'),
					minWidth: 250,
					maxWidth: 400,
					position: 'right',
				    trigger: 'click'
				});
				
				$('#witnessTwo_TP').tooltipster({
					content: $('<p style="text-align:left;">Please enter verifier two information.</p>'),
					minWidth: 250,
					maxWidth: 400,
					position: 'right',
				    trigger: 'click'
				});
				
				$('#reprint_applyingFrom_TP').tooltipster({
					content: $('<p style="text-align:left;">Please specify if you are applying from Pakistan or abroad.</p>'+
								'<p>This information is necessary for the delivery information displayed in the application.</p>'),
								/*minWidth: 300,*/
					maxWidth: 400,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#smartCardPin_TP').tooltipster({
					content: $('<p style="text-align:left;">You must enter 4 digits as your Smart Card Pin. The digits may range from 0-9.</p>'+
							   '<p><b>EXAMPLE:  4573</b></p>'+
							   '<p>This number is acquired as security code to be saved in the Smart identity Card and shall allow the holder to perform secure transaction in various applications e.g. E-Sahulat.</p>'),
							   /*minWidth: 300,*/
					maxWidth: 400,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#renewal_CountryStay').tooltipster({
					content: $('<p style="text-align:left;">Please select the country of stay in case the applicant is applying for NICOP. Applicant will have to provide one of the addresses i.e. present or permanent, other than Pakistan.</p>'+
							   '<p><b><u>NOTE:</u></b></br>Only the NICOP applicant can select country of stay other than Pakistan.</p>'),
							   /*minWidth: 300,*/
					maxWidth: 400,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#renewal_SelectCard_TP').tooltipster({
					content: $('<p style="text-align:left;">Select the Card to be acquired. Please note that the Smart NICOP is National Identity Card for Overseas Pakistanis and applicant must provide at least one of the address (present/permanent address), out of Pakistan.</p>'),
					/*minWidth: 300,*/
					maxWidth: 400,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#payment_fornameTP').tooltipster({
					content: $('<p style="text-align:left;">Your first name. This name must be the same as the name on the card.</p>'),
					minWidth: 250,
					maxWidth: 250,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#payment_surnameTP').tooltipster({
					content: $('<p style="text-align:left;">Your last name. This name must be the same as the name on the card.</p>'),
					minWidth: 250,
					maxWidth: 250,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#payment_emailTP').tooltipster({
					content: $('<p style="text-align:left;">Your email address, including the full domain name. e.g; 123@abc.com</p>'),
					minWidth: 250,
					maxWidth: 250,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#payment_postalCodeTP').tooltipster({
					content: $('<p style="text-align:left;">This field is mandatory if country is US or Canada.</p>'),
					/*minWidth: 300,*/
					maxWidth: 320,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#payment_stateTP').tooltipster({
					content: $('<p style="text-align:left;">This field is mandatory if country is US or Canada.</p>'),
					/*minWidth: 300,*/
					maxWidth: 320,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#mobile_operator').tooltipster({
					content: $('<p style="text-align:left;">Please select a valid mobile operator of the contact number provided. You will receive an SMS with a pin in order to continue registration in Pak Identity. Please note that if the provided cellular network is not valid will result in failure of SMS delivery containing your SMS pin, consequently resulting in registration failure.</p>'),
					/*minWidth: 300,*/
					maxWidth: 320,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#password_policy').tooltipster({
					content: $('<p style="text-align:left;">Password must be at least 8 characters and must contain an upper case character, a lower case character, a numeric character, and a special character !@#$%^&*()</p>'),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#city_village').tooltipster({
					content: $('<p style="text-align:left;">Please select the City/Village of the Applicant Address.</p>'+
					 		   '<p><b><u>NOTE:</u></b></br>If you are unable to find your City/Village area in drop down, please select the nearest area.</p>'),
					 		  /*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				$('#city_village1').tooltipster({
					content: $('<p style="text-align:left;">Please select the City/Village of the Applicant Address.</p>'+
					 		   '<p><b><u>NOTE:</u></b></br>If you are unable to find your City/Village area in drop down, please select the nearest area.</p>'),
					 		  /*minWidth: 300,*/
					maxWidth: 300,
					position: 'top',
				    trigger: 'click'
				});
				
				
				$('#cvc').tooltipster({
					content: $('<p style="text-align:left;"></p><img src="images/card-security-code.jpg" />'),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#dobTooltip').tooltipster({
					content: $('<p style="text-align:left;">Account Holder\'s date of bitrh as mentioned on his/her National Identity Card.</p>'+
							'<p style="text-align:left;">If only year is mentioned in your date of birth. Please select <b>January 1\'st in day & month.</b></p>'+
			 		   '<p><b><u>Example:</u></b></br>Date of birth on National Identity Card:<b> 1976</b></p>'+
			 		  '<p><b>Select date of birth: 01-01-1976 </b></p>'),
			 		 /*minWidth: 300,*/
					maxWidth: 300,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#citizenTP').tooltipster({
					content: $('<p style="text-align:left;">Please provide citizen number if you have NADRA Issued Identity. You may leave this field blank, if you donot have NADRA Issued 13 digits Identity number.</p>'),
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#cnicNicopPro').tooltipster({
					content: $('<ul>'+
							'<li><p>Apply for a New National Identity Card for Overseas Pakistanis (NICOP) for the first time.</p></li>'+
							'<li><p>Apply for an ID Reprint if your card was lost, stolen, damaged or destroyed.</p></li>'+
							'<li><p>Apply for an ID Renewal if your card has expired.</p></li>'+
						 	'<li><p>Apply for an ID Modification if you want to amend your national identity data.</p></li>'+
							'<li><p>Apply for an ID Cancellation if you want to cancel your national identity data.</p></li>'+
						'</ul>'),
						/*minWidth: 300,*/
					maxWidth: 400,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#pocPro').tooltipster({
					content: $('<ul>'+
							'<li><p>Apply for a New Pakistan Origin Card (POC) for the first time.</p></li>'+
							'<li><p>Apply for POC Renewal if your card has expired.</p></li>'+
							'<li><p>Apply for POC Modification if you want to amend your POC card data.</p></li>'+
							'<li><p>Apply for POC Cancellation.</p></li>'+
						 	'<li><p>Apply for POC Conversion to a chip-based Smart-POC card through a Renewal or Modification application.</p></li>'+
						'</ul>'),
						/*minWidth: 300,*/
					maxWidth: 400,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#frcPro').tooltipster({
					content: $('<ul>'+
							'<li><p>Apply for Family Certificate with Parents and siblings (includes Father, Mother, Brothers and Sisters).</p></li>'+
							'<li><p>Apply for Family Certificate with Spouse and Children (includes Husband, Wife, Sons and Daughters).</p></li>'+
						'</ul>'),
						/*minWidth: 300,*/
					maxWidth: 400,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#verificationPro').tooltipster({
					content: $('<ul>'+
							'<li><p>Verify National Identity Card / POC Issued by NADRA.</p></li>'+
							'<li><p>Apply for Verification of Family Certificate. Verify family data from FRC Numbers on NADRA issued Family Registration Certificate</p></li>'+
							'<li><p>Apply for Verification of Child Registration Certificate. Verify children data from CRC Numbers on NADRA issued CRC Registration Certificate</p></li>'+
						'</ul>'),
						/*minWidth: 300,*/
					maxWidth: 400,
					position: 'bottom',
				    trigger: 'click'
				});
				
				$('#appliedTrackingId').tooltipster({
					content: $('<p style="text-align:left;">Please enter your Tracking Id i.e. 12 digit number, as stated in token receipt/sms/email.</p>'),
					// setting a same value to minWidth and maxWidth will result in a fixed width
					/*minWidth: 300,*/
					maxWidth: 300,
					position: 'bottom',
				    trigger: 'click'
				});
		});
	};
	
	var initToolTipResponsive = function() {
		
		$(document).on('mouseenter', '.tooltip-link', function(e) {
			
			$('#givenNameReprint').tooltipster({
				content: $('<p style="text-align:left;">Please enter Given name(s) of the Applicant.</p>'+
						'<p><ul><li><b>EXAMPLE:</b></br>'+ 
						'1) NAME: Hassan Ahmed</li>Given name(s): Hassan </br>Surname: Ahmed</br></br>'+
						'2) NAME: Hassan Ahmed Qureshi</br>Given name(s): Hassan Ahmed </br>Surname: Qureshi</br></br>'+
						'3)	NAME: Hassan (Single Name)</br>Given name(s): </br>Surname: Ahmed</li></ul></p>'),
				maxWidth: 300,
				position: 'top',
			    trigger: 'click'
			});
			
			$('#cardDelLocation_TP').tooltipster({
				content: $('<p style="text-align:left;">Please select location where card is to be delivered.</p>'),
				maxWidth: 300,
				position: 'top',
			    trigger: 'click'
			});
			
			$('#birthDate,#birthDate2').tooltipster({
				content: $('<p style="text-align:left;">Change your date of birth only if you wish it to be updated on your card.</p>'+
						   '<p><b><u>NOTE:</u></b></br>In case the Date of Birth is modified,</p>'+
						   '<ul><li>Supporting documents are required and must be uploaded in the DOCUMENT section of the PAK ID. For more information and instructions on the documents required, see PAK ID Supporting Documents section</li>'+
						   '<li>Additional fee applies. For more information and instructions on the Fee Structure, see PAK ID Fee Structure.</li></ul>'),
				maxWidth: 300,
				position: 'bottom',
			    trigger: 'click'
			});
			
			$('#firstNameModify').tooltipster({
				content: $('<p style="text-align:left;">Please enter Given name(s) of the Applicant.</p>'+
							'<p><ul><li><b>EXAMPLE:</b></br>'+ 
							'1) NAME: Hassan Ahmed</li>Given name(s): Hassan </br>Surname: Ahmed</br></br>'+
							'2) NAME: Hassan Ahmed Qureshi</br>Given name(s): Hassan Ahmed </br>Surname: Qureshi</br></br>'+
							'3)	NAME: Hassan (Single Name)</br>Given name(s): </br>Surname: Ahmed</li></ul></p>'+
							'<p><b><u>NOTE:</u></b></br>In case of modification of Given name(s) or Surname (of Applicant) supporting documents are required and must be uploaded in the DOCUMENT section of the PAK ID. For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
				maxWidth: 300,
				position: 'top',
			    trigger: 'click'
			});
			
			$('#lastNameModify').tooltipster({
				content: $('<p style="text-align:left;">Please enter Surname of the Applicant.</p>'+
							'<p><ul><li><b>EXAMPLE:</b></br>'+ 
							'1) NAME: Hassan Ahmed</li>Given name(s): Hassan </br>Surname: Ahmed</br></br>'+
							'2) NAME: Hassan Ahmed Qureshi</br>Given name(s): Hassan Ahmed </br>Surname: Qureshi</br></br>'+
							'3)	NAME: Hassan (Single Name)</br>Given name(s): </br>Surname: Ahmed</li></ul></p>'+
							'<p><b><u>NOTE:</u></b></br>In case of modification of Given name(s) or Surname (of Applicant) supporting documents are required and must be uploaded in the DOCUMENT section of the PAK ID. For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
				maxWidth: 300,
				position: 'top',
			    trigger: 'click'
			});
			
			$('#maritalStatusModify').tooltipster({
				content: $('<table border="1" style="color:#fff;width:50%;border-color:#fff;"><tr><td>From</td><td>To</td></tr>'+
						   '<tr><td>Unmarried</td><td>Married</td></tr>'+
						   '<tr><td>Married</td><td>Divorcee</td></tr>'+
						   '<tr><td>Divorcee</td><td>Married</td></tr>'+
						   '<tr><td>Married</td><td>Widowed</td></tr>'+
						   '<tr><td>Widowed</td><td>Married</td></tr>'+
						   '</table>'+
						   '<p><b><u>NOTE:</u></b></br>Please note that In case the marital status is modified, supporting documents are required and must be uploaded in the DOCUMENT section of the PAK ID. For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
				maxWidth: 300,
				position: 'bottom',
			    trigger: 'click'
			});
			
			$('#motherLanguageModify').tooltipster({
				content: $('<p style="text-align:left;">Please select  mother language of the Applicant from the provided list.</p>'),
				maxWidth: 300,
				position: 'top',
			    trigger: 'click'
			});
			
			$('#fatherModify_TP, #fatherModify2_TP').tooltipster({
				content: $('<p><b><u>NOTE:</u></b></br>In case of modification of FATHER NAME/CNIC supporting documents are required and must be uploaded in the DOCUMENT section of the PAK ID. For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
						   /*minWidth: 300,*/
				maxWidth: 400,
				position: 'bottom',
			    trigger: 'click'
			});
			
			$('#motherModify_TP').tooltipster({
				content: $('<p><b><u>NOTE:</u></b></br>In case of modification of Mother NAME/CNIC supporting documents are required and must be uploaded in the DOCUMENT section of the PAK ID. For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
						   /*minWidth: 300,*/
				maxWidth: 400,
				position: 'bottom',
			    trigger: 'click'
			});
			
	
			$('#spouseModify_TP').tooltipster({
				content: $('<p><b><u>NOTE:</u></b></br>In case of modification of Spouse NAME/CNIC supporting documents are required and must be uploaded in the DOCUMENT section of the PAK ID. For more information and instructions on the documents required, see PAK ID Supporting Documents.</p>'),
						   /*minWidth: 300,*/
				maxWidth: 400,
				position: 'right',
			    trigger: 'click'
			});
			
		});
	};
	
	return {
        //main function to initiate the module
        init: function () {
        	initToolTip();
        	initToolTipResponsive();
        }

    };
}();