var VSHADER_SOURCE = null;
var FSHADER_SOURCE = null;

function main() {
    var canvas = document.getElementById('webgl');
    var gl = getWebGLContext(canvas);
    readShaderFile(gl, 'vShader.glsl', 'v');
    readShaderFile(gl, 'fShader.glsl', 'f');

    function readShaderFile(gl, fileName, shader) {
        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status !== 404) {
                onReadShader(gl, request.responseText, shader);
            }
        };
        request.open('GET', fileName, true);
        request.send();
    }
    function onReadShader(gl, fileString, shader) {
        if (shader == 'v') {
            VSHADER_SOURCE = fileString;
        }
        else if (shader == 'f') {
            FSHADER_SOURCE = fileString;
        }

        if (VSHADER_SOURCE != null && FSHADER_SOURCE != null) {
            start(gl);
        }
    }
}

var e_x = 0.1;
var e_y = 0.1;

function start(gl){
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE))
    {
        return;
    }

    gl.enable(gl.DEPTH_TEST);

    gl.viewport(0,0,1024,748);

    var ViewMatrix = new Matrix4();
    ViewMatrix.setRotate(0,0,1,0);

    document.onkeydown = function(ev){
        rotateEye(gl,ViewMatrix,ev);
    };
    draw(gl,ViewMatrix);
}

function rotateEye(gl,ViewMatrix,ev){
    if(ev.keyCode == 39) {
        e_x += 0.05;
    }
    if(ev.keyCode == 37) {
        e_x -= 0.05;
    }
    if(ev.keyCode == 38) {
        e_y += 0.05;
    }
    if(ev.keyCode == 40) {
        e_y -= 0.05;
    }
    draw(gl,ViewMatrix);
}

function initBuffers(gl,vertexes,colors,indexes){
    //vertex
    var VertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,VertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER,vertexes,gl.STATIC_DRAW);

    var a_Position = gl.getAttribLocation(gl.program,'a_Position');
    gl.vertexAttribPointer(a_Position,3,gl.FLOAT,false,0,0);
    gl.enableVertexAttribArray(a_Position);
    //////

    //colors
    var ColorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,ColorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER,colors,gl.STATIC_DRAW);

    var a_Color = gl.getAttribLocation(gl.program,'a_Color');
    gl.vertexAttribPointer(a_Color,3,gl.FLOAT,false,0,0);
    gl.enableVertexAttribArray(a_Color);
    /////

    //indexes
    var IndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,IndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,indexes,gl.STATIC_DRAW);
    //

}

function draw(gl,ViewMatrix){
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    var ModelMatrix = new Matrix4();

    ModelMatrix.setPerspective(30.0,2.0,4.0,100.0);
    ModelMatrix.lookAt(e_x,e_y,7.0,0.0,0.0,0.0,0.0,1.0,0.0);

    var MVPmatrix = ModelMatrix.multiply(ViewMatrix);
    var u_MVPmatrix = gl.getUniformLocation(gl.program,'u_MVPmatrix');
    gl.uniformMatrix4fv(u_MVPmatrix,false, MVPmatrix.elements);

    var vertexes = new Float32Array([
        0, 1, 0.5,  -1, -1, 1,   1, -1, 1,   // v4-v3-v2 front
        0, 1, 0.5,   1, -1, 1,   1, -1, 0,   // v4-v2-v1 right
        0, 1, 0.5,   1, -1, 0,  -1, -1, 0,   // v4-v1-v0 back
        0, 1, 0.5,  -1, -1, 0,  -1, -1, 1,   // v4-v0-v3 left
        -1, -1, 0,    1, -1, 0,   1, -1, 1,  -1, -1, 1 // v0-v1-v2-v3 down
    ]);

    var colors = new Float32Array([
        1.0, 1.0, 0.4,   1.0, 1.0, 0.4,   1.0, 1.0, 0.4, // v4-v3-v2 front yellow
        0.4, 1.0, 0.4,   0.4, 1.0, 0.4,   0.4, 1.0, 0.4, // v4-v2-v1 right green
        0.4, 0.4, 1.0,   0.4, 0.4, 1.0,   0.4, 0.4, 1.0, // v4-v1-v0 back blue
        1.0, 1.0, 1.0,   1.0, 1.0, 1.0,   1.0, 1.0, 1.0, // v4-v0-v3 left white
        1.0, 0.4, 0.4,   1.0, 0.4, 0.4,   1.0, 0.4, 0.4, // v0-v1-v2-v3 down red
        1.0, 0.4, 0.4,   1.0, 0.4, 0.4,   1.0, 0.4, 0.4
    ]);

    var indexes = new Uint8Array([
        0, 1, 2,   // front
        3, 4, 5,   // right
        6, 7, 8,   // back
        9, 10, 11, // left
        12, 13, 14, 12, 14, 15 // down
    ]);


    initBuffers(gl,vertexes,colors,indexes);

    gl.drawElements(gl.TRIANGLES,18,gl.UNSIGNED_BYTE,0);
}
