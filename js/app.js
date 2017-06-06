var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-28521681-1"]);_gaq.push(["_setDomainName",".philtobias.net"]);_gaq.push(["_trackPageview"]);
(function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();

Raven.config('https://080c45b256c447aaa199e3d16adc0a94@sentry.io/175524').install()

let slideout = new Slideout({
  panel: document.getElementById('panel'),
  menu: document.getElementById('menu'),
  padding: 256,
  tolerance: 70
})

document.querySelector('.hamburger').addEventListener('click', function() {
  slideout.toggle();
});