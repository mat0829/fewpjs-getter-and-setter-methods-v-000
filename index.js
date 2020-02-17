// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius
  }
  
  get diameter() {
    return this.radius * 2
  }
  
  set diameter(radius) {
    this._diameter = diameter
  }
  
  get circumference() {
    return Math.PI * this.diameter
  }
  
  get area() {
    return Math.PI * (this.radius * this.radius)
  }
  
  set circumference(circumference) {
    this._circumference = circumference
  }
  
  set area(area) {
    this._area = area
  }
}