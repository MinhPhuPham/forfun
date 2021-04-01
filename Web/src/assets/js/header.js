function ShowMobileMenu()
{
    $(".sidebar").css("right","0px");
}

function HideMobileMenu()
{
    $(".sidebar").css("right","-300px");
}

function ShowMobileSubMenu(el)
{
  $(".launch-menu ul li ." + el).css("display","block");
}
