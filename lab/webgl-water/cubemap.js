function Cubemap(E){this.id=gl.createTexture(),gl.bindTexture(gl.TEXTURE_CUBE_MAP,this.id),gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,1),gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_MAG_FILTER,gl.LINEAR),gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_MIN_FILTER,gl.LINEAR),gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE),gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE),gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_X,0,gl.RGB,gl.RGB,gl.UNSIGNED_BYTE,E.xneg),gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X,0,gl.RGB,gl.RGB,gl.UNSIGNED_BYTE,E.xpos),gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,gl.RGB,gl.RGB,gl.UNSIGNED_BYTE,E.yneg),gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Y,0,gl.RGB,gl.RGB,gl.UNSIGNED_BYTE,E.ypos),gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,gl.RGB,gl.RGB,gl.UNSIGNED_BYTE,E.zneg),gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Z,0,gl.RGB,gl.RGB,gl.UNSIGNED_BYTE,E.zpos)}Cubemap.prototype.bind=function(E){gl.activeTexture(gl.TEXTURE0+(E||0)),gl.bindTexture(gl.TEXTURE_CUBE_MAP,this.id)},Cubemap.prototype.unbind=function(E){gl.activeTexture(gl.TEXTURE0+(E||0)),gl.bindTexture(gl.TEXTURE_CUBE_MAP,null)};