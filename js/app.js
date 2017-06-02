var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-28521681-1"]);_gaq.push(["_setDomainName",".philtobias.net"]);_gaq.push(["_trackPageview"]);
(function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();

Raven.config('https://080c45b256c447aaa199e3d16adc0a94@sentry.io/175524').install()

let isSidebarOpen = false;
const $main = document.querySelector('.main');
document.querySelector('.hamburger').addEventListener('click', toggleSidebar);

function toggleSidebar(e) {
  e.preventDefault();
  isSidebarOpen = !isSidebarOpen;
  $main.classList.toggle('main--push');
  document.body.style.overflowX = isSidebarOpen ? 'hidden' : '';
}

window.addEventListener('load', function() {
  document.querySelector('.sidebar').style.display = 'block';
});