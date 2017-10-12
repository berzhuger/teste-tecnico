/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LIGHT_RED = exports.LIGHT_RED = '#F6534C';
var WHITE = exports.WHITE = '#FFF';
var BG_COLOR_PAGE = exports.BG_COLOR_PAGE = '#302C29';
var BG_PAGE_CONTENT = exports.BG_PAGE_CONTENT = '#F0F0F0';

var SEARCH_BACKGROUND_COLOR = exports.SEARCH_BACKGROUND_COLOR = '#483f38';
var SEARCH_DARK_COLOR = exports.SEARCH_DARK_COLOR = '#201F1D';

var TOOLTIP_BACKGROUND_COLOR = exports.TOOLTIP_BACKGROUND_COLOR = '#493E38';

var BETWEEN_DATES_CALENDAR = exports.BETWEEN_DATES_CALENDAR = '#483f38';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeBackgroundColor = changeBackgroundColor;
exports.changeColor = changeColor;
exports.hideElements = hideElements;
exports.showElements = showElements;
exports.setWidth = setWidth;
exports.openModal = openModal;
function changeBackgroundColor(element, color) {
  document.querySelectorAll(element).forEach(function (el) {
    return el.style.backgroundColor = color;
  });
}

function changeColor(element, color) {
  document.querySelectorAll(element).forEach(function (el) {
    return el.style.color = color;
  });
}

function hideElements(element) {
  document.querySelectorAll(element).forEach(function (el) {
    return el.style.display = 'none';
  });
}

function showElements(element) {
  document.querySelectorAll(element).forEach(function (el) {
    return el.style.display = 'block';
  });
}

function setWidth(element, width) {
  document.querySelectorAll(element).forEach(function (el) {
    return el.style.width = width;
  });
}

