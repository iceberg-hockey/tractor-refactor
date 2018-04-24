function TractorInDitchError(){

};

TractorInDitchError.prototype.__proto__ = Error.prototype;


function Tractor(){
    var position = [0, 0];
    var field = [5, 5];
    var orientation = "N";
    this.onMove = function(){};
    this.onTurn = function(){};
    this.moveForwards = function(){
        if (orientation == "N") {
            position = [
                position[0], position[1] + 1
            ];
        } else if (orientation == "E") {
            position = [
                position[0] + 1, position[1]
            ];
        } else if (orientation == "S") {
            position = [
                position[0], position[1] - 1
            ];
        } else if (orientation == "W") {
            position = [
                position[0] - 1, position[1]
            ];
        }
        if (position[0] > field[0] || position[1] > field[1]) {

            try {
                throw new TractorInDitchError();
            } catch (e) {
                console.trace();
            }

        }
        this.onMove();
    };
    this.turnClockwise = function(){
        if (orientation == "N") {
            orientation = "E";
        } else if (orientation == "E") {
            orientation = "S";
        } else if (orientation == "S") {
            orientation = "W";
        } else if (orientation == "W") {
            orientation = "N";
        }
        this.onTurn();
    };
    this.getPositionX = function(){
        return position[0];
    };
    this.getPositionY = function(){
        return position[1];
    };
    this.getOrientation = function() {
        return orientation;
    }
}
