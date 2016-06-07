(function () {
  var items = document.querySelectorAll('a[href^="propo2k.asp?VAULTID="]:not(.details)');
  var ctr = 0;
  function doDelete() {
    if (ctr < items.length) {
      var url = items[ctr].href + '&Cmd=delete';
      (new Image()).src = url;
      ctr++;
    }
    setTimeout(function () {
      doDelete();
    }, 500);
  }
  doDelete();
}());
