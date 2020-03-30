"use strict";

/*
    Usual.js v0.1
    Purpose - For Common UI Components and Actions
    
*/

//-----Global Configration
var global_config = {};
var globalExemptPaths = ["register", "login"];

//Check Browser Compatibility
(function () {
  // Create Parent Node
  _usualCreateParentNode();

  if (!_usual_validateExemptPathnames()) {
    if (compatible_browser()) {
      // console.log("");
    } else {
      // console.log(window.location.pathname);
      if (getCookieValue("perfomance_ribbon")) {
        return false;
      } else {
        _usual_performance_ribbon_renderer();
      }
    }

    /*
      Realtime Detection For Internet Connectivity
    */
    setInterval(function () {
      checkInternetConnectivity();
    }, 1000);
  }
})();

/*
  This Function Creates Parent Node For Usual.js.
  Inside this parent node all of the independent information components will be rendered.
*/
function _usualCreateParentNode() {
  var usual_parent = document.createElement("div");
  usual_parent.setAttribute("id", "_usualParentNode");

  // Append Inline Styles to Parent
  usual_parent.style.position = "fixed";
  usual_parent.style.top = "5%";
  usual_parent.style.right = "2%";
  usual_parent.style.display = "flex";
  usual_parent.style.flexDirection = "column";
  usual_parent.style.zIndex = "999999";
  document.body.appendChild(usual_parent);
}
function checkInternetConnectivity() {
  if (!window.navigator.onLine) {
    if (!document.getElementById("_usual_internet_container")) {
      appendDowntimeStyles("internetConnectivity");
      // <i class="fa fa-exclamation-circle" />;
      var html = "<div class=\"internet-connectivity-message\">\n                Please Check Your Internet Connectivity.\n                </div>";
      //<span id="close-browser-message" class="close-internet-message" onclick="deleteUsualContainer('internetConnectivity')">x</span>
      attachToDom(html, "internetConnectivity");
      // https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js
    }
  } else {
    if (document.getElementById("_usual_internet_container")) {
      deleteUsualContainer("internetConnectivity");
    }
  }
}

function _usual_validateExemptPathnames() {
  var currentPath = window.location.pathname;
  currentPath = window.location.pathname.split("/");
  var path = currentPath[1];
  var isExemptPath = false;
  for( var index in globalExemptPaths ) {
    var exemptPath = globalExemptPaths[index]
    if ( exemptPath == path ) {
      console.log("Exempt Path Found ", exemptPath);
      isExemptPath = true;
    }
  }
  return isExemptPath;
}

function _usual_performance_ribbon_renderer() {
  appendDowntimeStyles("browser");
  // <i class="fa fa-exclamation-circle" />;
  if (!document.getElementById("_usual_browser_container")) {
    var html = "<div class=\"browser-compatibility-message\">\n                 For Better Realtime Performance, please use Latest Versions of Google Chrome \n                <span id=\"close-browser-message\" class=\"close-browser-message\" onclick=\"deleteUsualContainer('browser')\">x</span></div>";
    attachToDom(html, "browser");
    // https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js
  }
}

function _usual_render(config) {
  global_config = config;
  var url = null;
  var env = config.env ? config.env : null;
  if (window.location.host.indexOf("stage-app") >= 0) {
    env = "stagea";
  }
  // Switch Env Var
  var token = null;
  switch (env) {
    case "stagea":
      url = "https://stage-accounts.lambdatest.com/api/user";
      token = getCookieValue("stageAccessToken");
      // console.log(url);
      // console.log(token);
      break;
    case "production":
      url = "https://accounts.lambdatest.com/api/user";
      token = getCookieValue("accessToken");

      break;
    default:
      url = "https://accounts.lambdatest.com/api/user";
      token = getCookieValue("accessToken");
      break;
  }
  if (!token) {
    console.log("Code-U401- Oops! Access Token is Missing. Unauthorised Access. Please Login to Lambda.");
    return false;
  }

  switch (config.type) {
    case "downtime":
      //--------------------
      //Call User API For Downtime Message
      fetch(url, {
        headers: new Headers({ Authorization: "Bearer " + token })
      }).then(function (response) {
        if (response && response.status && response.status !== 200) {
          console.log("Code-U" + response.status + "-Oops!! Something Went Wrong.");
          return false;
        }
        return response.json();
      }).then(function (userObj) {
        var current_pathname = window.location.pathname;
        current_pathname = current_pathname.split("/");
        current_pathname = current_pathname[1];

        //for Realtime Path
        if (current_pathname === "viewer") {
          return false;
        } else {
          if (userObj.downtime_message) {
            appendDowntimeStyles();
            if (!document.getElementById("_usual_container")) {
              var downtimeMsg = userObj.downtime_message;
              console.log(downtimeMsg);
              var html = "<div class=\"downtime-message\">\n                  " + userObj.downtime_message + "\n                <span id=\"close-downtime-message\" class=\"close-downtime-message\" onclick=\"deleteUsualContainer('downtime-message','" + downtimeMsg + "')\">x</span>";
              attachToDom(html, "downtime-message", downtimeMsg);
            }
          }
        }
      });

      break;
    default:
      console.log("That's Default");
      break;
  }
}

