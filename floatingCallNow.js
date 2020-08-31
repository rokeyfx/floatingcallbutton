setTimeout(function(){ 

	var link = document.createElement('link'); 
	link.rel = 'stylesheet';  
	link.type = 'text/css'; 
	link.href = 'https://raw.githubusercontent.com/rokeyfx/floatingcallbutton/master/floatingCallNow.css';  
	document.getElementsByTagName('body')[0].appendChild(link);

    document.body.innerHTML += '<div class="call-now-button-st" style="bottom:'+ positionBottom + ';left:'+ positionLeft + ';right:'+ positionRight + ';top:'+ positionTop + ';background:'+ callFloatingBackground + ';z-index:'+ callFloatingZindex + ';"><div><a class="phone-no-st" href="tel:' + phoneNumber + '" id="quickcallbutton" title="Call Now"><p class="call-text"> ' + callText + ' </p><div class="quick-alo-ph-circle active"></div>            <div class="quick-alo-ph-circle-fill active"></div>            <div class="quick-alo-ph-img-circle shake" style="background:' + callIconBackground + '"></div>        </a>    </div></div>'


}, 1000);



