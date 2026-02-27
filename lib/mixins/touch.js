"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easy = require("easy");
const _necessary = require("necessary");
const _relative = /*#__PURE__*/ _interop_require_default(require("../position/relative"));
const _constants = require("../constants");
const _positions = require("../utilities/positions");
const _customEventTypes = require("../customEventTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { push, first, second } = _necessary.arrayUtilities;
function enableTouch() {
    const tapInterval = null, startMagnitude = null, startPositions = [], movingPositions = [];
    this.updateState({
        tapInterval,
        startMagnitude,
        startPositions,
        movingPositions
    });
    this.onMouseDown(this.mouseDownHandler);
    this.onMouseMove(this.mouseMoveHandler);
    _easy.window.onMouseUp(this.mouseUpHandler, this);
    this.onTouchStart(this.touchStartHandler);
    this.onTouchMove(this.touchMoveHandler);
    this.onTouchEnd(this.touchEndHandler);
}
function disableTouch() {
    this.offMouseDown(this.mouseDownHandler);
    this.offMouseMove(this.mouseMoveHandler);
    _easy.window.offMouseUp(this.mouseUpHandler, this);
    this.offTouchStart(this.touchStartHandler);
    this.offTouchMove(this.touchMoveHandler);
    this.offTouchEnd(this.touchEndHandler);
}
function onCustomPress(pressCustomHandler, element) {
    const customEventType = _customEventTypes.PRESS_CUSTOM_EVENT_TYPE, customHandler = pressCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomPress(pressCustomHandler, element) {
    const customEventType = _customEventTypes.PRESS_CUSTOM_EVENT_TYPE, customHandler = pressCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomDragUp(dragUpCustomHandler, element) {
    const customEventType = _customEventTypes.DRAG_UP_CUSTOM_EVENT_TYPE, customHandler = dragUpCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragUp(dragUpCustomHandler, element) {
    const customEventType = _customEventTypes.DRAG_UP_CUSTOM_EVENT_TYPE, customHandler = dragUpCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomDragDown(dragDownCustomHandler, element) {
    const customEventType = _customEventTypes.DRAG_DOWN_CUSTOM_EVENT_TYPE, customHandler = dragDownCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragDown(dragDownCustomHandler, element) {
    const customEventType = _customEventTypes.DRAG_DOWN_CUSTOM_EVENT_TYPE, customHandler = dragDownCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomDragLeft(dragLeftCustomHandler, element) {
    const customEventType = _customEventTypes.DRAG_LEFT_CUSTOM_EVENT_TYPE, customHandler = dragLeftCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragLeft(dragLeftCustomHandler, element) {
    const customEventType = _customEventTypes.DRAG_LEFT_CUSTOM_EVENT_TYPE, customHandler = dragLeftCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomDragRight(dragRightCustomHandler, element) {
    const customEventType = _customEventTypes.DRAG_RIGHT_CUSTOM_EVENT_TYPE, customHandler = dragRightCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragRight(dragRightCustomHandler, element) {
    const customEventType = _customEventTypes.DRAG_RIGHT_CUSTOM_EVENT_TYPE, customHandler = dragRightCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomDragStart(dragStartCustomHandler, element) {
    const customEventType = _customEventTypes.DRAG_START_CUSTOM_EVENT_TYPE, customHandler = dragStartCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDragStart(dragStartCustomHandler, element) {
    const customEventType = _customEventTypes.DRAG_START_CUSTOM_EVENT_TYPE, customHandler = dragStartCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomSwipeUp(swipeUpCustomHandler, element) {
    const customEventType = _customEventTypes.SWIPE_UP_CUSTOM_EVENT_TYPE, customHandler = swipeUpCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomSwipeUp(swipeUpCustomHandler, element) {
    const customEventType = _customEventTypes.SWIPE_UP_CUSTOM_EVENT_TYPE, customHandler = swipeUpCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomSwipeDown(swipeDownCustomHandler, element) {
    const customEventType = _customEventTypes.SWIPE_DOWN_CUSTOM_EVENT_TYPE, customHandler = swipeDownCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomSwipeDown(swipeDownCustomHandler, element) {
    const customEventType = _customEventTypes.SWIPE_DOWN_CUSTOM_EVENT_TYPE, customHandler = swipeDownCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomSwipeLeft(swipeLeftCustomHandler, element) {
    const customEventType = _customEventTypes.SWIPE_LEFT_CUSTOM_EVENT_TYPE, customHandler = swipeLeftCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomSwipeLeft(swipeLeftCustomHandler, element) {
    const customEventType = _customEventTypes.SWIPE_LEFT_CUSTOM_EVENT_TYPE, customHandler = swipeLeftCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomSwipeRight(swipeRightCustomHandler, element) {
    const customEventType = _customEventTypes.SWIPE_RIGHT_CUSTOM_EVENT_TYPE, customHandler = swipeRightCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomSwipeRight(swipeRightCustomHandler, element) {
    const customEventType = _customEventTypes.SWIPE_RIGHT_CUSTOM_EVENT_TYPE, customHandler = swipeRightCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomPinchMove(pinchMoveCustomHandler, element) {
    const customEventType = _customEventTypes.PINCH_MOVE_CUSTOM_EVENT_TYPE, customHandler = pinchMoveCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomPinchMove(pinchMoveCustomHandler, element) {
    const customEventType = _customEventTypes.PINCH_MOVE_CUSTOM_EVENT_TYPE, customHandler = pinchMoveCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomPinchStart(pinchStartCustomHandler, element) {
    const customEventType = _customEventTypes.PINCH_START_CUSTOM_EVENT_TYPE, customHandler = pinchStartCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomPinchStart(pinchStartCustomHandler, element) {
    const customEventType = _customEventTypes.PINCH_START_CUSTOM_EVENT_TYPE, customHandler = pinchStartCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomPinchStop(pinchStopCustomHandler, element) {
    const customEventType = _customEventTypes.PINCH_STOP_CUSTOM_EVENT_TYPE, customHandler = pinchStopCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomPinchStop(pinchStopCustomHandler, element) {
    const customEventType = _customEventTypes.PINCH_STOP_CUSTOM_EVENT_TYPE, customHandler = pinchStopCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomSingleTap(singleTapCustomHandler, element) {
    const customEventType = _customEventTypes.SINGLE_TAP_CUSTOM_EVENT_TYPE, customHandler = singleTapCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomSingleTap(singleTapCustomHandler, element) {
    const customEventType = _customEventTypes.SINGLE_TAP_CUSTOM_EVENT_TYPE, customHandler = singleTapCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function onCustomDoubleTap(doubleTapCustomHandler, element) {
    const customEventType = _customEventTypes.DOUBLE_TAP_CUSTOM_EVENT_TYPE, customHandler = doubleTapCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomDoubleTap(doubleTapCustomHandler, element) {
    const customEventType = _customEventTypes.DOUBLE_TAP_CUSTOM_EVENT_TYPE, customHandler = doubleTapCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function getTapInterval() {
    const { tapInterval } = this.getState();
    return tapInterval;
}
function getPressSInterval() {
    const { pressInterval } = this.getState();
    return pressInterval;
}
function getStartMagnitude() {
    const { startMagnitude } = this.getState();
    return startMagnitude;
}
function getStartPositions() {
    const { startPositions } = this.getState();
    return startPositions;
}
function getMovingPositions() {
    const { movingPositions } = this.getState();
    return movingPositions;
}
function setTapInterval(tapInterval) {
    this.updateState({
        tapInterval
    });
}
function setPressSInterval(pressInterval) {
    this.updateState({
        pressInterval
    });
}
function setStartMagnitude(startMagnitude) {
    this.updateState({
        startMagnitude
    });
}
function setStartPositions(startPositions) {
    this.updateState({
        startPositions
    });
}
function setMovingPositions(movingPositions) {
    this.updateState({
        movingPositions
    });
}
function touchStartHandler(event, element) {
    this.startHandler(event, element, (event)=>{
        const touchEvent = event, changed = false, positions = (0, _positions.positionsFromTouchEvent)(touchEvent, changed);
        return positions;
    });
}
function mouseDownHandler(event, element) {
    this.startHandler(event, element, (event)=>{
        const mouseEvent = event, positions = (0, _positions.positionsFromMouseEvent)(mouseEvent);
        return positions;
    });
}
function touchMoveHandler(event, element) {
    this.moveHandler(event, element, (event)=>{
        const touchEvent = event, changed = false, positions = (0, _positions.positionsFromTouchEvent)(touchEvent, changed);
        return positions;
    });
}
function mouseMoveHandler(event, element) {
    this.moveHandler(event, element, (event)=>{
        const mouseEvent = event, positions = (0, _positions.positionsFromMouseEvent)(mouseEvent);
        return positions;
    });
}
function touchEndHandler(event, element) {
    this.endHandler(event, element, (event)=>{
        const touchEvent = event, changed = true, positions = (0, _positions.positionsFromTouchEvent)(touchEvent, changed);
        return positions;
    });
}
function mouseUpHandler(event, element) {
    this.endHandler(event, element, (event)=>{
        const mouseEvent = event, positions = (0, _positions.positionsFromMouseEvent)(mouseEvent);
        return positions;
    });
}
function startHandler(event, element, positionsFromEvent) {
    const positions = positionsFromEvent(event), startPositions = this.getStartPositions();
    (0, _positions.filterPositions)(startPositions, positions);
    push(startPositions, positions);
    const startingPositionsLength = startPositions.length;
    if (startingPositionsLength === 1) {
        this.dragStart(event, element);
        let pressInterval = setTimeout(()=>{
            pressInterval = null;
            this.setPressSInterval(pressInterval);
            this.press(event, element);
        }, _constants.PRESS_DELAY);
        this.setPressSInterval(pressInterval);
    }
    if (startingPositionsLength === 2) {
        this.pinchStart(event, element);
    }
}
function moveHandler(event, element, positionsFromEvent) {
    const positions = positionsFromEvent(event), startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions();
    (0, _positions.filterPositions)(movingPositions, positions);
    push(movingPositions, positions);
    const positionsMatch = (0, _positions.matchPositions)(startPositions, movingPositions);
    if (positionsMatch) {
        (0, _positions.sortPositions)(movingPositions, startPositions);
        const movingPositionsLength = movingPositions.length;
        if (movingPositionsLength === 1) {
            this.drag(event, element);
        }
        if (movingPositionsLength === 2) {
            this.pinch(event, element);
        }
    }
    let pressInterval = this.getPressSInterval();
    if (pressInterval !== null) {
        clearTimeout(pressInterval);
        pressInterval = null;
        this.setPressSInterval(pressInterval);
    }
}
function endHandler(event, element, positionsFromEvent) {
    const positions = positionsFromEvent(event), startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions(), positionsMatch = (0, _positions.matchPositions)(startPositions, movingPositions);
    if (positionsMatch) {
        const startPositionsLength = startPositions.length;
        if (startPositionsLength === 2) {
            this.pinchStop(event, element);
        }
        if (startPositionsLength === 1) {
            this.possibleTap(event, element);
            this.possibleSwipe(event, element);
        }
    }
    (0, _positions.filterPositions)(startPositions, positions);
    (0, _positions.filterPositions)(movingPositions, positions);
    let pressInterval = this.getPressSInterval();
    if (pressInterval !== null) {
        clearTimeout(pressInterval);
        pressInterval = null;
        this.setPressSInterval(pressInterval);
    }
}
function possibleTap(event, element) {
    const startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions(), firstStartPosition = first(startPositions), firstMovingPosition = first(movingPositions), firstPosition = firstStartPosition, secondPosition = firstMovingPosition, relativePosition = _relative.default.fromFirstPositionAndSecondPosition(firstPosition, secondPosition), time = relativePosition.getTime(), speed = relativePosition.getSpeed();
    if (speed === 0 && time < _constants.MAXIMUM_TAP_TIME) {
        this.tap(event, element);
    }
}
function possibleSwipe(event, element) {
    const startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions(), firstStartPosition = first(startPositions), firstMovingPosition = first(movingPositions), firstPosition = firstStartPosition, secondPosition = firstMovingPosition, relativePosition = _relative.default.fromFirstPositionAndSecondPosition(firstPosition, secondPosition), direction = relativePosition.getDirection(), speed = relativePosition.getSpeed();
    if (speed > _constants.MINIMUM_SWIPE_SPEED) {
        this.swipe(event, element, speed, direction);
    }
}
function tap(event, element) {
    const startPositions = this.getStartPositions(), firstStartPosition = first(startPositions), startPosition = firstStartPosition, top = startPosition.getTop(), left = startPosition.getLeft();
    let tapInterval = this.getTapInterval();
    if (tapInterval !== null) {
        clearTimeout(tapInterval);
        tapInterval = null;
        this.setTapInterval(tapInterval);
        this.doubleTap(event, element, top, left);
        return;
    }
    tapInterval = setTimeout(()=>{
        tapInterval = null;
        this.setTapInterval(tapInterval);
        this.singleTap(event, element, top, left);
    }, _constants.TAP_DELAY);
    this.setTapInterval(tapInterval);
}
function drag(event, element) {
    const startPositions = this.getStartPositions(), movingPositions = this.getMovingPositions(), firstStartPosition = first(startPositions), firstMovingPosition = first(movingPositions), firstPosition = firstStartPosition, secondPosition = firstMovingPosition, relativePosition = _relative.default.fromFirstPositionAndSecondPosition(firstPosition, secondPosition), top = relativePosition.getTop(), left = relativePosition.getLeft(), direction = relativePosition.getDirection();
    let customEventType = null;
    if (Math.abs(direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.DRAG_RIGHT_CUSTOM_EVENT_TYPE;
    }
    if (Math.abs(_constants.PI_OVER_TWO - direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.DRAG_UP_CUSTOM_EVENT_TYPE;
    }
    if (Math.abs(-_constants.PI_OVER_TWO - direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.DRAG_DOWN_CUSTOM_EVENT_TYPE;
    }
    if (_constants.PI - Math.abs(direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.DRAG_LEFT_CUSTOM_EVENT_TYPE;
    }
    if (customEventType !== null) {
        this.callCustomHandlers(customEventType, event, element, top, left);
    }
}
function pinch(event, element) {
    const movingPositions = this.getMovingPositions(), firstMovingPosition = first(movingPositions), secondMovingPosition = second(movingPositions), relativeMovingPosition = _relative.default.fromFirstPositionAndSecondPosition(firstMovingPosition, secondMovingPosition), customEventType = _customEventTypes.PINCH_MOVE_CUSTOM_EVENT_TYPE, startMagnitude = this.getStartMagnitude(), magnitude = relativeMovingPosition.getMagnitude(), ratio = magnitude / startMagnitude;
    this.callCustomHandlers(customEventType, event, element, ratio);
}
function press(event, element) {
    const customEventType = _customEventTypes.PRESS_CUSTOM_EVENT_TYPE;
    this.callCustomHandlers(customEventType, event, element);
}
function swipe(event, element, speed, direction) {
    let customEventType = null;
    if (Math.abs(direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.SWIPE_RIGHT_CUSTOM_EVENT_TYPE;
        speed = speed * Math.abs(Math.cos(direction));
    }
    if (Math.abs(_constants.PI_OVER_TWO - direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.SWIPE_UP_CUSTOM_EVENT_TYPE;
        speed = speed * Math.abs(Math.sin(direction));
    }
    if (Math.abs(-_constants.PI_OVER_TWO - direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.SWIPE_DOWN_CUSTOM_EVENT_TYPE;
        speed = speed * Math.abs(Math.sin(direction));
    }
    if (_constants.PI - Math.abs(direction) < _constants.MAXIMUM_SPREAD) {
        customEventType = _customEventTypes.SWIPE_LEFT_CUSTOM_EVENT_TYPE;
        speed = speed * Math.abs(Math.cos(direction));
    }
    if (customEventType !== null) {
        const startPositions = this.getStartPositions(), firstStartPosition = first(startPositions), startPosition = firstStartPosition, top = startPosition.getTop(), left = startPosition.getLeft();
        this.callCustomHandlers(customEventType, event, element, top, left, speed);
    }
}
function singleTap(event, element, top, left) {
    const customEventType = _customEventTypes.SINGLE_TAP_CUSTOM_EVENT_TYPE;
    this.callCustomHandlers(customEventType, event, element, top, left); ///
}
function doubleTap(event, element, top, left) {
    const customEventType = _customEventTypes.DOUBLE_TAP_CUSTOM_EVENT_TYPE;
    this.callCustomHandlers(customEventType, event, element, top, left);
}
function dragStart(event, element) {
    const customEventType = _customEventTypes.DRAG_START_CUSTOM_EVENT_TYPE, startPositions = this.getStartPositions(), firstStartPosition = first(startPositions), startPosition = firstStartPosition, top = startPosition.getTop(), left = startPosition.getLeft();
    this.callCustomHandlers(customEventType, event, element, top, left);
}
function pinchStart(event, element) {
    const customEventType = _customEventTypes.PINCH_START_CUSTOM_EVENT_TYPE, startPositions = this.getStartPositions(), firstStartPosition = first(startPositions), secondStartPosition = second(startPositions), relativeStartPosition = _relative.default.fromFirstPositionAndSecondPosition(firstStartPosition, secondStartPosition), magnitude = relativeStartPosition.getMagnitude(), startMagnitude = magnitude; ///
    this.setStartMagnitude(startMagnitude);
    this.callCustomHandlers(customEventType, event, element);
}
function pinchStop(event, element) {
    const customEventType = _customEventTypes.PINCH_STOP_CUSTOM_EVENT_TYPE;
    this.callCustomHandlers(customEventType, event, element);
}
const touchMixins = {
    enableTouch,
    disableTouch,
    onCustomPress,
    offCustomPress,
    onCustomDragUp,
    offCustomDragUp,
    onCustomDragDown,
    offCustomDragDown,
    onCustomDragLeft,
    offCustomDragLeft,
    onCustomDragRight,
    offCustomDragRight,
    onCustomDragStart,
    offCustomDragStart,
    onCustomSwipeUp,
    offCustomSwipeUp,
    onCustomSwipeDown,
    offCustomSwipeDown,
    onCustomSwipeLeft,
    offCustomSwipeLeft,
    onCustomSwipeRight,
    offCustomSwipeRight,
    onCustomPinchMove,
    offCustomPinchMove,
    onCustomPinchStart,
    offCustomPinchStart,
    onCustomPinchStop,
    offCustomPinchStop,
    onCustomSingleTap,
    offCustomSingleTap,
    onCustomDoubleTap,
    offCustomDoubleTap,
    getTapInterval,
    getPressSInterval,
    getStartMagnitude,
    getStartPositions,
    getMovingPositions,
    setTapInterval,
    setPressSInterval,
    setStartMagnitude,
    setStartPositions,
    setMovingPositions,
    touchStartHandler,
    mouseDownHandler,
    touchMoveHandler,
    mouseMoveHandler,
    touchEndHandler,
    mouseUpHandler,
    startHandler,
    moveHandler,
    endHandler,
    possibleTap,
    possibleSwipe,
    tap,
    drag,
    pinch,
    press,
    swipe,
    singleTap,
    doubleTap,
    dragStart,
    pinchStart,
    pinchStop
};
const _default = touchMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlbGF0aXZlUG9zaXRpb24gZnJvbSBcIi4uL3Bvc2l0aW9uL3JlbGF0aXZlXCI7XG5cbmltcG9ydCB7IFBJLCBUQVBfREVMQVksIFBSRVNTX0RFTEFZLCBQSV9PVkVSX1RXTywgTUFYSU1VTV9UQVBfVElNRSwgTUlOSU1VTV9TV0lQRV9TUEVFRCwgTUFYSU1VTV9TUFJFQUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzb3J0UG9zaXRpb25zLCBtYXRjaFBvc2l0aW9ucywgZmlsdGVyUG9zaXRpb25zLCBwb3NpdGlvbnNGcm9tTW91c2VFdmVudCwgcG9zaXRpb25zRnJvbVRvdWNoRXZlbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Bvc2l0aW9uc1wiO1xuaW1wb3J0IHsgUFJFU1NfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgICBQSU5DSF9TVE9QX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICAgU0lOR0xFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgIERPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vY3VzdG9tRXZlbnRUeXBlc1wiO1xuXG5jb25zdCB7IHB1c2gsIGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBlbmFibGVUb3VjaCgpIHtcbiAgY29uc3QgdGFwSW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICBzdGFydE1hZ25pdHVkZSA9IG51bGwsXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gW10sXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IFtdO1xuXG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHRhcEludGVydmFsLFxuICAgIHN0YXJ0TWFnbml0dWRlLFxuICAgIHN0YXJ0UG9zaXRpb25zLFxuICAgIG1vdmluZ1Bvc2l0aW9uc1xuICB9KTtcblxuICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlcik7XG4gIHRoaXMub25Nb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyKTtcblxuICB3aW5kb3cub25Nb3VzZVVwKHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpO1xuXG4gIHRoaXMub25Ub3VjaFN0YXJ0KHRoaXMudG91Y2hTdGFydEhhbmRsZXIpO1xuICB0aGlzLm9uVG91Y2hNb3ZlKHRoaXMudG91Y2hNb3ZlSGFuZGxlcik7XG4gIHRoaXMub25Ub3VjaEVuZCh0aGlzLnRvdWNoRW5kSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVUb3VjaCgpIHtcbiAgdGhpcy5vZmZNb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyKTtcbiAgdGhpcy5vZmZNb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyKTtcblxuICB3aW5kb3cub2ZmTW91c2VVcCh0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTtcblxuICB0aGlzLm9mZlRvdWNoU3RhcnQodGhpcy50b3VjaFN0YXJ0SGFuZGxlcik7XG4gIHRoaXMub2ZmVG91Y2hNb3ZlKHRoaXMudG91Y2hNb3ZlSGFuZGxlcik7XG4gIHRoaXMub2ZmVG91Y2hFbmQodGhpcy50b3VjaEVuZEhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVByZXNzKHByZXNzQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQUkVTU19DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHByZXNzQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVByZXNzKHByZXNzQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQUkVTU19DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHByZXNzQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdVcChkcmFnVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfVVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnVXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ1VwKGRyYWdVcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21EcmFnRG93bihkcmFnRG93bkN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0Rvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ0Rvd24oZHJhZ0Rvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdMZWZ0KGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnTGVmdChkcmFnTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ0xlZnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRHJhZ1JpZ2h0KGRyYWdSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19SSUdIVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdSaWdodEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21EcmFnUmlnaHQoZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1JJR0hUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURyYWdTdGFydChkcmFnU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkcmFnU3RhcnRDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRHJhZ1N0YXJ0KGRyYWdTdGFydEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRyYWdTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZVVwKHN3aXBlVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZVVwKHN3aXBlVXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVVcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Td2lwZURvd24oc3dpcGVEb3duQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVEb3duQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlRG93bihzd2lwZURvd25DdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZURvd25DdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU3dpcGVMZWZ0KHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHN3aXBlTGVmdEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21Td2lwZUxlZnQoc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9MRUZUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVN3aXBlUmlnaHQoc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVN3aXBlUmlnaHQoc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbVBpbmNoTW92ZShwaW5jaE1vdmVDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX01PVkVfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaE1vdmVDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tUGluY2hNb3ZlKHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHBpbmNoTW92ZUN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21QaW5jaFN0YXJ0KHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21QaW5jaFN0YXJ0KHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hTdGFydEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21QaW5jaFN0b3AocGluY2hTdG9wQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9TVE9QX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gcGluY2hTdG9wQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbVBpbmNoU3RvcChwaW5jaFN0b3BDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUT1BfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBwaW5jaFN0b3BDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tU2luZ2xlVGFwKHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU0lOR0xFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHNpbmdsZVRhcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21TaW5nbGVUYXAoc2luZ2xlVGFwQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTSU5HTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcjsgLy8vXG5cbiAgdGhpcy5vZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvbkN1c3RvbURvdWJsZVRhcChkb3VibGVUYXBDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERPVUJMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBkb3VibGVUYXBDdXN0b21IYW5kbGVyOyAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRG91YmxlVGFwKGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IGRvdWJsZVRhcEN1c3RvbUhhbmRsZXI7IC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFwSW50ZXJ2YWwoKSB7XG4gIGNvbnN0IHsgdGFwSW50ZXJ2YWwgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gdGFwSW50ZXJ2YWw7XG59XG5cbmZ1bmN0aW9uIGdldFByZXNzU0ludGVydmFsKCkge1xuICBjb25zdCB7IHByZXNzSW50ZXJ2YWwgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gcHJlc3NJbnRlcnZhbDtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcnRNYWduaXR1ZGUoKSB7XG4gIGNvbnN0IHsgc3RhcnRNYWduaXR1ZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gc3RhcnRNYWduaXR1ZGU7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0UG9zaXRpb25zKCkge1xuICBjb25zdCB7IHN0YXJ0UG9zaXRpb25zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIHN0YXJ0UG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBnZXRNb3ZpbmdQb3NpdGlvbnMoKSB7XG4gIGNvbnN0IHsgbW92aW5nUG9zaXRpb25zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgcmV0dXJuIG1vdmluZ1Bvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgdGFwSW50ZXJ2YWxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFByZXNzU0ludGVydmFsKHByZXNzSW50ZXJ2YWwpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgcHJlc3NJbnRlcnZhbFxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhcnRNYWduaXR1ZGUoc3RhcnRNYWduaXR1ZGUpIHtcbiAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgc3RhcnRNYWduaXR1ZGVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXJ0UG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIHN0YXJ0UG9zaXRpb25zXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRNb3ZpbmdQb3NpdGlvbnMobW92aW5nUG9zaXRpb25zKSB7XG4gIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgIG1vdmluZ1Bvc2l0aW9uc1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hTdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5zdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRvdWNoRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgY2hhbmdlZCA9IGZhbHNlLFxuICAgICAgICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQsIGNoYW5nZWQpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgdGhpcy5zdGFydEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLm1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0b3VjaEV2ZW50ID0gZXZlbnQsIC8vL1xuICAgICAgICAgIGNoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMubW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG91Y2hFbmRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIHRoaXMuZW5kSGFuZGxlcihldmVudCwgZWxlbWVudCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG91Y2hFdmVudCA9IGV2ZW50LCAvLy9cbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCh0b3VjaEV2ZW50LCBjaGFuZ2VkKTtcblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICB0aGlzLmVuZEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCwgLy8vXG4gICAgICAgICAgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25zO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RhcnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBwb3NpdGlvbnNGcm9tRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb25zID0gcG9zaXRpb25zRnJvbUV2ZW50KGV2ZW50KSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBwb3NpdGlvbnMpO1xuXG4gIHB1c2goc3RhcnRQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgY29uc3Qgc3RhcnRpbmdQb3NpdGlvbnNMZW5ndGggPSBzdGFydFBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgdGhpcy5kcmFnU3RhcnQoZXZlbnQsIGVsZW1lbnQpO1xuXG4gICAgbGV0IHByZXNzSW50ZXJ2YWwgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHByZXNzSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgICB0aGlzLnNldFByZXNzU0ludGVydmFsKHByZXNzSW50ZXJ2YWwpO1xuXG4gICAgICB0aGlzLnByZXNzKGV2ZW50LCBlbGVtZW50KTtcbiAgICB9LCBQUkVTU19ERUxBWSk7XG5cbiAgICB0aGlzLnNldFByZXNzU0ludGVydmFsKHByZXNzSW50ZXJ2YWwpO1xuICB9XG5cbiAgaWYgKHN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoID09PSAyKSB7XG4gICAgdGhpcy5waW5jaFN0YXJ0KGV2ZW50LCBlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpO1xuXG4gIGZpbHRlclBvc2l0aW9ucyhtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgcHVzaChtb3ZpbmdQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgY29uc3QgcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFBvc2l0aW9ucyhzdGFydFBvc2l0aW9ucywgbW92aW5nUG9zaXRpb25zKTtcblxuICBpZiAocG9zaXRpb25zTWF0Y2gpIHtcbiAgICBzb3J0UG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgc3RhcnRQb3NpdGlvbnMpO1xuXG4gICAgY29uc3QgbW92aW5nUG9zaXRpb25zTGVuZ3RoID0gbW92aW5nUG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChtb3ZpbmdQb3NpdGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuZHJhZyhldmVudCwgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKG1vdmluZ1Bvc2l0aW9uc0xlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5waW5jaChldmVudCwgZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgbGV0IHByZXNzSW50ZXJ2YWwgPSB0aGlzLmdldFByZXNzU0ludGVydmFsKCk7XG5cbiAgaWYgKHByZXNzSW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICBjbGVhclRpbWVvdXQocHJlc3NJbnRlcnZhbCk7XG5cbiAgICBwcmVzc0ludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0UHJlc3NTSW50ZXJ2YWwocHJlc3NJbnRlcnZhbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5kSGFuZGxlcihldmVudCwgZWxlbWVudCwgcG9zaXRpb25zRnJvbUV2ZW50KSB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IHBvc2l0aW9uc0Zyb21FdmVudChldmVudCksXG4gICAgICAgIHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zLCBtb3ZpbmdQb3NpdGlvbnMpO1xuXG4gIGlmIChwb3NpdGlvbnNNYXRjaCkge1xuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb25zTGVuZ3RoID0gc3RhcnRQb3NpdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb25zTGVuZ3RoID09PSAyKSB7XG4gICAgICB0aGlzLnBpbmNoU3RvcChldmVudCwgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb25zTGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLnBvc3NpYmxlVGFwKGV2ZW50LCBlbGVtZW50KTtcblxuICAgICAgdGhpcy5wb3NzaWJsZVN3aXBlKGV2ZW50LCBlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBmaWx0ZXJQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMsIHBvc2l0aW9ucyk7XG5cbiAgZmlsdGVyUG9zaXRpb25zKG1vdmluZ1Bvc2l0aW9ucywgcG9zaXRpb25zKTtcblxuICBsZXQgcHJlc3NJbnRlcnZhbCA9IHRoaXMuZ2V0UHJlc3NTSW50ZXJ2YWwoKTtcblxuICBpZiAocHJlc3NJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgIGNsZWFyVGltZW91dChwcmVzc0ludGVydmFsKTtcblxuICAgIHByZXNzSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRQcmVzc1NJbnRlcnZhbChwcmVzc0ludGVydmFsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3NzaWJsZVRhcChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICAgICAgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdE1vdmluZ1Bvc2l0aW9uID0gZmlyc3QobW92aW5nUG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHNlY29uZFBvc2l0aW9uID0gZmlyc3RNb3ZpbmdQb3NpdGlvbiwgLy8vXG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RQb3NpdGlvbiwgc2Vjb25kUG9zaXRpb24pLFxuICAgICAgICB0aW1lID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRUaW1lKCksXG4gICAgICAgIHNwZWVkID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRTcGVlZCgpO1xuXG4gIGlmICgoc3BlZWQgPT09IDApICYmICh0aW1lIDwgTUFYSU1VTV9UQVBfVElNRSkpe1xuICAgIHRoaXMudGFwKGV2ZW50LCBlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3NzaWJsZVN3aXBlKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb25zID0gdGhpcy5nZXRTdGFydFBvc2l0aW9ucygpLFxuICAgICAgICBtb3ZpbmdQb3NpdGlvbnMgPSB0aGlzLmdldE1vdmluZ1Bvc2l0aW9ucygpLFxuICAgICAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0TW92aW5nUG9zaXRpb24gPSBmaXJzdChtb3ZpbmdQb3NpdGlvbnMpLFxuICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RTdGFydFBvc2l0aW9uLCAvLy9cbiAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBmaXJzdE1vdmluZ1Bvc2l0aW9uLCAvLy9cbiAgICAgICAgcmVsYXRpdmVQb3NpdGlvbiA9IFJlbGF0aXZlUG9zaXRpb24uZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbihmaXJzdFBvc2l0aW9uLCBzZWNvbmRQb3NpdGlvbiksXG4gICAgICAgIGRpcmVjdGlvbiA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgIHNwZWVkID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRTcGVlZCgpO1xuXG4gIGlmIChzcGVlZCA+IE1JTklNVU1fU1dJUEVfU1BFRUQpIHtcbiAgICB0aGlzLnN3aXBlKGV2ZW50LCBlbGVtZW50LCBzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0YXAoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgLy8vXG4gICAgICAgIHRvcCA9IHN0YXJ0UG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgIGxlZnQgPSBzdGFydFBvc2l0aW9uLmdldExlZnQoKTtcblxuICBsZXQgdGFwSW50ZXJ2YWwgPSB0aGlzLmdldFRhcEludGVydmFsKCk7XG5cbiAgaWYgKHRhcEludGVydmFsICE9PSBudWxsKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRhcEludGVydmFsKTtcblxuICAgIHRhcEludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpO1xuXG4gICAgdGhpcy5kb3VibGVUYXAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICB0YXBJbnRlcnZhbCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRhcEludGVydmFsID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VGFwSW50ZXJ2YWwodGFwSW50ZXJ2YWwpO1xuXG4gICAgdGhpcy5zaW5nbGVUYXAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG4gIH0sIFRBUF9ERUxBWSk7XG5cbiAgdGhpcy5zZXRUYXBJbnRlcnZhbCh0YXBJbnRlcnZhbCk7XG59XG5cbmZ1bmN0aW9uIGRyYWcoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIG1vdmluZ1Bvc2l0aW9ucyA9IHRoaXMuZ2V0TW92aW5nUG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IGZpcnN0TW92aW5nUG9zaXRpb24sIC8vL1xuICAgICAgICByZWxhdGl2ZVBvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0UG9zaXRpb24sIHNlY29uZFBvc2l0aW9uKSxcbiAgICAgICAgdG9wID0gcmVsYXRpdmVQb3NpdGlvbi5nZXRUb3AoKSxcbiAgICAgICAgbGVmdCA9IHJlbGF0aXZlUG9zaXRpb24uZ2V0TGVmdCgpLFxuICAgICAgICBkaXJlY3Rpb24gPSByZWxhdGl2ZVBvc2l0aW9uLmdldERpcmVjdGlvbigpO1xuXG4gIGxldCBjdXN0b21FdmVudFR5cGUgPSBudWxsO1xuXG4gIGlmICgoTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEU7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoUElfT1ZFUl9UV08gLSBkaXJlY3Rpb24pIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBEUkFHX1VQX0NVU1RPTV9FVkVOVF9UWVBFO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKC1QSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IERSQUdfRE9XTl9DVVNUT01fRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGlmICgoUEkgLSBNYXRoLmFicyhkaXJlY3Rpb24pKSA8IE1BWElNVU1fU1BSRUFEKSB7XG4gICAgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19MRUZUX0NVU1RPTV9FVkVOVF9UWVBFO1xuICB9XG5cbiAgaWYgKGN1c3RvbUV2ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGluY2goZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgbW92aW5nUG9zaXRpb25zID0gdGhpcy5nZXRNb3ZpbmdQb3NpdGlvbnMoKSxcbiAgICAgICAgZmlyc3RNb3ZpbmdQb3NpdGlvbiA9IGZpcnN0KG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgIHNlY29uZE1vdmluZ1Bvc2l0aW9uID0gc2Vjb25kKG1vdmluZ1Bvc2l0aW9ucyksXG4gICAgICAgIHJlbGF0aXZlTW92aW5nUG9zaXRpb24gPSBSZWxhdGl2ZVBvc2l0aW9uLmZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24oZmlyc3RNb3ZpbmdQb3NpdGlvbiwgc2Vjb25kTW92aW5nUG9zaXRpb24pLFxuICAgICAgICBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9NT1ZFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBzdGFydE1hZ25pdHVkZSA9IHRoaXMuZ2V0U3RhcnRNYWduaXR1ZGUoKSxcbiAgICAgICAgbWFnbml0dWRlID0gcmVsYXRpdmVNb3ZpbmdQb3NpdGlvbi5nZXRNYWduaXR1ZGUoKSxcbiAgICAgICAgcmF0aW8gPSBtYWduaXR1ZGUgLyBzdGFydE1hZ25pdHVkZTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCByYXRpbyk7XG59XG5cbmZ1bmN0aW9uIHByZXNzKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBSRVNTX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBzd2lwZShldmVudCwgZWxlbWVudCwgc3BlZWQsIGRpcmVjdGlvbikge1xuICBsZXQgY3VzdG9tRXZlbnRUeXBlID0gbnVsbDtcblxuICBpZiAoKE1hdGguYWJzKGRpcmVjdGlvbikpIDwgTUFYSU1VTV9TUFJFQUQpIHtcbiAgICBjdXN0b21FdmVudFR5cGUgPSBTV0lQRV9SSUdIVF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHNwZWVkID0gc3BlZWQgKiBNYXRoLmFicyhNYXRoLmNvcyhkaXJlY3Rpb24pKTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhQSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX1VQX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgc3BlZWQgPSBzcGVlZCAqIE1hdGguYWJzKE1hdGguc2luKGRpcmVjdGlvbikpO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKC1QSV9PVkVSX1RXTyAtIGRpcmVjdGlvbikgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICBzcGVlZCA9IHNwZWVkICogTWF0aC5hYnMoTWF0aC5zaW4oZGlyZWN0aW9uKSk7XG4gIH1cblxuICBpZiAoKFBJIC0gTWF0aC5hYnMoZGlyZWN0aW9uKSkgPCBNQVhJTVVNX1NQUkVBRCkge1xuICAgIGN1c3RvbUV2ZW50VHlwZSA9IFNXSVBFX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICBzcGVlZCA9IHNwZWVkICogTWF0aC5hYnMoTWF0aC5jb3MoZGlyZWN0aW9uKSk7XG4gIH1cblxuICBpZiAoY3VzdG9tRXZlbnRUeXBlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgICAgZmlyc3RTdGFydFBvc2l0aW9uID0gZmlyc3Qoc3RhcnRQb3NpdGlvbnMpLFxuICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSBmaXJzdFN0YXJ0UG9zaXRpb24sIC8vL1xuICAgICAgICAgIHRvcCA9IHN0YXJ0UG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgICAgbGVmdCA9IHN0YXJ0UG9zaXRpb24uZ2V0TGVmdCgpO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2luZ2xlVGFwKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU0lOR0xFX1RBUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpOyAvLy9cbn1cblxuZnVuY3Rpb24gZG91YmxlVGFwKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRE9VQkxFX1RBUF9DVVNUT01fRVZFTlRfVFlQRTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpO1xufVxuXG5mdW5jdGlvbiBkcmFnU3RhcnQoZXZlbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRFJBR19TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmdldFN0YXJ0UG9zaXRpb25zKCksXG4gICAgICAgIGZpcnN0U3RhcnRQb3NpdGlvbiA9IGZpcnN0KHN0YXJ0UG9zaXRpb25zKSxcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IGZpcnN0U3RhcnRQb3NpdGlvbiwgIC8vL1xuICAgICAgICB0b3AgPSBzdGFydFBvc2l0aW9uLmdldFRvcCgpLFxuICAgICAgICBsZWZ0ID0gc3RhcnRQb3NpdGlvbi5nZXRMZWZ0KCk7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KTtcbn1cblxuZnVuY3Rpb24gcGluY2hTdGFydChldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQSU5DSF9TVEFSVF9DVVNUT01fRVZFTlRfVFlQRSxcbiAgICBzdGFydFBvc2l0aW9ucyA9IHRoaXMuZ2V0U3RhcnRQb3NpdGlvbnMoKSxcbiAgICBmaXJzdFN0YXJ0UG9zaXRpb24gPSBmaXJzdChzdGFydFBvc2l0aW9ucyksXG4gICAgc2Vjb25kU3RhcnRQb3NpdGlvbiA9IHNlY29uZChzdGFydFBvc2l0aW9ucyksXG4gICAgcmVsYXRpdmVTdGFydFBvc2l0aW9uID0gUmVsYXRpdmVQb3NpdGlvbi5mcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0U3RhcnRQb3NpdGlvbiwgc2Vjb25kU3RhcnRQb3NpdGlvbiksXG4gICAgbWFnbml0dWRlID0gcmVsYXRpdmVTdGFydFBvc2l0aW9uLmdldE1hZ25pdHVkZSgpLFxuICAgIHN0YXJ0TWFnbml0dWRlID0gbWFnbml0dWRlOyAvLy9cblxuICB0aGlzLnNldFN0YXJ0TWFnbml0dWRlKHN0YXJ0TWFnbml0dWRlKTtcblxuICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gcGluY2hTdG9wKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBJTkNIX1NUT1BfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG59XG5cbmNvbnN0IHRvdWNoTWl4aW5zID0ge1xuICBlbmFibGVUb3VjaCxcbiAgZGlzYWJsZVRvdWNoLFxuICBvbkN1c3RvbVByZXNzLFxuICBvZmZDdXN0b21QcmVzcyxcbiAgb25DdXN0b21EcmFnVXAsXG4gIG9mZkN1c3RvbURyYWdVcCxcbiAgb25DdXN0b21EcmFnRG93bixcbiAgb2ZmQ3VzdG9tRHJhZ0Rvd24sXG4gIG9uQ3VzdG9tRHJhZ0xlZnQsXG4gIG9mZkN1c3RvbURyYWdMZWZ0LFxuICBvbkN1c3RvbURyYWdSaWdodCxcbiAgb2ZmQ3VzdG9tRHJhZ1JpZ2h0LFxuICBvbkN1c3RvbURyYWdTdGFydCxcbiAgb2ZmQ3VzdG9tRHJhZ1N0YXJ0LFxuICBvbkN1c3RvbVN3aXBlVXAsXG4gIG9mZkN1c3RvbVN3aXBlVXAsXG4gIG9uQ3VzdG9tU3dpcGVEb3duLFxuICBvZmZDdXN0b21Td2lwZURvd24sXG4gIG9uQ3VzdG9tU3dpcGVMZWZ0LFxuICBvZmZDdXN0b21Td2lwZUxlZnQsXG4gIG9uQ3VzdG9tU3dpcGVSaWdodCxcbiAgb2ZmQ3VzdG9tU3dpcGVSaWdodCxcbiAgb25DdXN0b21QaW5jaE1vdmUsXG4gIG9mZkN1c3RvbVBpbmNoTW92ZSxcbiAgb25DdXN0b21QaW5jaFN0YXJ0LFxuICBvZmZDdXN0b21QaW5jaFN0YXJ0LFxuICBvbkN1c3RvbVBpbmNoU3RvcCxcbiAgb2ZmQ3VzdG9tUGluY2hTdG9wLFxuICBvbkN1c3RvbVNpbmdsZVRhcCxcbiAgb2ZmQ3VzdG9tU2luZ2xlVGFwLFxuICBvbkN1c3RvbURvdWJsZVRhcCxcbiAgb2ZmQ3VzdG9tRG91YmxlVGFwLFxuICBnZXRUYXBJbnRlcnZhbCxcbiAgZ2V0UHJlc3NTSW50ZXJ2YWwsXG4gIGdldFN0YXJ0TWFnbml0dWRlLFxuICBnZXRTdGFydFBvc2l0aW9ucyxcbiAgZ2V0TW92aW5nUG9zaXRpb25zLFxuICBzZXRUYXBJbnRlcnZhbCxcbiAgc2V0UHJlc3NTSW50ZXJ2YWwsXG4gIHNldFN0YXJ0TWFnbml0dWRlLFxuICBzZXRTdGFydFBvc2l0aW9ucyxcbiAgc2V0TW92aW5nUG9zaXRpb25zLFxuICB0b3VjaFN0YXJ0SGFuZGxlcixcbiAgbW91c2VEb3duSGFuZGxlcixcbiAgdG91Y2hNb3ZlSGFuZGxlcixcbiAgbW91c2VNb3ZlSGFuZGxlcixcbiAgdG91Y2hFbmRIYW5kbGVyLFxuICBtb3VzZVVwSGFuZGxlcixcbiAgc3RhcnRIYW5kbGVyLFxuICBtb3ZlSGFuZGxlcixcbiAgZW5kSGFuZGxlcixcbiAgcG9zc2libGVUYXAsXG4gIHBvc3NpYmxlU3dpcGUsXG4gIHRhcCxcbiAgZHJhZyxcbiAgcGluY2gsXG4gIHByZXNzLFxuICBzd2lwZSxcbiAgc2luZ2xlVGFwLFxuICBkb3VibGVUYXAsXG4gIGRyYWdTdGFydCxcbiAgcGluY2hTdGFydCxcbiAgcGluY2hTdG9wXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b3VjaE1peGlucztcbiJdLCJuYW1lcyI6WyJwdXNoIiwiZmlyc3QiLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsImVuYWJsZVRvdWNoIiwidGFwSW50ZXJ2YWwiLCJzdGFydE1hZ25pdHVkZSIsInN0YXJ0UG9zaXRpb25zIiwibW92aW5nUG9zaXRpb25zIiwidXBkYXRlU3RhdGUiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJvbk1vdXNlTW92ZSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ3aW5kb3ciLCJvbk1vdXNlVXAiLCJtb3VzZVVwSGFuZGxlciIsIm9uVG91Y2hTdGFydCIsInRvdWNoU3RhcnRIYW5kbGVyIiwib25Ub3VjaE1vdmUiLCJ0b3VjaE1vdmVIYW5kbGVyIiwib25Ub3VjaEVuZCIsInRvdWNoRW5kSGFuZGxlciIsImRpc2FibGVUb3VjaCIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlTW92ZSIsIm9mZk1vdXNlVXAiLCJvZmZUb3VjaFN0YXJ0Iiwib2ZmVG91Y2hNb3ZlIiwib2ZmVG91Y2hFbmQiLCJvbkN1c3RvbVByZXNzIiwicHJlc3NDdXN0b21IYW5kbGVyIiwiZWxlbWVudCIsImN1c3RvbUV2ZW50VHlwZSIsIlBSRVNTX0NVU1RPTV9FVkVOVF9UWVBFIiwiY3VzdG9tSGFuZGxlciIsIm9uQ3VzdG9tRXZlbnQiLCJvZmZDdXN0b21QcmVzcyIsIm9mZkN1c3RvbUV2ZW50Iiwib25DdXN0b21EcmFnVXAiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwiRFJBR19VUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJEUkFHX0RPV05fQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tRHJhZ0xlZnQiLCJkcmFnTGVmdEN1c3RvbUhhbmRsZXIiLCJEUkFHX0xFRlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnTGVmdCIsIm9uQ3VzdG9tRHJhZ1JpZ2h0IiwiZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciIsIkRSQUdfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21EcmFnUmlnaHQiLCJvbkN1c3RvbURyYWdTdGFydCIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJEUkFHX1NUQVJUX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21Td2lwZVVwIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJTV0lQRV9VUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbVN3aXBlRG93biIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJTV0lQRV9ET1dOX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21Td2lwZUxlZnQiLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwiU1dJUEVfTEVGVF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwiU1dJUEVfUklHSFRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib25DdXN0b21QaW5jaE1vdmUiLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwiUElOQ0hfTU9WRV9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9uQ3VzdG9tUGluY2hTdGFydCIsInBpbmNoU3RhcnRDdXN0b21IYW5kbGVyIiwiUElOQ0hfU1RBUlRfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21QaW5jaFN0YXJ0Iiwib25DdXN0b21QaW5jaFN0b3AiLCJwaW5jaFN0b3BDdXN0b21IYW5kbGVyIiwiUElOQ0hfU1RPUF9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbVBpbmNoU3RvcCIsIm9uQ3VzdG9tU2luZ2xlVGFwIiwic2luZ2xlVGFwQ3VzdG9tSGFuZGxlciIsIlNJTkdMRV9UQVBfQ1VTVE9NX0VWRU5UX1RZUEUiLCJvZmZDdXN0b21TaW5nbGVUYXAiLCJvbkN1c3RvbURvdWJsZVRhcCIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJET1VCTEVfVEFQX0NVU1RPTV9FVkVOVF9UWVBFIiwib2ZmQ3VzdG9tRG91YmxlVGFwIiwiZ2V0VGFwSW50ZXJ2YWwiLCJnZXRTdGF0ZSIsImdldFByZXNzU0ludGVydmFsIiwicHJlc3NJbnRlcnZhbCIsImdldFN0YXJ0TWFnbml0dWRlIiwiZ2V0U3RhcnRQb3NpdGlvbnMiLCJnZXRNb3ZpbmdQb3NpdGlvbnMiLCJzZXRUYXBJbnRlcnZhbCIsInNldFByZXNzU0ludGVydmFsIiwic2V0U3RhcnRNYWduaXR1ZGUiLCJzZXRTdGFydFBvc2l0aW9ucyIsInNldE1vdmluZ1Bvc2l0aW9ucyIsImV2ZW50Iiwic3RhcnRIYW5kbGVyIiwidG91Y2hFdmVudCIsImNoYW5nZWQiLCJwb3NpdGlvbnMiLCJwb3NpdGlvbnNGcm9tVG91Y2hFdmVudCIsIm1vdXNlRXZlbnQiLCJwb3NpdGlvbnNGcm9tTW91c2VFdmVudCIsIm1vdmVIYW5kbGVyIiwiZW5kSGFuZGxlciIsInBvc2l0aW9uc0Zyb21FdmVudCIsImZpbHRlclBvc2l0aW9ucyIsInN0YXJ0aW5nUG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiZHJhZ1N0YXJ0Iiwic2V0VGltZW91dCIsInByZXNzIiwiUFJFU1NfREVMQVkiLCJwaW5jaFN0YXJ0IiwicG9zaXRpb25zTWF0Y2giLCJtYXRjaFBvc2l0aW9ucyIsInNvcnRQb3NpdGlvbnMiLCJtb3ZpbmdQb3NpdGlvbnNMZW5ndGgiLCJkcmFnIiwicGluY2giLCJjbGVhclRpbWVvdXQiLCJzdGFydFBvc2l0aW9uc0xlbmd0aCIsInBpbmNoU3RvcCIsInBvc3NpYmxlVGFwIiwicG9zc2libGVTd2lwZSIsImZpcnN0U3RhcnRQb3NpdGlvbiIsImZpcnN0TW92aW5nUG9zaXRpb24iLCJmaXJzdFBvc2l0aW9uIiwic2Vjb25kUG9zaXRpb24iLCJyZWxhdGl2ZVBvc2l0aW9uIiwiUmVsYXRpdmVQb3NpdGlvbiIsImZyb21GaXJzdFBvc2l0aW9uQW5kU2Vjb25kUG9zaXRpb24iLCJ0aW1lIiwiZ2V0VGltZSIsInNwZWVkIiwiZ2V0U3BlZWQiLCJNQVhJTVVNX1RBUF9USU1FIiwidGFwIiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiTUlOSU1VTV9TV0lQRV9TUEVFRCIsInN3aXBlIiwic3RhcnRQb3NpdGlvbiIsInRvcCIsImdldFRvcCIsImxlZnQiLCJnZXRMZWZ0IiwiZG91YmxlVGFwIiwic2luZ2xlVGFwIiwiVEFQX0RFTEFZIiwiTWF0aCIsImFicyIsIk1BWElNVU1fU1BSRUFEIiwiUElfT1ZFUl9UV08iLCJQSSIsImNhbGxDdXN0b21IYW5kbGVycyIsInNlY29uZE1vdmluZ1Bvc2l0aW9uIiwicmVsYXRpdmVNb3ZpbmdQb3NpdGlvbiIsIm1hZ25pdHVkZSIsImdldE1hZ25pdHVkZSIsInJhdGlvIiwiY29zIiwic2luIiwic2Vjb25kU3RhcnRQb3NpdGlvbiIsInJlbGF0aXZlU3RhcnRQb3NpdGlvbiIsInRvdWNoTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpdkJBOzs7ZUFBQTs7O3NCQS91QnVCOzJCQUNRO2lFQUVGOzJCQUVrRjsyQkFDRTtrQ0FlcEU7Ozs7OztBQUU3QyxNQUFNLEVBQUVBLElBQUksRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR0MseUJBQWM7QUFFOUMsU0FBU0M7SUFDUCxNQUFNQyxjQUFjLE1BQ2RDLGlCQUFpQixNQUNqQkMsaUJBQWlCLEVBQUUsRUFDbkJDLGtCQUFrQixFQUFFO0lBRTFCLElBQUksQ0FBQ0MsV0FBVyxDQUFDO1FBQ2ZKO1FBQ0FDO1FBQ0FDO1FBQ0FDO0lBQ0Y7SUFFQSxJQUFJLENBQUNFLFdBQVcsQ0FBQyxJQUFJLENBQUNDLGdCQUFnQjtJQUN0QyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNDLGdCQUFnQjtJQUV0Q0MsWUFBTSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDQyxjQUFjLEVBQUUsSUFBSTtJQUUxQyxJQUFJLENBQUNDLFlBQVksQ0FBQyxJQUFJLENBQUNDLGlCQUFpQjtJQUN4QyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNDLGdCQUFnQjtJQUN0QyxJQUFJLENBQUNDLFVBQVUsQ0FBQyxJQUFJLENBQUNDLGVBQWU7QUFDdEM7QUFFQSxTQUFTQztJQUNQLElBQUksQ0FBQ0MsWUFBWSxDQUFDLElBQUksQ0FBQ2IsZ0JBQWdCO0lBQ3ZDLElBQUksQ0FBQ2MsWUFBWSxDQUFDLElBQUksQ0FBQ1osZ0JBQWdCO0lBRXZDQyxZQUFNLENBQUNZLFVBQVUsQ0FBQyxJQUFJLENBQUNWLGNBQWMsRUFBRSxJQUFJO0lBRTNDLElBQUksQ0FBQ1csYUFBYSxDQUFDLElBQUksQ0FBQ1QsaUJBQWlCO0lBQ3pDLElBQUksQ0FBQ1UsWUFBWSxDQUFDLElBQUksQ0FBQ1IsZ0JBQWdCO0lBQ3ZDLElBQUksQ0FBQ1MsV0FBVyxDQUFDLElBQUksQ0FBQ1AsZUFBZTtBQUN2QztBQUVBLFNBQVNRLGNBQWNDLGtCQUFrQixFQUFFQyxPQUFPO0lBQ2hELE1BQU1DLGtCQUFrQkMseUNBQXVCLEVBQ3pDQyxnQkFBZ0JKLG9CQUFvQixHQUFHO0lBRTdDLElBQUksQ0FBQ0ssYUFBYSxDQUFDSCxpQkFBaUJFLGVBQWVIO0FBQ3JEO0FBRUEsU0FBU0ssZUFBZU4sa0JBQWtCLEVBQUVDLE9BQU87SUFDakQsTUFBTUMsa0JBQWtCQyx5Q0FBdUIsRUFDekNDLGdCQUFnQkosb0JBQW9CLEdBQUc7SUFFN0MsSUFBSSxDQUFDTyxjQUFjLENBQUNMLGlCQUFpQkUsZUFBZUg7QUFDdEQ7QUFFQSxTQUFTTyxlQUFlQyxtQkFBbUIsRUFBRVIsT0FBTztJQUNsRCxNQUFNQyxrQkFBa0JRLDJDQUF5QixFQUMzQ04sZ0JBQWdCSyxxQkFBcUIsR0FBRztJQUU5QyxJQUFJLENBQUNKLGFBQWEsQ0FBQ0gsaUJBQWlCRSxlQUFlSDtBQUNyRDtBQUVBLFNBQVNVLGdCQUFnQkYsbUJBQW1CLEVBQUVSLE9BQU87SUFDbkQsTUFBTUMsa0JBQWtCUSwyQ0FBeUIsRUFDM0NOLGdCQUFnQksscUJBQXFCLEdBQUc7SUFFOUMsSUFBSSxDQUFDRixjQUFjLENBQUNMLGlCQUFpQkUsZUFBZUg7QUFDdEQ7QUFFQSxTQUFTVyxpQkFBaUJDLHFCQUFxQixFQUFFWixPQUFPO0lBQ3RELE1BQU1DLGtCQUFrQlksNkNBQTJCLEVBQzdDVixnQkFBZ0JTLHVCQUF1QixHQUFHO0lBRWhELElBQUksQ0FBQ1IsYUFBYSxDQUFDSCxpQkFBaUJFLGVBQWVIO0FBQ3JEO0FBRUEsU0FBU2Msa0JBQWtCRixxQkFBcUIsRUFBRVosT0FBTztJQUN2RCxNQUFNQyxrQkFBa0JZLDZDQUEyQixFQUM3Q1YsZ0JBQWdCUyx1QkFBdUIsR0FBRztJQUVoRCxJQUFJLENBQUNOLGNBQWMsQ0FBQ0wsaUJBQWlCRSxlQUFlSDtBQUN0RDtBQUVBLFNBQVNlLGlCQUFpQkMscUJBQXFCLEVBQUVoQixPQUFPO0lBQ3RELE1BQU1DLGtCQUFrQmdCLDZDQUEyQixFQUM3Q2QsZ0JBQWdCYSx1QkFBdUIsR0FBRztJQUVoRCxJQUFJLENBQUNaLGFBQWEsQ0FBQ0gsaUJBQWlCRSxlQUFlSDtBQUNyRDtBQUVBLFNBQVNrQixrQkFBa0JGLHFCQUFxQixFQUFFaEIsT0FBTztJQUN2RCxNQUFNQyxrQkFBa0JnQiw2Q0FBMkIsRUFDN0NkLGdCQUFnQmEsdUJBQXVCLEdBQUc7SUFFaEQsSUFBSSxDQUFDVixjQUFjLENBQUNMLGlCQUFpQkUsZUFBZUg7QUFDdEQ7QUFFQSxTQUFTbUIsa0JBQWtCQyxzQkFBc0IsRUFBRXBCLE9BQU87SUFDeEQsTUFBTUMsa0JBQWtCb0IsOENBQTRCLEVBQzlDbEIsZ0JBQWdCaUIsd0JBQXdCLEdBQUc7SUFFakQsSUFBSSxDQUFDaEIsYUFBYSxDQUFDSCxpQkFBaUJFLGVBQWVIO0FBQ3JEO0FBRUEsU0FBU3NCLG1CQUFtQkYsc0JBQXNCLEVBQUVwQixPQUFPO0lBQ3pELE1BQU1DLGtCQUFrQm9CLDhDQUE0QixFQUM5Q2xCLGdCQUFnQmlCLHdCQUF3QixHQUFHO0lBRWpELElBQUksQ0FBQ2QsY0FBYyxDQUFDTCxpQkFBaUJFLGVBQWVIO0FBQ3REO0FBRUEsU0FBU3VCLGtCQUFrQkMsc0JBQXNCLEVBQUV4QixPQUFPO0lBQ3hELE1BQU1DLGtCQUFrQndCLDhDQUE0QixFQUM5Q3RCLGdCQUFnQnFCLHdCQUF3QixHQUFHO0lBRWpELElBQUksQ0FBQ3BCLGFBQWEsQ0FBQ0gsaUJBQWlCRSxlQUFlSDtBQUNyRDtBQUVBLFNBQVMwQixtQkFBbUJGLHNCQUFzQixFQUFFeEIsT0FBTztJQUN6RCxNQUFNQyxrQkFBa0J3Qiw4Q0FBNEIsRUFDOUN0QixnQkFBZ0JxQix3QkFBd0IsR0FBRztJQUVqRCxJQUFJLENBQUNsQixjQUFjLENBQUNMLGlCQUFpQkUsZUFBZUg7QUFDdEQ7QUFFQSxTQUFTMkIsZ0JBQWdCQyxvQkFBb0IsRUFBRTVCLE9BQU87SUFDcEQsTUFBTUMsa0JBQWtCNEIsNENBQTBCLEVBQzVDMUIsZ0JBQWdCeUIsc0JBQXNCLEdBQUc7SUFFL0MsSUFBSSxDQUFDeEIsYUFBYSxDQUFDSCxpQkFBaUJFLGVBQWVIO0FBQ3JEO0FBRUEsU0FBUzhCLGlCQUFpQkYsb0JBQW9CLEVBQUU1QixPQUFPO0lBQ3JELE1BQU1DLGtCQUFrQjRCLDRDQUEwQixFQUM1QzFCLGdCQUFnQnlCLHNCQUFzQixHQUFHO0lBRS9DLElBQUksQ0FBQ3RCLGNBQWMsQ0FBQ0wsaUJBQWlCRSxlQUFlSDtBQUN0RDtBQUVBLFNBQVMrQixrQkFBa0JDLHNCQUFzQixFQUFFaEMsT0FBTztJQUN4RCxNQUFNQyxrQkFBa0JnQyw4Q0FBNEIsRUFDOUM5QixnQkFBZ0I2Qix3QkFBd0IsR0FBRztJQUVqRCxJQUFJLENBQUM1QixhQUFhLENBQUNILGlCQUFpQkUsZUFBZUg7QUFDckQ7QUFFQSxTQUFTa0MsbUJBQW1CRixzQkFBc0IsRUFBRWhDLE9BQU87SUFDekQsTUFBTUMsa0JBQWtCZ0MsOENBQTRCLEVBQzlDOUIsZ0JBQWdCNkIsd0JBQXdCLEdBQUc7SUFFakQsSUFBSSxDQUFDMUIsY0FBYyxDQUFDTCxpQkFBaUJFLGVBQWVIO0FBQ3REO0FBRUEsU0FBU21DLGtCQUFrQkMsc0JBQXNCLEVBQUVwQyxPQUFPO0lBQ3hELE1BQU1DLGtCQUFrQm9DLDhDQUE0QixFQUM5Q2xDLGdCQUFnQmlDLHdCQUF3QixHQUFHO0lBRWpELElBQUksQ0FBQ2hDLGFBQWEsQ0FBQ0gsaUJBQWlCRSxlQUFlSDtBQUNyRDtBQUVBLFNBQVNzQyxtQkFBbUJGLHNCQUFzQixFQUFFcEMsT0FBTztJQUN6RCxNQUFNQyxrQkFBa0JvQyw4Q0FBNEIsRUFDOUNsQyxnQkFBZ0JpQyx3QkFBd0IsR0FBRztJQUVqRCxJQUFJLENBQUM5QixjQUFjLENBQUNMLGlCQUFpQkUsZUFBZUg7QUFDdEQ7QUFFQSxTQUFTdUMsbUJBQW1CQyx1QkFBdUIsRUFBRXhDLE9BQU87SUFDMUQsTUFBTUMsa0JBQWtCd0MsK0NBQTZCLEVBQy9DdEMsZ0JBQWdCcUMseUJBQXlCLEdBQUc7SUFFbEQsSUFBSSxDQUFDcEMsYUFBYSxDQUFDSCxpQkFBaUJFLGVBQWVIO0FBQ3JEO0FBRUEsU0FBUzBDLG9CQUFvQkYsdUJBQXVCLEVBQUV4QyxPQUFPO0lBQzNELE1BQU1DLGtCQUFrQndDLCtDQUE2QixFQUMvQ3RDLGdCQUFnQnFDLHlCQUF5QixHQUFHO0lBRWxELElBQUksQ0FBQ2xDLGNBQWMsQ0FBQ0wsaUJBQWlCRSxlQUFlSDtBQUN0RDtBQUVBLFNBQVMyQyxrQkFBa0JDLHNCQUFzQixFQUFFNUMsT0FBTztJQUN4RCxNQUFNQyxrQkFBa0I0Qyw4Q0FBNEIsRUFDOUMxQyxnQkFBZ0J5Qyx3QkFBd0IsR0FBRztJQUVqRCxJQUFJLENBQUN4QyxhQUFhLENBQUNILGlCQUFpQkUsZUFBZUg7QUFDckQ7QUFFQSxTQUFTOEMsbUJBQW1CRixzQkFBc0IsRUFBRTVDLE9BQU87SUFDekQsTUFBTUMsa0JBQWtCNEMsOENBQTRCLEVBQzlDMUMsZ0JBQWdCeUMsd0JBQXdCLEdBQUc7SUFFakQsSUFBSSxDQUFDdEMsY0FBYyxDQUFDTCxpQkFBaUJFLGVBQWVIO0FBQ3REO0FBRUEsU0FBUytDLG1CQUFtQkMsdUJBQXVCLEVBQUVoRCxPQUFPO0lBQzFELE1BQU1DLGtCQUFrQmdELCtDQUE2QixFQUMvQzlDLGdCQUFnQjZDLHlCQUF5QixHQUFHO0lBRWxELElBQUksQ0FBQzVDLGFBQWEsQ0FBQ0gsaUJBQWlCRSxlQUFlSDtBQUNyRDtBQUVBLFNBQVNrRCxvQkFBb0JGLHVCQUF1QixFQUFFaEQsT0FBTztJQUMzRCxNQUFNQyxrQkFBa0JnRCwrQ0FBNkIsRUFDL0M5QyxnQkFBZ0I2Qyx5QkFBeUIsR0FBRztJQUVsRCxJQUFJLENBQUMxQyxjQUFjLENBQUNMLGlCQUFpQkUsZUFBZUg7QUFDdEQ7QUFFQSxTQUFTbUQsa0JBQWtCQyxzQkFBc0IsRUFBRXBELE9BQU87SUFDeEQsTUFBTUMsa0JBQWtCb0QsOENBQTRCLEVBQzlDbEQsZ0JBQWdCaUQsd0JBQXdCLEdBQUc7SUFFakQsSUFBSSxDQUFDaEQsYUFBYSxDQUFDSCxpQkFBaUJFLGVBQWVIO0FBQ3JEO0FBRUEsU0FBU3NELG1CQUFtQkYsc0JBQXNCLEVBQUVwRCxPQUFPO0lBQ3pELE1BQU1DLGtCQUFrQm9ELDhDQUE0QixFQUM5Q2xELGdCQUFnQmlELHdCQUF3QixHQUFHO0lBRWpELElBQUksQ0FBQzlDLGNBQWMsQ0FBQ0wsaUJBQWlCRSxlQUFlSDtBQUN0RDtBQUVBLFNBQVN1RCxrQkFBa0JDLHNCQUFzQixFQUFFeEQsT0FBTztJQUN4RCxNQUFNQyxrQkFBa0J3RCw4Q0FBNEIsRUFDOUN0RCxnQkFBZ0JxRCx3QkFBd0IsR0FBRztJQUVqRCxJQUFJLENBQUNwRCxhQUFhLENBQUNILGlCQUFpQkUsZUFBZUg7QUFDckQ7QUFFQSxTQUFTMEQsbUJBQW1CRixzQkFBc0IsRUFBRXhELE9BQU87SUFDekQsTUFBTUMsa0JBQWtCd0QsOENBQTRCLEVBQzlDdEQsZ0JBQWdCcUQsd0JBQXdCLEdBQUc7SUFFakQsSUFBSSxDQUFDbEQsY0FBYyxDQUFDTCxpQkFBaUJFLGVBQWVIO0FBQ3REO0FBRUEsU0FBUzJELGtCQUFrQkMsc0JBQXNCLEVBQUU1RCxPQUFPO0lBQ3hELE1BQU1DLGtCQUFrQjRELDhDQUE0QixFQUM5QzFELGdCQUFnQnlELHdCQUF3QixHQUFHO0lBRWpELElBQUksQ0FBQ3hELGFBQWEsQ0FBQ0gsaUJBQWlCRSxlQUFlSDtBQUNyRDtBQUVBLFNBQVM4RCxtQkFBbUJGLHNCQUFzQixFQUFFNUQsT0FBTztJQUN6RCxNQUFNQyxrQkFBa0I0RCw4Q0FBNEIsRUFDOUMxRCxnQkFBZ0J5RCx3QkFBd0IsR0FBRztJQUVqRCxJQUFJLENBQUN0RCxjQUFjLENBQUNMLGlCQUFpQkUsZUFBZUg7QUFDdEQ7QUFFQSxTQUFTK0Q7SUFDUCxNQUFNLEVBQUUxRixXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMyRixRQUFRO0lBRXJDLE9BQU8zRjtBQUNUO0FBRUEsU0FBUzRGO0lBQ1AsTUFBTSxFQUFFQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUNGLFFBQVE7SUFFdkMsT0FBT0U7QUFDVDtBQUVBLFNBQVNDO0lBQ1AsTUFBTSxFQUFFN0YsY0FBYyxFQUFFLEdBQUcsSUFBSSxDQUFDMEYsUUFBUTtJQUV4QyxPQUFPMUY7QUFDVDtBQUVBLFNBQVM4RjtJQUNQLE1BQU0sRUFBRTdGLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQ3lGLFFBQVE7SUFFeEMsT0FBT3pGO0FBQ1Q7QUFFQSxTQUFTOEY7SUFDUCxNQUFNLEVBQUU3RixlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUN3RixRQUFRO0lBRXpDLE9BQU94RjtBQUNUO0FBRUEsU0FBUzhGLGVBQWVqRyxXQUFXO0lBQ2pDLElBQUksQ0FBQ0ksV0FBVyxDQUFDO1FBQ2ZKO0lBQ0Y7QUFDRjtBQUVBLFNBQVNrRyxrQkFBa0JMLGFBQWE7SUFDdEMsSUFBSSxDQUFDekYsV0FBVyxDQUFDO1FBQ2Z5RjtJQUNGO0FBQ0Y7QUFFQSxTQUFTTSxrQkFBa0JsRyxjQUFjO0lBQ3ZDLElBQUksQ0FBQ0csV0FBVyxDQUFDO1FBQ2ZIO0lBQ0Y7QUFDRjtBQUVBLFNBQVNtRyxrQkFBa0JsRyxjQUFjO0lBQ3ZDLElBQUksQ0FBQ0UsV0FBVyxDQUFDO1FBQ2ZGO0lBQ0Y7QUFDRjtBQUVBLFNBQVNtRyxtQkFBbUJsRyxlQUFlO0lBQ3pDLElBQUksQ0FBQ0MsV0FBVyxDQUFDO1FBQ2ZEO0lBQ0Y7QUFDRjtBQUVBLFNBQVNVLGtCQUFrQnlGLEtBQUssRUFBRTNFLE9BQU87SUFDdkMsSUFBSSxDQUFDNEUsWUFBWSxDQUFDRCxPQUFPM0UsU0FBUyxDQUFDMkU7UUFDakMsTUFBTUUsYUFBYUYsT0FDYkcsVUFBVSxPQUNWQyxZQUFZQyxJQUFBQSxrQ0FBdUIsRUFBQ0gsWUFBWUM7UUFFdEQsT0FBT0M7SUFDVDtBQUNGO0FBRUEsU0FBU3BHLGlCQUFpQmdHLEtBQUssRUFBRTNFLE9BQU87SUFDdEMsSUFBSSxDQUFDNEUsWUFBWSxDQUFDRCxPQUFPM0UsU0FBUyxDQUFDMkU7UUFDakMsTUFBTU0sYUFBYU4sT0FDYkksWUFBWUcsSUFBQUEsa0NBQXVCLEVBQUNEO1FBRTFDLE9BQU9GO0lBQ1Q7QUFDRjtBQUVBLFNBQVMzRixpQkFBaUJ1RixLQUFLLEVBQUUzRSxPQUFPO0lBQ3RDLElBQUksQ0FBQ21GLFdBQVcsQ0FBQ1IsT0FBTzNFLFNBQVMsQ0FBQzJFO1FBQ2hDLE1BQU1FLGFBQWFGLE9BQ2JHLFVBQVUsT0FDVkMsWUFBWUMsSUFBQUEsa0NBQXVCLEVBQUNILFlBQVlDO1FBRXRELE9BQU9DO0lBQ1Q7QUFDRjtBQUVBLFNBQVNsRyxpQkFBaUI4RixLQUFLLEVBQUUzRSxPQUFPO0lBQ3RDLElBQUksQ0FBQ21GLFdBQVcsQ0FBQ1IsT0FBTzNFLFNBQVMsQ0FBQzJFO1FBQ2hDLE1BQU1NLGFBQWFOLE9BQ2JJLFlBQVlHLElBQUFBLGtDQUF1QixFQUFDRDtRQUUxQyxPQUFPRjtJQUNUO0FBQ0Y7QUFFQSxTQUFTekYsZ0JBQWdCcUYsS0FBSyxFQUFFM0UsT0FBTztJQUNyQyxJQUFJLENBQUNvRixVQUFVLENBQUNULE9BQU8zRSxTQUFTLENBQUMyRTtRQUMvQixNQUFNRSxhQUFhRixPQUNiRyxVQUFVLE1BQ1ZDLFlBQVlDLElBQUFBLGtDQUF1QixFQUFDSCxZQUFZQztRQUV0RCxPQUFPQztJQUNUO0FBQ0Y7QUFFQSxTQUFTL0YsZUFBZTJGLEtBQUssRUFBRTNFLE9BQU87SUFDcEMsSUFBSSxDQUFDb0YsVUFBVSxDQUFDVCxPQUFPM0UsU0FBUyxDQUFDMkU7UUFDL0IsTUFBTU0sYUFBYU4sT0FDYkksWUFBWUcsSUFBQUEsa0NBQXVCLEVBQUNEO1FBRTFDLE9BQU9GO0lBQ1Q7QUFDRjtBQUVBLFNBQVNILGFBQWFELEtBQUssRUFBRTNFLE9BQU8sRUFBRXFGLGtCQUFrQjtJQUN0RCxNQUFNTixZQUFZTSxtQkFBbUJWLFFBQy9CcEcsaUJBQWlCLElBQUksQ0FBQzZGLGlCQUFpQjtJQUU3Q2tCLElBQUFBLDBCQUFlLEVBQUMvRyxnQkFBZ0J3RztJQUVoQy9HLEtBQUtPLGdCQUFnQndHO0lBRXJCLE1BQU1RLDBCQUEwQmhILGVBQWVpSCxNQUFNO0lBRXJELElBQUlELDRCQUE0QixHQUFHO1FBQ2pDLElBQUksQ0FBQ0UsU0FBUyxDQUFDZCxPQUFPM0U7UUFFdEIsSUFBSWtFLGdCQUFnQndCLFdBQVc7WUFDN0J4QixnQkFBZ0I7WUFFaEIsSUFBSSxDQUFDSyxpQkFBaUIsQ0FBQ0w7WUFFdkIsSUFBSSxDQUFDeUIsS0FBSyxDQUFDaEIsT0FBTzNFO1FBQ3BCLEdBQUc0RixzQkFBVztRQUVkLElBQUksQ0FBQ3JCLGlCQUFpQixDQUFDTDtJQUN6QjtJQUVBLElBQUlxQiw0QkFBNEIsR0FBRztRQUNqQyxJQUFJLENBQUNNLFVBQVUsQ0FBQ2xCLE9BQU8zRTtJQUN6QjtBQUNGO0FBRUEsU0FBU21GLFlBQVlSLEtBQUssRUFBRTNFLE9BQU8sRUFBRXFGLGtCQUFrQjtJQUNyRCxNQUFNTixZQUFZTSxtQkFBbUJWLFFBQy9CcEcsaUJBQWlCLElBQUksQ0FBQzZGLGlCQUFpQixJQUN2QzVGLGtCQUFrQixJQUFJLENBQUM2RixrQkFBa0I7SUFFL0NpQixJQUFBQSwwQkFBZSxFQUFDOUcsaUJBQWlCdUc7SUFFakMvRyxLQUFLUSxpQkFBaUJ1RztJQUV0QixNQUFNZSxpQkFBaUJDLElBQUFBLHlCQUFjLEVBQUN4SCxnQkFBZ0JDO0lBRXRELElBQUlzSCxnQkFBZ0I7UUFDbEJFLElBQUFBLHdCQUFhLEVBQUN4SCxpQkFBaUJEO1FBRS9CLE1BQU0wSCx3QkFBd0J6SCxnQkFBZ0JnSCxNQUFNO1FBRXBELElBQUlTLDBCQUEwQixHQUFHO1lBQy9CLElBQUksQ0FBQ0MsSUFBSSxDQUFDdkIsT0FBTzNFO1FBQ25CO1FBRUEsSUFBSWlHLDBCQUEwQixHQUFHO1lBQy9CLElBQUksQ0FBQ0UsS0FBSyxDQUFDeEIsT0FBTzNFO1FBQ3BCO0lBQ0Y7SUFFQSxJQUFJa0UsZ0JBQWdCLElBQUksQ0FBQ0QsaUJBQWlCO0lBRTFDLElBQUlDLGtCQUFrQixNQUFNO1FBQzFCa0MsYUFBYWxDO1FBRWJBLGdCQUFnQjtRQUVoQixJQUFJLENBQUNLLGlCQUFpQixDQUFDTDtJQUN6QjtBQUNGO0FBRUEsU0FBU2tCLFdBQVdULEtBQUssRUFBRTNFLE9BQU8sRUFBRXFGLGtCQUFrQjtJQUNwRCxNQUFNTixZQUFZTSxtQkFBbUJWLFFBQy9CcEcsaUJBQWlCLElBQUksQ0FBQzZGLGlCQUFpQixJQUN2QzVGLGtCQUFrQixJQUFJLENBQUM2RixrQkFBa0IsSUFDekN5QixpQkFBaUJDLElBQUFBLHlCQUFjLEVBQUN4SCxnQkFBZ0JDO0lBRXRELElBQUlzSCxnQkFBZ0I7UUFDbEIsTUFBTU8sdUJBQXVCOUgsZUFBZWlILE1BQU07UUFFbEQsSUFBSWEseUJBQXlCLEdBQUc7WUFDOUIsSUFBSSxDQUFDQyxTQUFTLENBQUMzQixPQUFPM0U7UUFDeEI7UUFFQSxJQUFJcUcseUJBQXlCLEdBQUc7WUFDOUIsSUFBSSxDQUFDRSxXQUFXLENBQUM1QixPQUFPM0U7WUFFeEIsSUFBSSxDQUFDd0csYUFBYSxDQUFDN0IsT0FBTzNFO1FBQzVCO0lBQ0Y7SUFFQXNGLElBQUFBLDBCQUFlLEVBQUMvRyxnQkFBZ0J3RztJQUVoQ08sSUFBQUEsMEJBQWUsRUFBQzlHLGlCQUFpQnVHO0lBRWpDLElBQUliLGdCQUFnQixJQUFJLENBQUNELGlCQUFpQjtJQUUxQyxJQUFJQyxrQkFBa0IsTUFBTTtRQUMxQmtDLGFBQWFsQztRQUViQSxnQkFBZ0I7UUFFaEIsSUFBSSxDQUFDSyxpQkFBaUIsQ0FBQ0w7SUFDekI7QUFDRjtBQUVBLFNBQVNxQyxZQUFZNUIsS0FBSyxFQUFFM0UsT0FBTztJQUNqQyxNQUFNekIsaUJBQWlCLElBQUksQ0FBQzZGLGlCQUFpQixJQUN2QzVGLGtCQUFrQixJQUFJLENBQUM2RixrQkFBa0IsSUFDekNvQyxxQkFBcUJ4SSxNQUFNTSxpQkFDM0JtSSxzQkFBc0J6SSxNQUFNTyxrQkFDNUJtSSxnQkFBZ0JGLG9CQUNoQkcsaUJBQWlCRixxQkFDakJHLG1CQUFtQkMsaUJBQWdCLENBQUNDLGtDQUFrQyxDQUFDSixlQUFlQyxpQkFDdEZJLE9BQU9ILGlCQUFpQkksT0FBTyxJQUMvQkMsUUFBUUwsaUJBQWlCTSxRQUFRO0lBRXZDLElBQUksQUFBQ0QsVUFBVSxLQUFPRixPQUFPSSwyQkFBZ0IsRUFBRTtRQUM3QyxJQUFJLENBQUNDLEdBQUcsQ0FBQzFDLE9BQU8zRTtJQUNsQjtBQUNGO0FBRUEsU0FBU3dHLGNBQWM3QixLQUFLLEVBQUUzRSxPQUFPO0lBQ25DLE1BQU16QixpQkFBaUIsSUFBSSxDQUFDNkYsaUJBQWlCLElBQ3ZDNUYsa0JBQWtCLElBQUksQ0FBQzZGLGtCQUFrQixJQUN6Q29DLHFCQUFxQnhJLE1BQU1NLGlCQUMzQm1JLHNCQUFzQnpJLE1BQU1PLGtCQUM1Qm1JLGdCQUFnQkYsb0JBQ2hCRyxpQkFBaUJGLHFCQUNqQkcsbUJBQW1CQyxpQkFBZ0IsQ0FBQ0Msa0NBQWtDLENBQUNKLGVBQWVDLGlCQUN0RlUsWUFBWVQsaUJBQWlCVSxZQUFZLElBQ3pDTCxRQUFRTCxpQkFBaUJNLFFBQVE7SUFFdkMsSUFBSUQsUUFBUU0sOEJBQW1CLEVBQUU7UUFDL0IsSUFBSSxDQUFDQyxLQUFLLENBQUM5QyxPQUFPM0UsU0FBU2tILE9BQU9JO0lBQ3BDO0FBQ0Y7QUFFQSxTQUFTRCxJQUFJMUMsS0FBSyxFQUFFM0UsT0FBTztJQUN6QixNQUFNekIsaUJBQWlCLElBQUksQ0FBQzZGLGlCQUFpQixJQUN2Q3FDLHFCQUFxQnhJLE1BQU1NLGlCQUMzQm1KLGdCQUFnQmpCLG9CQUNoQmtCLE1BQU1ELGNBQWNFLE1BQU0sSUFDMUJDLE9BQU9ILGNBQWNJLE9BQU87SUFFbEMsSUFBSXpKLGNBQWMsSUFBSSxDQUFDMEYsY0FBYztJQUVyQyxJQUFJMUYsZ0JBQWdCLE1BQU07UUFDeEIrSCxhQUFhL0g7UUFFYkEsY0FBYztRQUVkLElBQUksQ0FBQ2lHLGNBQWMsQ0FBQ2pHO1FBRXBCLElBQUksQ0FBQzBKLFNBQVMsQ0FBQ3BELE9BQU8zRSxTQUFTMkgsS0FBS0U7UUFFcEM7SUFDRjtJQUVBeEosY0FBY3FILFdBQVc7UUFDdkJySCxjQUFjO1FBRWQsSUFBSSxDQUFDaUcsY0FBYyxDQUFDakc7UUFFcEIsSUFBSSxDQUFDMkosU0FBUyxDQUFDckQsT0FBTzNFLFNBQVMySCxLQUFLRTtJQUN0QyxHQUFHSSxvQkFBUztJQUVaLElBQUksQ0FBQzNELGNBQWMsQ0FBQ2pHO0FBQ3RCO0FBRUEsU0FBUzZILEtBQUt2QixLQUFLLEVBQUUzRSxPQUFPO0lBQzFCLE1BQU16QixpQkFBaUIsSUFBSSxDQUFDNkYsaUJBQWlCLElBQ3ZDNUYsa0JBQWtCLElBQUksQ0FBQzZGLGtCQUFrQixJQUN6Q29DLHFCQUFxQnhJLE1BQU1NLGlCQUMzQm1JLHNCQUFzQnpJLE1BQU1PLGtCQUM1Qm1JLGdCQUFnQkYsb0JBQ2hCRyxpQkFBaUJGLHFCQUNqQkcsbUJBQW1CQyxpQkFBZ0IsQ0FBQ0Msa0NBQWtDLENBQUNKLGVBQWVDLGlCQUN0RmUsTUFBTWQsaUJBQWlCZSxNQUFNLElBQzdCQyxPQUFPaEIsaUJBQWlCaUIsT0FBTyxJQUMvQlIsWUFBWVQsaUJBQWlCVSxZQUFZO0lBRS9DLElBQUl0SCxrQkFBa0I7SUFFdEIsSUFBSSxBQUFDaUksS0FBS0MsR0FBRyxDQUFDYixhQUFjYyx5QkFBYyxFQUFFO1FBQzFDbkksa0JBQWtCb0IsOENBQTRCO0lBQ2hEO0lBRUEsSUFBSTZHLEtBQUtDLEdBQUcsQ0FBQ0Usc0JBQVcsR0FBR2YsYUFBYWMseUJBQWMsRUFBRTtRQUN0RG5JLGtCQUFrQlEsMkNBQXlCO0lBQzdDO0lBRUEsSUFBSXlILEtBQUtDLEdBQUcsQ0FBQyxDQUFDRSxzQkFBVyxHQUFHZixhQUFhYyx5QkFBYyxFQUFFO1FBQ3ZEbkksa0JBQWtCWSw2Q0FBMkI7SUFDL0M7SUFFQSxJQUFJLEFBQUN5SCxhQUFFLEdBQUdKLEtBQUtDLEdBQUcsQ0FBQ2IsYUFBY2MseUJBQWMsRUFBRTtRQUMvQ25JLGtCQUFrQmdCLDZDQUEyQjtJQUMvQztJQUVBLElBQUloQixvQkFBb0IsTUFBTTtRQUM1QixJQUFJLENBQUNzSSxrQkFBa0IsQ0FBQ3RJLGlCQUFpQjBFLE9BQU8zRSxTQUFTMkgsS0FBS0U7SUFDaEU7QUFDRjtBQUVBLFNBQVMxQixNQUFNeEIsS0FBSyxFQUFFM0UsT0FBTztJQUMzQixNQUFNeEIsa0JBQWtCLElBQUksQ0FBQzZGLGtCQUFrQixJQUN6Q3FDLHNCQUFzQnpJLE1BQU1PLGtCQUM1QmdLLHVCQUF1QnRLLE9BQU9NLGtCQUM5QmlLLHlCQUF5QjNCLGlCQUFnQixDQUFDQyxrQ0FBa0MsQ0FBQ0wscUJBQXFCOEIsdUJBQ2xHdkksa0JBQWtCNEMsOENBQTRCLEVBQzlDdkUsaUJBQWlCLElBQUksQ0FBQzZGLGlCQUFpQixJQUN2Q3VFLFlBQVlELHVCQUF1QkUsWUFBWSxJQUMvQ0MsUUFBUUYsWUFBWXBLO0lBRTFCLElBQUksQ0FBQ2lLLGtCQUFrQixDQUFDdEksaUJBQWlCMEUsT0FBTzNFLFNBQVM0STtBQUMzRDtBQUVBLFNBQVNqRCxNQUFNaEIsS0FBSyxFQUFFM0UsT0FBTztJQUMzQixNQUFNQyxrQkFBa0JDLHlDQUF1QjtJQUUvQyxJQUFJLENBQUNxSSxrQkFBa0IsQ0FBQ3RJLGlCQUFpQjBFLE9BQU8zRTtBQUNsRDtBQUVBLFNBQVN5SCxNQUFNOUMsS0FBSyxFQUFFM0UsT0FBTyxFQUFFa0gsS0FBSyxFQUFFSSxTQUFTO0lBQzdDLElBQUlySCxrQkFBa0I7SUFFdEIsSUFBSSxBQUFDaUksS0FBS0MsR0FBRyxDQUFDYixhQUFjYyx5QkFBYyxFQUFFO1FBQzFDbkksa0JBQWtCd0MsK0NBQTZCO1FBRS9DeUUsUUFBUUEsUUFBUWdCLEtBQUtDLEdBQUcsQ0FBQ0QsS0FBS1csR0FBRyxDQUFDdkI7SUFDcEM7SUFFQSxJQUFJWSxLQUFLQyxHQUFHLENBQUNFLHNCQUFXLEdBQUdmLGFBQWFjLHlCQUFjLEVBQUU7UUFDdERuSSxrQkFBa0I0Qiw0Q0FBMEI7UUFFNUNxRixRQUFRQSxRQUFRZ0IsS0FBS0MsR0FBRyxDQUFDRCxLQUFLWSxHQUFHLENBQUN4QjtJQUNwQztJQUVBLElBQUlZLEtBQUtDLEdBQUcsQ0FBQyxDQUFDRSxzQkFBVyxHQUFHZixhQUFhYyx5QkFBYyxFQUFFO1FBQ3ZEbkksa0JBQWtCZ0MsOENBQTRCO1FBRTlDaUYsUUFBUUEsUUFBUWdCLEtBQUtDLEdBQUcsQ0FBQ0QsS0FBS1ksR0FBRyxDQUFDeEI7SUFDcEM7SUFFQSxJQUFJLEFBQUNnQixhQUFFLEdBQUdKLEtBQUtDLEdBQUcsQ0FBQ2IsYUFBY2MseUJBQWMsRUFBRTtRQUMvQ25JLGtCQUFrQm9DLDhDQUE0QjtRQUU5QzZFLFFBQVFBLFFBQVFnQixLQUFLQyxHQUFHLENBQUNELEtBQUtXLEdBQUcsQ0FBQ3ZCO0lBQ3BDO0lBRUEsSUFBSXJILG9CQUFvQixNQUFNO1FBQzVCLE1BQU0xQixpQkFBaUIsSUFBSSxDQUFDNkYsaUJBQWlCLElBQ3ZDcUMscUJBQXFCeEksTUFBTU0saUJBQzNCbUosZ0JBQWdCakIsb0JBQ2hCa0IsTUFBTUQsY0FBY0UsTUFBTSxJQUMxQkMsT0FBT0gsY0FBY0ksT0FBTztRQUVsQyxJQUFJLENBQUNTLGtCQUFrQixDQUFDdEksaUJBQWlCMEUsT0FBTzNFLFNBQVMySCxLQUFLRSxNQUFNWDtJQUN0RTtBQUNGO0FBRUEsU0FBU2MsVUFBVXJELEtBQUssRUFBRTNFLE9BQU8sRUFBRTJILEdBQUcsRUFBRUUsSUFBSTtJQUMxQyxNQUFNNUgsa0JBQWtCd0QsOENBQTRCO0lBRXBELElBQUksQ0FBQzhFLGtCQUFrQixDQUFDdEksaUJBQWlCMEUsT0FBTzNFLFNBQVMySCxLQUFLRSxPQUFPLEdBQUc7QUFDMUU7QUFFQSxTQUFTRSxVQUFVcEQsS0FBSyxFQUFFM0UsT0FBTyxFQUFFMkgsR0FBRyxFQUFFRSxJQUFJO0lBQzFDLE1BQU01SCxrQkFBa0I0RCw4Q0FBNEI7SUFFcEQsSUFBSSxDQUFDMEUsa0JBQWtCLENBQUN0SSxpQkFBaUIwRSxPQUFPM0UsU0FBUzJILEtBQUtFO0FBQ2hFO0FBRUEsU0FBU3BDLFVBQVVkLEtBQUssRUFBRTNFLE9BQU87SUFDL0IsTUFBTUMsa0JBQWtCd0IsOENBQTRCLEVBQzlDbEQsaUJBQWlCLElBQUksQ0FBQzZGLGlCQUFpQixJQUN2Q3FDLHFCQUFxQnhJLE1BQU1NLGlCQUMzQm1KLGdCQUFnQmpCLG9CQUNoQmtCLE1BQU1ELGNBQWNFLE1BQU0sSUFDMUJDLE9BQU9ILGNBQWNJLE9BQU87SUFFbEMsSUFBSSxDQUFDUyxrQkFBa0IsQ0FBQ3RJLGlCQUFpQjBFLE9BQU8zRSxTQUFTMkgsS0FBS0U7QUFDaEU7QUFFQSxTQUFTaEMsV0FBV2xCLEtBQUssRUFBRTNFLE9BQU87SUFDaEMsTUFBTUMsa0JBQWtCZ0QsK0NBQTZCLEVBQ25EMUUsaUJBQWlCLElBQUksQ0FBQzZGLGlCQUFpQixJQUN2Q3FDLHFCQUFxQnhJLE1BQU1NLGlCQUMzQndLLHNCQUFzQjdLLE9BQU9LLGlCQUM3QnlLLHdCQUF3QmxDLGlCQUFnQixDQUFDQyxrQ0FBa0MsQ0FBQ04sb0JBQW9Cc0Msc0JBQ2hHTCxZQUFZTSxzQkFBc0JMLFlBQVksSUFDOUNySyxpQkFBaUJvSyxXQUFXLEdBQUc7SUFFakMsSUFBSSxDQUFDbEUsaUJBQWlCLENBQUNsRztJQUV2QixJQUFJLENBQUNpSyxrQkFBa0IsQ0FBQ3RJLGlCQUFpQjBFLE9BQU8zRTtBQUNsRDtBQUVBLFNBQVNzRyxVQUFVM0IsS0FBSyxFQUFFM0UsT0FBTztJQUMvQixNQUFNQyxrQkFBa0JvRCw4Q0FBNEI7SUFFcEQsSUFBSSxDQUFDa0Ysa0JBQWtCLENBQUN0SSxpQkFBaUIwRSxPQUFPM0U7QUFDbEQ7QUFFQSxNQUFNaUosY0FBYztJQUNsQjdLO0lBQ0FtQjtJQUNBTztJQUNBTztJQUNBRTtJQUNBRztJQUNBQztJQUNBRztJQUNBQztJQUNBRztJQUNBQztJQUNBRztJQUNBQztJQUNBRztJQUNBQztJQUNBRztJQUNBQztJQUNBRztJQUNBQztJQUNBRztJQUNBQztJQUNBRztJQUNBQztJQUNBRztJQUNBQztJQUNBRztJQUNBQztJQUNBRztJQUNBQztJQUNBRztJQUNBQztJQUNBRztJQUNBQztJQUNBRTtJQUNBRTtJQUNBQztJQUNBQztJQUNBQztJQUNBQztJQUNBQztJQUNBQztJQUNBQztJQUNBeEY7SUFDQVA7SUFDQVM7SUFDQVA7SUFDQVM7SUFDQU47SUFDQTRGO0lBQ0FPO0lBQ0FDO0lBQ0FtQjtJQUNBQztJQUNBYTtJQUNBbkI7SUFDQUM7SUFDQVI7SUFDQThCO0lBQ0FPO0lBQ0FEO0lBQ0F0QztJQUNBSTtJQUNBUztBQUNGO01BRUEsV0FBZTJDIn0=