function appendDowntimeStyles() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var css = null;
  switch (type) {
    case "browser":
      css = ".browser-compatibility-message{\n              max-width: 400px;\n              min-height: 52px;\n              min-width: 350px;\n              box-shadow: 0 9px 15px 0 rgba(0, 0, 0, 0.15);\n              background-color: #fff;\n              color: #000;\n              border-left: 5px solid #f89797;\n              /*background-color: #cb4040;*/\n              /* border-left: 5px solid #f89797; */\n              border-radius: 3px;\n              font-size: 14px;\n              font-weight: 600;\n              letter-spacing: 0.4px;\n              padding: 15px 41px;\n              z-index: 9999;\n              text-align: center;\n\n        }\n          .parentPadding{\n           padding:10px; \n          }\n          .browser-compatibility-message i{\n            font-size: 23px;\n            vertical-align: middle;\n            position: absolute;\n            left: 11px;\n            top: 10px;\n            color: #f89797;\n        }\n        .browser-compatibility-message u{\n            cursor: pointer;\n        }\n        .close-browser-message{\n            position: absolute;\n            right: 20px;\n            top: 12px;\n            color: #0000009c;\n            font-size: 12px;\n            font-weight: 700;\n            cursor: pointer;\n            letter-spacing: 0.7px;\n            padding: 4px;\n        }\n        ";
      break;
    case "internetConnectivity":
      css = ".internet-connectivity-message{\n              max-width: 400px;\n              min-height: 52px;\n              min-width: 350px;\n              box-shadow: 0 9px 15px 0 rgba(0, 0, 0, 0.15);\n              background-color: #fff;\n              border-left: 5px solid #f89797;\n              color: #000;\n              border-radius: 3px;\n              font-size: 14px;\n              font-weight: 600;\n              letter-spacing: 0.4px;\n              padding: 15px 41px;\n              z-index: 9999;\n              text-align: center;\n\n        }\n        .parentPadding{\n           padding:10px; \n          }\n          .internet-connectivity-message i{\n            font-size: 23px;\n            vertical-align: middle;\n            position: absolute;\n            left: 11px;\n            top: 10px;\n            color: #f89797;\n        }\n        .internet-connectivity-message u{\n            cursor: pointer;\n        }\n        .close-internet-message{\n          position: absolute;\n          right: 20px;\n          top: 12px;\n          color: #0000009c;\n          font-size: 12px;\n          font-weight: 700;\n          cursor: pointer;\n          letter-spacing: 0.7px;\n          padding: 4px;\n        }\n        ";
      break;
    default:
      css = ".downtime-message{\n                    max-width: 700px;\n                    min-height: 42px;\n                    min-width: 250px;\n                    position: fixed;\n                    top: 38px;\n                    right: 14px;\n                    box-shadow: 0 9px 15px 0 rgba(0, 0, 0, 0.15);\n                    background-color: #fff;\n                    color: #000;\n                    border-left: 5px solid #f89797;\n                    border-radius: 3px;\n                    font-size: 14px;\n                    font-weight: 400;\n                    letter-spacing: 0.4px;\n                    padding: 9px 41px;\n                    z-index: 9999;\n                }\n                .downtime-message i{\n                    font-size: 23px;\n                    vertical-align: middle;\n                    position: absolute;\n                    left: 11px;\n                    top: 10px;\n                    color: #f89797;\n                }\n                .downtime-message u{\n                    cursor: pointer;\n                }\n                .parentPadding{\n                  padding:10px; \n                }\n                .close-downtime-message{\n                    position: absolute;\n                    right: 20px;\n                    top: 12px;\n                    color: #0000009c;\n                    font-size: 12px;\n                    font-weight: 700;\n                    cursor: pointer;\n                    letter-spacing: 0.7px;\n                    padding: 4px;\n                }\n                .fadeOut {\n                        -webkit-transition: opacity 0.3s ease-in-out;\n                        -moz-transition: opacity 0.3s ease-in-out;\n                        -ms-transition: opacity 0.3s ease-in-out;\n                        -o-transition: opacity 0.3s ease-in-out;\n                        opacity: 0;\n                }\n                ";
      break;
  }

  //--------Add CSS to The DOM
  addCss(css, type);
}

