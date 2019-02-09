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

    setPixelRGBA: function( x, y, R, G, B, A ) {

        this.frameBuffer[ x * this.width * this.size + y * this.size + 0] = R * 255;
        this.frameBuffer[ x * this.width * this.size + y * this.size + 1] = G * 255;
        this.frameBuffer[ x * this.width * this.size + y * this.size + 2] = B * 255;
        this.frameBuffer[ x * this.width * this.size + y * this.size + 3] = A * 255;

    },

    setPixelVector3: function( x, y, v3 ) {
        if ( !v3.isVector3 ) {
            console.warn( "hey! it's not Vector3!" );
            return;
        }

        this.frameBuffer[ x * this.width * this.size + y * this.size + 0] = v3.x * 255;
        this.frameBuffer[ x * this.width * this.size + y * this.size + 1] = v3.y * 255;
        this.frameBuffer[ x * this.width * this.size + y * this.size + 2] = v3.z * 255;
        this.frameBuffer[ x * this.width * this.size + y * this.size + 3] = 255;
    }

});


//=============================================================================
// Vector3
// https://github.com/mrdoob/three.js/blob/r100/src/math/Vector3.js
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

    clone: function () {

		return new this.constructor( this.x, this.y, this.z );

	},

    add: function ( v, w ) {

		if ( w !== undefined ) {

			console.warn( 'THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
			return this.addVectors( v, w );

		}

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;

		return this;

	},

	addScalar: function ( s ) {

		this.x += s;
		this.y += s;
		this.z += s;

		return this;

	},

	addVectors: function ( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;

		return this;

	},

	addScaledVector: function ( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;

		return this;

	},
    
    sub: function ( v, w ) {

		if ( w !== undefined ) {

			console.warn( 'THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
			return this.subVectors( v, w );

		}

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;

		return this;

	},

	subScalar: function ( s ) {

		this.x -= s;
		this.y -= s;
		this.z -= s;

		return this;

	},

	subVectors: function ( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;

		return this;

    },
    
    multiply: function ( v, w ) {

		if ( w !== undefined ) {

			console.warn( 'THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.' );
			return this.multiplyVectors( v, w );

		}

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;

		return this;

	},

	multiplyScalar: function ( scalar ) {

		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;

		return this;

	},

	multiplyVectors: function ( a, b ) {

		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;

		return this;

	},

    divideScalar: function ( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	},

    length: function () {

		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

	},

    normalize: function () {

		return this.divideScalar( this.length() || 1 );

	},

    dot: function ( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z;

    },
    
    distanceTo: function ( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	},

	distanceToSquared: function ( v ) {

		var dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;

		return dx * dx + dy * dy + dz * dz;

	},

} );