<template>
  <button :style="styles" @mouseover="onMouseOver" @mouseout="onMouseOut">
    <slot />
  </button>
</template>


<script>    
export default {
  props: {
    border: { type: [String, Number], default: 1 },
    borderColor: {type: String, default: "#555" },
    disabled: {type: Boolean, default: false },
    disableBorderColor: { type: String, default: "#ccc" },
    disableColor: { type: String, default: "rgba(16, 16, 16, 0.3)" },
    disableBackground: { type: String, default: "#eee" },
    color: { type: String, default: "#555" }, 
    background: { type: String, default: "#eee" }, 
    mouseoverColor: { type : String, default: "#555" },
    mouseoverBackground: { type : String, default: "#ddd" },
    cursor: { type: String, default: "pointer" },
    padding: { type: [String, Number], default: "5px 10px" },
    margin: { type: [String, Number], default: 1 },
    corner: { type: [String, Number], default: 2 },
  },
  data() {
    return { isMouseOver: false };
  },
  computed: {
    styles() {
      return {
        borderWidth: this._border,
        borderColor: this._borderColor,
        borderRadius: this._corner,
        background: this._background,
        color: this._color,
        cursor: this._cursor,
        padding: this._padding,
        margin: this._margin,
      };
    },
    _borderColor() {
      return this.disabled ? this.disableBorderColor : this.borderColor;
    },
    _border() {
      if (this.isNumeric(this.border)) {
        return this.border + "px";
      }
      return this.border;
    },
    _corner() {
      if (this.isNumeric(this.corner)) return this.corner + "px";
      return this.corner;
    },
    _color() {
      if (this.disabled) return this.disableColor;
      return this.isMouseOver ? this.mouseoverColor : this.color; 
    },
    _background() {
      if (this.disabled) return this.disableBackground;
      return this.isMouseOver ? this.mouseoverBackground : this.background; 
    },
    _cursor() {
      return this.disabled ? "default" : this.cursor;
    },
    _padding() {
      if (this.isNumeric(this.padding)) return this.padding + "px";
      return this.padding;
    },
    _margin() {
      if (this.isNumeric(this.margin)) return this.margin + "px";
      return this.margin;
    },
  },
  methods:{
    isNumeric(value){
      return /^\d+$/.test(value);
    },
    onMouseOver() {
      this.isMouseOver = true;  
    },
    onMouseOut() {
      return ( this.isMouseOver = false );
    },
  }
}
</script>

<style>
button {
    outline: none;
    border: solid;
}
</style>