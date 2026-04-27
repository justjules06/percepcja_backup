/********************************* 
 * Percepcja_Wersja_Finalna *
 *********************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'percepcja_wersja_finalna';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color((0.6549, 0.6549, 0.6549)),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrukcjaRoutineBegin());
flowScheduler.add(instrukcjaRoutineEachFrame());
flowScheduler.add(instrukcjaRoutineEnd());
flowScheduler.add(demo_suwakaRoutineBegin());
flowScheduler.add(demo_suwakaRoutineEachFrame());
flowScheduler.add(demo_suwakaRoutineEnd());
flowScheduler.add(info_treningRoutineBegin());
flowScheduler.add(info_treningRoutineEachFrame());
flowScheduler.add(info_treningRoutineEnd());
flowScheduler.add(trial_treningRoutineBegin());
flowScheduler.add(trial_treningRoutineEachFrame());
flowScheduler.add(trial_treningRoutineEnd());
flowScheduler.add(koniec_treninguRoutineBegin());
flowScheduler.add(koniec_treninguRoutineEachFrame());
flowScheduler.add(koniec_treninguRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);




flowScheduler.add(podziekowanieRoutineBegin());
flowScheduler.add(podziekowanieRoutineEachFrame());
flowScheduler.add(podziekowanieRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
    {'name': 'photos/1K_SZ_5050.png', 'path': 'photos/1K_SZ_5050.png'},
    {'name': 'photos/1K_OZ_8020.png', 'path': 'photos/1K_OZ_8020.png'},
    {'name': 'photos/1K_RS_5050.png', 'path': 'photos/1K_RS_5050.png'},
    {'name': 'photos/1K_ZW_8020.png', 'path': 'photos/1K_ZW_8020.png'},
    {'name': 'photos/1K_ZO_5050.png', 'path': 'photos/1K_ZO_5050.png'},
    {'name': 'photos/1K_ZS_8020.png', 'path': 'photos/1K_ZS_8020.png'},
    {'name': 'photos/1K_ZW_5050.png', 'path': 'photos/1K_ZW_5050.png'},
    {'name': 'photos/1K_RS_8020.png', 'path': 'photos/1K_RS_8020.png'},
    {'name': 'photos/1M_ZO_5050.png', 'path': 'photos/1M_ZO_5050.png'},
    {'name': 'photos/1M_ZS_8020.png', 'path': 'photos/1M_ZS_8020.png'},
    {'name': 'photos/1M_RS_5050.png', 'path': 'photos/1M_RS_5050.png'},
    {'name': 'photos/1M_ZW_5050.png', 'path': 'photos/1M_ZW_5050.png'},
    {'name': 'photos/1K_ZO_8020.png', 'path': 'photos/1K_ZO_8020.png'},
    {'name': 'photos/1M_SZ_5050.png', 'path': 'photos/1M_SZ_5050.png'},
    {'name': 'photos/1M_RS_8020.png', 'path': 'photos/1M_RS_8020.png'},
    {'name': 'photos/1K_WZ_8020.png', 'path': 'photos/1K_WZ_8020.png'},
    {'name': 'photos/2K_RS_5050.png', 'path': 'photos/2K_RS_5050.png'},
    {'name': 'photos/1M_ZO_8020.png', 'path': 'photos/1M_ZO_8020.png'},
    {'name': 'photos/2K_ZW_5050.png', 'path': 'photos/2K_ZW_5050.png'},
    {'name': 'photos/1K_SZ_8020.png', 'path': 'photos/1K_SZ_8020.png'},
    {'name': 'photos/1M_ZW_8020.png', 'path': 'photos/1M_ZW_8020.png'},
    {'name': 'photos/2K_ZO_5050.png', 'path': 'photos/2K_ZO_5050.png'},
    {'name': 'photos/1K_SR_8020.png', 'path': 'photos/1K_SR_8020.png'},
    {'name': 'photos/2K_SZ_5050.png', 'path': 'photos/2K_SZ_5050.png'},
    {'name': 'photos/2M_ZW_5050.png', 'path': 'photos/2M_ZW_5050.png'},
    {'name': 'photos/1M_SZ_8020.png', 'path': 'photos/1M_SZ_8020.png'},
    {'name': 'photos/2M_ZO_5050.png', 'path': 'photos/2M_ZO_5050.png'},
    {'name': 'photos/1M_WZ_8020.png', 'path': 'photos/1M_WZ_8020.png'},
    {'name': 'photos/2M_RS_5050.png', 'path': 'photos/2M_RS_5050.png'},
    {'name': 'photos/1M_OZ_8020.png', 'path': 'photos/1M_OZ_8020.png'},
    {'name': 'photos/2M_SZ_5050.png', 'path': 'photos/2M_SZ_5050.png'},
    {'name': 'photos/1M_SR_8020.png', 'path': 'photos/1M_SR_8020.png'},
    {'name': 'photos/suwaki_instrukcja.png', 'path': 'photos/suwaki_instrukcja.png'},
    {'name': 'photos/twarz_testowa.jpg', 'path': 'photos/twarz_testowa.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instrukcjaClock;
var spacja_instr;
var textbox_2;
var demo_suwakaClock;
var spacja_suwak;
var textbox_3;
var suwaki_interpretacja;
var info_treningClock;
var spacja_trening;
var proba_testowa;
var trial_treningClock;
var pilot_label_text;
var pilot_fiksacja1;
var pilot_suwak;
var pilot_fiksacja2;
var pilot_pytanie;
var pilot_lewa_etykieta;
var pilot_prawa_etykieta;
var pilot_stim_image;
var koniec_treninguClock;
var spacja_start;
var start_badania;
var przerwaClock;
var przerwa_text;
var spacja_przerwa;
var trial_count;
var trialClock;
var label_text;
var stim_image;
var suwak_badanie;
var lewa_etykieta;
var prawa_etykieta;
var fiksacja2;
var pytanie;
var oddzielenie_trialiClock;
var text;
var podziekowanieClock;
var podziekowania_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instrukcja"
  instrukcjaClock = new util.Clock();
  spacja_instr = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  textbox_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_2',
    text: 'Zanim rozpocznie się eksperyment, dokładnie zapoznaj się z instrukcją poniżej.\n\nTwoim zadaniem będzie ocena serii zdjęć przedstawiających ludzkie twarze. Ocena będzie wymagać od Ciebie zdecydowania, jaką emocję dostrzegasz na danej twarzy oraz w jakim stopniu (wyrażonym w procentach) ta emocja jest nasilona. \n\n     • Przed zdjęciem pojawi się krótka informacja o wynikach wcześniejszych analiz dotyczących ekspresji emocji danej twarzy. Będą to dane dostarczone przez zaawansowany model Sztucznej Inteligencji lub uśrednione wyniki uzyskane od poprzednich uczestników badania. Przeczytaj ją dokładnie. \n\n     • W niektórych przypadkach żadna dodatkowa informacja nie zostanie wyświetlona i od razu przejdziesz do widoku twarzy. \n\n     • Po zniknięciu informacji w centralnej części ekranu pojawi się znak +, skup na nim wzrok. \n\n     • Zdjęcie twarzy pojawi się tylko na krótką chwilę, dlatego przy ocenie polegaj na swojej intuicji i pierwszym wrażeniu. \n\n     • Po zniknięciu zdjęcia na ekranie pojawi się suwak umieszczony pomiędzy dwiema emocjami. Twoim zadaniem jest przesunięcie wskaźnika w miejsce, które Twoim zdaniem najlepiej oddaje proporcję emocji dostrzeżonych na twarzy. Aby ruszyć wskaźnikiem suwaka nakieruj na niego kursorem i przytrzymując lewy przycisk myszy wybierz odpowiednie miejsce. \n\n     • Puszczenie wskaźnika suwaka automatycznie prześle Twoją odpowiedź. \n\nPamiętaj: nie ma złych odpowiedzi. Liczy się Twoja subiektywna ocena. \nNa następnym ekranie zostaniesz zaznajomiony z wyglądem i użyciem suwaka. \n  \nAby przejść dalej, naciśnij [SPACJĘ].\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.055,
    lineSpacing: 1.0,
    size: [1.8, 4],  units: 'norm', 
    ori: 0.0,
    color: (-1.0000, -1.0000, -1.0000), colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  // Initialize components for Routine "demo_suwaka"
  demo_suwakaClock = new util.Clock();
  spacja_suwak = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  textbox_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_3',
    text: '\n\n\n\nPo zniknięciu zdjęcia na ekranie pojawi się suwak, a na jego krańcach dwie emocje.\n\nUWAGA: przesunięcie i puszczenie suwaka automatycznie prześle Twoją odpowiedź. \n\n\n    • Pozycja suwaka nr 1 oznacza znaczną przewagę radości z nieznacznym udziałem smutku. \n\n    • Pozycja suwaka nr 2 oznacza przewagę radości z udziałem smutku. \n\n    • Pozycja suwaka nr 3 oznacza równy udział radości i  smutku. \n\n \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nAby przejść dalej, naciśnij [SPACJA]',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.1], 
    draggable: false,
    letterHeight: 0.055,
    lineSpacing: 1.0,
    size: [1.8, 4],  units: 'norm', 
    ori: 0.0,
    color: (-1.0000, -1.0000, -1.0000), colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  suwaki_interpretacja = new visual.ImageStim({
    win : psychoJS.window,
    name : 'suwaki_interpretacja', units : 'norm', 
    image : 'photos/suwaki_instrukcja.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, (- 0.2)], 
    draggable: false,
    size : [1, 0.75],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "info_trening"
  info_treningClock = new util.Clock();
  spacja_trening = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  proba_testowa = new visual.TextStim({
    win: psychoJS.window,
    name: 'proba_testowa',
    text: 'Próba treningowa \n\nZanim rozpocznie się właściwy eksperyment, zapraszamy do wykonania krótkiej próby treningowej. Ma ona charakter wyłącznie instruktażowy i pozwoli Ci przećwiczyć obsługę interaktywnego suwaka oraz zapoznać się z tempem zadania. Wynik tej części nie jest brany pod uwagę w końcowych wynikach badania. \n\nW ramach treningu zobaczysz jedną twarz, którą należy następnie ocenić, przesuwając suwak w odpowiednie miejsce na skali pomiędzy dwiema emocjami. Pamiętaj, aby polegać na swoim pierwszym wrażeniu. \n\nJeśli jesteś gotowy, naciśnij przycisk [SPACJA], aby rozpocząć. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "trial_trening"
  trial_treningClock = new util.Clock();
  pilot_label_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'pilot_label_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -1.0 
  });
  
  pilot_fiksacja1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pilot_fiksacja1',
    text: '+',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -2.0 
  });
  
  pilot_suwak = new visual.Slider({
    win: psychoJS.window, name: 'pilot_suwak',
    startValue: 0,
    size: [1, 0.1], pos: [0, (- 0.5)], ori: 0.0, units: 'norm',
    labels: undefined, fontSize: 0.05, ticks: [(- 50), (- 25), 0, 25, 50],
    granularity: 0.0, style: ["SLIDER"],
    color: new util.Color((-1.0000, 1.0000, 1.0000)), markerColor: new util.Color('Red'), lineColor: new util.Color((-1.0000, -1.0000, -1.0000)), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  pilot_fiksacja2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pilot_fiksacja2',
    text: '+',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -4.0 
  });
  
  pilot_pytanie = new visual.TextStim({
    win: psychoJS.window,
    name: 'pilot_pytanie',
    text: 'Jaką emocję wyrażała ta twarz?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -5.0 
  });
  
  pilot_lewa_etykieta = new visual.TextStim({
    win: psychoJS.window,
    name: 'pilot_lewa_etykieta',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [(- 0.6), (- 0.5)], draggable: false, height: 0.085,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -6.0 
  });
  
  pilot_prawa_etykieta = new visual.TextStim({
    win: psychoJS.window,
    name: 'pilot_prawa_etykieta',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0.6, (- 0.5)], draggable: false, height: 0.085,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -7.0 
  });
  
  pilot_stim_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'pilot_stim_image', units : undefined, 
    image : 'photos/twarz_testowa.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.75, 0.75],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  // Initialize components for Routine "koniec_treningu"
  koniec_treninguClock = new util.Clock();
  spacja_start = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  start_badania = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_badania',
    text: 'Koniec treningu \n\nPrzechodzimy do właściwej części badania, które składa się z 4 bloków po 8 twarzy. Pomiędzy kolejnymi blokami ustanowiono przerwę. \n\nOd teraz Twoje odpowiedzi będą rejestrowane. Pamiętaj o skupieniu na punkcie fiksacji i poleganiu na pierwszym wrażeniu. \n\nNaciśnij przycisk [SPACJA], aby rozpocząć.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: 1.4, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "przerwa"
  przerwaClock = new util.Clock();
  przerwa_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'przerwa_text',
    text: 'Czas na krótką przerwę. Odpocznij chwilę i naciśnij [SPACJA], aby kontynuować.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: 0.0 
  });
  
  spacja_przerwa = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from licznik
  trial_count = 0;
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  label_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'label_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -2.0 
  });
  
  stim_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.75, 0.75],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  suwak_badanie = new visual.Slider({
    win: psychoJS.window, name: 'suwak_badanie',
    startValue: 0,
    size: [1, 0.1], pos: [0, (- 0.5)], ori: 0.0, units: 'norm',
    labels: undefined, fontSize: 0.05, ticks: [(- 50), (- 25), 0, 25, 50],
    granularity: 0.0, style: ["SLIDER"],
    color: new util.Color((-1.0000, 1.0000, 1.0000)), markerColor: new util.Color((1.0000, -1.0000, -1.0000)), lineColor: new util.Color((-1.0000, -1.0000, -1.0000)), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  lewa_etykieta = new visual.TextStim({
    win: psychoJS.window,
    name: 'lewa_etykieta',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [(- 0.65), (- 0.5)], draggable: false, height: 0.085,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -5.0 
  });
  
  prawa_etykieta = new visual.TextStim({
    win: psychoJS.window,
    name: 'prawa_etykieta',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0.65, (- 0.5)], draggable: false, height: 0.085,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -6.0 
  });
  
  fiksacja2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fiksacja2',
    text: '+',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -7.0 
  });
  
  pytanie = new visual.TextStim({
    win: psychoJS.window,
    name: 'pytanie',
    text: 'Jaką emocję wyrażała ta twarz?',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "oddzielenie_triali"
  oddzielenie_trialiClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "podziekowanie"
  podziekowanieClock = new util.Clock();
  podziekowania_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'podziekowania_text',
    text: 'To już wszystko. Dziękujemy za udział w eksperymencie! \n\nEwentualne pytania oraz uwagi prosimy kierować na adres: Julia Koc, julkoc5@st.amu.edu.pl ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((-1.0000, -1.0000, -1.0000)),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instrukcjaMaxDurationReached;
var _spacja_instr_allKeys;
var instrukcjaMaxDuration;
var instrukcjaComponents;
function instrukcjaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instrukcja' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instrukcjaClock.reset();
    routineTimer.reset();
    instrukcjaMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from mouse_visible_2
    psychoJS.window.mouseVisible = true;
    
    spacja_instr.keys = undefined;
    spacja_instr.rt = undefined;
    _spacja_instr_allKeys = [];
    psychoJS.experiment.addData('instrukcja.started', globalClock.getTime());
    instrukcjaMaxDuration = null
    // keep track of which components have finished
    instrukcjaComponents = [];
    instrukcjaComponents.push(spacja_instr);
    instrukcjaComponents.push(textbox_2);
    
    for (const thisComponent of instrukcjaComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instrukcjaRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instrukcja' ---
    // get current time
    t = instrukcjaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *spacja_instr* updates
    if (t >= 0.0 && spacja_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacja_instr.tStart = t;  // (not accounting for frame time here)
      spacja_instr.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spacja_instr.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spacja_instr.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spacja_instr.clearEvents(); });
    }
    
    // if spacja_instr is active this frame...
    if (spacja_instr.status === PsychoJS.Status.STARTED) {
      let theseKeys = spacja_instr.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _spacja_instr_allKeys = _spacja_instr_allKeys.concat(theseKeys);
      if (_spacja_instr_allKeys.length > 0) {
        spacja_instr.keys = _spacja_instr_allKeys[_spacja_instr_allKeys.length - 1].name;  // just the last key pressed
        spacja_instr.rt = _spacja_instr_allKeys[_spacja_instr_allKeys.length - 1].rt;
        spacja_instr.duration = _spacja_instr_allKeys[_spacja_instr_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *textbox_2* updates
    if (t >= 0.0 && textbox_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_2.tStart = t;  // (not accounting for frame time here)
      textbox_2.frameNStart = frameN;  // exact frame index
      
      textbox_2.setAutoDraw(true);
    }
    
    
    // if textbox_2 is active this frame...
    if (textbox_2.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrukcjaComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrukcjaRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instrukcja' ---
    for (const thisComponent of instrukcjaComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instrukcja.stopped', globalClock.getTime());
    // Run 'End Routine' code from mouse_visible_2
    psychoJS.window.mouseVisible = false;
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(spacja_instr.corr, level);
    }
    psychoJS.experiment.addData('spacja_instr.keys', spacja_instr.keys);
    if (typeof spacja_instr.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('spacja_instr.rt', spacja_instr.rt);
        psychoJS.experiment.addData('spacja_instr.duration', spacja_instr.duration);
        routineTimer.reset();
        }
    
    spacja_instr.stop();
    // the Routine "instrukcja" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demo_suwakaMaxDurationReached;
var _spacja_suwak_allKeys;
var demo_suwakaMaxDuration;
var demo_suwakaComponents;
function demo_suwakaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demo_suwaka' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    demo_suwakaClock.reset();
    routineTimer.reset();
    demo_suwakaMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from mouse_visible_3
    psychoJS.window.mouseVisible = true;
    
    spacja_suwak.keys = undefined;
    spacja_suwak.rt = undefined;
    _spacja_suwak_allKeys = [];
    psychoJS.experiment.addData('demo_suwaka.started', globalClock.getTime());
    demo_suwakaMaxDuration = null
    // keep track of which components have finished
    demo_suwakaComponents = [];
    demo_suwakaComponents.push(spacja_suwak);
    demo_suwakaComponents.push(textbox_3);
    demo_suwakaComponents.push(suwaki_interpretacja);
    
    for (const thisComponent of demo_suwakaComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function demo_suwakaRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'demo_suwaka' ---
    // get current time
    t = demo_suwakaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *spacja_suwak* updates
    if (t >= 0.0 && spacja_suwak.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacja_suwak.tStart = t;  // (not accounting for frame time here)
      spacja_suwak.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spacja_suwak.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spacja_suwak.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spacja_suwak.clearEvents(); });
    }
    
    // if spacja_suwak is active this frame...
    if (spacja_suwak.status === PsychoJS.Status.STARTED) {
      let theseKeys = spacja_suwak.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _spacja_suwak_allKeys = _spacja_suwak_allKeys.concat(theseKeys);
      if (_spacja_suwak_allKeys.length > 0) {
        spacja_suwak.keys = _spacja_suwak_allKeys[_spacja_suwak_allKeys.length - 1].name;  // just the last key pressed
        spacja_suwak.rt = _spacja_suwak_allKeys[_spacja_suwak_allKeys.length - 1].rt;
        spacja_suwak.duration = _spacja_suwak_allKeys[_spacja_suwak_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *textbox_3* updates
    if (t >= 0.0 && textbox_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_3.tStart = t;  // (not accounting for frame time here)
      textbox_3.frameNStart = frameN;  // exact frame index
      
      textbox_3.setAutoDraw(true);
    }
    
    
    // if textbox_3 is active this frame...
    if (textbox_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *suwaki_interpretacja* updates
    if (t >= 0.0 && suwaki_interpretacja.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      suwaki_interpretacja.tStart = t;  // (not accounting for frame time here)
      suwaki_interpretacja.frameNStart = frameN;  // exact frame index
      
      suwaki_interpretacja.setAutoDraw(true);
    }
    
    
    // if suwaki_interpretacja is active this frame...
    if (suwaki_interpretacja.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of demo_suwakaComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demo_suwakaRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demo_suwaka' ---
    for (const thisComponent of demo_suwakaComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('demo_suwaka.stopped', globalClock.getTime());
    // Run 'End Routine' code from mouse_visible_3
    psychoJS.window.mouseVisible = false;
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(spacja_suwak.corr, level);
    }
    psychoJS.experiment.addData('spacja_suwak.keys', spacja_suwak.keys);
    if (typeof spacja_suwak.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('spacja_suwak.rt', spacja_suwak.rt);
        psychoJS.experiment.addData('spacja_suwak.duration', spacja_suwak.duration);
        routineTimer.reset();
        }
    
    spacja_suwak.stop();
    // the Routine "demo_suwaka" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var info_treningMaxDurationReached;
var _spacja_trening_allKeys;
var info_treningMaxDuration;
var info_treningComponents;
function info_treningRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'info_trening' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    info_treningClock.reset();
    routineTimer.reset();
    info_treningMaxDurationReached = false;
    // update component parameters for each repeat
    spacja_trening.keys = undefined;
    spacja_trening.rt = undefined;
    _spacja_trening_allKeys = [];
    // Run 'Begin Routine' code from mouse_visible_4
    psychoJS.window.mouseVisible = true;
    
    psychoJS.experiment.addData('info_trening.started', globalClock.getTime());
    info_treningMaxDuration = null
    // keep track of which components have finished
    info_treningComponents = [];
    info_treningComponents.push(spacja_trening);
    info_treningComponents.push(proba_testowa);
    
    for (const thisComponent of info_treningComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function info_treningRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'info_trening' ---
    // get current time
    t = info_treningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *spacja_trening* updates
    if (t >= 0.0 && spacja_trening.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacja_trening.tStart = t;  // (not accounting for frame time here)
      spacja_trening.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spacja_trening.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spacja_trening.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spacja_trening.clearEvents(); });
    }
    
    // if spacja_trening is active this frame...
    if (spacja_trening.status === PsychoJS.Status.STARTED) {
      let theseKeys = spacja_trening.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _spacja_trening_allKeys = _spacja_trening_allKeys.concat(theseKeys);
      if (_spacja_trening_allKeys.length > 0) {
        spacja_trening.keys = _spacja_trening_allKeys[_spacja_trening_allKeys.length - 1].name;  // just the last key pressed
        spacja_trening.rt = _spacja_trening_allKeys[_spacja_trening_allKeys.length - 1].rt;
        spacja_trening.duration = _spacja_trening_allKeys[_spacja_trening_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *proba_testowa* updates
    if (t >= 0.0 && proba_testowa.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      proba_testowa.tStart = t;  // (not accounting for frame time here)
      proba_testowa.frameNStart = frameN;  // exact frame index
      
      proba_testowa.setAutoDraw(true);
    }
    
    
    // if proba_testowa is active this frame...
    if (proba_testowa.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of info_treningComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function info_treningRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'info_trening' ---
    for (const thisComponent of info_treningComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('info_trening.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(spacja_trening.corr, level);
    }
    psychoJS.experiment.addData('spacja_trening.keys', spacja_trening.keys);
    if (typeof spacja_trening.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('spacja_trening.rt', spacja_trening.rt);
        psychoJS.experiment.addData('spacja_trening.duration', spacja_trening.duration);
        routineTimer.reset();
        }
    
    spacja_trening.stop();
    // Run 'End Routine' code from mouse_visible_4
    psychoJS.window.mouseVisible = false;
    
    // the Routine "info_trening" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_treningMaxDurationReached;
var trial_treningMaxDuration;
var trial_treningComponents;
function trial_treningRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_trening' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trial_treningClock.reset();
    routineTimer.reset();
    trial_treningMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from mouse_visible_5
    psychoJS.window.mouseVisible = true;
    
    pilot_label_text.setOpacity(None);
    pilot_label_text.setText('Model AI wykrył w tej twarzy 80% smutku.\n\n');
    pilot_suwak.reset()
    pilot_lewa_etykieta.setText('radość');
    pilot_prawa_etykieta.setText('smutek');
    psychoJS.experiment.addData('trial_trening.started', globalClock.getTime());
    trial_treningMaxDuration = null
    // keep track of which components have finished
    trial_treningComponents = [];
    trial_treningComponents.push(pilot_label_text);
    trial_treningComponents.push(pilot_fiksacja1);
    trial_treningComponents.push(pilot_suwak);
    trial_treningComponents.push(pilot_fiksacja2);
    trial_treningComponents.push(pilot_pytanie);
    trial_treningComponents.push(pilot_lewa_etykieta);
    trial_treningComponents.push(pilot_prawa_etykieta);
    trial_treningComponents.push(pilot_stim_image);
    
    for (const thisComponent of trial_treningComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trial_treningRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_trening' ---
    // get current time
    t = trial_treningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pilot_label_text* updates
    if (t >= 0.95 && pilot_label_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pilot_label_text.tStart = t;  // (not accounting for frame time here)
      pilot_label_text.frameNStart = frameN;  // exact frame index
      
      pilot_label_text.setAutoDraw(true);
    }
    
    
    // if pilot_label_text is active this frame...
    if (pilot_label_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.95 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (pilot_label_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      pilot_label_text.tStop = t;  // not accounting for scr refresh
      pilot_label_text.frameNStop = frameN;  // exact frame index
      // update status
      pilot_label_text.status = PsychoJS.Status.FINISHED;
      pilot_label_text.setAutoDraw(false);
    }
    
    
    // *pilot_fiksacja1* updates
    if (t >= 0.0 && pilot_fiksacja1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pilot_fiksacja1.tStart = t;  // (not accounting for frame time here)
      pilot_fiksacja1.frameNStart = frameN;  // exact frame index
      
      pilot_fiksacja1.setAutoDraw(true);
    }
    
    
    // if pilot_fiksacja1 is active this frame...
    if (pilot_fiksacja1.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (pilot_fiksacja1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      pilot_fiksacja1.tStop = t;  // not accounting for scr refresh
      pilot_fiksacja1.frameNStop = frameN;  // exact frame index
      // update status
      pilot_fiksacja1.status = PsychoJS.Status.FINISHED;
      pilot_fiksacja1.setAutoDraw(false);
    }
    
    
    // *pilot_suwak* updates
    if (t >= 6.5 && pilot_suwak.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pilot_suwak.tStart = t;  // (not accounting for frame time here)
      pilot_suwak.frameNStart = frameN;  // exact frame index
      
      pilot_suwak.setAutoDraw(true);
    }
    
    
    // if pilot_suwak is active this frame...
    if (pilot_suwak.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check pilot_suwak for response to end Routine
    if (pilot_suwak.getRating() !== undefined && pilot_suwak.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *pilot_fiksacja2* updates
    if (t >= 4.15 && pilot_fiksacja2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pilot_fiksacja2.tStart = t;  // (not accounting for frame time here)
      pilot_fiksacja2.frameNStart = frameN;  // exact frame index
      
      pilot_fiksacja2.setAutoDraw(true);
    }
    
    
    // if pilot_fiksacja2 is active this frame...
    if (pilot_fiksacja2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 4.15 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (pilot_fiksacja2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      pilot_fiksacja2.tStop = t;  // not accounting for scr refresh
      pilot_fiksacja2.frameNStop = frameN;  // exact frame index
      // update status
      pilot_fiksacja2.status = PsychoJS.Status.FINISHED;
      pilot_fiksacja2.setAutoDraw(false);
    }
    
    
    // *pilot_pytanie* updates
    if (t >= 6.5 && pilot_pytanie.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pilot_pytanie.tStart = t;  // (not accounting for frame time here)
      pilot_pytanie.frameNStart = frameN;  // exact frame index
      
      pilot_pytanie.setAutoDraw(true);
    }
    
    
    // if pilot_pytanie is active this frame...
    if (pilot_pytanie.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *pilot_lewa_etykieta* updates
    if (t >= 6.5 && pilot_lewa_etykieta.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pilot_lewa_etykieta.tStart = t;  // (not accounting for frame time here)
      pilot_lewa_etykieta.frameNStart = frameN;  // exact frame index
      
      pilot_lewa_etykieta.setAutoDraw(true);
    }
    
    
    // if pilot_lewa_etykieta is active this frame...
    if (pilot_lewa_etykieta.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *pilot_prawa_etykieta* updates
    if (t >= 6.5 && pilot_prawa_etykieta.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pilot_prawa_etykieta.tStart = t;  // (not accounting for frame time here)
      pilot_prawa_etykieta.frameNStart = frameN;  // exact frame index
      
      pilot_prawa_etykieta.setAutoDraw(true);
    }
    
    
    // if pilot_prawa_etykieta is active this frame...
    if (pilot_prawa_etykieta.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *pilot_stim_image* updates
    if (t >= 5.1 && pilot_stim_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pilot_stim_image.tStart = t;  // (not accounting for frame time here)
      pilot_stim_image.frameNStart = frameN;  // exact frame index
      
      pilot_stim_image.setAutoDraw(true);
    }
    
    
    // if pilot_stim_image is active this frame...
    if (pilot_stim_image.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 5.1 + 1.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (pilot_stim_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      pilot_stim_image.tStop = t;  // not accounting for scr refresh
      pilot_stim_image.frameNStop = frameN;  // exact frame index
      // update status
      pilot_stim_image.status = PsychoJS.Status.FINISHED;
      pilot_stim_image.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_treningComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_treningRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_trening' ---
    for (const thisComponent of trial_treningComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_trening.stopped', globalClock.getTime());
    // Run 'End Routine' code from mouse_visible_5
    psychoJS.window.mouseVisible = false;
    
    psychoJS.experiment.addData('pilot_suwak.response', pilot_suwak.getRating());
    psychoJS.experiment.addData('pilot_suwak.rt', pilot_suwak.getRT());
    // the Routine "trial_trening" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var koniec_treninguMaxDurationReached;
var _spacja_start_allKeys;
var koniec_treninguMaxDuration;
var koniec_treninguComponents;
function koniec_treninguRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'koniec_treningu' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    koniec_treninguClock.reset();
    routineTimer.reset();
    koniec_treninguMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from mouse_visible_6
    psychoJS.window.mouseVisible = true;
    
    spacja_start.keys = undefined;
    spacja_start.rt = undefined;
    _spacja_start_allKeys = [];
    psychoJS.experiment.addData('koniec_treningu.started', globalClock.getTime());
    koniec_treninguMaxDuration = null
    // keep track of which components have finished
    koniec_treninguComponents = [];
    koniec_treninguComponents.push(spacja_start);
    koniec_treninguComponents.push(start_badania);
    
    for (const thisComponent of koniec_treninguComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function koniec_treninguRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'koniec_treningu' ---
    // get current time
    t = koniec_treninguClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *spacja_start* updates
    if (t >= 0.0 && spacja_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacja_start.tStart = t;  // (not accounting for frame time here)
      spacja_start.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spacja_start.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spacja_start.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spacja_start.clearEvents(); });
    }
    
    // if spacja_start is active this frame...
    if (spacja_start.status === PsychoJS.Status.STARTED) {
      let theseKeys = spacja_start.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _spacja_start_allKeys = _spacja_start_allKeys.concat(theseKeys);
      if (_spacja_start_allKeys.length > 0) {
        spacja_start.keys = _spacja_start_allKeys[_spacja_start_allKeys.length - 1].name;  // just the last key pressed
        spacja_start.rt = _spacja_start_allKeys[_spacja_start_allKeys.length - 1].rt;
        spacja_start.duration = _spacja_start_allKeys[_spacja_start_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *start_badania* updates
    if (t >= 0.0 && start_badania.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_badania.tStart = t;  // (not accounting for frame time here)
      start_badania.frameNStart = frameN;  // exact frame index
      
      start_badania.setAutoDraw(true);
    }
    
    
    // if start_badania is active this frame...
    if (start_badania.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of koniec_treninguComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function koniec_treninguRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'koniec_treningu' ---
    for (const thisComponent of koniec_treninguComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('koniec_treningu.stopped', globalClock.getTime());
    // Run 'End Routine' code from mouse_visible_6
    psychoJS.window.mouseVisible = false;
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(spacja_start.corr, level);
    }
    psychoJS.experiment.addData('spacja_start.keys', spacja_start.keys);
    if (typeof spacja_start.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('spacja_start.rt', spacja_start.rt);
        psychoJS.experiment.addData('spacja_start.duration', spacja_start.duration);
        routineTimer.reset();
        }
    
    spacja_start.stop();
    // the Routine "koniec_treningu" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(przerwaRoutineBegin(snapshot));
      trialsLoopScheduler.add(przerwaRoutineEachFrame());
      trialsLoopScheduler.add(przerwaRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(oddzielenie_trialiRoutineBegin(snapshot));
      trialsLoopScheduler.add(oddzielenie_trialiRoutineEachFrame());
      trialsLoopScheduler.add(oddzielenie_trialiRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var przerwaMaxDurationReached;
var _spacja_przerwa_allKeys;
var przerwaMaxDuration;
var przerwaComponents;
function przerwaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'przerwa' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    przerwaClock.reset();
    routineTimer.reset();
    przerwaMaxDurationReached = false;
    // update component parameters for each repeat
    spacja_przerwa.keys = undefined;
    spacja_przerwa.rt = undefined;
    _spacja_przerwa_allKeys = [];
    // Run 'Begin Routine' code from licznik
    trial_count += 1;
    if (((trial_count === 1) || (((trial_count - 1) % 8) !== 0))) {
        continueRoutine = false;
    }
    
    psychoJS.experiment.addData('przerwa.started', globalClock.getTime());
    przerwaMaxDuration = null
    // keep track of which components have finished
    przerwaComponents = [];
    przerwaComponents.push(przerwa_text);
    przerwaComponents.push(spacja_przerwa);
    
    for (const thisComponent of przerwaComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function przerwaRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'przerwa' ---
    // get current time
    t = przerwaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *przerwa_text* updates
    if (t >= 0.0 && przerwa_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      przerwa_text.tStart = t;  // (not accounting for frame time here)
      przerwa_text.frameNStart = frameN;  // exact frame index
      
      przerwa_text.setAutoDraw(true);
    }
    
    
    // if przerwa_text is active this frame...
    if (przerwa_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *spacja_przerwa* updates
    if (t >= 0.0 && spacja_przerwa.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacja_przerwa.tStart = t;  // (not accounting for frame time here)
      spacja_przerwa.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spacja_przerwa.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spacja_przerwa.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spacja_przerwa.clearEvents(); });
    }
    
    // if spacja_przerwa is active this frame...
    if (spacja_przerwa.status === PsychoJS.Status.STARTED) {
      let theseKeys = spacja_przerwa.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _spacja_przerwa_allKeys = _spacja_przerwa_allKeys.concat(theseKeys);
      if (_spacja_przerwa_allKeys.length > 0) {
        spacja_przerwa.keys = _spacja_przerwa_allKeys[_spacja_przerwa_allKeys.length - 1].name;  // just the last key pressed
        spacja_przerwa.rt = _spacja_przerwa_allKeys[_spacja_przerwa_allKeys.length - 1].rt;
        spacja_przerwa.duration = _spacja_przerwa_allKeys[_spacja_przerwa_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of przerwaComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function przerwaRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'przerwa' ---
    for (const thisComponent of przerwaComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('przerwa.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(spacja_przerwa.corr, level);
    }
    psychoJS.experiment.addData('spacja_przerwa.keys', spacja_przerwa.keys);
    if (typeof spacja_przerwa.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('spacja_przerwa.rt', spacja_przerwa.rt);
        psychoJS.experiment.addData('spacja_przerwa.duration', spacja_przerwa.duration);
        routineTimer.reset();
        }
    
    spacja_przerwa.stop();
    // the Routine "przerwa" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialMaxDurationReached;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from label_opacity
    if ((etykieta === "test")) {
        label_text.text = "";
        label_text.opacity = 0;
    } else {
        label_text.text = etykieta;
        label_text.opacity = 1;
    }
    
    // Run 'Begin Routine' code from mouse_visible
    psychoJS.window.mouseVisible = true;
    
    label_text.setOpacity(None);
    label_text.setText(etykieta);
    stim_image.setImage(image_path);
    suwak_badanie.reset()
    lewa_etykieta.setText(left_label);
    prawa_etykieta.setText(right_label);
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(label_text);
    trialComponents.push(stim_image);
    trialComponents.push(suwak_badanie);
    trialComponents.push(lewa_etykieta);
    trialComponents.push(prawa_etykieta);
    trialComponents.push(fiksacja2);
    trialComponents.push(pytanie);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *label_text* updates
    if (t >= 0.0 && label_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_text.tStart = t;  // (not accounting for frame time here)
      label_text.frameNStart = frameN;  // exact frame index
      
      label_text.setAutoDraw(true);
    }
    
    
    // if label_text is active this frame...
    if (label_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + show_label - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      label_text.tStop = t;  // not accounting for scr refresh
      label_text.frameNStop = frameN;  // exact frame index
      // update status
      label_text.status = PsychoJS.Status.FINISHED;
      label_text.setAutoDraw(false);
    }
    
    
    // *stim_image* updates
    if (t >= (show_label + 1.15) && stim_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_image.tStart = t;  // (not accounting for frame time here)
      stim_image.frameNStart = frameN;  // exact frame index
      
      stim_image.setAutoDraw(true);
    }
    
    
    // if stim_image is active this frame...
    if (stim_image.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = (show_label + 1.15) + 1.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (stim_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      stim_image.tStop = t;  // not accounting for scr refresh
      stim_image.frameNStop = frameN;  // exact frame index
      // update status
      stim_image.status = PsychoJS.Status.FINISHED;
      stim_image.setAutoDraw(false);
    }
    
    
    // *suwak_badanie* updates
    if (t >= (show_label + 2.65) && suwak_badanie.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      suwak_badanie.tStart = t;  // (not accounting for frame time here)
      suwak_badanie.frameNStart = frameN;  // exact frame index
      
      suwak_badanie.setAutoDraw(true);
    }
    
    
    // if suwak_badanie is active this frame...
    if (suwak_badanie.status === PsychoJS.Status.STARTED) {
    }
    
    
    // Check suwak_badanie for response to end Routine
    if (suwak_badanie.getRating() !== undefined && suwak_badanie.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *lewa_etykieta* updates
    if (t >= (show_label + 2.65) && lewa_etykieta.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lewa_etykieta.tStart = t;  // (not accounting for frame time here)
      lewa_etykieta.frameNStart = frameN;  // exact frame index
      
      lewa_etykieta.setAutoDraw(true);
    }
    
    
    // if lewa_etykieta is active this frame...
    if (lewa_etykieta.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *prawa_etykieta* updates
    if (t >= (show_label + 2.65) && prawa_etykieta.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prawa_etykieta.tStart = t;  // (not accounting for frame time here)
      prawa_etykieta.frameNStart = frameN;  // exact frame index
      
      prawa_etykieta.setAutoDraw(true);
    }
    
    
    // if prawa_etykieta is active this frame...
    if (prawa_etykieta.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *fiksacja2* updates
    if (t >= (show_label + 0.2) && fiksacja2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fiksacja2.tStart = t;  // (not accounting for frame time here)
      fiksacja2.frameNStart = frameN;  // exact frame index
      
      fiksacja2.setAutoDraw(true);
    }
    
    
    // if fiksacja2 is active this frame...
    if (fiksacja2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = (show_label + 0.2) + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fiksacja2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fiksacja2.tStop = t;  // not accounting for scr refresh
      fiksacja2.frameNStop = frameN;  // exact frame index
      // update status
      fiksacja2.status = PsychoJS.Status.FINISHED;
      fiksacja2.setAutoDraw(false);
    }
    
    
    // *pytanie* updates
    if (t >= (show_label + 2.65) && pytanie.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pytanie.tStart = t;  // (not accounting for frame time here)
      pytanie.frameNStart = frameN;  // exact frame index
      
      pytanie.setAutoDraw(true);
    }
    
    
    // if pytanie is active this frame...
    if (pytanie.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // Run 'End Routine' code from mouse_visible
    psychoJS.window.mouseVisible = false;
    
    psychoJS.experiment.addData('suwak_badanie.response', suwak_badanie.getRating());
    psychoJS.experiment.addData('suwak_badanie.rt', suwak_badanie.getRT());
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var oddzielenie_trialiMaxDurationReached;
var oddzielenie_trialiMaxDuration;
var oddzielenie_trialiComponents;
function oddzielenie_trialiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'oddzielenie_triali' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    oddzielenie_trialiClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    oddzielenie_trialiMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    psychoJS.window.color = "dimgrey";
    
    psychoJS.experiment.addData('oddzielenie_triali.started', globalClock.getTime());
    oddzielenie_trialiMaxDuration = null
    // keep track of which components have finished
    oddzielenie_trialiComponents = [];
    oddzielenie_trialiComponents.push(text);
    
    for (const thisComponent of oddzielenie_trialiComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function oddzielenie_trialiRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'oddzielenie_triali' ---
    // get current time
    t = oddzielenie_trialiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text.tStop = t;  // not accounting for scr refresh
      text.frameNStop = frameN;  // exact frame index
      // update status
      text.status = PsychoJS.Status.FINISHED;
      text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of oddzielenie_trialiComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function oddzielenie_trialiRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'oddzielenie_triali' ---
    for (const thisComponent of oddzielenie_trialiComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('oddzielenie_triali.stopped', globalClock.getTime());
    // Run 'End Routine' code from code
    psychoJS.window.color = "lightgrey";
    
    if (routineForceEnded) {
        routineTimer.reset();} else if (oddzielenie_trialiMaxDurationReached) {
        oddzielenie_trialiClock.add(oddzielenie_trialiMaxDuration);
    } else {
        oddzielenie_trialiClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var podziekowanieMaxDurationReached;
var podziekowanieMaxDuration;
var podziekowanieComponents;
function podziekowanieRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'podziekowanie' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    podziekowanieClock.reset();
    routineTimer.reset();
    podziekowanieMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('podziekowanie.started', globalClock.getTime());
    podziekowanieMaxDuration = null
    // keep track of which components have finished
    podziekowanieComponents = [];
    podziekowanieComponents.push(podziekowania_text);
    
    for (const thisComponent of podziekowanieComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function podziekowanieRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'podziekowanie' ---
    // get current time
    t = podziekowanieClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *podziekowania_text* updates
    if (t >= 0.0 && podziekowania_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      podziekowania_text.tStart = t;  // (not accounting for frame time here)
      podziekowania_text.frameNStart = frameN;  // exact frame index
      
      podziekowania_text.setAutoDraw(true);
    }
    
    
    // if podziekowania_text is active this frame...
    if (podziekowania_text.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of podziekowanieComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function podziekowanieRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'podziekowanie' ---
    for (const thisComponent of podziekowanieComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('podziekowanie.stopped', globalClock.getTime());
    // the Routine "podziekowanie" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
