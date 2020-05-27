const multiLib=require("wrapper");
const drob=multiLib.extend(GenericCrafter,GenericCrafter.GenericCrafterEntity,"prosev",{},{
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

drob.enableInv=false;
drob.dumpToggle=false;
drob.localizedName="Просеиватель песка";
drob.description="Просеивает песок в металлалом";
drob.itemCapacity= 30;
drob.liquidCapacity= 20;
drob.size= 2;
drob.health= 100;
drob.craftEffect= Fx.pulverizeMedium;
drob.updateEffect=Fx.none;
drob.requirements(Category.crafting,ItemStack.with(Items.copper,50));