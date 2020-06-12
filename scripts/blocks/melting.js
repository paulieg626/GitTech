const multiLib=require("wrapper");
const melting = multiLib.extend(GenericSmelter,GenericCrafter.GenericCrafterEntity,"melting",{},{
  _output:[//12
[null,[["gittech-bronze-liquid",6]],null],
[null,[["gittech-silver-liquid",6]],null],
[null,[["gittech-gold-liquid",6]],null],
[null,[["gittech-iron-liquid",6]],null],
[null,[["gittech-tin-liquid",6]],null],
[null,[["gittech-invar-liquid",6]],null],
[null,[["gittech-osmium-liquid",6]],null],
[null,[["gittech-nickel-liquid",6]],null],
[null,[["gittech-signal-liquid",6]],null],
[null,[["gittech-platinum-liquid",6]],null],
[null,[["gittech-steel-liquid",6]],null],
[null,[["gittech-electronium-liquid",6]],null]
],
  _input:[//12
[[["copper",3],["gittech-tin",1]],null,3],
[[["gittech-silver-k",9]],null,3],
[[["gittech-gold-k",9]],null,3],
[[["gittech-iron-k",9]],null,3],
[[["gittech-tin-k",9]],null,3],
[[["gittech-iron",2],["gittech-nickel",1]],null,3],
[[["gittech-osmium-k",9]],null,3],
[[["gittech-nickel-k",9]],null,3],
[[["gittech-silver",1],["copper",3]],null,3],
[[["gittech-platinum-k",9]],null,3],
[[["gittech-iron",1],["coal",1]],null,3],
[[["gittech-gold",1],["gittech-silver",1]],null,3]
],
  craftTimes:[45,45,45,45,45,45,45,45,45,45,45,45],
  output:[],
  input:[],
  itemList:[],
  liquidList:[],
  isSameOutput:[],
});

melting.enableInv=false;
melting.dumpToggle=false;
melting.localizedName="Плавильня метала";
melting.description="Плавит метал в из которого потом можно крафтить слитки";
melting.itemCapacity= 20;
melting.liquidCapacity= 30;
melting.size= 2;
melting.health= 100;
melting.craftEffect= Fx.pulverizeMedium;
melting.updateEffect = Fx.none;
melting.requirements(Category.crafting,ItemStack.with(Items.copper,30,Items.lead,25));