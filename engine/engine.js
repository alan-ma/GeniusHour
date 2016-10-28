//Creating a physics engine for Alan Ma's Genius Hour project
//Based on the guide by Burak Kanber (link: http://buildnewgames.com/gamephysics/)

//Starting off with defining a generic vector class (for 2D vectors only, but they could be expanded for more dimensions)
var V = function(x, y) {
    this.x = x;
    this.y = y;
};
//defining the 'add' function of the prototype/class vector, that adds a vector 'v' to the original one
V.prototype.add = function(v) {
    return new V(v.x + this.x, v.y + this.y);
};
//defining the 'subtract' function
V.prototype.subtract = function(v) {
    return new V(this.x - v.x, this.y - v.y);
};
//defining the 'scale' function that multiplies both elements by a scalar 's'
V.prototype.scale = function(s) {
    return new V(this.x * s, this.y * s);
};
//defining the 'dot' product function that multiplies the 'x' element in both vectors together, and the 'y' elements together
V.prototype.dot = function(v) {
    return (this.x * v.x + this.y * v.y);
};

//defining the 'cross' product function. Usually, the cross product returns a vector, but since all our vectors will are 2D (x and y only), any cross product will only have a z-component; we will return this z-component as a scalar.
V.prototype.cross = function(v) {
    return (this.x * v.y - this.y * v.x);
};
//defining the 'rotate' function that rotates a vector by a certain angle.
V.prototype.rotate = function(angle, vector) {
    var x = this.x - vector.x;
    var y = this.y - vector.y;

    var x_prime = vector.x + ((x * Math.cos(angle)) - (y * Math.sin(angle)));
    var y_prime = vector.y + ((x * Math.sin(angle)) + (y * Math.cos(angle)));

    return new V(x_prime, y_prime);
};



