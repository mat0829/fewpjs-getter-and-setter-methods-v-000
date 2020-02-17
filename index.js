// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius
  }
  
  get diameter() {
    return this.radius * 2
  }
  
  get circumference() {
    return Math.PI * this.diameter
  }
  
  set diameter(diameter) {
    this._diameter = diameter
  }
  
  set circumference(circumference) {
    this._circumference = circumference
  }
  
  set area(area) {
    this._area = area
  }
}