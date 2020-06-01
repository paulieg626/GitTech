const multiLib=require("wrapper");
const fb_tin_shaper = multiLib.extend(GenericSmelter,GenericCrafter.GenericCrafterEntity,"fb-tin-shaper",{},{
  _output:[
[[["gittech-tin",1]],null,null]
],
  _input:[
[null,[["gittech-tin-liquid",8]],3]
],
  craftTimes:[45],
  output:[],
  input:[],
  itemList:[],
  liquidList:[],
  isSameOutput:[],
});

fb_tin_shaper.enableInv=false;
fb_tin_shaper.dumpToggle=false;
fb_tin_shaper.localizedName="Формировщик олова";
fb_tin_shaper.description="Формирует горячее житкое олово в слитки олова";
fb_tin_shaper.itemCapacity= 30;
fb_tin_shaper.liquidCapacity= 20;
fb_tin_shaper.size= 1;
fb_tin_shaper.health= 100;
fb_tin_shaper.craftEffect= Fx.pulverizeMedium;
fb_tin_shaper.updateEffect=Fx.none;
fb_tin_shaper.requirements(Category.crafting,ItemStack.with(Items.copper,50));