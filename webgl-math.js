//=============================================================================
// frameBuffer Util (Uint8Array)
//=============================================================================
function FrameBuffer( w, h ) {

    this.size = 4;

    this.width = w;
    this.height = h;

    this.frameBuffer = new Uint8Array( w * h * this.size );

    return frameBuffer;

}

Object.assign( FrameBuffer.prototype, {

    isFrameBuffer: true,

    getFrameBuffer: function() {

        return this.frameBuffer;

    },

    setPixel: function( x, y, R, G, B, A ) {

        this.frameBuffer[ x * this.width * this.size + y * this.size + 0] = R;
        this.frameBuffer[ x * this.width * this.size + y * this.size + 1] = G;
        this.frameBuffer[ x * this.width * this.size + y * this.size + 2] = B;
        this.frameBuffer[ x * this.width * this.size + y * this.size + 3] = A;

    },

});


//=============================================================================
// Vector3
//=============================================================================
function Vector3( x, y, z ) {

	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;

}

Object.assign( Vector3.prototype, {

	isVector3: true,

	set: function ( x, y, z ) {

		this.x = x;
		this.y = y;
		this.z = z;

		return this;

	},

	setScalar: function ( scalar ) {

		this.x = scalar;
		this.y = scalar;
		this.z = scalar;

		return this;

	},

	setX: function ( x ) {

		this.x = x;

		return this;

	},

	setY: function ( y ) {

		this.y = y;

		return this;

	},

	setZ: function ( z ) {

		this.z = z;

		return this;

	},
} );