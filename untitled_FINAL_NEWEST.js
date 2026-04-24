/****************************** 
 * Untitled_Final_Newest *
 ******************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'untitled_FINAL_NEWEST';  // from the Builder filename that created this script
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
  color: new util.Color([0,0,0]),
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
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
    {'name': 'ee7bd76502e1d9aea7c74fc5bea75be9.jpg', 'path': 'photos/ee7bd76502e1d9aea7c74fc5bea75be9.jpg'},
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


var trialClock;
var label_text;
var stim_image;
var suwak_badanie;
var lewa_etykieta;
var prawa_etykieta;
var fiksacja1;
var fiksacja2;
var pytanie;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  label_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'label_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
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
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  suwak_badanie = new visual.Slider({
    win: psychoJS.window, name: 'suwak_badanie',
    startValue: 0,
    size: [1, 0.1], pos: [0, (- 0.5)], ori: 0.0, units: 'norm',
    labels: undefined, fontSize: 0.05, ticks: [(- 50), (- 12.5), (- 25), (- 37.5), 0, 12.5, 25, 37.5, 50],
    granularity: 0.0, style: ["SLIDER"],
    color: new util.Color((-1.0000, 1.0000, 1.0000)), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  lewa_etykieta = new visual.TextStim({
    win: psychoJS.window,
    name: 'lewa_etykieta',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.55), (- 0.05)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  prawa_etykieta = new visual.TextStim({
    win: psychoJS.window,
    name: 'prawa_etykieta',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.55, (- 0.05)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  fiksacja1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fiksacja1',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  fiksacja2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fiksacja2',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  pytanie = new visual.TextStim({
    win: psychoJS.window,
    name: 'pytanie',
    text: 'Jaką emocję przedstawiała twarz?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
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
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
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


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
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
    // Run 'Begin Routine' code from mouse_visible
    psychoJS.window.mouseVisible = true;
    
    // Run 'Begin Routine' code from label_opacity
    if ((show_label === 1)) {
        (label_text.opacity === 1);
    } else {
        (label_text.opacity === 0);
    }
    
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
    trialComponents.push(fiksacja1);
    trialComponents.push(fiksacja2);
    trialComponents.push(pytanie);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *label_text* updates
    if (t >= 1.1 && label_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label_text.tStart = t;  // (not accounting for frame time here)
      label_text.frameNStart = frameN;  // exact frame index
      
      label_text.setAutoDraw(true);
    }
    
    
    // if label_text is active this frame...
    if (label_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1.1 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (label_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      label_text.tStop = t;  // not accounting for scr refresh
      label_text.frameNStop = frameN;  // exact frame index
      // update status
      label_text.status = PsychoJS.Status.FINISHED;
      label_text.setAutoDraw(false);
    }
    
    
    // *stim_image* updates
    if (t >= 4.6 && stim_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_image.tStart = t;  // (not accounting for frame time here)
      stim_image.frameNStart = frameN;  // exact frame index
      
      stim_image.setAutoDraw(true);
    }
    
    
    // if stim_image is active this frame...
    if (stim_image.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 4.6 + 0.9 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (stim_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      stim_image.tStop = t;  // not accounting for scr refresh
      stim_image.frameNStop = frameN;  // exact frame index
      // update status
      stim_image.status = PsychoJS.Status.FINISHED;
      stim_image.setAutoDraw(false);
    }
    
    
    // *suwak_badanie* updates
    if (t >= 5.5 && suwak_badanie.status === PsychoJS.Status.NOT_STARTED) {
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
    if (t >= 5.5 && lewa_etykieta.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lewa_etykieta.tStart = t;  // (not accounting for frame time here)
      lewa_etykieta.frameNStart = frameN;  // exact frame index
      
      lewa_etykieta.setAutoDraw(true);
    }
    
    
    // if lewa_etykieta is active this frame...
    if (lewa_etykieta.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *prawa_etykieta* updates
    if (t >= 5.5 && prawa_etykieta.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prawa_etykieta.tStart = t;  // (not accounting for frame time here)
      prawa_etykieta.frameNStart = frameN;  // exact frame index
      
      prawa_etykieta.setAutoDraw(true);
    }
    
    
    // if prawa_etykieta is active this frame...
    if (prawa_etykieta.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *fiksacja1* updates
    if (t >= 0.0 && fiksacja1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fiksacja1.tStart = t;  // (not accounting for frame time here)
      fiksacja1.frameNStart = frameN;  // exact frame index
      
      fiksacja1.setAutoDraw(true);
    }
    
    
    // if fiksacja1 is active this frame...
    if (fiksacja1.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fiksacja1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fiksacja1.tStop = t;  // not accounting for scr refresh
      fiksacja1.frameNStop = frameN;  // exact frame index
      // update status
      fiksacja1.status = PsychoJS.Status.FINISHED;
      fiksacja1.setAutoDraw(false);
    }
    
    
    // *fiksacja2* updates
    if (t >= 3.6 && fiksacja2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fiksacja2.tStart = t;  // (not accounting for frame time here)
      fiksacja2.frameNStart = frameN;  // exact frame index
      
      fiksacja2.setAutoDraw(true);
    }
    
    
    // if fiksacja2 is active this frame...
    if (fiksacja2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 3.6 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fiksacja2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fiksacja2.tStop = t;  // not accounting for scr refresh
      fiksacja2.frameNStop = frameN;  // exact frame index
      // update status
      fiksacja2.status = PsychoJS.Status.FINISHED;
      fiksacja2.setAutoDraw(false);
    }
    
    
    // *pytanie* updates
    if (t >= 5.5 && pytanie.status === PsychoJS.Status.NOT_STARTED) {
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
