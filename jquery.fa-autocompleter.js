/****************************************************************/
/*  FONT AWESOME AUTO COMPLETER - JQUERY PLUGIN                 */
/*  LUIGUI DELYER@S1X - luigui@s1x.com.br                       */
/****************************************************************/

/*
    Note: all icons will be included after all content

    logViewer = show on console.log all information about how script works
    0 = off
    1 = on
*/

var faAttribute = "fa-icon-creator",
    faOrder = "fa-icon-creator-order",
    faIcon = $('*[' + faAttribute + ']'),
    logViewer = 0;

if (logViewer == 1) {
  console.log("[FA-AC] plugin starts");
  console.log("[FA-AC] attribute = " + faAttribute);
  console.log("[FA-AC] objects found = " + faIcon.length);
  console.log("[FA-AC] objects = ", faIcon);
}

if (faIcon.length > 0) {
  for (var i = 0; i < $(faIcon).length; i++) {
    var iconAppend = $(faIcon[i]).attr(faAttribute),
        iconOrder = $(faIcon[i]).attr(faOrder);

    if(iconOrder != undefined){
      var htmlContent = $(faIcon[i]).html();
      $(faIcon[i]).html('').append($("<i class='fa fa-" + iconAppend + "'></i>")).append(htmlContent).removeAttr(faAttribute).removeAttr(faOrder);

    }
    else {
      $(faIcon[i]).append($("<i class='fa fa-" + iconAppend + "'></i>")).removeAttr(faAttribute);
    }

    if (logViewer == 1) {
      console.log("[FA-AC] icon included on = ", faIcon[i]);
    }
  }

  if (logViewer == 1) {
    console.log("[FA-AC] done");
  }
}
