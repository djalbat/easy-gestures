"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Position;
    }
});
class Position {
    constructor(top, left, time, identifier){
        this.top = top;
        this.left = left;
        this.time = time;
        this.identifier = identifier;
    }
    getTop() {
        return this.top;
    }
    getLeft() {
        return this.left;
    }
    getTime() {
        return this.time;
    }
    getIdentifier() {
        return this.identifier;
    }
    minus(position) {
        const positionTop = position.getTop(), positionLeft = position.getLeft(), positionTime = position.getTime(), top = this.top - positionTop, left = this.left - positionLeft, time = this.time - positionTime, identifier = this.identifier;
        position = new Position(top, left, time, identifier); ///
        return position;
    }
    match(position) {
        const identifier = position.getIdentifier(), matches = this.identifier === identifier;
        return matches;
    }
    static fromTouch(touch) {
        const { pageX, pageY, identifier } = touch, top = pageY, left = pageX, time = getTime(), position = new Position(top, left, time, identifier);
        return position;
    }
    static fromMouseEvent(mouseEvent) {
        const { pageX, pageY } = mouseEvent, top = pageY, left = pageX, time = getTime(), identifier = null, position = new Position(top, left, time, identifier);
        return position;
    }
}
function getTime() {
    const time = Date.now(); ///
    return time;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3NpdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIHRpbWUsIGlkZW50aWZpZXIpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3A7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gIH1cblxuICBnZXRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRpbWU7XG4gIH1cblxuICBnZXRJZGVudGlmaWVyKCkge1xuICAgIHJldHVybiB0aGlzLmlkZW50aWZpZXI7XG4gIH1cblxuICBtaW51cyhwb3NpdGlvbikge1xuICAgIGNvbnN0IHBvc2l0aW9uVG9wID0gcG9zaXRpb24uZ2V0VG9wKCksXG4gICAgICAgICAgcG9zaXRpb25MZWZ0ID0gcG9zaXRpb24uZ2V0TGVmdCgpLFxuICAgICAgICAgIHBvc2l0aW9uVGltZSA9IHBvc2l0aW9uLmdldFRpbWUoKSxcbiAgICAgICAgICB0b3AgPSB0aGlzLnRvcCAtIHBvc2l0aW9uVG9wLFxuICAgICAgICAgIGxlZnQgPSB0aGlzLmxlZnQgLSBwb3NpdGlvbkxlZnQsXG4gICAgICAgICAgdGltZSA9IHRoaXMudGltZSAtIHBvc2l0aW9uVGltZSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gdGhpcy5pZGVudGlmaWVyO1xuXG4gICAgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24odG9wLCBsZWZ0LCB0aW1lLCBpZGVudGlmaWVyKTsgLy8vXG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBtYXRjaChwb3NpdGlvbikge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwb3NpdGlvbi5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgbWF0Y2hlcyA9ICh0aGlzLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvdWNoKHRvdWNoKSB7XG4gICAgY29uc3QgeyBwYWdlWCwgcGFnZVksIGlkZW50aWZpZXIgfSA9IHRvdWNoLFxuICAgICAgICAgIHRvcCA9IHBhZ2VZLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHBhZ2VYLCAvLy9cbiAgICAgICAgICB0aW1lID0gZ2V0VGltZSgpLFxuICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHRvcCwgbGVmdCwgdGltZSwgaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU1vdXNlRXZlbnQobW91c2VFdmVudCkge1xuICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBtb3VzZUV2ZW50LFxuICAgICAgICAgIHRvcCA9IHBhZ2VZLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHBhZ2VYLCAvLy9cbiAgICAgICAgICB0aW1lID0gZ2V0VGltZSgpLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBudWxsLFxuICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHRvcCwgbGVmdCwgdGltZSwgaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGltZSgpIHtcbiAgY29uc3QgdGltZSA9IERhdGUubm93KCk7ICAvLy9cblxuICByZXR1cm4gdGltZTtcbn1cbiJdLCJuYW1lcyI6WyJQb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0aW1lIiwiaWRlbnRpZmllciIsImdldFRvcCIsImdldExlZnQiLCJnZXRUaW1lIiwiZ2V0SWRlbnRpZmllciIsIm1pbnVzIiwicG9zaXRpb24iLCJwb3NpdGlvblRvcCIsInBvc2l0aW9uTGVmdCIsInBvc2l0aW9uVGltZSIsIm1hdGNoIiwibWF0Y2hlcyIsImZyb21Ub3VjaCIsInRvdWNoIiwicGFnZVgiLCJwYWdlWSIsImZyb21Nb3VzZUV2ZW50IiwibW91c2VFdmVudCIsIkRhdGUiLCJub3ciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVBOzs7ZUFBcUJBOzs7QUFBTixNQUFNQTtJQUNuQixZQUFZQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxVQUFVLENBQUU7UUFDdkMsSUFBSSxDQUFDSCxHQUFHLEdBQUdBO1FBQ1gsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQ0osR0FBRztJQUNqQjtJQUVBSyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUk7SUFDbEI7SUFFQUssVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJO0lBQ2xCO0lBRUFLLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDSixVQUFVO0lBQ3hCO0lBRUFLLE1BQU1DLFFBQVEsRUFBRTtRQUNkLE1BQU1DLGNBQWNELFNBQVNMLE1BQU0sSUFDN0JPLGVBQWVGLFNBQVNKLE9BQU8sSUFDL0JPLGVBQWVILFNBQVNILE9BQU8sSUFDL0JOLE1BQU0sSUFBSSxDQUFDQSxHQUFHLEdBQUdVLGFBQ2pCVCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxHQUFHVSxjQUNuQlQsT0FBTyxJQUFJLENBQUNBLElBQUksR0FBR1UsY0FDbkJULGFBQWEsSUFBSSxDQUFDQSxVQUFVO1FBRWxDTSxXQUFXLElBQUlWLFNBQVNDLEtBQUtDLE1BQU1DLE1BQU1DLGFBQWEsR0FBRztRQUV6RCxPQUFPTTtJQUNUO0lBRUFJLE1BQU1KLFFBQVEsRUFBRTtRQUNkLE1BQU1OLGFBQWFNLFNBQVNGLGFBQWEsSUFDbkNPLFVBQVcsSUFBSSxDQUFDWCxVQUFVLEtBQUtBO1FBRXJDLE9BQU9XO0lBQ1Q7SUFFQSxPQUFPQyxVQUFVQyxLQUFLLEVBQUU7UUFDdEIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRWYsVUFBVSxFQUFFLEdBQUdhLE9BQy9CaEIsTUFBTWtCLE9BQ05qQixPQUFPZ0IsT0FDUGYsT0FBT0ksV0FDUEcsV0FBVyxJQUFJVixTQUFTQyxLQUFLQyxNQUFNQyxNQUFNQztRQUUvQyxPQUFPTTtJQUNUO0lBRUEsT0FBT1UsZUFBZUMsVUFBVSxFQUFFO1FBQ2hDLE1BQU0sRUFBRUgsS0FBSyxFQUFFQyxLQUFLLEVBQUUsR0FBR0UsWUFDbkJwQixNQUFNa0IsT0FDTmpCLE9BQU9nQixPQUNQZixPQUFPSSxXQUNQSCxhQUFhLE1BQ2JNLFdBQVcsSUFBSVYsU0FBU0MsS0FBS0MsTUFBTUMsTUFBTUM7UUFFL0MsT0FBT007SUFDVDtBQUNGO0FBRUEsU0FBU0g7SUFDUCxNQUFNSixPQUFPbUIsS0FBS0MsR0FBRyxJQUFLLEdBQUc7SUFFN0IsT0FBT3BCO0FBQ1QifQ==