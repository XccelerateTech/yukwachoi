var Getsong = require('./Getsong');
var helper = require('./helper');

describe('The object in action', function () {
    beforeEach(function () {
        getsong = new Getsong('aaa', 'bbb', 'ccc');
        getsong2 = new Getsong('ddd', 'bbb', 'jjj');
        getsong3 = new Getsong('fff','kkk','ppp')
        getsong4 = new Getsong('fff', 'kkk', 'ppp')
    });

    afterEach(function () {
        getsong = new Getsong();
        getsong2 = new Getsong();
        getsong3 = new Getsong();
        getsong4 = new Getsong();
    });

    it("should be able to play a Song", function () {
        expect(getsong.name).toEqual('aaa');
        expect(getsong.album).toEqual('bbb');
        expect(getsong.author).toEqual('ccc');
        expect(`The name of this song is aaa and it is from the album bbb. It is written by ccc`).toEqual(getsong.getDescription());
    });


    it("should be able to show a same album", function () {
        expect(getsong.isInSameAlbum(getsong2)).toBeTruthy(); //set condition in the object
    });

    it("try customer's function", function () {
        expect(getsong.album).toBeInTheSameAlbumAs(getsong2.album); //customized test
    });

    it("try two song have same name, album,author", function () {
        expect(getsong3).toEqual(getsong4);
    });

    it("try two song have same name, album,author", function () {
        expect(getsong3).toBe(getsong4);
    });
});
