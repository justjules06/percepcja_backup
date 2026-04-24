#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2026.1.1),
    on kwiecień 24, 2026, at 17:37
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (
    NOT_STARTED, STARTED, PLAYING, PAUSED, STOPPED, STOPPING, FINISHED, PRESSED, 
    RELEASED, FOREVER, priority
)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2026.1.1'
expName = 'untitled_FINAL_NEWEST'  # from the Builder filename that created this script
expVersion = ''
# a list of functions to run when the experiment ends (starts off blank)
runAtExit = []
# information about this experiment
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'expVersion|hid': expVersion,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = (1090, 800)
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']
    # replace default participant ID
    if prefs.piloting['replaceParticipantID']:
        expInfo['participant'] = 'pilot'

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version=expVersion,
        extraInfo=expInfo, runtimeInfo=None,
        originPath='C:\\Users\\julia\\OneDrive\\Pulpit\\percepcja_psychopy\\untitled_FINAL_NEWEST_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    # store pilot mode in data file
    thisExp.addData('piloting', PILOTING, priority=priority.LOW)
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('info')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=False, allowStencil=False,
            monitor='testMonitor', color=(-1.0000, -1.0000, -1.0000), colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = (-1.0000, -1.0000, -1.0000)
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    if PILOTING:
        # show a visual indicator if we're in piloting mode
        if prefs.piloting['showPilotingIndicator']:
            win.showPilotingIndicator()
        # always show the mouse in piloting mode
        if prefs.piloting['forceMouseVisible']:
            win.mouseVisible = True
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    ioSession = ioServer = eyetracker = None
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ptb'
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], currentRoutine=None):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    currentRoutine : psychopy.data.Routine
        Current Routine we are in at time of pausing, if any. This object tells PsychoPy what Components to pause/play/dispatch.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='PsychToolbox',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # dispatch messages on response components
        if currentRoutine is not None:
            for comp in currentRoutine.getDispatchComponents():
                comp.device.dispatchMessages()
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # update experiment info
    expInfo['date'] = data.getDateStr()
    expInfo['expName'] = expName
    expInfo['expVersion'] = expVersion
    expInfo['psychopyVersion'] = psychopyVersion
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='PsychToolbox'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "instrukcja" ---
    spacja_instr = keyboard.Keyboard(deviceName='defaultKeyboard')
    text_instr = visual.TextStim(win=win, name='text_instr',
        text='Zanim rozpocznie się eksperyment, dokładnie zapoznaj się z instrukcją poniżej.  \n\nTwoim zadaniem będzie ocena serii zdjęć przedstawiających ludzkie twarze. Ocena będzie wymagać od Ciebie zdecydowania, jaką emocję dostrzegasz na danej twarzy oraz w jakim stopniu (wyrażonym w procentach) ta emocja jest nasilona. \n\n  -  Każdą próbę rozpocznie znak \\"+\\" – w tym momencie skup wzrok na środku ekranu. \n  -  Przed zdjęciem pojawi się krótka informacja o wynikach wcześniejszych analiz dotyczących ekspresji emocji danej twarzy. Będą to dane dostarczone przez zaawansowany model Sztucznej Inteligencji lub uśrednione wyniki uzyskane od poprzednich uczestników badania. W niektórych przypadkach żadna dodatkowa informacja nie zostanie wyświetlona i od razu przejdziesz do widoku twarzy. \n  -  Zdjęcie twarzy pojawi się tylko na krótką chwilę. Polegaj na swojej intuicji i pierwszym wrażeniu. \n  -  Po zniknięciu zdjęcia na ekranie pojawi się suwak umieszczony pomiędzy dwiema emocjami. Twoim zadaniem jest przesunięcie wskaźnika w miejsce, które najlepiej oddaje proporcję emocji dostrzeżonych na twarzy. Aby ruszyć wskaźnikiem suwaka nakieruj na niego kursorem i przytrzymując lewy przycisk myszy wybierz odpowiednie miejsce. \n  -  Przesunięcie i puszczenie suwaka automatycznie prześle Twoją odpowiedź. \n\nPamiętaj: nie ma złych odpowiedzi. Liczy się Twoja subiektywna ocena. \n\nNa następnym ekranie zostaniesz zaznajomiony z wyglądem i użyciem suwaka. \n\n\n\nAby przejść dalej, naciśnij [SPACJĘ].',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.03, wrapWidth=1.3, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    
    # --- Initialize components for Routine "demo_suwaka" ---
    suwak_info = visual.TextStim(win=win, name='suwak_info',
        text='Pozycję suwaka oznaczoną numerem 1 należy interpetować jako wskazanie ~80% radości i ~20% smutku. \n\nPozycję suwaka oznaczonego numerem 2 należy interpretować jako wskazanie ~40% radości i ~60% smutku. \n\nPozycję suwaka oznaczonego numerem 3 należy intepretować jako wskanie 50% radości i 50% smutku. \n\nAby przejść dalej, naciśnij [SPACJĘ].',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=1.3, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    spacja_suwak = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "info_trening" ---
    spacja_trening = keyboard.Keyboard(deviceName='defaultKeyboard')
    proba_testowa = visual.TextStim(win=win, name='proba_testowa',
        text='Próba treningowa \n\nZanim rozpocznie się właściwy eksperyment, zapraszamy do wykonania krótkiej próby treningowej. Ma ona charakter wyłącznie instruktażowy i pozwoli Ci przećwiczyć obsługę interaktywnego suwaka oraz zapoznać się z tempem zadania. Wynik tej części nie jest brany pod uwagę w końcowych wynikach badania. \n\nW ramach treningu zobaczysz jedną twarz, którą należy następnie ocenić, przesuwając suwak w odpowiednie miejsce na skali pomiędzy dwiema emocjami. Pamiętaj, aby polegać na swoim pierwszym wrażeniu. \n\nJeśli jesteś gotowy, naciśnij przycisk [SPACJA], aby rozpocząć. ',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    
    # --- Initialize components for Routine "trial_trening" ---
    
    # --- Initialize components for Routine "koniec_treningu" ---
    spacja_start = keyboard.Keyboard(deviceName='defaultKeyboard')
    start_badania = visual.TextStim(win=win, name='start_badania',
        text='Koniec treningu \n\nPrzechodzimy do właściwej części badania, które składa się z 4 bloków po 8 twarzy. Pomiędzy kolejnymi blokami ustanowiono przerwę. \n\nOd teraz Twoje odpowiedzi będą rejestrowane. Pamiętaj o skupieniu na punkcie fiksacji i poleganiu na pierwszym wrażeniu. \n\nNaciśnij przycisk [SPACJA], aby rozpocząć.',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    
    # --- Initialize components for Routine "trial" ---
    label_text = visual.TextStim(win=win, name='label_text',
        text='',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=1.3, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    stim_image = visual.ImageStim(
        win=win,
        name='stim_image', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(0.75, 0.75),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    suwak_badanie = visual.Slider(win=win, name='suwak_badanie',
        startValue=0, size=(1, 0.1), pos=(0, -0.5), units='norm',
        labels=None, ticks=(-50,-12.5, -25, -37.5, 0, 12.5, 25, 37.5, 50), granularity=0.0,
        style='slider', styleTweaks=[], opacity=None,
        labelColor=(-1.0000, 1.0000, 1.0000), markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Noto Sans', labelHeight=0.05,
        flip=False, ori=0.0, depth=-4, readOnly=False)
    lewa_etykieta = visual.TextStim(win=win, name='lewa_etykieta',
        text='',
        font='Arial',
        pos=[-1.1, -0.5], draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    prawa_etykieta = visual.TextStim(win=win, name='prawa_etykieta',
        text='',
        font='Arial',
        pos=(1.05, -0.5), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    fiksacja1 = visual.TextStim(win=win, name='fiksacja1',
        text='+',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.1, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    fiksacja2 = visual.TextStim(win=win, name='fiksacja2',
        text='+',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.1, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    pytanie = visual.TextStim(win=win, name='pytanie',
        text='Jaką emocję wyrażała ta twarz?',
        font='Arial',
        pos=(0, 0.25), draggable=False, height=0.04, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    if eyetracker is not None:
        eyetracker.enableEventReporting()
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "instrukcja" ---
    # create an object to store info about Routine instrukcja
    instrukcja = data.Routine(
        name='instrukcja',
        components=[spacja_instr, text_instr],
    )
    instrukcja.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for spacja_instr
    spacja_instr.keys = []
    spacja_instr.rt = []
    _spacja_instr_allKeys = []
    # store start times for instrukcja
    instrukcja.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    instrukcja.tStart = globalClock.getTime(format='float')
    instrukcja.status = STARTED
    thisExp.addData('instrukcja.started', instrukcja.tStart)
    instrukcja.maxDuration = None
    # keep track of which components have finished
    instrukcjaComponents = instrukcja.components
    for thisComponent in instrukcja.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instrukcja" ---
    thisExp.currentRoutine = instrukcja
    instrukcja.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *spacja_instr* updates
        waitOnFlip = False
        
        # if spacja_instr is starting this frame...
        if spacja_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            spacja_instr.frameNStart = frameN  # exact frame index
            spacja_instr.tStart = t  # local t and not account for scr refresh
            spacja_instr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(spacja_instr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'spacja_instr.started')
            # update status
            spacja_instr.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(spacja_instr.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(spacja_instr.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if spacja_instr.status == STARTED and not waitOnFlip:
            theseKeys = spacja_instr.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _spacja_instr_allKeys.extend(theseKeys)
            if len(_spacja_instr_allKeys):
                spacja_instr.keys = _spacja_instr_allKeys[-1].name  # just the last key pressed
                spacja_instr.rt = _spacja_instr_allKeys[-1].rt
                spacja_instr.duration = _spacja_instr_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # *text_instr* updates
        
        # if text_instr is starting this frame...
        if text_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_instr.frameNStart = frameN  # exact frame index
            text_instr.tStart = t  # local t and not account for scr refresh
            text_instr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_instr, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_instr.started')
            # update status
            text_instr.status = STARTED
            text_instr.setAutoDraw(True)
        
        # if text_instr is active this frame...
        if text_instr.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=instrukcja,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            instrukcja.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if instrukcja.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in instrukcja.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instrukcja" ---
    for thisComponent in instrukcja.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for instrukcja
    instrukcja.tStop = globalClock.getTime(format='float')
    instrukcja.tStopRefresh = tThisFlipGlobal
    thisExp.addData('instrukcja.stopped', instrukcja.tStop)
    # check responses
    if spacja_instr.keys in ['', [], None]:  # No response was made
        spacja_instr.keys = None
    thisExp.addData('spacja_instr.keys',spacja_instr.keys)
    if spacja_instr.keys != None:  # we had a response
        thisExp.addData('spacja_instr.rt', spacja_instr.rt)
        thisExp.addData('spacja_instr.duration', spacja_instr.duration)
    thisExp.nextEntry()
    # the Routine "instrukcja" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "demo_suwaka" ---
    # create an object to store info about Routine demo_suwaka
    demo_suwaka = data.Routine(
        name='demo_suwaka',
        components=[suwak_info, spacja_suwak],
    )
    demo_suwaka.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for spacja_suwak
    spacja_suwak.keys = []
    spacja_suwak.rt = []
    _spacja_suwak_allKeys = []
    # store start times for demo_suwaka
    demo_suwaka.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    demo_suwaka.tStart = globalClock.getTime(format='float')
    demo_suwaka.status = STARTED
    thisExp.addData('demo_suwaka.started', demo_suwaka.tStart)
    demo_suwaka.maxDuration = None
    # keep track of which components have finished
    demo_suwakaComponents = demo_suwaka.components
    for thisComponent in demo_suwaka.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "demo_suwaka" ---
    thisExp.currentRoutine = demo_suwaka
    demo_suwaka.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *suwak_info* updates
        
        # if suwak_info is starting this frame...
        if suwak_info.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            suwak_info.frameNStart = frameN  # exact frame index
            suwak_info.tStart = t  # local t and not account for scr refresh
            suwak_info.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(suwak_info, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'suwak_info.started')
            # update status
            suwak_info.status = STARTED
            suwak_info.setAutoDraw(True)
        
        # if suwak_info is active this frame...
        if suwak_info.status == STARTED:
            # update params
            pass
        
        # *spacja_suwak* updates
        waitOnFlip = False
        
        # if spacja_suwak is starting this frame...
        if spacja_suwak.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            spacja_suwak.frameNStart = frameN  # exact frame index
            spacja_suwak.tStart = t  # local t and not account for scr refresh
            spacja_suwak.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(spacja_suwak, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'spacja_suwak.started')
            # update status
            spacja_suwak.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(spacja_suwak.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(spacja_suwak.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if spacja_suwak.status == STARTED and not waitOnFlip:
            theseKeys = spacja_suwak.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _spacja_suwak_allKeys.extend(theseKeys)
            if len(_spacja_suwak_allKeys):
                spacja_suwak.keys = _spacja_suwak_allKeys[-1].name  # just the last key pressed
                spacja_suwak.rt = _spacja_suwak_allKeys[-1].rt
                spacja_suwak.duration = _spacja_suwak_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=demo_suwaka,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            demo_suwaka.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if demo_suwaka.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in demo_suwaka.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "demo_suwaka" ---
    for thisComponent in demo_suwaka.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for demo_suwaka
    demo_suwaka.tStop = globalClock.getTime(format='float')
    demo_suwaka.tStopRefresh = tThisFlipGlobal
    thisExp.addData('demo_suwaka.stopped', demo_suwaka.tStop)
    # check responses
    if spacja_suwak.keys in ['', [], None]:  # No response was made
        spacja_suwak.keys = None
    thisExp.addData('spacja_suwak.keys',spacja_suwak.keys)
    if spacja_suwak.keys != None:  # we had a response
        thisExp.addData('spacja_suwak.rt', spacja_suwak.rt)
        thisExp.addData('spacja_suwak.duration', spacja_suwak.duration)
    thisExp.nextEntry()
    # the Routine "demo_suwaka" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "info_trening" ---
    # create an object to store info about Routine info_trening
    info_trening = data.Routine(
        name='info_trening',
        components=[spacja_trening, proba_testowa],
    )
    info_trening.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for spacja_trening
    spacja_trening.keys = []
    spacja_trening.rt = []
    _spacja_trening_allKeys = []
    # store start times for info_trening
    info_trening.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    info_trening.tStart = globalClock.getTime(format='float')
    info_trening.status = STARTED
    thisExp.addData('info_trening.started', info_trening.tStart)
    info_trening.maxDuration = None
    # keep track of which components have finished
    info_treningComponents = info_trening.components
    for thisComponent in info_trening.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "info_trening" ---
    thisExp.currentRoutine = info_trening
    info_trening.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *spacja_trening* updates
        waitOnFlip = False
        
        # if spacja_trening is starting this frame...
        if spacja_trening.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            spacja_trening.frameNStart = frameN  # exact frame index
            spacja_trening.tStart = t  # local t and not account for scr refresh
            spacja_trening.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(spacja_trening, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'spacja_trening.started')
            # update status
            spacja_trening.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(spacja_trening.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(spacja_trening.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if spacja_trening.status == STARTED and not waitOnFlip:
            theseKeys = spacja_trening.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _spacja_trening_allKeys.extend(theseKeys)
            if len(_spacja_trening_allKeys):
                spacja_trening.keys = _spacja_trening_allKeys[-1].name  # just the last key pressed
                spacja_trening.rt = _spacja_trening_allKeys[-1].rt
                spacja_trening.duration = _spacja_trening_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # *proba_testowa* updates
        
        # if proba_testowa is starting this frame...
        if proba_testowa.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            proba_testowa.frameNStart = frameN  # exact frame index
            proba_testowa.tStart = t  # local t and not account for scr refresh
            proba_testowa.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(proba_testowa, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'proba_testowa.started')
            # update status
            proba_testowa.status = STARTED
            proba_testowa.setAutoDraw(True)
        
        # if proba_testowa is active this frame...
        if proba_testowa.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=info_trening,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            info_trening.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if info_trening.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in info_trening.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "info_trening" ---
    for thisComponent in info_trening.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for info_trening
    info_trening.tStop = globalClock.getTime(format='float')
    info_trening.tStopRefresh = tThisFlipGlobal
    thisExp.addData('info_trening.stopped', info_trening.tStop)
    # check responses
    if spacja_trening.keys in ['', [], None]:  # No response was made
        spacja_trening.keys = None
    thisExp.addData('spacja_trening.keys',spacja_trening.keys)
    if spacja_trening.keys != None:  # we had a response
        thisExp.addData('spacja_trening.rt', spacja_trening.rt)
        thisExp.addData('spacja_trening.duration', spacja_trening.duration)
    thisExp.nextEntry()
    # the Routine "info_trening" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "trial_trening" ---
    # create an object to store info about Routine trial_trening
    trial_trening = data.Routine(
        name='trial_trening',
        components=[],
    )
    trial_trening.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for trial_trening
    trial_trening.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trial_trening.tStart = globalClock.getTime(format='float')
    trial_trening.status = STARTED
    thisExp.addData('trial_trening.started', trial_trening.tStart)
    trial_trening.maxDuration = None
    # keep track of which components have finished
    trial_treningComponents = trial_trening.components
    for thisComponent in trial_trening.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trial_trening" ---
    thisExp.currentRoutine = trial_trening
    trial_trening.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=trial_trening,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            trial_trening.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if trial_trening.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in trial_trening.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trial_trening" ---
    for thisComponent in trial_trening.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trial_trening
    trial_trening.tStop = globalClock.getTime(format='float')
    trial_trening.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trial_trening.stopped', trial_trening.tStop)
    thisExp.nextEntry()
    # the Routine "trial_trening" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "koniec_treningu" ---
    # create an object to store info about Routine koniec_treningu
    koniec_treningu = data.Routine(
        name='koniec_treningu',
        components=[spacja_start, start_badania],
    )
    koniec_treningu.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for spacja_start
    spacja_start.keys = []
    spacja_start.rt = []
    _spacja_start_allKeys = []
    # store start times for koniec_treningu
    koniec_treningu.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    koniec_treningu.tStart = globalClock.getTime(format='float')
    koniec_treningu.status = STARTED
    thisExp.addData('koniec_treningu.started', koniec_treningu.tStart)
    koniec_treningu.maxDuration = None
    # keep track of which components have finished
    koniec_treninguComponents = koniec_treningu.components
    for thisComponent in koniec_treningu.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "koniec_treningu" ---
    thisExp.currentRoutine = koniec_treningu
    koniec_treningu.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *spacja_start* updates
        waitOnFlip = False
        
        # if spacja_start is starting this frame...
        if spacja_start.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            spacja_start.frameNStart = frameN  # exact frame index
            spacja_start.tStart = t  # local t and not account for scr refresh
            spacja_start.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(spacja_start, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'spacja_start.started')
            # update status
            spacja_start.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(spacja_start.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(spacja_start.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if spacja_start.status == STARTED and not waitOnFlip:
            theseKeys = spacja_start.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _spacja_start_allKeys.extend(theseKeys)
            if len(_spacja_start_allKeys):
                spacja_start.keys = _spacja_start_allKeys[-1].name  # just the last key pressed
                spacja_start.rt = _spacja_start_allKeys[-1].rt
                spacja_start.duration = _spacja_start_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # *start_badania* updates
        
        # if start_badania is starting this frame...
        if start_badania.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            start_badania.frameNStart = frameN  # exact frame index
            start_badania.tStart = t  # local t and not account for scr refresh
            start_badania.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(start_badania, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'start_badania.started')
            # update status
            start_badania.status = STARTED
            start_badania.setAutoDraw(True)
        
        # if start_badania is active this frame...
        if start_badania.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=koniec_treningu,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            koniec_treningu.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if koniec_treningu.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in koniec_treningu.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "koniec_treningu" ---
    for thisComponent in koniec_treningu.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for koniec_treningu
    koniec_treningu.tStop = globalClock.getTime(format='float')
    koniec_treningu.tStopRefresh = tThisFlipGlobal
    thisExp.addData('koniec_treningu.stopped', koniec_treningu.tStop)
    # check responses
    if spacja_start.keys in ['', [], None]:  # No response was made
        spacja_start.keys = None
    thisExp.addData('spacja_start.keys',spacja_start.keys)
    if spacja_start.keys != None:  # we had a response
        thisExp.addData('spacja_start.rt', spacja_start.rt)
        thisExp.addData('spacja_start.duration', spacja_start.duration)
    thisExp.nextEntry()
    # the Routine "koniec_treningu" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler2(
        name='trials',
        nReps=1, 
        method='sequential', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('conditions.xlsx'), 
        seed=None, 
        isTrials=True, 
    )
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            globals()[paramName] = thisTrial[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisTrial in trials:
        trials.status = STARTED
        if hasattr(thisTrial, 'status'):
            thisTrial.status = STARTED
        currentLoop = trials
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                globals()[paramName] = thisTrial[paramName]
        
        # --- Prepare to start Routine "trial" ---
        # create an object to store info about Routine trial
        trial = data.Routine(
            name='trial',
            components=[label_text, stim_image, suwak_badanie, lewa_etykieta, prawa_etykieta, fiksacja1, fiksacja2, pytanie],
        )
        trial.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from mouse_visible
        win.mouseVisible=True
        # Run 'Begin Routine' code from label_opacity
        if show_label==1:
            label_text.opacity==1
        else:
            label_text.opacity==0
        label_text.setOpacity(None)
        label_text.setText(etykieta
        )
        stim_image.setImage(image_path)
        suwak_badanie.reset()
        lewa_etykieta.setText(left_label)
        prawa_etykieta.setText(right_label)
        # store start times for trial
        trial.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        trial.tStart = globalClock.getTime(format='float')
        trial.status = STARTED
        thisExp.addData('trial.started', trial.tStart)
        trial.maxDuration = None
        # keep track of which components have finished
        trialComponents = trial.components
        for thisComponent in trial.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "trial" ---
        thisExp.currentRoutine = trial
        trial.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisTrial, 'status') and thisTrial.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *label_text* updates
            
            # if label_text is starting this frame...
            if label_text.status == NOT_STARTED and tThisFlip >= 1.1-frameTolerance:
                # keep track of start time/frame for later
                label_text.frameNStart = frameN  # exact frame index
                label_text.tStart = t  # local t and not account for scr refresh
                label_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(label_text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'label_text.started')
                # update status
                label_text.status = STARTED
                label_text.setAutoDraw(True)
            
            # if label_text is active this frame...
            if label_text.status == STARTED:
                # update params
                pass
            
            # if label_text is stopping this frame...
            if label_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > label_text.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    label_text.tStop = t  # not accounting for scr refresh
                    label_text.tStopRefresh = tThisFlipGlobal  # on global time
                    label_text.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'label_text.stopped')
                    # update status
                    label_text.status = FINISHED
                    label_text.setAutoDraw(False)
            
            # *stim_image* updates
            
            # if stim_image is starting this frame...
            if stim_image.status == NOT_STARTED and tThisFlip >= 4.6-frameTolerance:
                # keep track of start time/frame for later
                stim_image.frameNStart = frameN  # exact frame index
                stim_image.tStart = t  # local t and not account for scr refresh
                stim_image.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stim_image, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'stim_image.started')
                # update status
                stim_image.status = STARTED
                stim_image.setAutoDraw(True)
            
            # if stim_image is active this frame...
            if stim_image.status == STARTED:
                # update params
                pass
            
            # if stim_image is stopping this frame...
            if stim_image.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > stim_image.tStartRefresh + 0.9-frameTolerance:
                    # keep track of stop time/frame for later
                    stim_image.tStop = t  # not accounting for scr refresh
                    stim_image.tStopRefresh = tThisFlipGlobal  # on global time
                    stim_image.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'stim_image.stopped')
                    # update status
                    stim_image.status = FINISHED
                    stim_image.setAutoDraw(False)
            
            # *suwak_badanie* updates
            
            # if suwak_badanie is starting this frame...
            if suwak_badanie.status == NOT_STARTED and tThisFlip >= 5.5-frameTolerance:
                # keep track of start time/frame for later
                suwak_badanie.frameNStart = frameN  # exact frame index
                suwak_badanie.tStart = t  # local t and not account for scr refresh
                suwak_badanie.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(suwak_badanie, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'suwak_badanie.started')
                # update status
                suwak_badanie.status = STARTED
                suwak_badanie.setAutoDraw(True)
            
            # if suwak_badanie is active this frame...
            if suwak_badanie.status == STARTED:
                # update params
                pass
            
            # Check suwak_badanie for response to end Routine
            if suwak_badanie.getRating() is not None and suwak_badanie.status == STARTED:
                continueRoutine = False
            
            # *lewa_etykieta* updates
            
            # if lewa_etykieta is starting this frame...
            if lewa_etykieta.status == NOT_STARTED and tThisFlip >= 5.5-frameTolerance:
                # keep track of start time/frame for later
                lewa_etykieta.frameNStart = frameN  # exact frame index
                lewa_etykieta.tStart = t  # local t and not account for scr refresh
                lewa_etykieta.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(lewa_etykieta, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'lewa_etykieta.started')
                # update status
                lewa_etykieta.status = STARTED
                lewa_etykieta.setAutoDraw(True)
            
            # if lewa_etykieta is active this frame...
            if lewa_etykieta.status == STARTED:
                # update params
                pass
            
            # *prawa_etykieta* updates
            
            # if prawa_etykieta is starting this frame...
            if prawa_etykieta.status == NOT_STARTED and tThisFlip >= 5.5-frameTolerance:
                # keep track of start time/frame for later
                prawa_etykieta.frameNStart = frameN  # exact frame index
                prawa_etykieta.tStart = t  # local t and not account for scr refresh
                prawa_etykieta.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prawa_etykieta, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prawa_etykieta.started')
                # update status
                prawa_etykieta.status = STARTED
                prawa_etykieta.setAutoDraw(True)
            
            # if prawa_etykieta is active this frame...
            if prawa_etykieta.status == STARTED:
                # update params
                pass
            
            # *fiksacja1* updates
            
            # if fiksacja1 is starting this frame...
            if fiksacja1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fiksacja1.frameNStart = frameN  # exact frame index
                fiksacja1.tStart = t  # local t and not account for scr refresh
                fiksacja1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fiksacja1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'fiksacja1.started')
                # update status
                fiksacja1.status = STARTED
                fiksacja1.setAutoDraw(True)
            
            # if fiksacja1 is active this frame...
            if fiksacja1.status == STARTED:
                # update params
                pass
            
            # if fiksacja1 is stopping this frame...
            if fiksacja1.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fiksacja1.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    fiksacja1.tStop = t  # not accounting for scr refresh
                    fiksacja1.tStopRefresh = tThisFlipGlobal  # on global time
                    fiksacja1.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'fiksacja1.stopped')
                    # update status
                    fiksacja1.status = FINISHED
                    fiksacja1.setAutoDraw(False)
            
            # *fiksacja2* updates
            
            # if fiksacja2 is starting this frame...
            if fiksacja2.status == NOT_STARTED and tThisFlip >= 3.6-frameTolerance:
                # keep track of start time/frame for later
                fiksacja2.frameNStart = frameN  # exact frame index
                fiksacja2.tStart = t  # local t and not account for scr refresh
                fiksacja2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fiksacja2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'fiksacja2.started')
                # update status
                fiksacja2.status = STARTED
                fiksacja2.setAutoDraw(True)
            
            # if fiksacja2 is active this frame...
            if fiksacja2.status == STARTED:
                # update params
                pass
            
            # if fiksacja2 is stopping this frame...
            if fiksacja2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fiksacja2.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    fiksacja2.tStop = t  # not accounting for scr refresh
                    fiksacja2.tStopRefresh = tThisFlipGlobal  # on global time
                    fiksacja2.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'fiksacja2.stopped')
                    # update status
                    fiksacja2.status = FINISHED
                    fiksacja2.setAutoDraw(False)
            
            # *pytanie* updates
            
            # if pytanie is starting this frame...
            if pytanie.status == NOT_STARTED and tThisFlip >= 5.5-frameTolerance:
                # keep track of start time/frame for later
                pytanie.frameNStart = frameN  # exact frame index
                pytanie.tStart = t  # local t and not account for scr refresh
                pytanie.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(pytanie, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'pytanie.started')
                # update status
                pytanie.status = STARTED
                pytanie.setAutoDraw(True)
            
            # if pytanie is active this frame...
            if pytanie.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=trial,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                trial.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if trial.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in trial.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "trial" ---
        for thisComponent in trial.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for trial
        trial.tStop = globalClock.getTime(format='float')
        trial.tStopRefresh = tThisFlipGlobal
        thisExp.addData('trial.stopped', trial.tStop)
        # Run 'End Routine' code from mouse_visible
        win.mouseVisible=False
        
        trials.addData('suwak_badanie.response', suwak_badanie.getRating())
        trials.addData('suwak_badanie.rt', suwak_badanie.getRT())
        # the Routine "trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        # mark thisTrial as finished
        if hasattr(thisTrial, 'status'):
            thisTrial.status = FINISHED
        # if awaiting a pause, pause now
        if trials.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            trials.status = STARTED
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trials'
    trials.status = FINISHED
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    # stop any playback components
    if thisExp.currentRoutine is not None:
        for comp in thisExp.currentRoutine.getPlaybackComponents():
            comp.stop()
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # run any 'at exit' functions
    for fcn in runAtExit:
        fcn()
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
