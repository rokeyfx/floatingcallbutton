# floatingcallbutton


<script type="text/javascript">

   var phoneNumber = "+556999584";
   var callText = "CALL NOW";
   var positionBottom = "7%";
   var positionLeft = "3%";
   var positionRight = "";
   var positionTop = "";
   var callFloatingBackground = "#000";
   var callIconBackground = "#0c3";
   var callFloatingZindex = "9999";


   function FloatingCallScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://rokeybd.ddns.net/call/floatingCallNow.js';
    document.getElementsByTagName('body')[0].appendChild(script);
    console.log('FloatingCallScript');
}

function initialize() {
    console.log('initialize');
}

window.onload = FloatingCallScript;

</script>
