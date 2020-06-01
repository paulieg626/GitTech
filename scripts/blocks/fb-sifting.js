const multiLib=require("wrapper");
const fb_sifting = multiLib.extend(GenericCrafter,GenericCrafter.GenericCrafterEntity,"fb_sifting",{},{
  _output:[
[[["scrap",1]],null,null]
],
  _input:[
[[["sand",8]],null,null]
],
  craftTimes:[60],
  output:[],
  input:[],
  itemList:[],
  liquidList:[],
  isSameOutput:[],
});

fb_sifting.enableInv=false;
fb_sifting.dumpToggle=false;
fb_sifting.localizedName="Просеиватель песка";
fb_sifting.description="Просеивает песок в металлалом";
fb_sifting.itemCapacity= 30;
fb_sifting.liquidCapacity= 20;
fb_sifting.size= 2;
fb_sifting.health= 100;
fb_sifting.craftEffect= Fx.pulverizeMedium;
fb-sifting.updateEffect=Fx.none;
fb-sifting.requirements(Category.crafting,ItemStack.with(Items.copper,50));