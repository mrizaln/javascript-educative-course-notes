/* Create a Circle object with the following properties and methods:”

    radius
    circumference() - returns circumference of a circle
    area() - returns area of a circle
*/

var circle = {
    radius: 10,

    circumference() {
        var circumference = 2 * Math.PI * this.radius;
        return circumference.toFixed(2);                    // 2 floating point precision
    },
    area() {
        area = Math.PI * this.radius ** 2;
        return area.toFixed(2);                             // 2 floating point precision
    },
};

console.log(circle.circumference());
console.log(circle.area());