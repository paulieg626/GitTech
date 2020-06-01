const multiLib=require("wrapper");
const fb_tin_melting = multiLib.extend(GenericSmelter,GenericCrafter.GenericCrafterEntity,"fb-tin-melting",{},{
  _output:[
[null,[["gittech-tin-liquid",4]],null]
],
  _input:[
[[["scrap",3]],null,3]
],
  craftTimes:[5],
  output:[],
  input:[],
  itemList:[],
  liquidList:[],
  isSameOutput:[],
});

fb_tin_melting.enableInv=false;
fb_tin_melting.dumpToggle=false;
fb_tin_melting.localizedName="Плавильня олова";
fb_tin_melting.description="Плавит металлалом в горячее житкое олово";
fb_tin_melting.itemCapacity= 30;
fb_tin_melting.liquidCapacity= 20;
fb_tin_melting.size= 2;
fb_tin_melting.health= 100;
fb_tin_melting.craftEffect= Fx.pulverizeMedium;
fb_tin_melting.updateEffect=Fx.none;
fb_tin_melting.requirements(Category.crafting,ItemStack.with(Items.copper,50));