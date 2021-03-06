var navLinks = [{
  pageTitle: "Typography",
  pageLink: "typography"
  },
  {
  pageTitle: "Icons",
  pageLink: "icons"
  },
  {
  pageTitle: "Colours",
  pageLink: "colours"
  },
  {
  pageTitle: "Atoms",
  pageLink: "atoms"
  },
  {
  pageTitle: "Molecules",
  pageLink: "molecules"
},
{
pageTitle: "Organisms",
pageLink: "organisms"
}
];

var navbarTemplate = $('#nav-bar-template').html();
var renderNavBar = Handlebars.compile(navbarTemplate);
$('#nav-bar').html(renderNavBar({ navLinks: navLinks }));

$(".toggleNav").click(function () {
  $("#subnav").toggleClass("active");
  $(".toggleNavButton").toggleClass("active");
});
