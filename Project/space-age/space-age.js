var SpaceAge = function (seconds) {
        this.seconds = seconds; 
        this.earthYear = 31557600; 
    }
    
    SpaceAge.prototype.onEarth = function (){
        earthyear = this.earthYear;
        return Number((this.seconds/earthyear).toFixed(2)); 
    }

    SpaceAge.prototype.onMercury = function () {
        mercYear = 0.2408467 * this.earthYear; 
        return Number((this.seconds/mercYear).toFixed(2)); 
    }
    
    SpaceAge.prototype.onVenus = function () {
        venYear = 0.61519726 * this.earthYear; 
        return Number((this.seconds/venYear).toFixed(2)); 
    }

    SpaceAge.prototype.onMars = function () {
        marsYear = 1.8808158 * this.earthYear; 
        return Number((this.seconds/marsYear).toFixed(2)); 
    }

    SpaceAge.prototype.onJupiter = function () {
        jupYear = 11.862615 * this.earthYear; 
        return Number((this.seconds/jupYear).toFixed(2)); 
    }

    SpaceAge.prototype.onSaturn = function () {
        satuYear = 29.447498* this.earthYear; 
        return Number((this.seconds/satuYear).toFixed(2)); 
    }

    SpaceAge.prototype.onUranus = function () {
        uranYear = 84.016846 * this.earthYear; 
        return Number((this.seconds/uranYear).toFixed(2)); 
    }

    SpaceAge.prototype.onNeptune = function () {
        neptYear = 164.79132 * this.earthYear; 
        return Number((this.seconds/neptYear).toFixed(2)); 
    }

    module.exports = SpaceAge; 