function vector2d(t,n){this.x=t,this.y=n,this.add=function(t){return new vector2d(this.x+t.x,this.y+t.y)},this.sub=function(t){return new vector2d(this.x-t.x,this.y-t.y)},this.scale=function(t){return new vector2d(this.x*t,this.y*t)},this.length=function(){return Math.sqrt(this.dot(this))},this.angle=function(t){return Math.acos(this.dot(t)/(this.length()*t.length()))},this.setAngleVector=function(t,n){return this.x=-t*Math.sin(n),this.y=t*Math.cos(n),this},this.dot=function(t){return this.x*t.x+this.y*t.y},this.normalize=function(){var t=this.length();return new vector2d(this.x/t,this.y/t)},this.clone=function(){return new vector2d(this.x,this.y)},this.distanceSquared=function(t){var n=this.x-t.x,i=this.y-t.y;return n*n+i*i},this.toString=function(){return"("+this.x+", "+this.y+")"}}function vector2dCompareX(t,n){return t.x-n.x}function vector2dCompareY(t,n){return t.y-n.y}