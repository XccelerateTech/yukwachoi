beforeEach(function(){
 jasmine.addMatchers({
    toBeInTheSameAlbumAs: function(){
        return{
            compare: function(actual, expected){
                getsong.album = actual;
                
                return {
                    pass: getsong.album === expected && getsong2.album
                }
            }
        }
    }
 })
});