function openModal() {
  var modal = document.querySelector('.modal');

  modal.style.display = 'block';

  document.body.style.overflowY = 'hidden'; // Tiro scroll do body
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _homepage = __webpack_require__(3);

var _search = __webpack_require__(4);

var _calendar = __webpack_require__(5);

var _hotels = __webpack_require__(6);

var _modal = __webpack_require__(7);

var _ajaxPromocoes = __webpack_require__(8);

// Modificadores de estilo
(0, _homepage.personalizeHomepage)();
(0, _search.personalizeSearch)();
(0, _calendar.personalizeCalendar)();
(0, _hotels.personalizeHotels)();

// Criadores de elementos
(0, _modal.createModal)();

// Chamadas AJAX
(0, _ajaxPromocoes.getPromocoes)();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.personalizeHomepage = personalizeHomepage;

var _colors = __webpack_require__(0);

var _utils = __webpack_require__(1);

function personalizeHomepage() {
  (0, _utils.changeBackgroundColor)('.mcolor-header', _colors.LIGHT_RED); // Altera cor do header
  (0, _utils.changeBackgroundColor)('.mcolor-cliente-principal-bg', _colors.BG_COLOR_PAGE);

  // Alteração de cores de labels
  (0, _utils.changeColor)('.mcolor-label-text', _colors.LIGHT_RED);
  (0, _utils.changeColor)('.mcolor-label-text2', _colors.LIGHT_RED);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.personalizeSearch = personalizeSearch;

var _colors = __webpack_require__(0);

var _utils = __webpack_require__(1);

function personalizeSearch() {
  (0, _utils.changeBackgroundColor)('.mcolor-busca-bright', _colors.SEARCH_BACKGROUND_COLOR); // Altera cor do header
  (0, _utils.changeBackgroundColor)('.mcolor-busca-dark', _colors.SEARCH_DARK_COLOR);
  (0, _utils.changeBackgroundColor)('.mcolor-action-btn', _colors.LIGHT_RED);

  // Alteração de cores de labels
  (0, _utils.changeColor)('#busca-promocode-label', _colors.WHITE);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.personalizeCalendar = personalizeCalendar;

var _utils = __webpack_require__(1);

var _colors = __webpack_require__(0);

function hoverCelula() {
  var haveStartDate = document.querySelector('.startDate');
  if (haveStartDate) {
    document.querySelectorAll('.inBetweenDate:not(.startDate)').forEach(function (el) {
      el.style.backgroundColor = _colors.BETWEEN_DATES_CALENDAR;
    });
  }
  this.style.backgroundColor = _colors.LIGHT_RED;
  this.style.borderRadius = '50%';
  this.style.width = '50px';
  changeTooltip();
}

function removeHoverCelula() {
  var isStartDate = this.classList.contains('startDate');
  if (!isStartDate) {
    this.style.backgroundColor = _colors.BG_COLOR_PAGE;
    this.style.borderRadius = '';
    this.style.width = '';
  }

  var haveStartDate = document.querySelector('.startDate');
  if (haveStartDate) {
    document.querySelectorAll('.inBetweenDate').forEach(function (el) {
      el.style.backgroundColor = _colors.BG_COLOR_PAGE;
    });
  }
}

function changeTooltip() {
  (0, _utils.changeBackgroundColor)('.calendario-tooltip', _colors.TOOLTIP_BACKGROUND_COLOR);

  (0, _utils.changeColor)('.tp-chegada', _colors.WHITE);
  (0, _utils.changeColor)('.tp-saida', _colors.WHITE);
}

function watchForSelection() {
  var startDate = document.querySelector('.celulaData.startDate');
  var allCelulas = document.querySelectorAll('.celulaData:not(.voidDate)');
  if (startDate) {
    startDate.setAttribute('style', 'background-color: #F6534C !important'); // uso setAttribute para poder usar o !important
    startDate.style.width = '50px';
    startDate.style.borderRadius = '50%';
  } else {
    allCelulas.forEach(function (el) {
      el.setAttribute('style', 'background-color: ' + _colors.BG_COLOR_PAGE + ' !important');
    });
  }
}

// Funções para alterar mostrar apenas 1 mês do calendário
function changeCalendarWidth() {
  var calendar = document.getElementById('busca-calendario');
  calendar.style.width = '530px';
  showOneMonth();
}

function showOneMonth() {
  var firstMonth = document.getElementById('calendario-1');
  firstMonth.style.width = '100%';

  var secondMonth = document.getElementById('calendario-2');
  secondMonth.style.width = '0%';
}

function personalizeCalendar() {
  document.getElementById('busca-saida-label').addEventListener('click', function () {
    changeCalendarWidth();
    // Dias do calendário para branco, setando algumas propriedades da classe antiga.
    document.querySelectorAll('#busca-calendario .dia-semana').forEach(function (el) {
      el.classList.remove('dia-semana');
      el.style.color = _colors.WHITE;
      el.style.display = 'inline-block';
      el.style.width = '55px';
      el.style.float = 'left';
    });

    document.querySelectorAll('.bestRate').forEach(function (el) {
      el.style.color = _colors.WHITE;
    });

    document.querySelectorAll('.celulaData').forEach(function (el) {
      return el.addEventListener('mouseover', hoverCelula);
    });
    document.querySelectorAll('.celulaData').forEach(function (el) {
      return el.addEventListener('mouseleave', removeHoverCelula);
    });
    document.querySelectorAll('.celulaData').forEach(function (el) {
      return el.addEventListener('click', watchForSelection);
    });
  });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.personalizeHotels = personalizeHotels;

var _colors = __webpack_require__(0);

var _utils = __webpack_require__(1);

function adjustListagemContent() {
  // Faz a listagem de hoteis ficarem em grid lado a lado
  var pageContent = document.getElementById('listagemHoteisContent');
  pageContent.style.display = 'flex';
  pageContent.style.flexDirection = 'row';
  pageContent.style.justifyContent = 'space-between';
}

function adjustItemHotel() {
  var itemHotel = document.querySelectorAll('.itemHotel');

  itemHotel.forEach(function (el) {
    el.style.display = 'flex';
    el.style.flexDirection = 'column';
    el.style.margin = '50px';
    el.style.backgroundColor = _colors.WHITE;
    el.style.borderRadius = '10px';
    el.style.boxShadow = '10px 10px 34px -13px rgba(0,0,0,0.75);';
    el.style.margin = '10px';
    el.style.padding = '10px';
    el.style.paddingTop = '30px';
  });
}

function adjustItemHotelContent() {
  var itemHotelContent = document.querySelectorAll('.itemHotelContent');

  itemHotelContent.forEach(function (el) {
    el.style.display = 'flex';
    el.style.flexDirection = 'column';
    el.style.justifyContent = 'space-between';
    el.style.alignItems = 'center';
    el.style.marginLeft = 'auto';
    el.style.height = '100%';
  });

  removeBtnSelecionarAcomodacao();
  removeFormasDePagamento();
  changeValorWidth();
  changeTelefoneHotel();
  removePercentualDesconto();
}

function removePercentualDesconto() {
  (0, _utils.hideElements)('.itemVarPercentualDesconto');
}

function changeValorWidth() {
  (0, _utils.setWidth)('.itemVarValorSemDesconto', 'unset');
}

function removeBtnSelecionarAcomodacao() {
  (0, _utils.hideElements)('.itemBtnSelecionarAcomodacao');
}

function changeTelefoneHotel() {
  (0, _utils.showElements)('.itemVarDescricaoFormasPagamento');
}

function removeFormasDePagamento() {
  (0, _utils.hideElements)('.itemVarDescricaoFormasPagamento');
}

function adjustPageContent() {
  var pageContent = document.querySelector('.page-content');

  pageContent.style.boxShadow = '';
  pageContent.style.borderRadius = '5px';
  pageContent.style.backgroundColor = _colors.BG_PAGE_CONTENT;
}

function changeIconColor() {
  (0, _utils.changeColor)('.mcolor-cliente-principal-text', _colors.LIGHT_RED);
}

function adjustBlocoReserve() {
  document.querySelectorAll('.blocoReserve').forEach(function (el) {
    el.style.position = 'relative';
  });
}

function adjustImgHotelArrowRight() {
  var arrowRight = document.querySelectorAll('.img-hotel-arrow-right');

  arrowRight.forEach(function (el) {
    el.style.left = '220px';
    el.style.zIndex = '1';
  });
}

function adjustImagesHotel() {
  (0, _utils.setWidth)('.varImgHotel, .slider-imagens-hotel, .slide img', '260px');
}

function changeTextPromos() {
  var texts = document.querySelectorAll('.itemBtnMaisAcomodacoes');

  texts.forEach(function (el) {
    el.textContent = 'Ver promoções do hotel';
    el.style.color = '#f6534e';
    el.style.marginTop = '15px';

    el.removeAttribute('onclick');
    el.addEventListener('click', _utils.openModal);
  });
}

function personalizeHotels() {
  adjustListagemContent();
  adjustItemHotel();
  adjustItemHotelContent();
  adjustPageContent();
  adjustBlocoReserve();
  changeIconColor();

  adjustImgHotelArrowRight();
  adjustImagesHotel();

  changeTextPromos();
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createModal = createModal;

var _modal = __webpack_require__(10);

function listenersToClose() {
  var modal = document.querySelector('.modal');
  var close = document.querySelector('.btnClose');

  // Eventos que fecham modal tanto ao clicar no fechar, quanto fora da DIV
  close.addEventListener('click', function () {
    return closeModal(modal);
  });
  window.addEventListener('click', function (e) {
    return outsideClick(e, modal);
  });
}

function closeModal(modal) {
  modal.style.display = 'none';
  document.body.style.overflowY = 'auto';
}

function outsideClick(e, modal) {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflowY = 'auto';
  }
}

function createModal() {
  var modal = '\n      <div class="modal">\n        <div class="modal-content">\n          <div class="modal-header">\n          <span class="btnClose">&times;</span>\n          <h2 class="modal-title">PROMO\xC7\xD5ES</h2>\n          </div>\n          <div class="modal-grid">\n            <div class="promo">\n            </div>\n          </div>\n        </div>\n      </div>\n  ';
  var modalElement = document.createElement('div');
  modalElement.innerHTML = modal;
  document.body.appendChild(modalElement);

  (0, _modal.formatModal)();
  (0, _modal.formatModalContent)();
  (0, _modal.formatBtnClose)();
  (0, _modal.formatModalGrid)();
  (0, _modal.formatModalTitle)();

  listenersToClose();
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPromocoes = getPromocoes;

var _promoElements = __webpack_require__(9);

// Renderiza os dados da chamada ajax dentro do modal
function renderPromocoes(promos) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = promos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var obj = _step.value;

      var divPromo = (0, _promoElements.createDivPromo)();
      var title = (0, _promoElements.createPromoTitle)(obj.NomeTarifa);
      divPromo.appendChild(title);

      title.appendChild((0, _promoElements.createPopOver)(obj.RegrasTarifa));

      var descricoes = (0, _promoElements.createDescription)(obj.DescricaoTarifa);

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = descricoes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var desc = _step2.value;

          divPromo.appendChild(desc);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      divPromo.appendChild((0, _promoElements.createOldPrice)(obj.TipoMoeda, obj.ValorTarifaSemDesconto));
      divPromo.appendChild((0, _promoElements.createNewPrice)(obj.TipoMoeda, obj.ValorTarifa));
      divPromo.appendChild((0, _promoElements.createButton)(obj.CodigoHotel, obj.CodigoTarifa));

      document.querySelector('.modal-grid').appendChild(divPromo);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function getPromocoes() {
  // Chamei apenas o id 1 pois não sabia o ID dos hoteis :/
  $.get('https://www.pmweb.com.br/teste-cro/promocoes/1.json').then(renderPromocoes);
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDivPromo = createDivPromo;
exports.createPromoTitle = createPromoTitle;
exports.createDescription = createDescription;
exports.createOldPrice = createOldPrice;
exports.createNewPrice = createNewPrice;
exports.createButton = createButton;
exports.createPopOver = createPopOver;

var _popover = __webpack_require__(11);

function createDivPromo() {
  var divPromo = document.createElement('div');

  divPromo.style.flexGrow = '1';
  divPromo.style.width = '33%';
  divPromo.style.height = '250px';

  return divPromo;
}

function createPromoTitle(title) {
  var promo = document.createElement('span');

  promo.textContent = title;

  // Estilos do span
  promo.style.fontWeight = 'bold';
  promo.style.marginBottom = '15px';
  return promo;
}

function createDescription(descriptions) {
  var elements = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = descriptions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var desc = _step.value;

      var divDesc = document.createElement('span');

      divDesc.textContent = '- ' + desc;

      divDesc.style.color = '#989898';
      divDesc.style.display = 'block';
      divDesc.style.fontWeight = 'normal';

      elements.push(divDesc);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return elements;
}

function createOldPrice(currency, priceWithoutPromo) {
  var oldPrice = document.createElement('span');

  oldPrice.textContent = currency + ' ' + priceWithoutPromo + ',00';

  oldPrice.style.textDecoration = 'line-through';
  oldPrice.style.color = '#989898';

  return oldPrice;
}

function createNewPrice(currency, value, element) {
  var price = document.createElement('span');

  price.textContent = currency + ' ' + value + ',00';

  price.style.padding = '5px';
  price.style.fontSize = '22px';
  price.style.color = '#f0661e';
  price.style.fontWeight = 'bold';

  return price;
}

function createButton(hotel, tarifa) {
  var button = document.createElement('button');

  button.textContent = 'Reservar';

  button.style.display = 'block';
  button.style.borderRadius = '5px';
  button.style.fontSize = '20px';
  button.style.backgroundColor = '#f6534c';
  button.style.padding = '10px';
  button.style.border = '0';
  button.style.color = '#fff';

  button.addEventListener('click', function () {
    return window.alert('Voc\xEA reservou o hotel n\xFAmero ' + hotel + ' com a tarifa ' + tarifa);
  });

  return button;
}

function showPopover(popover) {
  popover.style.display = 'block';
}

function hidePopover(popover) {
  popover.style.display = 'none';
}

function createPopOver(text) {
  var div = document.createElement('div');
  (0, _popover.formatDivPopover)(div);

  var question = document.createElement('span');
  question.classList.add('question');
  question.textContent = '?';

  (0, _popover.formatQuestionPopover)(question);

  var popover = document.createElement('span');
  (0, _popover.formatPopover)(popover);

  var popoverText = document.createElement('span');
  popoverText.textContent = text;
  (0, _popover.formatPopoverText)(popoverText);

  popover.appendChild(popoverText);
  question.appendChild(popover);
  div.appendChild(question);

  question.addEventListener('mouseover', function () {
    return showPopover(popover);
  });
  question.addEventListener('mouseout', function () {
    return hidePopover(popover);
  });
  return div;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatModal = formatModal;
exports.formatModalContent = formatModalContent;
exports.formatBtnClose = formatBtnClose;
exports.formatModalTitle = formatModalTitle;
exports.formatModalGrid = formatModalGrid;

var _colors = __webpack_require__(0);

function formatModal() {
  var modal = document.querySelector('.modal');
  modal.style.position = 'fixed';
  modal.style.zIndex = '1';
  modal.style.left = '0';
  modal.style.top = '0';
  modal.style.height = '100%';
  modal.style.width = '100%';
  modal.style.overflowY = 'hidden';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

  modal.style.display = 'none';
}

function formatModalContent() {
  var modalContent = document.querySelector('.modal-content');

  modalContent.style.backgroundColor = _colors.WHITE;
  modalContent.style.margin = '15% auto';
  modalContent.style.padding = '50px';
  modalContent.style.width = '50%';
  modalContent.style.height = '400px';
  modalContent.style.position = 'absolute';
  modalContent.style.left = '20%';
  modalContent.style.top = '-20%';
  modalContent.style.overflow = 'auto';
  modalContent.style.zIndex = '1000';
  modalContent.style.border = '0 1px 0 0 dotted black';
}

function formatBtnClose() {
  var btnClose = document.querySelector('.btnClose');

  btnClose.style.color = '#CCC';
  btnClose.style.float = 'right';
  btnClose.style.fontSize = '30px';
  btnClose.style.cursor = 'pointer';
}

function formatModalTitle() {
  var modalTitle = document.querySelector('.modal-title');
  modalTitle.style.marginBottom = '40px';
}

function formatModalGrid() {
  var modalGrid = document.querySelector('.modal-grid');

  modalGrid.style.display = 'flex';
  modalGrid.style.flexWrap = 'wrap';
  modalGrid.style.justifyContent = 'space-around';
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDivPopover = formatDivPopover;
exports.formatQuestionPopover = formatQuestionPopover;
exports.formatPopover = formatPopover;
exports.formatPopoverText = formatPopoverText;
function formatDivPopover(div) {
  div.style.display = 'inline-block';
  div.style.paddingLeft = '20px';
}

function formatQuestionPopover(question) {
  question.style.borderRadius = '16px';
  question.style.color = '#fff';
  question.style.display = 'inline-block';
  question.style.height = '20px';
  question.style.position = 'relative';
  question.style.textAlign = 'center';
  question.style.width = '20px';
  question.style.backgroundColor = '#a0a0a0';
}

function formatPopover(popover) {
  popover.style.borderRadius = '5px';
  popover.style.bottom = '42px';
  popover.style.boxShadow = '1px 1px 1px 1px rgba(0, 0, 0, 0.15)';
  popover.style.left = '-95px';
  popover.style.padding = '7px 10px';
  popover.style.position = 'absolute';
  popover.style.width = '200px';
  popover.style.zIndex = '4';
  popover.style.display = 'none';
  popover.style.fontWeight = 'normal';
}

function formatPopoverText(popoverText) {
  popoverText.style.color = '#000';
  popoverText.style.textAlign = 'justify';
}

/***/ })
/******/ ]);