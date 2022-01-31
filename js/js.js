'use strict';

let settings = {
    $(elem) {
        document.querySelector(elem)
        },
    Smanual: $('#manual'),
    BgetSettingsButton: $('#getSettingsButton'),
    Ssettings: $('#settings'),

    Sgame: $('#game'),

}
let getSettings = {
    settings,
    startValues(){
        this.settings.BgetSettingsButton.addEventListener('click', getStartValues);
    },
    getStartValues(){
      this.settings.Smanual.classList.add('off');
    },
}
let run = {
    getSettings,
}
run.getSettings.startValues();