function getCookieValue(cookie_val) {
  var value = document.cookie.match("(^|;)\\s*" + cookie_val + "\\s*=\\s*([^;]+)");
  value = value ? value.pop() : "";
  if (value) {
    value = value.split("&");
    value = value[0];
  }
  return value;
}

function attachToDom(html) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var downtimeMsg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var parentNode = document.getElementById("_usualParentNode");
  // console.log(parentNode);
  switch (type) {
    case "browser":
      var _usual_browser_container = document.createElement("div");
      _usual_browser_container.setAttribute("id", "_usual_browser_container");
      _usual_browser_container.setAttribute("class", "parentPadding");
      _usual_browser_container.innerHTML = html;
      parentNode.appendChild(_usual_browser_container);
      break;
    case "internetConnectivity":
      var _usual_internet_container = document.createElement("div");
      _usual_internet_container.setAttribute("id", "_usual_internet_container");
      _usual_internet_container.setAttribute("class", "parentPadding");

      _usual_internet_container.innerHTML = html;
      parentNode.appendChild(_usual_internet_container);
      break;
    default:
      var ribbon = localStorage.getItem("ribbon-shown");
      console.log(downtimeMsg);
      if (!downtimeMsg) {
        break;
      }
      var storedMsg = localStorage.getItem("downtime-content");
      console.log(storedMsg);
      if (downtimeMsg !== storedMsg) {
        var _usual_container = document.createElement("div");
        _usual_container.setAttribute("id", "_usual_container");
        _usual_container.innerHTML = html;
        parentNode.appendChild(_usual_container);
      }
      break;
  }
}

function addCss(css, type) {
  //////////////------------- Add Plugin CSS -------------///////////////
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");

  style.type = "text/css";

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  switch (type) {
    case "internetConnectivity":
      style.setAttribute("id", "_usual_internet_css");
      head.appendChild(style);
      break;
    case "browser":
      style.setAttribute("id", "_usual_browser_css");
      head.appendChild(style);
      break;
    default:
      style.setAttribute("id", "_usual_css");
      head.appendChild(style);
      break;
  }
}

function deleteUsualContainer() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var downtimeMsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var parentNode = null;
  var styleNode = null;
  console.log("Close Call");
  switch (type) {
    case "browser":
      // localStorage.setItem(
      //   "perfomance-ribbon",
      //   btoa(new Date().toDateString())
      // );
      var date = new Date().toDateString();
      var validDate = addDays(new Date(), 7);
      document.cookie = "perfomance_ribbon=" + btoa(date) + ";domain=.lambdatest.com;path=/;expires=" + validDate;

      parentNode = document.getElementById("_usual_browser_container");
      styleNode = document.getElementById("_usual_browser_css");
      if (parentNode) {
        parentNode.classList.add("fadeOut");

        parentNode.parentElement.removeChild(parentNode);
        styleNode.parentElement.removeChild(styleNode);
        console.log("Exiting Usual JS - Performance Ribbon");
      }
      break;
    case "internetConnectivity":
      parentNode = document.getElementById("_usual_internet_container");
      styleNode = document.getElementById("_usual_internet_css");
      if (parentNode) {
        parentNode.classList.add("fadeOut");

        parentNode.parentElement.removeChild(parentNode);
        styleNode.parentElement.removeChild(styleNode);
      }
      break;
    default:
      var ribbon_shown = btoa(new Date().toDateString());
      localStorage.setItem("ribbon-shown", ribbon_shown);
      console.log("storing downtime message : " + downtimeMsg);
      localStorage.setItem("downtime-content", downtimeMsg);

      parentNode = document.getElementById("_usual_container");
      styleNode = document.getElementById("_usual_css");
      if (parentNode) {
        parentNode.classList.add("fadeOut");

        parentNode.parentElement.removeChild(parentNode);
        styleNode.parentElement.removeChild(styleNode);
        console.log("Exiting Usual JS");
      }
      break;
  }
}

/*Simple Functions which ensures library exists;
 * @returns Boolean true
 */
function _usual_exists() {
  return true;
}

/**
 * Gets the browser name or returns an empty string if unknown.
 * This function also caches the result to provide for any
 * future calls this function has.
 *
 * @returns {Bool}
 */
function compatible_browser() {
  //Check If Chrome Browser return Bool
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (isChrome) {
    return true;
  } else {
    return false;
  }
}

// Utility

function addDays(dateObj, numDays) {
  dateObj.setDate(dateObj.getDate() + numDays);
  return dateObj;
}
