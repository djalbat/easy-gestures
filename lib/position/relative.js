"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RelativePosition;
    }
});
const _constants = require("../constants");
class RelativePosition {
    constructor(top, left, time, speed, magnitude, direction){
        this.top = top;
        this.left = left;
        this.time = time;
        this.speed = speed;
        this.magnitude = magnitude;
        this.direction = direction;
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
    getSpeed() {
        return this.speed;
    }
    getMagnitude() {
        return this.magnitude;
    }
    getDirection() {
        return this.direction;
    }
    static fromFirstPositionAndSecondPosition(firstPosition, secondPosition) {
        const position = secondPosition.minus(firstPosition), top = position.getTop(), left = position.getLeft(), time = position.getTime(), magnitude = Math.sqrt(top * top + left * left), speed = time === 0 ? 0 : magnitude / time;
        let direction;
        if (left === 0) {
            direction = top < 0 ? +_constants.PI / 2 : -_constants.PI / 2;
        } else {
            direction = Math.atan2(-top, left);
        }
        const relativePosition = new RelativePosition(top, left, time, speed, magnitude, direction);
        return relativePosition;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wb3NpdGlvbi9yZWxhdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUEkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGF0aXZlUG9zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIHRpbWUsIHNwZWVkLCBtYWduaXR1ZGUsIGRpcmVjdGlvbikge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5tYWduaXR1ZGUgPSBtYWduaXR1ZGU7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG5cbiAgZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aW1lO1xuICB9XG5cbiAgZ2V0U3BlZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3BlZWQ7XG4gIH1cblxuICBnZXRNYWduaXR1ZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFnbml0dWRlO1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlyc3RQb3NpdGlvbkFuZFNlY29uZFBvc2l0aW9uKGZpcnN0UG9zaXRpb24sIHNlY29uZFBvc2l0aW9uKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBzZWNvbmRQb3NpdGlvbi5taW51cyhmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICB0b3AgPSBwb3NpdGlvbi5nZXRUb3AoKSxcbiAgICAgICAgICBsZWZ0ID0gcG9zaXRpb24uZ2V0TGVmdCgpLFxuICAgICAgICAgIHRpbWUgPSBwb3NpdGlvbi5nZXRUaW1lKCksXG4gICAgICAgICAgbWFnbml0dWRlID0gTWF0aC5zcXJ0KHRvcCAqIHRvcCArIGxlZnQgKiBsZWZ0KSxcbiAgICAgICAgICBzcGVlZCA9ICh0aW1lID09PSAwKSA/XG4gICAgICAgICAgICAgICAgICAgIDAgOlxuICAgICAgICAgICAgICAgICAgICAgIG1hZ25pdHVkZSAvIHRpbWU7XG5cbiAgICBsZXQgZGlyZWN0aW9uO1xuXG4gICAgaWYgKGxlZnQgPT09IDApIHtcbiAgICAgIGRpcmVjdGlvbiA9ICh0b3AgPCAwKSA/XG4gICAgICAgICAgICAgICAgICAgK1BJIC8gMiA6XG4gICAgICAgICAgICAgICAgICAgIC1QSSAvIDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbiA9IE1hdGguYXRhbjIoLXRvcCwgbGVmdCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRpdmVQb3NpdGlvbiA9IG5ldyBSZWxhdGl2ZVBvc2l0aW9uKHRvcCwgbGVmdCwgdGltZSwgc3BlZWQsIG1hZ25pdHVkZSwgZGlyZWN0aW9uKTtcblxuICAgIHJldHVybiByZWxhdGl2ZVBvc2l0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVsYXRpdmVQb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0aW1lIiwic3BlZWQiLCJtYWduaXR1ZGUiLCJkaXJlY3Rpb24iLCJnZXRUb3AiLCJnZXRMZWZ0IiwiZ2V0VGltZSIsImdldFNwZWVkIiwiZ2V0TWFnbml0dWRlIiwiZ2V0RGlyZWN0aW9uIiwiZnJvbUZpcnN0UG9zaXRpb25BbmRTZWNvbmRQb3NpdGlvbiIsImZpcnN0UG9zaXRpb24iLCJzZWNvbmRQb3NpdGlvbiIsInBvc2l0aW9uIiwibWludXMiLCJNYXRoIiwic3FydCIsIlBJIiwiYXRhbjIiLCJyZWxhdGl2ZVBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzJCQUZGO0FBRUosTUFBTUE7SUFDbkIsWUFBWUMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsQ0FBRTtRQUN4RCxJQUFJLENBQUNMLEdBQUcsR0FBR0E7UUFDWCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQ04sR0FBRztJQUNqQjtJQUVBTyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNOLElBQUk7SUFDbEI7SUFFQU8sVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDTixJQUFJO0lBQ2xCO0lBRUFPLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ04sS0FBSztJQUNuQjtJQUVBTyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNOLFNBQVM7SUFDdkI7SUFFQU8sZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDTixTQUFTO0lBQ3ZCO0lBRUEsT0FBT08sbUNBQW1DQyxhQUFhLEVBQUVDLGNBQWMsRUFBRTtRQUN2RSxNQUFNQyxXQUFXRCxlQUFlRSxLQUFLLENBQUNILGdCQUNoQ2IsTUFBTWUsU0FBU1QsTUFBTSxJQUNyQkwsT0FBT2MsU0FBU1IsT0FBTyxJQUN2QkwsT0FBT2EsU0FBU1AsT0FBTyxJQUN2QkosWUFBWWEsS0FBS0MsSUFBSSxDQUFDbEIsTUFBTUEsTUFBTUMsT0FBT0EsT0FDekNFLFFBQVEsQUFBQ0QsU0FBUyxJQUNSLElBQ0VFLFlBQVlGO1FBRTlCLElBQUlHO1FBRUosSUFBSUosU0FBUyxHQUFHO1lBQ2RJLFlBQVksQUFBQ0wsTUFBTSxJQUNOLENBQUNtQixhQUFFLEdBQUcsSUFDTCxDQUFDQSxhQUFFLEdBQUc7UUFDdEIsT0FBTztZQUNMZCxZQUFZWSxLQUFLRyxLQUFLLENBQUMsQ0FBQ3BCLEtBQUtDO1FBQy9CO1FBRUEsTUFBTW9CLG1CQUFtQixJQUFJdEIsaUJBQWlCQyxLQUFLQyxNQUFNQyxNQUFNQyxPQUFPQyxXQUFXQztRQUVqRixPQUFPZ0I7SUFDVDtBQUNGIn0=