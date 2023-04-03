AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "../car/scene.gltf" }
  },
  init: function() {
    // Do something when component first attached.
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: 0, y: 0, z: 80 };
    const rotation = { x: 0, y: -45, z: 0 };

    const scale = {x:38, y:38, z:38} 
    this.el.setAttribute('scale',scale)
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  }
});
