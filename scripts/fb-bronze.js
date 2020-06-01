const multiLib=require("wrapper");
const fb_bronze=multiLib.extend(GenericSmelter,GenericCrafter.GenericCrafterEntity,"fb-bronze",{},{
  _output:[
[[["gittech-bronze",4]],null,null]
],
  _input:[
[[["copper",1],["gittech-olovo",3]],null,3]
],
  craftTimes:[45],
  output:[],
  input:[],
  itemList:[],
  liquidList:[],
  isSameOutput:[],
});

fb_bronze.enableInv=false;
fb_bronze.dumpToggle=false;
fb_bronze.localizedName="Плавильня бронзы";
fb_bronze.description="Плавит медь и 3 олова в 4 бронзы";
fb_bronze.itemCapacity= 30;
fb_bronze.liquidCapacity= 20;
fb_bronze.size= 2;
fb_bronze.health= 100;
fb_bronze.craftEffect= Fx.pulverizeMedium;
fb_bronze.updateEffect=Fx.none;
fb_bronze.requirements(Category.crafting,ItemStack.with(Items.copper,50));