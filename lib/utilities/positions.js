"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get filterPositions () {
        return filterPositions;
    },
    get matchPositions () {
        return matchPositions;
    },
    get positionsFromMouseEvent () {
        return positionsFromMouseEvent;
    },
    get positionsFromTouchEvent () {
        return positionsFromTouchEvent;
    },
    get sortPositions () {
        return sortPositions;
    }
});
const _necessary = require("necessary");
const _position = /*#__PURE__*/ _interop_require_default(require("../position"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { clear, filter } = _necessary.arrayUtilities;
function sortPositions(positionsA, positionsB) {
    const positionAMap = positionsA.reduce((positionAMap, positionA)=>{
        const identifier = positionA.getIdentifier();
        positionAMap[identifier] = positionA;
        return positionAMap;
    }, {});
    clear(positionsA);
    positionsB.forEach((positionB)=>{
        const identifier = positionB.getIdentifier(), positionA = positionAMap[identifier];
        positionsA.push(positionA);
    });
}
function matchPositions(positionsA, positionsB) {
    let positionsMatch = false;
    const positionsALength = positionsA.length, positionsBLength = positionsB.length;
    if (positionsALength === positionsBLength) {
        const identifiersA = identifiersFromPositions(positionsA), identifiersB = identifiersFromPositions(positionsB);
        identifiersA.sort();
        identifiersB.sort();
        const identifiersMatch = identifiersA.every((identifierA, index)=>{
            const identifierB = identifiersB[index];
            if (identifierA === identifierB) {
                return true;
            }
        });
        positionsMatch = identifiersMatch; ///
    }
    return positionsMatch;
}
function filterPositions(positionsA, positionsB) {
    filter(positionsA, (positionA)=>{
        const matches = positionsB.some((positionB)=>{
            const matches = positionA.match(positionB);
            if (matches) {
                return true;
            }
        });
        if (!matches) {
            return true;
        }
    });
}
function positionsFromMouseEvent(mouseEvent) {
    const position = _position.default.fromMouseEvent(mouseEvent), positions = [
        position
    ];
    return positions;
}
function positionsFromTouchEvent(touchEvent, changed = true) {
    let touchesNodeList;
    if (changed) {
        ({ changedTouches: touchesNodeList } = touchEvent);
    } else {
        ({ touches: touchesNodeList } = touchEvent);
    }
    const touches = [
        ...touchesNodeList
    ], positions = touches.map((touch)=>{
        const position = _position.default.fromTouch(touch);
        return position;
    });
    compressPositions(positions);
    return positions;
}
function compressPositions(positions) {
    const positionMap = positions.reduce((positionMap, position)=>{
        const identifier = position.getIdentifier();
        positionMap[identifier] = position;
        return positionMap;
    }, {});
    positions = Object.values(positionMap);
    return positions;
}
function identifiersFromPositions(positions) {
    const identifiers = positions.map((position)=>{
        const identifier = position.getIdentifier();
        return identifier;
    });
    return identifiers;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcG9zaXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFBvc2l0aW9uIGZyb20gXCIuLi9wb3NpdGlvblwiO1xuXG5jb25zdCB7IGNsZWFyLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gc29ydFBvc2l0aW9ucyhwb3NpdGlvbnNBLCBwb3NpdGlvbnNCKSB7XG4gIGNvbnN0IHBvc2l0aW9uQU1hcCA9IHBvc2l0aW9uc0EucmVkdWNlKChwb3NpdGlvbkFNYXAsIHBvc2l0aW9uQSkgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwb3NpdGlvbkEuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgcG9zaXRpb25BTWFwW2lkZW50aWZpZXJdID0gcG9zaXRpb25BO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uQU1hcDtcbiAgfSwge30pO1xuXG4gIGNsZWFyKHBvc2l0aW9uc0EpO1xuXG4gIHBvc2l0aW9uc0IuZm9yRWFjaCgocG9zaXRpb25CKSA9PiB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHBvc2l0aW9uQi5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgcG9zaXRpb25BID0gcG9zaXRpb25BTWFwW2lkZW50aWZpZXJdO1xuXG4gICAgcG9zaXRpb25zQS5wdXNoKHBvc2l0aW9uQSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hQb3NpdGlvbnMocG9zaXRpb25zQSwgcG9zaXRpb25zQikge1xuICBsZXQgcG9zaXRpb25zTWF0Y2ggPSBmYWxzZTtcblxuICBjb25zdCBwb3NpdGlvbnNBTGVuZ3RoID0gcG9zaXRpb25zQS5sZW5ndGgsXG4gICAgICAgIHBvc2l0aW9uc0JMZW5ndGggPSBwb3NpdGlvbnNCLmxlbmd0aDtcblxuICBpZiAocG9zaXRpb25zQUxlbmd0aCA9PT0gcG9zaXRpb25zQkxlbmd0aCkge1xuICAgIGNvbnN0IGlkZW50aWZpZXJzQSA9IGlkZW50aWZpZXJzRnJvbVBvc2l0aW9ucyhwb3NpdGlvbnNBKSxcbiAgICAgICAgICBpZGVudGlmaWVyc0IgPSBpZGVudGlmaWVyc0Zyb21Qb3NpdGlvbnMocG9zaXRpb25zQik7XG5cbiAgICBpZGVudGlmaWVyc0Euc29ydCgpO1xuXG4gICAgaWRlbnRpZmllcnNCLnNvcnQoKTtcblxuICAgIGNvbnN0IGlkZW50aWZpZXJzTWF0Y2ggPSBpZGVudGlmaWVyc0EuZXZlcnkoKGlkZW50aWZpZXJBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaWRlbnRpZmllckIgPSBpZGVudGlmaWVyc0JbaW5kZXhdO1xuXG4gICAgICBpZiAoaWRlbnRpZmllckEgPT09IGlkZW50aWZpZXJCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcG9zaXRpb25zTWF0Y2ggPSBpZGVudGlmaWVyc01hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcG9zaXRpb25zTWF0Y2g7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJQb3NpdGlvbnMocG9zaXRpb25zQSwgcG9zaXRpb25zQikge1xuICBmaWx0ZXIocG9zaXRpb25zQSwgKHBvc2l0aW9uQSkgPT4ge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBwb3NpdGlvbnNCLnNvbWUoKHBvc2l0aW9uQikgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IHBvc2l0aW9uQS5tYXRjaChwb3NpdGlvbkIpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50KG1vdXNlRXZlbnQpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbi5mcm9tTW91c2VFdmVudChtb3VzZUV2ZW50KSxcbiAgICAgICAgcG9zaXRpb25zID0gW1xuICAgICAgICAgIHBvc2l0aW9uXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uc0Zyb21Ub3VjaEV2ZW50KHRvdWNoRXZlbnQsIGNoYW5nZWQgPSB0cnVlKSB7XG4gIGxldCB0b3VjaGVzTm9kZUxpc3Q7XG5cbiAgaWYgKGNoYW5nZWQpIHtcbiAgICAoeyBjaGFuZ2VkVG91Y2hlczogdG91Y2hlc05vZGVMaXN0IH0gPSB0b3VjaEV2ZW50KTtcbiAgfSBlbHNlIHtcbiAgICAoeyB0b3VjaGVzOiB0b3VjaGVzTm9kZUxpc3QgfSA9IHRvdWNoRXZlbnQpO1xuICB9XG5cbiAgY29uc3QgdG91Y2hlcyA9IFtcbiAgICAgICAgICAuLi50b3VjaGVzTm9kZUxpc3RcbiAgICAgICAgXSxcbiAgICAgICAgcG9zaXRpb25zID0gdG91Y2hlcy5tYXAoKHRvdWNoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBQb3NpdGlvbi5mcm9tVG91Y2godG91Y2gpO1xuXG4gICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9KTtcblxuICBjb21wcmVzc1Bvc2l0aW9ucyhwb3NpdGlvbnMpO1xuXG4gIHJldHVybiBwb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNvbXByZXNzUG9zaXRpb25zKHBvc2l0aW9ucykge1xuICBjb25zdCBwb3NpdGlvbk1hcCA9IHBvc2l0aW9ucy5yZWR1Y2UoKHBvc2l0aW9uTWFwLCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGlkZW50aWZpZXIgPSBwb3NpdGlvbi5nZXRJZGVudGlmaWVyKCk7XG5cbiAgICBwb3NpdGlvbk1hcFtpZGVudGlmaWVyXSA9IHBvc2l0aW9uO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uTWFwO1xuICB9LCB7fSk7XG5cbiAgcG9zaXRpb25zID0gT2JqZWN0LnZhbHVlcyhwb3NpdGlvbk1hcCk7XG5cbiAgcmV0dXJuIHBvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gaWRlbnRpZmllcnNGcm9tUG9zaXRpb25zKHBvc2l0aW9ucykge1xuICBjb25zdCBpZGVudGlmaWVycyA9IHBvc2l0aW9ucy5tYXAoKHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHBvc2l0aW9uLmdldElkZW50aWZpZXIoKTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9KTtcblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbiJdLCJuYW1lcyI6WyJmaWx0ZXJQb3NpdGlvbnMiLCJtYXRjaFBvc2l0aW9ucyIsInBvc2l0aW9uc0Zyb21Nb3VzZUV2ZW50IiwicG9zaXRpb25zRnJvbVRvdWNoRXZlbnQiLCJzb3J0UG9zaXRpb25zIiwiY2xlYXIiLCJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsInBvc2l0aW9uc0EiLCJwb3NpdGlvbnNCIiwicG9zaXRpb25BTWFwIiwicmVkdWNlIiwicG9zaXRpb25BIiwiaWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJmb3JFYWNoIiwicG9zaXRpb25CIiwicHVzaCIsInBvc2l0aW9uc01hdGNoIiwicG9zaXRpb25zQUxlbmd0aCIsImxlbmd0aCIsInBvc2l0aW9uc0JMZW5ndGgiLCJpZGVudGlmaWVyc0EiLCJpZGVudGlmaWVyc0Zyb21Qb3NpdGlvbnMiLCJpZGVudGlmaWVyc0IiLCJzb3J0IiwiaWRlbnRpZmllcnNNYXRjaCIsImV2ZXJ5IiwiaWRlbnRpZmllckEiLCJpbmRleCIsImlkZW50aWZpZXJCIiwibWF0Y2hlcyIsInNvbWUiLCJtYXRjaCIsIm1vdXNlRXZlbnQiLCJwb3NpdGlvbiIsIlBvc2l0aW9uIiwiZnJvbU1vdXNlRXZlbnQiLCJwb3NpdGlvbnMiLCJ0b3VjaEV2ZW50IiwiY2hhbmdlZCIsInRvdWNoZXNOb2RlTGlzdCIsImNoYW5nZWRUb3VjaGVzIiwidG91Y2hlcyIsIm1hcCIsInRvdWNoIiwiZnJvbVRvdWNoIiwiY29tcHJlc3NQb3NpdGlvbnMiLCJwb3NpdGlvbk1hcCIsIk9iamVjdCIsInZhbHVlcyIsImlkZW50aWZpZXJzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF1RGdCQTtlQUFBQTs7UUE1QkFDO2VBQUFBOztRQTRDQUM7ZUFBQUE7O1FBU0FDO2VBQUFBOztRQXhFQUM7ZUFBQUE7OzsyQkFOZTtpRUFFVjs7Ozs7O0FBRXJCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR0MseUJBQWM7QUFFakMsU0FBU0gsY0FBY0ksVUFBVSxFQUFFQyxVQUFVO0lBQ2xELE1BQU1DLGVBQWVGLFdBQVdHLE1BQU0sQ0FBQyxDQUFDRCxjQUFjRTtRQUNwRCxNQUFNQyxhQUFhRCxVQUFVRSxhQUFhO1FBRTFDSixZQUFZLENBQUNHLFdBQVcsR0FBR0Q7UUFFM0IsT0FBT0Y7SUFDVCxHQUFHLENBQUM7SUFFSkwsTUFBTUc7SUFFTkMsV0FBV00sT0FBTyxDQUFDLENBQUNDO1FBQ2xCLE1BQU1ILGFBQWFHLFVBQVVGLGFBQWEsSUFDcENGLFlBQVlGLFlBQVksQ0FBQ0csV0FBVztRQUUxQ0wsV0FBV1MsSUFBSSxDQUFDTDtJQUNsQjtBQUNGO0FBRU8sU0FBU1gsZUFBZU8sVUFBVSxFQUFFQyxVQUFVO0lBQ25ELElBQUlTLGlCQUFpQjtJQUVyQixNQUFNQyxtQkFBbUJYLFdBQVdZLE1BQU0sRUFDcENDLG1CQUFtQlosV0FBV1csTUFBTTtJQUUxQyxJQUFJRCxxQkFBcUJFLGtCQUFrQjtRQUN6QyxNQUFNQyxlQUFlQyx5QkFBeUJmLGFBQ3hDZ0IsZUFBZUQseUJBQXlCZDtRQUU5Q2EsYUFBYUcsSUFBSTtRQUVqQkQsYUFBYUMsSUFBSTtRQUVqQixNQUFNQyxtQkFBbUJKLGFBQWFLLEtBQUssQ0FBQyxDQUFDQyxhQUFhQztZQUN4RCxNQUFNQyxjQUFjTixZQUFZLENBQUNLLE1BQU07WUFFdkMsSUFBSUQsZ0JBQWdCRSxhQUFhO2dCQUMvQixPQUFPO1lBQ1Q7UUFDRjtRQUVBWixpQkFBaUJRLGtCQUFtQixHQUFHO0lBQ3pDO0lBRUEsT0FBT1I7QUFDVDtBQUVPLFNBQVNsQixnQkFBZ0JRLFVBQVUsRUFBRUMsVUFBVTtJQUNwREgsT0FBT0UsWUFBWSxDQUFDSTtRQUNsQixNQUFNbUIsVUFBVXRCLFdBQVd1QixJQUFJLENBQUMsQ0FBQ2hCO1lBQy9CLE1BQU1lLFVBQVVuQixVQUFVcUIsS0FBSyxDQUFDakI7WUFFaEMsSUFBSWUsU0FBUztnQkFDWCxPQUFPO1lBQ1Q7UUFDRjtRQUVBLElBQUksQ0FBQ0EsU0FBUztZQUNaLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFTyxTQUFTN0Isd0JBQXdCZ0MsVUFBVTtJQUNoRCxNQUFNQyxXQUFXQyxpQkFBUSxDQUFDQyxjQUFjLENBQUNILGFBQ25DSSxZQUFZO1FBQ1ZIO0tBQ0Q7SUFFUCxPQUFPRztBQUNUO0FBRU8sU0FBU25DLHdCQUF3Qm9DLFVBQVUsRUFBRUMsVUFBVSxJQUFJO0lBQ2hFLElBQUlDO0lBRUosSUFBSUQsU0FBUztRQUNWLENBQUEsRUFBRUUsZ0JBQWdCRCxlQUFlLEVBQUUsR0FBR0YsVUFBUztJQUNsRCxPQUFPO1FBQ0osQ0FBQSxFQUFFSSxTQUFTRixlQUFlLEVBQUUsR0FBR0YsVUFBUztJQUMzQztJQUVBLE1BQU1JLFVBQVU7V0FDTEY7S0FDSixFQUNESCxZQUFZSyxRQUFRQyxHQUFHLENBQUMsQ0FBQ0M7UUFDdkIsTUFBTVYsV0FBV0MsaUJBQVEsQ0FBQ1UsU0FBUyxDQUFDRDtRQUVwQyxPQUFPVjtJQUNUO0lBRU5ZLGtCQUFrQlQ7SUFFbEIsT0FBT0E7QUFDVDtBQUVBLFNBQVNTLGtCQUFrQlQsU0FBUztJQUNsQyxNQUFNVSxjQUFjVixVQUFVM0IsTUFBTSxDQUFDLENBQUNxQyxhQUFhYjtRQUNqRCxNQUFNdEIsYUFBYXNCLFNBQVNyQixhQUFhO1FBRXpDa0MsV0FBVyxDQUFDbkMsV0FBVyxHQUFHc0I7UUFFMUIsT0FBT2E7SUFDVCxHQUFHLENBQUM7SUFFSlYsWUFBWVcsT0FBT0MsTUFBTSxDQUFDRjtJQUUxQixPQUFPVjtBQUNUO0FBRUEsU0FBU2YseUJBQXlCZSxTQUFTO0lBQ3pDLE1BQU1hLGNBQWNiLFVBQVVNLEdBQUcsQ0FBQyxDQUFDVDtRQUNqQyxNQUFNdEIsYUFBYXNCLFNBQVNyQixhQUFhO1FBRXpDLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPc0M7QUFDVCJ9