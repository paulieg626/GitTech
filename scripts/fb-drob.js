const multiLib=require("wrapper");
const drob=multiLib.extend(GenericSmelter,GenericCrafter.GenericCrafterEntity,"drob",{},{
  _output:[
[[["scrap",1]],null,null],
[[["scrap",2]],null,null],
[[["scrap",3]],null,null],
[[["scrap",4]],null,null],
[[["scrap",5]],null,null],
[[["scrap",2.1]],null,null],
[[["scrap",2.2]],null,null],
[[["scrap",3.1]],null,null]
],
  _input:[
[[["copper",1]],null,2],
[[["lead",1]],null,2],
[[["titanium",1]],null,2],
[[["metaglass",1]],null,3],
[[["ic2-iron",1]],null,2],
[[["ic2-olovo",1]],null,2],
[[["ic2-serebro",1]],null,2],
[[["ic2-bronze",1]],null,2]
],
  craftTimes:[45,45,45,45,45,45,45,45],
  output:[],
  input:[],
  itemList:[],
  liquidList:[],
  isSameOutput:[],
});

drob.enableInv=false;
drob.dumpToggle=false;
drob.localizedName="Измельчитель металла";
drob.description="Измельчает металл в металлалом";
drob.itemCapacity= 30;
drob.liquidCapacity= 20;
drob.size= 2;
drob.health= 100;
drob.craftEffect= Fx.pulverizeMedium;
drob.updateEffect=Fx.none;
drob.requirements(Category.crafting,ItemStack.with(Items.copper,50));