// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">візуальне середовище програмування</span><span id="blocklyMessage">Blockly (Блоклі)</span><span id="codeTooltip">Див. згенерований код JavaScript. </span><span id="linkTooltip">Зберегти і пов\'язати з блоками.</span><span id="runTooltip">Запустіть програму, визначену блоками у робочій \\nобласті. </span><span id="runProgram">Запустити програму</span><span id="resetProgram">Очистити</span><span id="dialogOk">OK</span><span id="dialogCancel">Скасувати</span><span id="catLogic">Логіка</span><span id="catLoops">Петлі</span><span id="catMath">Математика</span><span id="catText">Текст</span><span id="catLists">Списки</span><span id="catColour">Колір</span><span id="catVariables">Змінні</span><span id="catProcedures">Процедури</span><span id="httpRequestError">Виникла проблема із запитом.</span><span id="linkAlert">Поділитися вашим блоками через посилання:\n\n%1</span><span id="hashError">На жаль, "%1" не відповідає жодній збереженій програмі.</span><span id="xmlError">Не вдалося завантажити ваш збережений файл.  Можливо, він був створений з іншої версії Blockly?</span><span id="listVariable">список</span><span id="textVariable">текст</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof planepage == 'undefined') { var planepage = {}; }


planepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Plane_rows">Рядки: %1</span><span id="Plane_getRows">рядки (%1)</span><span id="Plane_rows1">рядів 1-го класу: %1</span><span id="Plane_getRows1">рядів 1-го класу (%1)</span><span id="Plane_rows2">рядів 2-го класу: %1</span><span id="Plane_getRows2">рядів 2-го класу (%1)</span><span id="Plane_seats">Місць: %1</span><span id="Plane_placeholder">?</span><span id="Plane_setSeats">місць=</span></div>';
};


planepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = planepage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly (Блоклі)</a> : Літак</span> \\u0026nbsp; ';
  for (var i128 = 1; i128 < 4; i128++) {
    output += ' ' + ((i128 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i128) + '</span>' : (i128 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i128) + '">' + soy.$$escapeHtml(i128) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i128) + '">' + soy.$$escapeHtml(i128) + '</a>');
  }
  output += '</h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select></td></tr></table><script type="text/javascript" src="../slider.js"><\/script><svg id="plane" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="600" height="256" viewBox="0 142 600 256"><defs><g id="row1st"><rect class="seat1st" width="10" height="10" x="75" y="245" /><rect class="seat1st" width="10" height="10" x="75" y="256" /><rect class="seat1st" width="10" height="10" x="75" y="274" /><rect class="seat1st" width="10" height="10" x="75" y="285" /></g><g id="row2nd"><rect class="seat2nd" width="10" height="8" x="75" y="245" /><rect class="seat2nd" width="10" height="8" x="75" y="253" /><rect class="seat2nd" width="10" height="8" x="75" y="271" /><rect class="seat2nd" width="10" height="8" x="75" y="279" /><rect class="seat2nd" width="10" height="8" x="75" y="287" /></g><linearGradient id="grad1" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" style="stop-color:#fff;stop-opacity:0" /><stop offset="100%" style="stop-color:#fff;stop-opacity:1" /></linearGradient><linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#fff;stop-opacity:0" /><stop offset="100%" style="stop-color:#fff;stop-opacity:1" /></linearGradient></defs><path d="M 404,1 373,15 230,244 230,297 373,524 404,542 330,351 330,189 z" id="wing" /><path d="m 577,269 22,-93 -27,6 -44,88 44,88 27,6 z" id="tail" /><path d="m 483,296 h -407 c -38,0 -75,-13 -75,-26 c 0,-13 38,-26 75,-26 h 407 l 94,24 z" id="fuselage" /><rect width="610" height="100" x="-5" y="142" fill="url(#grad1)" /><rect width="610" height="100" x="-5" y="298" fill="url(#grad2)" /><text id="row1stText" x="55" y="380"></text><text id="row2ndText" x="350" y="380"></text><text x="55" y="210"><tspan id="seatText"></tspan><tspan id="seatYes" style="fill: #0c0;" dy="10">&#x2713;</tspan><tspan id="seatNo" style="fill: #f00;" dy="10">&#x2717;</tspan></text>' + ((opt_ijData.level > 1) ? '<rect id="crew_right" class="crew" width="10" height="10" x="35" y="256" /><rect id="crew_left" class="crew" width="10" height="10" x="35" y="274" />' : '') + '</svg><p>';
  switch (opt_ijData.level) {
    case 1:
      output += 'Літак має кілька рядів пасажирських сидінь. Кожен ряд містить чотири місця.';
      break;
    case 2:
      output += 'Літак має два місця в кабіні екіпажу (пілот і другий пілот), і кілька рядів пасажирських сидінь. Кожен рядок містить чотири місця.';
      break;
    case 3:
      output += 'Літак має два місця в кабіні екіпажу (пілот і другий пілот), і кілька рядів 1-го класу 2-го класу пасажирських місць. Кожний ряд 1-го класу містить чотири місця. Кожен ряд 2-го класу містить п\'ять місць.';
      break;
  }
  output += '</p><p>Побудувати формулу (нижче), яка обчислює кількість місць на літаку при зміні рядків (див. вище).</p><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../blocks_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + planepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>';
  return output;
};


planepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_arithmetic"><title name="OP">MULTIPLY</title></block>' + ((opt_ijData.level <= 2) ? '<block type="plane_get_rows"></block>' : '<block type="plane_get_rows1st"></block><block type="plane_get_rows2nd"></block>') + '</xml>';
};
