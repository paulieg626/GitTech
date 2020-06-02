const multiLib=require("wrapper");
const fb_ulti_raw = multiLib.extend(GenericCrafter,GenericCrafter.GenericCrafterEntity,"fb-ulti-raw",{},{
  _output:[
[[["gittech-ulti_raw",1]],null,null]
],
  _input:[
[null,[["water",30]],null]
],
  craftTimes:[120],
  output:[],
  input:[],
  itemList:[],
  liquidList:[],
  isSameOutput:[],
});

fb_ulti_raw.enableInv=false;
fb_ulti_raw.dumpToggle=false;
fb_ulti_raw.localizedName="Утилизатор";
fb_ulti_raw.description="Утилизирует воду";
fb_ulti_raw.itemCapacity= 5;
fb_ulti_raw.liquidCapacity= 40;
fb_ulti_raw.size= 2;
fb_ulti_raw.health= 100;
fb_ulti_raw.craftEffect= Fx.pulverizeMedium;
fb_ulti_raw.updateEffect=Fx.none;
fb_ulti_raw.requirements(Category.crafting,ItemStack.with(Items.copper,50));