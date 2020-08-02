const multiLib2=require("wrapper");
const shaper = multiLib2.extend(GenericSmelter,GenericCrafter.GenericCrafterEntity,"shaper",{},{
  _output:[//12
[[["gittech-bronze",2]],null,null],
[[["gittech-silver",2]],null,null],
[[["gittech-gold",2]],null,null],
[[["gittech-iron",2]],null,null],
[[["gittech-tin",2]],null,null],
[[["gittech-invar",2]],null,null],
[[["gittech-osmium",2]],null,null],
[[["gittech-nickel",2]],null,null],
[[["gittech-signal",2]],null,null],
[[["gittech-platinum",2]],null,null],
[[["gittech-steel",2]],null,null],
[[["gittech-electronium",2]],null,null]
],
  _input:[//12
[null,[["gittech-bronze-liquid",6]],3],
[null,[["gittech-silver-liquid",6]],3],
[null,[["gittech-gold-liquid",6]],3],
[null,[["gittech-iron-liquid",6]],3],
[null,[["gittech-tin-liquid",6]],3],
[null,[["gittech-invar-liquid",6]],3],
[null,[["gittech-osmium-liquid",6]],3],
[null,[["gittech-nickel-liquid",6]],3],
[null,[["gittech-signal-liquid",6]],3],
[null,[["gittech-platinum-liquid",6]],3],
[null,[["gittech-steel-liquid",6]],3],
[null,[["gittech-electronium-liquid",6]],3]
],
  craftTimes:[90,90,90,90,90,90,90,90,90,90,90,90],
  output:[],
  input:[],
  itemList:[],
  liquidList:[],
  isSameOutput:[],
});

shaper.enableInv=false;
shaper.dumpToggle=false;
shaper.craftEffect= Fx.pulverizeMedium;
shaper.updateEffect = Fx.none;